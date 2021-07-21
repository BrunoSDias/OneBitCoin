import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const CurrentPrice = (props) => {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.textPrice}>Ultima Cotação</Text>
      <Text style={styles.currentPrice}>$ {props.lastCotation}</Text>
    </View>
  )
}

export default CurrentPrice;