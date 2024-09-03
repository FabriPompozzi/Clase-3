import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from '@/components/card'; // Import the Card component

export default function App() {

  return (
    <View style={styles.container}>
      <Card content="Tarjeta 1" />
      <Card content="Tarjeta 2" />
      <Card content="Tarjeta 3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
});