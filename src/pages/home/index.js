import React from 'react';
import 'css/responsiveMedia.css';
import 'css/purchasePrice.css';
import CustomerPrices from './CustomerPrices'
import Services from './Services'

const videoHeight = () => window.innerWidth*9/16;
let videoBackground = {
    background: '#000',
    position: 'absolute',
    top: 0, right: 0, bottom: 0, left: 0,
};
const videoForeground = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
}
const videoBackgroundIframe = videoForeground;
const VID_REPEAT = false;

export default class Default extends React.Component {
    render() {
        //const videoHeight = document.getElementById('videoBG').offsetHeight;
        videoBackground.height = videoHeight()
        return (
            <div style={{position: 'relative', width: '100%'}}>
                <link rel="stylesheet" type="text/css" href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.css' />
                <div id='videoBG' style={videoBackground}>
                    <div style={videoForeground}>
                    <iframe
                        style={videoBackgroundIframe}
                        title='marketing video'
                        src={`https://www.youtube.com/embed/h2ER3vff08Q?showinfo=0&controls=0&start=63&end=116&controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=0&${VID_REPEAT?'playlist=h2ER3vff08Q':''}`}
                        allow="autoplay"
                        frameborder="0"
                        allowfullscreen></iframe>
                    </div>
                </div>

                { /* blank placeholder div because actual video position is position absolute */ }
                <div style={{height: videoBackground.height}}/>
                
                <Services />
                <CustomerPrices />
                <div class='spacer'/>
                <div class='spacer'/>
                <div class='spacer'/>
                </div>
        );
    }
}