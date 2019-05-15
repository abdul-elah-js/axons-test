import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Cart extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <Text>Cart</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    backgroundColor: 'blue'
  }
})

export default Cart;
