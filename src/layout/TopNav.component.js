import {
    TopAppBar,
    TopAppBarNavigationIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
} from '@rmwc/top-app-bar';
import { Grid, GridCell} from '@rmwc/grid'

import React from 'react';

const Logo = () => {
    return (
        <Grid >
            <GridCell phone={3} tablet={3} desktop={3} >
                <img className='logo' src='/img/full_logo.png' alt='logo'/>
            </GridCell> 
        </Grid>
    );
}
export default class TopNav extends React.Component {
    render() {
        return (
            <TopAppBar style={{background: 'white'}}>
                <TopAppBarRow>
                    <TopAppBarSection>
                    <TopAppBarNavigationIcon
                        style={{color: '#222'}}
                        icon="menu"
                        onClick={this.props.onMenuIconClick}
                    />
                    <TopAppBarTitle><Logo/></TopAppBarTitle>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
        );
    }
}
