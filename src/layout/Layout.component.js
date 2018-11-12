import '@material/theme/dist/mdc.theme.css';
import 'material-components-web/dist/material-components-web.css';
import '../css/main.css';

import NavDrawer from './NavDrawer.component';
import React from 'react';
import TopNav from './TopNav.component';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
        }
    }

    openDrawer = () => {
        this.setState({isDrawerOpen: true});
    }

    closeDrawer = () => {
        this.setState({isDrawerOpen: false});
    }

    toggleDrawer = () => {
        this.setState({isDrawerOpen: !this.state.isDrawerOpen});
    }

    render() {
        const {
            closeDrawer,
            toggleDrawer,
            props: {
                children,
            },
            state: {
                isDrawerOpen,
            }
        } = this;

        return (
            <React.Fragment>
                <TopNav onMenuIconClick={toggleDrawer} />
                <div>
                    <NavDrawer
                        onClose={closeDrawer}
                        open={isDrawerOpen}
                    />
                    <div className="content">
                        {children}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}