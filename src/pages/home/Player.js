import React from 'react';
import YTPlayer from 'yt-player'


const videoHeight = () => window.innerWidth*9/16;
let videoBackground = {
    position: 'absolute',
    top: 0, right: 0, bottom: 0, left: 0,
    zIndex: -5,
};
var videoForeground = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    maxHeight: videoHeight()
}

export default class Player extends React.Component {

  componentDidUpdate(){
    console.log('Debug Update')
  }
  componentDidMount(){
    var player = this.player = new YTPlayer('#player', {
      autoplay: true,
      controls: false,
      modestBranding: true,
      related: false,
    })
    console.log('Load player', this.props.id)
    const playerElem = document.getElementById('videoBG')
    playerElem.hidden = true

    player.load(this.props.id)
    player.setVolume(0)
    player.setPlaybackRate(0.5)
    player.play()
    player.on('ended', this.props.onEnd)
    player.on('error', () => console.log('Player Error'))
    player.on('unplayable', () => console.log('Player Unplayable'))
    player.on('cued', () => console.log('Player Cued'))
    player.on('unstarted', () => console.log('Player Starting'))
    player.on('playing', () => {console.log('Player Active');playerElem.hidden = false;})

  }
  componentDidUnMount(){
    console.log('Player Unmounted')
  }
  render() {
    return (
      <div id='videoBG' style={videoBackground}>
        <div id='player' style={videoForeground}>
        </div>
      </div>)
  }
}
  