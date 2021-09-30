/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

export default class App extends Component {
  state = {
    min: 0,
    max: 0,
    r: 0
  }
  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.random}>
          <Text style={styles.randomt}>Random number generator</Text>
        </View>
        <View style={styles.inputv}>
          <Text style={styles.inputt}>Input two numbers to generate a random number between them</Text>
          <View style={styles.numberv}>
            <TextInput style={styles.number} placeholder="min" onChangeText={(min) => this.setState({ min: min })} keyboardType="numeric" />
            <Text style={{ fontSize: 20 }} >to</Text>
            <TextInput style={styles.number} placeholder="max" onChangeText={(max) => this.setState({ max: max })} keyboardType="numeric" />
          </View>
          <View style={styles.bttnv}>
            <Button title="Generate" onPress={()=>(
              this.setState({ r:  Math.round(Math.random() * (Math.floor(this.state.max) - Math.ceil(this.state.min)) + Math.ceil(this.state.min))}))} />
          </View>
          <View style={styles.numv}>
            <Text style={styles.num}>{this.state.r}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  randomt: {
    color: '#27476e',
    fontSize: 30,
    textAlign: 'center',
  },
  random: {
    backgroundColor: '#eca400',
  },
  screen: {
    backgroundColor: '#eaf8bf',
    flex: 1,
  },
  inputt: {
    fontSize: 20,
    color: '#006992',
    textAlign: 'center',
    fontWeight:'bold',
  },
  inputv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberv: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  number: {
    borderColor: 'blue',
    borderBottomWidth: 2,
    paddingBottom: 1,
    paddingTop: 1,
    fontSize: 30,
    textAlign:'center',
  },
  bttnv: {
    paddingTop: 10,
  },
  numv: {
    paddingTop: 20,
  },
  num: {
    fontSize: 80,
    color: '#001d4a'
  }
});

