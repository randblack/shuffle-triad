import React from 'react';

class Shuffle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    var imageLinks = this.props.imageUrls.map((images, index) => {
      return (<div onClick={() => this.props.randomize()} className="grid-item" key={index}><img onClick={() => this.props.userGuess(images)} src={images} alt="friend" /></div>)
    })
    return (
      <div className="tiles">
        {imageLinks}
      </div>
    );
    ;
  }
};

export default Shuffle;