import '../css/article.css';
import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';
import {Typography} from '@rmwc/typography';

import { Badge, Grid } from '@patternfly/react-core'
import { GoogleMap, withScriptjs ,withGoogleMap, Polyline } from "react-google-maps"
import bikeRoute from 'data/test'
import DrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager';


const BikeMap = 
 withScriptjs( withGoogleMap( props => {

    const lineSymbol = {
        path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    };
    return (
    <GoogleMap
        defaultZoom={16}
        defaultCenter={bikeRoute[0]}
        ref={mymap => console.log(mymap)}
    >
        <DrawingManager 
            defaultDrawingMode={window.google.maps.drawing.OverlayType.POLYLINE}
            defaultOptions={{
                drawingControl: true,
                drawingControlOptions: {
                    position: window.google.maps.ControlPosition.TOP_CENTER,
                    drawingModes: [
                      window.google.maps.drawing.OverlayType.POLYLINE,
                    ],
                onPolylineComplete:() => console.log('Line Complete')
                },
                onPolylineComplete:() => console.log('Line Complete')
            }
        }
        />
        <Polyline 
            defaultEditable={false}
            defaultVisible={true}
            visible={true}
            onDragStart={() => console.log('Drag start')}
            path={bikeRoute}
            options={{
                geodesic: true,
                icons: [{icon: lineSymbol, offset: '0', repeat: '100px', strokeOpacity:'0' ,fillOpactiy:'0'}],
                fillOpactiy: 0,
                strokeColor: '#0000FF',
                strokeOpacity: 1.0,
                strokeWeight: 2
            }}
        />
    </GoogleMap>
    )}));

export default class MapDash extends React.PureComponent {
    render() {
        return (
            <div className="article">
                <Typography use="headline4">
                    <p>Raleigh Bikers</p>
                </Typography>

                <BikeMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={ <div style={{ height: `100%` }} />}
                    containerElement={<div style={{ width: '100%',height: `700px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}
