import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Components
import Dock from '@dock';
import Cart from '@cart';
import Bill from '@bill';
import Tab from '@tab';

class Home extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <View style={ [styles.row, { flex: 5 }] }>
          <Dock />
          <Bill />
        </View>
        <View style={ [styles.row, { flex: 1 }] }>
          <Cart />
          <Tab />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#324355'
  },
  row: {
    flexDirection: 'row',
  }
})

export default Home;
