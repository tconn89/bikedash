import React from 'react';
import {Grid, GridCell} from '@rmwc/grid';

const development = Content('development')
const mobile = Content('mobile')
const geo = Content('geo')

export default class Services extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center', background: '#eee', width: '100%'}}>
        <div className='spacer' />
        <div className='spacer' />
        <h2 style={{fontWeight: 'bold'}}> Software Services </h2>
        <Grid style={{margin: '0 auto'}}>
          <Service data={development} />
          <Service data={mobile} />
          <Service data={geo} />
        </Grid>
      </div>)
  }
}
  
const Cell = (props) => <GridCell style={{textAlign:'center'}} span='4'>{props.children}</GridCell>
function Service(props) { 
  return (
    <Cell>
      <div style={{ marginLeft: '30%', width: '40%'}}>
        <img style={{width:props.data.title.toLowerCase()==='mobile'?'88%':'100%'}} src={props.data.image} alt='mobile'/>
      </div>
      <div className='spacer'/>
      <div style={{fontWeight: 'bold'}}> {props.data.title} </div>
      <div className='spacer'/>
      <div style={{ marginLeft: '10%', width: '80%'}}>{props.data.detail}</div>
    </Cell>)
}

function Content(type){
  if(type === 'development')
    return {
      title: 'Development',
      image: '/img/development_tall.png',
      detail:'We figured out the magic sauce to automate your business.  Our experience and expertise says it all.'
    }
  if(type === 'mobile')
    return {
      title: 'Mobile',
      image: '/img/wirephone.png',
      detail: 'Mobile apps our the name of the game.  Target your mobile users with a custom mobile app.'
    }
  if(type === 'geo')
    return {
      title: 'Geolocation',
      image: '/img/geo1.svg',
      detail: 'Let us help track your vehicles.  Great for fleet management, racing and ridesharing apps.'
    }
  return {}
}
