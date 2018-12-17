import './Form.css'
import React from 'react';
import { Button } from '@rmwc/button'
import { Card } from '@rmwc/card'
import { TextField, } from '@rmwc/textfield';
import { Typography } from '@rmwc/typography'
import { Grid, GridCell } from '@rmwc/grid'


export default class Form extends React.Component {
  styles = Styles()
  render() {
    return (
      <div >
        <Card style={this.styles.paper}>
          <Typography theme='primary' use='headline6' ><strong>Drop us a line</strong></Typography>
          <div className='spacer' />
          <Grid style={{padding: 0, width: '100%'}}>
            <GridCell span='6'>
              <TextField fullwidth label="Name" />
            </GridCell>
            <GridCell span='6'>
              <TextField fullwidth label="Phone" />
            </GridCell>
            <GridCell span='12'>
              <TextField fullwidth label="Email" />
            </GridCell>
            <GridCell span='12'>
              <TextField className='no-border' textarea rows='4' label="What's on your mind?" />
            </GridCell>
            <GridCell phone='12' span='2'>
              <Button raised>Submit</Button>
            </GridCell>
          </Grid> 
        </Card>
      </div>
    );
  }
}

function Styles(){
  return {
    paper: {
      padding: 28, 
      marginTop: 10,
      marginBottom: 10,
      background: 'rgba(200, 200, 200, 0.7)',
    },
    field: {
      padding: 12,
    }
  }
}
