import React from 'react';
import { Button } from '@rmwc/button'
import 'css/responsiveMedia.css';
import 'css/purchasePrice.css';
import CustomerPrices from './CustomerPrices'
import Services from './Services'
import VidManager from './VidManager'


const videoHeight = () => window.innerWidth*9/16;

export default class Home extends React.Component {
  navToCoreValues(){
    console.log('what')
    window.location.href = '/core-values'
  }
  render() {
    //const videoHeight = document.getElementById('videoBG').offsetHeight;
    return (
      <div style={{position: 'relative', width: '100%'}}>
        <link rel="stylesheet" type="text/css" href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.css' />
        <VidManager />
      
        { /* Transparency Overlay on top of Video Player */ }
        <div 
          className='title-container'
        >
          <p 
            className='company-statement'
          >
            Work together to make a sustainable impact on the world</p>
            <div className='action-button' style={{display: 'flex', justifyContent: 'center'}}>
              <Button onClick={this.navToCoreValues}unelevated><strong>Learn More</strong></Button>
            </div>
        </div>
        <div style={{
          background: 'url(/img/radialgradient.png)',
          backgroundSize: '100% 100%',
          zIndex: 10,
          height: videoHeight()}}/>
          
        <Services />
        <CustomerPrices />
        <div class='spacer'/>
        <div class='spacer'/>
        <div class='spacer'/>
      </div>
    );
        }
      }