import React, {Component} from 'react';
import {TextInput, Platform, StyleSheet, Text, View, Button} from 'react-native';
var s = require('../../style');
export default class Contact extends Component{
  
  render(){
    return(
      <View >
        <Text style={s.heading}>Contact</Text>
        <View style={{padding: 10}}>
          <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="Enter Your Name"
          />
          <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="Email"
          />
          <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="Optional Message"
          />
          <Button title="Submit" color="red" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});