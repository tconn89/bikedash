import '../css/article.css';
import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';
import {Typography} from '@rmwc/typography';

import { Badge, Grid, Button} from '@patternfly/react-core'
import { Provider, Subscribe, Container } from 'unstated';

class CounterContainer extends Container {
    state = {
        count: 0
    };

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    decrement() {
        this.setState({ count: this.state.count - 1 });
    }
}

export default class Article extends React.PureComponent {
    render() {
        return (
            <Provider>
                <Subscribe to={[CounterContainer]}>
                { counter => (
                    <div className="article">
                        <Typography use="headline4">
                            <p>Raleigh Bikers</p>
                        </Typography>

                        <Grid gutter='sm' sm={2} md={1} lg={1}>
                            <Badge> Green </Badge>
                            <Badge> Sustainable </Badge>
                            <Badge> {counter.state.count} </Badge>
                        </Grid>
                        <Button onClick={() => counter.increment()}> Increment </Button>
                        <Button onClick={() => counter.decrement()}> Decrement </Button>
                        <Typography use="body1">
                            <p>Is it true that cars are destroying the world?  Maybe, but they're a necessary evil as it stands.</p>
                            <p>Get more butts on bikes!</p>
                        </Typography>
                    </div>)
                }
                </Subscribe>
            </Provider>
        );
    }
}
