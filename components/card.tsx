import React, { useState } from 'react';
import { Text, Pressable, StyleSheet} from 'react-native';

interface CardProps {     
    content: string;
  }

const Card: React.FC <CardProps> = ({ content }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <Pressable onPress={handlePress} style={[styles.card, isPressed ? styles.cardPressed : null]}>
      <Text style={[styles.cardText, isPressed ? styles.cardTextPressed : null]}>
        {content}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '50%',
    height: '20%',
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2.5%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardPressed: {
    backgroundColor: '#4a90e2',
  },
  cardText: {
    fontSize: 18,
    color: '#333',
  },
  cardTextPressed: {
    color: '#fff',
  },
});

export default Card;