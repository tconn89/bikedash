import React from 'react';
import YTPlayer from 'yt-player'


const videoHeight = () => window.innerWidth*9/16;
let videoBackground = {
    position: 'absolute',
    top: 0, right: 0, bottom: 0, left: 0,
    zIndex: -5,
};
const videoForeground = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    maxHeight: videoHeight()
}

export default class Player extends React.Component {

  componentDidMount(){
    this.player = new YTPlayer('#player', {
      autoplay: true,
      controls: false,
      modestBranding: true,
      related: false,
    })
    console.log('Load player', this.props.id)
    this.player.load(this.props.id)
    this.player.setVolume(0)
    this.player.setPlaybackRate(0.5)
    this.player.play()
    this.player.on('ended', this.props.onEnd)
    this.player.on('error', () => console.log('Player Error'))
    this.player.on('unplayable', () => console.log('Player Unplayable'))
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
  