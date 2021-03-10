import React from 'react';

class TextGoodBye extends React.Component {
  
    // constructor(props) {
    //   super(props);
    // }
  
    render() {
      const name = 'Vasya';
      return(
        <p> Good Bye, {name}! Wish you good luck! </p>
      )
    }
  }

export default TextGoodBye;