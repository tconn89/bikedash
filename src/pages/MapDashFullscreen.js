import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';

import { GoogleMap, withScriptjs ,withGoogleMap, Polyline } from "react-google-maps"
import bikeRoute from 'data/test'
import GEO from 'lib/geolocationAPI'


const BikeMap = 
 withScriptjs( withGoogleMap( props => {

    const lineSymbol = {
        path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    };
    return (
    <GoogleMap
        defaultZoom={16}
        defaultCenter={bikeRoute[0]}
        ref={props.onMapMounted(window.google)}
    >
    { props.loaded ?
        <Polyline 
            defaultEditable={false}
            defaultVisible={true}
            visible={true}
            onDragStart={() => console.log('Drag start')}
            path={props.route}
            options={{
                geodesic: true,
                icons: [{icon: lineSymbol, offset: '0', repeat: '100px', strokeOpacity:'0' ,fillOpactiy:'0'}],
                fillOpactiy: 0,
                strokeColor: '#0000FF',
                strokeOpacity: 1.0,
                strokeWeight: 2
            }}
        />
        : null }
    </GoogleMap>
    )}));

export default class MapDash extends React.PureComponent {
    state = {mapMounted: false, loaded: false, route: [] }
    async fetchData(){
        const path = window.location.pathname
        const key = path.substr(path.indexOf('-'), path.length)
        let data = await GEO.read(key)
        const { coords } = data.result
        console.log(this.map)
        this.handleFitBounds(coords)
        this.setState({loaded: true, route: coords })
    }
    handleGoogle(google){
        this.google = google
    }
    // Stupid inefficient code that gets the job done
    handleMapMounted(google){
        if(this.state.mapMounted)
            return (map) => {
                this.map = map
                this.google = google
            }
        return (map) => {
            this.map = map
            this.google = google
            console.log('Google Loaded')
            this.fetchData()
            this.setState({mapMounted: true})
        }
    }
    handleFitBounds(coords){
        console.log(this.map)
        console.log('LatLng')
        let bounds = new this.google.maps.LatLngBounds()
        coords.forEach((location, i) => {
            bounds.extend(location)
        })
        this.map.fitBounds(bounds)
    }
    render() {
        return (
            <div id='fullscreenbikeMap' >
                <style dangerouslySetInnerHTML={{__html:
                    `button { display: none; }
                    .gmnoprint { display:none;}
                    header {display: none !important;}
                    .content {top: 0;}
                    `
                }} />
                <BikeMap 
                    loaded={this.state.loaded}
                    route={this.state.route}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={ <div style={{ height: `100%` }} />}
                    containerElement={<div style={{ width: window.innerWidth,height: window.innerHeight }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onMapMounted={this.handleMapMounted.bind(this)}
                />
            </div>
        );
    }
}
