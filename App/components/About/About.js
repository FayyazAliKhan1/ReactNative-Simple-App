import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
var s = require('../../style');
export default class About extends Component{
  render(){
    return(
      <View >
        <Text style={s.heading}>About</Text>
        <Text style={s.sectionText}>so the text itself is a prop. The "whether the text is currently on or off" changes over time, so that should be kept in state</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});