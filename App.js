
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/T001_Login/index';

import Profile from './src/T002_Profile/index';

import MyProfile from './src/T003_MyProfile/index';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Text>Open up App.js to start working on your app!</Text>*/}

        {/*<Login />*/}

        {/*<Profile />*/}

        <MyProfile />

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
