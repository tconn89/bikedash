import '../css/article.css';
import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';
import {Typography} from '@rmwc/typography';

import { Progress, Badge, Grid, GridItem} from '@patternfly/react-core'
import { GoogleMap, withScriptjs ,withGoogleMap, Polyline  } from "react-google-maps"
//import DrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager';
import GEO from 'lib/geolocationAPI'
import LineChart from '../components/LineChart'
import Card from '../components/Card';



export default class Strava extends React.PureComponent {
    state = {loaded: false, route: [], name: 'Raleigh Bikers', samples: []}
    async componentDidMount(){
        console.log('API')
        const path = window.location.pathname
        const key = path.substr(path.indexOf('-'), path.length)
        let data = await GEO.read(key)
        console.log(data)
        const { name, coords } = data.result
        this.setState({loaded: true, name, route: coords, samples: this.sampleSpeed(coords)})
    }
    sampleSpeed(arr){
        const t = arr.filter((coord, i) => i % 5 == 1 )
        console.log('samples', t)
        return t
    }
    render() {
        console.log(this.state.route)
        return (
            <div className="">
                <Typography use="headline4">
                    <p>{this.state.name}</p>
                </Typography>

                <Grid gutter='sm' sm={2} md={1} lg={1} >
                    <Badge className='badge'> Green </Badge>
                    <Badge className='badge'> Sustainable </Badge>
                    <Badge className='badge'> 10/26/18 </Badge>
                </Grid>
                <Grid gutter='sm' sm={2} md={1} lg={1} xl={1} >
                    <GridItem span={6}>
                        <Card title='Routes' subTitle=''>
                            <div>Here   </div>
                            <div>We   </div>
                            <div>Go   </div>
                        </Card>
                    </GridItem>
                </Grid>
            </div>
        );
    }
}
