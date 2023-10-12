import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Recetas Express</Text>

      <TouchableOpacity
        style={styles.recipeContainer}
        onPress={() => navigation.navigate('Waffles')}
      >
        <Image
          source={require('../assets/waffles.jpg')}
          style={styles.recipeImage}
        />
        <Text style={styles.recipeTitle}>¿Cómo hacer waffles?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.recipeContainer}
        onPress={() => navigation.navigate('Arroz')}
      >
        <Image
          source={require('../assets/arroz.jpg')}
          style={styles.recipeImage}
        />
        <Text style={styles.recipeTitle}>¿Cómo hacer arroz?</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Daniela Coavas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFA437 ',
    alignSelf: 'center',
  },
  recipeContainer: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    width: 300,
  },
  recipeImage: {
    width: 300,
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  recipeTitle: {
    fontSize: 20,
    padding: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default MainScreen;
