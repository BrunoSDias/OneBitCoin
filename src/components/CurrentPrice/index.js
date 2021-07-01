import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const CurrentPrice = () => {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>$ 30000,00</Text>
      <Text style={styles.textPrice}>ultima cotação</Text>
    </View>
  )
}

export default CurrentPrice;