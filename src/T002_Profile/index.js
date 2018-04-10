
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Profile1 from './Profile1'
import Profile2 from './Profile2'
import Profile3 from './Profile3'
import Profile4 from './Profile4'

import Product1 from './Product1'

export default class Profile extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          {/*<ScrollView*/}
              {/*horizontal*/}
              {/*pagingEnabled*/}
              {/*decelerationRate={0.993}*/}
          {/*>*/}
            <Profile1 />
            {/*<Profile2 />*/}
            <Profile3 />
            {/*<Profile4 />*/}

            {/*<Product1 />*/}

          {/*</ScrollView>*/}
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
