import React from 'react';

export default class JsonImageLoader extends React.Component {

  render(){
    return (<img src={require("../../assets/" + this.props.children)} width="700px" />);
  }
}
