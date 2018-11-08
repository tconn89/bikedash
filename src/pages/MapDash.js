import '../css/article.css';
import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';
import {Typography} from '@rmwc/typography';

import { Progress, Badge, Grid, GridItem} from '@patternfly/react-core'
import { GoogleMap, withScriptjs ,withGoogleMap, Polyline  } from "react-google-maps"
//import DrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager';
import GEO from 'lib/geolocationAPI'
import LineChart from '../components/LineChart'

const CONVERSION_TO_MPH = 2.23694;
const BikeMap = (data) => 
 withScriptjs( withGoogleMap( props => {

    const lineSymbol = {
        path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    };
    return (<GoogleMap
        defaultZoom={17}
        defaultCenter={data[0]}
    >
        <Polyline 
            defaultEditable={false}
            defaultVisible={true}
            onDragStart={() => console.log('Drag start')}
            path={data}
            options={{
                geodesic: true,
                icons: [{icon: lineSymbol, offset: '0', repeat: '100px', strokeOpacity:'0' ,fillOpactiy:'0'}],
                fillOpactiy: 0,
                strokeColor: '#0000FF',
                strokeOpacity: 1.0,
                strokeWeight: 3
            }}
        />
    </GoogleMap>)
 }))

export default class MapDash extends React.PureComponent {
    state = {loaded: false, route: [], name: '', samples: []}
    async componentDidMount(){
        const path = window.location.pathname
        const key = path.substr(path.indexOf('-'), path.length)
        let data = await GEO.read(key)
        const { name, coords } = data.result
        this.setState({loaded: true, name, route: coords, samples: this.sampleSpeed(coords)})
    }
    sampleSpeed(arr){
        return arr.filter((coord, i) => i % 5 === 1 )
    }
    dateDecorator(date, type){
        const d = new Date(date)
        if(!type)
            return `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear().toString().slice(-2)}`
        if(type === 1){
            const afternoon = d.getHours() / 12 > 1 ? 'pm':'am'
            const min = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
            return `${d.getHours()%12}:${min}${afternoon}`
        }
    }
    avgSpeed(){
        const avg = this.state.route.reduce((cum, add) => cum + (add.speed || 0),0) / this.state.route.length * CONVERSION_TO_MPH
        return avg.toFixed(3)
    }
    render() {
        const Map = BikeMap(this.state.route)
        return (
            <div className="">
                <div style={{padding:'15px', }} >
                    <div style={{fontSize:'36px', fontFamily:'roboto'}}>
                        <p>{this.state.name}</p>
                    </div>
                </div>
                <div style={{margin:'15px', fontFamily:'roboto'}} >
                <Grid gutter='sm' sm={2} md={1} lg={1} >
                    <Badge className='badge'> Green </Badge>
                    <Badge className='badge'> Sustainable </Badge>
                    { this.state.route.length ? <Badge className='badge'>  {this.dateDecorator(this.state.route[0].time)}  </Badge> : null}
                </Grid>
                </div>
                <Grid gutter='sm' sm={2} md={1} lg={1} xl={1} >
                    <GridItem span={6}>
                    { !this.state.loaded ? 
                    <Progress style={{width: '100%'}} size='lg' value={50}/> :
                    <Map 
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={ <div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    /> }
                    </GridItem>
                    <GridItem span={6}>
                    { !this.state.loaded ? 
                    <Progress style={{width: '100%'}} size='lg' value={50}/> :
                        <LineChart 
                            title='Speeds Throughout Route'
                            xLabels={ this.state.samples.map(coord => `${new Date(coord.time).getMinutes()}:${new Date(coord.time).getSeconds()}`)}
                            data={[{
                                dataPoints: this.state.samples.map(coord => coord.speed ? coord.speed*2.23694 : 0),
                                color: 'rgba(30, 100, 100, 1)',
                                label: 'Miles per Hour'
                            }]}
                        />
                        }
                    </GridItem>
                </Grid>
                <Grid gutter='sm' sm={2} md={1} lg={1} xl={1} >
                    <GridItem span={1}>
                    </GridItem>
                    <GridItem span={5}>
                        <div>
                        <Typography use='caption'>
                            Start: {this.state.loaded ? this.dateDecorator(this.state.route[0].time, 1) : ''}
                        </Typography>
                        </div>
                        <div>
                        <Typography use='caption'>
                            Finish: {this.state.loaded ? this.dateDecorator(this.state.route[this.state.route.length-1].time, 1) : ''}
                        </Typography>
                        </div>
                        <div>
                        <Typography use='caption'>
                            Data Points: {this.state.loaded ? this.state.route.length : ''}
                        </Typography>
                        </div>
                    </GridItem>
                    <GridItem span={5}>
                        <div>
                        <Typography use='caption'>
                            Average Speed: {this.state.loaded ? this.avgSpeed() : '0 '} mph
                        </Typography>
                        </div>
                    </GridItem>
                </Grid>
            </div>
        );
    }
}
