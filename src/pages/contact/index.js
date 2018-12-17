import React from 'react';
import { Button } from '@rmwc/button'
import { Card } from '@rmwc/card'
import ContactForm from './Form'
import { TextField, } from '@rmwc/textfield';
import { Typography } from '@rmwc/typography'
import { Grid, GridCell } from '@rmwc/grid'


export default class Form extends React.Component {
  styles = Styles()
  render() {
    const styles = this.styles
    return (
      <div style={{display: 'block'}} >
        <div>
          <img style={styles.fullwidth} src='/img/RaleighGreyScale.png' alt='Raleigh Map' />
        </div>
        <Grid style={Object.assign( styles.white, styles.fullwidth)}>
          <GridCell style={{background: 'rgba(255,255,255,0.7'}} span='3' >
            <Typography theme='primary' use='headline6' ><strong>Visit Us</strong></Typography>
            <div style={{marginTop: 10}}>
              <img styles={styles.fullwidth} src='/img/CoffeeLuxMap.png' alt='Map Location'/> 
            </div>
            <div style={{color: 'grey', fontWeight: 'bold'}}>
              <div>414 Fayetteville st</div>
              <div>4th floor</div>
              <div>Raleigh, NC 27603</div>
              <Typography use='caption' >Find us in the Nest co-working space.</Typography>
            </div>
          </GridCell>
          <GridCell span='9' >
            <ContactForm />
          </GridCell>
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
