import React from 'react';

class Rand extends React.Component {
  render() {
    return (
      <div className="Rand" >
        <h2 className="rainbow">Shuffle Triad</h2>
        <div id="score">
          Current Score: {this.props.score}
        </div>
      </div>

    );
  }

};

export default Rand;