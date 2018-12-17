import React from 'react';
import { Typography } from '@rmwc/typography'
import { Grid, GridCell } from '@rmwc/grid'


export default class Values extends React.Component {
  styles = Styles()
  render() {
    const styles = this.styles
    return (
      <div style={{display: 'block'}} >
        <Grid style={Object.assign( styles.white, styles.fullwidth)}>
          <GridCell  span='3' />
          <GridCell  span='6' >
            <Typography theme='primary' use='headline2' ><strong>Our Core Values</strong></Typography>
          </GridCell>
          <GridCell  span='3' />
          <GridCell  span='3' />
          <GridCell span='6' >
            <ul>
              <li>Make the world a better place.</li>
              <li>Reduce carbon emissions.</li>
              <li>Best practices usually call for minimalism.</li>
            </ul>
          </GridCell>
          <GridCell  span='3' />
        </Grid>
      </div >
    );
  }
}

function Styles(){
  return {
    paper: {
      padding: 28, 
      marginTop: 10,
      marginBottom: 10,
    },
    field: {
      padding: 12,
    },
    fullwidth: {
      width: '100%',
    },
    white: {background: 'white'}
  }
}
