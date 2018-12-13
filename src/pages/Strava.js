import '../css/article.css';
import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';
import {Typography} from '@rmwc/typography';

import { Badge, Grid, GridItem} from '@patternfly/react-core'
import Card from '../components/Card';



export default class Strava extends React.PureComponent {
    async componentDidMount(){
        console.log('API')
    }
    render() {
        return (
            <div className="">
                <Typography use="headline4">
                    <p>Connect To Strava</p>
                </Typography>

                <Grid gutter='sm' sm={2} md={1} lg={1} >
                    <Badge className='badge'> Green </Badge>
                    <Badge className='badge'> Sustainable </Badge>
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
