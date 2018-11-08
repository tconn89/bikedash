import '../css/article.css';
import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';
import {Typography} from '@rmwc/typography';

import { Badge, Grid, Button} from '@patternfly/react-core'
import { GoogleMap, withScriptjs ,withGoogleMap, Marker } from "react-google-maps"
import bikeRoute from 'data/test'


const BikeMap = 
 withScriptjs( withGoogleMap( props =>

    <GoogleMap
        defaultZoom={16}
        defaultCenter={bikeRoute[0]}
    >
        <Marker position={bikeRoute[0]} />
    </GoogleMap>
    ))

export default class Article extends React.PureComponent {
    render() {
        return (
            <div className="article">
                <Typography use="headline4">
                    <p>Raleigh Bikers</p>
                </Typography>

                <Grid gutter='sm' sm={2} md={1} lg={1}>
                    <Badge> Green </Badge>
                    <Badge> Sustainable </Badge>
                </Grid>
                <BikeMap 
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzCLE8QK15mlSgny0qRyHvM1NuDLmsHck&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={ <div style={{ height: `100%` }} />}
                    containerElement={<div style={{ width: '600px',height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}
