import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
//import apple from './apple.png';
var s = require('../../style');
export default class Home extends Component{
  render(){
    return(
      <View >
        <Text style={s.heading}>Home</Text>        
      </View>
    );
  }
}

const styles = StyleSheet.create({});