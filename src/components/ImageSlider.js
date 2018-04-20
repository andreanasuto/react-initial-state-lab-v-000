// Bomb Component Code Goes Here
import React from 'react'

class ImageSlider extends React.Component {
  render() {
    return (
      <div>
      <p> I am on slide <{this.state.currentSlideIndex}> </p>
      </div>
    )
  }
}

export default ImageSlider;
