import React from 'react';
import { Button } from '@rmwc/button'
import 'css/responsiveMedia.css';
import 'css/purchasePrice.css';
import CustomerPrices from './CustomerPrices'
import Services from './Services'
import VidManager from './VidManager'


const videoHeight = () => window.innerWidth*9/16;

export default class Home extends React.Component {
  render() {
    //const videoHeight = document.getElementById('videoBG').offsetHeight;
    return (
      <div style={{position: 'relative', width: '100%'}}>
        <link rel="stylesheet" type="text/css" href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.css' />
        <VidManager />
      
        { /* Transparency Overlay on top of Video Player */ }
        <div style={{
          position: 'absolute',
          top: '200px',
          left: '35%',
          width: '30%',
          
          }} >
          <p style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '36px',
            textAlign: 'center'}}>
            Make a sustainable impact on the world</p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Button unelevated><strong>Learn More</strong></Button>
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