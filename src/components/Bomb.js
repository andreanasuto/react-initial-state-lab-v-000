// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    var count = this.props.initialCount
    this.state = {secondsLeft: count};
  }

  render() {
    return (
      if (this.state.secondsLeft != 0) {
        <div>
          <p>{this.state.secondsLeft} seconds left before I go boom! </p>
        </div>
      } else {
        <div>
          <p>Boom!</p>
        </div>
      }

    )
  }
}

export default Bomb;
