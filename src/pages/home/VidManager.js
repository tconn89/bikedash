import React from 'react';
import Player from './Player'

// let videoBackground = {
//     position: 'relative',
//     height: '100%'
// };

export default class VidManager extends React.Component {
  state = { trackNumber: 0 }
  videos = [{id: 'h2ER3vff08Q', rendering: this.isVideoRendering(0)},
            {id: 'W0LHTWG-UmQ', rendering: this.isVideoRendering(1)} ]
  isVideoRendering(index){
    return index === this.state.trackNumber
  }
  onTrackEnd(){
    this.setState({ trackNumber: this.state.trackNumber+1 })
  }

  componentDidUpdate(){
    console.log('VidManager Update')
  }
  render() {
    return (
      <React.Fragment>
        { this.videos.map((video, i) =>  this.isVideoRendering(i) ? <Player key={i} id={video.id} onEnd={this.onTrackEnd.bind(this)}/>:null) }
      </React.Fragment>)
  }
}
  