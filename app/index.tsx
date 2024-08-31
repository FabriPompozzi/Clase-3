import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from '@/components/card'; // Import the Card component

export default function App() {
  const data = ['Tarjeta 1', 'Tarjeta 2', 'Tarjeta 3'];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card content={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
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