import React , { Component } from 'react';
import { Text , View } from 'react-native';

class ScreenOn extends Component{
  render(){
    return(
      <View>
      <Heading message={'this is my way'}/>
      </View>
    );
  }
}
class Heading extends Component{
  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>
      </View>
      );
  }
}
export default ScreenOn;
