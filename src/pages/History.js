import '../css/article.css';
import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';
import {Typography} from '@rmwc/typography';
import {Grid, GridCell} from '@rmwc/grid';

import GEO from 'lib/geolocationAPI'
import RideCard from '../components/RideCard'

export default class MapDash extends React.PureComponent {
    state = {loaded: false, routes: [], name: 'Raleigh Bikers'}
    async componentDidMount(){
        let data = await GEO.routesIndex()
        this.setState({loaded: true, routes: data.result.reverse()})

    }
    formatDate(date){
        // date: milliseconds
        let d = new Date(date)
        return d.toDateString()
    }
    render() {
        return (
            <div className="main">
                <Typography style={{fontFamily:'roboto'}} use="headline3">
                    <p>History</p>
                </Typography>

                <Grid >
                    { this.state.routes.map((route, k) =>
                        <GridCell key={k} span="3">
                            <a href={`/read/${route.id}`}>
                                <RideCard title={route.name} subTitle={`Ride ${k}`}
                                description={this.formatDate(route.coords[0].time)}/>
                            </a>
                        </GridCell>)}
                </Grid>
            </div>
        );
    }
}
