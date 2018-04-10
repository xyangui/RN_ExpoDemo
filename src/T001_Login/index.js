
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import LoginScreen1 from './screen1';
import LoginScreen2 from './screen2';
import LoginScreen3 from './screen3';
import LoginScreen4 from './screen4';

export default class Login extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView
              horizontal
              pagingEnabled
              decelerationRate={0.993}
          >
            <LoginScreen3 />
            <LoginScreen1 />
            <LoginScreen2 />
            <LoginScreen4 />

          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});
