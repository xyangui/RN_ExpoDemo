
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import LoginScreen1 from './src/T001_Login/screen1';
import LoginScreen2 from './src/T001_Login/screen2';
import LoginScreen3 from './src/T001_Login/screen3';
import LoginScreen4 from './src/T001_Login/screen4';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Text>Ope22n up Ap99p.js to start working on your app!</Text>*/}

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


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
