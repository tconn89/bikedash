import './css/App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Layout from './layout/Layout.component';
import React from 'react';
import {routes} from './Routes';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <link
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        rel="stylesheet"
                    />
                    <Layout>
                        {
                            routes.map((route, k) => (
                                <Route key={k} exact={route.exact} path={route.path} component={route.component} />
                            ))
                        }
                    </Layout>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
