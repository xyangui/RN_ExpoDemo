
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { Asset, AppLoading, Font } from 'expo';
import { SafeAreaView } from 'react-navigation';
import { loadSavedTalksAsync } from './utils/storage';
import { Ionicons } from '@expo/vector-icons';

import Details from "./detail";

if (Platform.OS === 'android') {
  SafeAreaView.setStatusBarHeight(0);
}

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  _loadResourcesAsync = () => {
    return Promise.all([
      this._loadAssetsAsync(),
      this._loadDataAsync(),
    ])
  }

  _loadDataAsync = () => {
    return loadSavedTalksAsync();
  }

  _loadAssetsAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'open-sans-bold': require('./assets/OpenSans-Bold.ttf'),
        'open-sans': require('./assets/OpenSans-Regular.ttf'),
        'open-sans-semibold': require('./assets/OpenSans-SemiBold.ttf'),
        ...Ionicons.font,
      }),
      Asset.fromModule(require('./assets/logo.png')).downloadAsync(),
      Asset.fromModule(
        require('react-navigation/src/views/assets/back-icon.png')
      ).downloadAsync(),
    ]);
  };

  render() {

    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={console.error}
          onFinish={() => {
            this.setState({ fontLoaded: true });
          }}
        />
      );
    }

    return (
      <View style={styles.container}>

        <Details />

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
