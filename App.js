
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/T001_Login/index';

import Profile from './src/T002_Profile/index';

import Index from './src/T000_Test/index';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Text>Open up App.js to start working on your app!</Text>*/}

        {/*<Login />*/}

        <Index />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
