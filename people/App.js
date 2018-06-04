import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';

export default class App extends React.Component {



  render() {
    return (
      <View>
        <Header title="People!" />
        <Body />
      </View>
    );
  }
}
