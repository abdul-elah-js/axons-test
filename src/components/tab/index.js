import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Tab extends Component {

  render() {
    return (
      <View style={ styles.container }>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  }
})

export default Tab;
