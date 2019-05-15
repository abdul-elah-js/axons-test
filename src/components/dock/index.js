import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class Dock extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] };
  }

  render () {
    return (
      <View style={ styles.container }>
        <FlatList
          style={ styles.items_list_container }
          data={ this.state.items }
          numColumns={ 4 }
          renderItem={ ({ item }) => (
            <View style={ styles.item_container }>
              <Text style={ styles.item_text }>{ item }</Text>
            </View>
          ) }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    alignContent: 'stretch'
  },
  items_list_container: {
    flex: 1,
    alignSelf: 'stretch',
  }
})

export default Dock;
