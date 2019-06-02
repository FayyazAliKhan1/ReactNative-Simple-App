
import React, {Component} from 'react';
import {Switch, ScrollView, Platform, StyleSheet, Text, View, Image, ToolbarAndroid} from 'react-native';
import Home from './App/components/Home/Home'
import About from './App/components/About/About'
import Contact from './App/components/Services/Services'
var s = require('./App/style');
export default class App extends Component{
  constructor(){
    super();
    this.state = {
      logoHidden: false
    }
  }
  render(){
    let logoHidden = this.state.logoHidden;
    let img ;
    if(logoHidden){img = <Text >Apple</Text>  }
    else{ img = <Image source={require('./apple.png')} style={s.image}/> }
    return(
      <View >
        <ToolbarAndroid 
          style={s.toolbar} logo={require('./toolbar.png')} title="Company" subtitle="Welcome to our First Mobile App"
        />
        <View style={s.imageWrap}>
          {img}
          <Switch onValueChange={(value) => this.setState({logoHidden: value})} value={this.state.logoHidden}/>
        </View>
        <ScrollView style={s.scrollView}>
        <Home />
        <About />
        <Contact />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
