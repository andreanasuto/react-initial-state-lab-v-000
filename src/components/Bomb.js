// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsLeft: {this.props.initialCount}};
  }

  render() {
    return (
      <div>
        Hello my name is Bomb
      </div>
    )
  }
}

export default Bomb;
