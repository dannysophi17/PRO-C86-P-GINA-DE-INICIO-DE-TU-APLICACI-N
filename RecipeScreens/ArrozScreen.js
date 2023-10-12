import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const ArrozScreen = () => {
  const ingredients = [
    '1 taza de arroz blanco',
    '2 tazas de agua',
    '1 cucharadita de sal',
    '1 cucharada de aceite vegetal',
  ];

  const steps = [
    'Busca una olla mediana en buen estado para hacer el arroz. Agrega el arroz blanco, las 2 tazas de agua, la sal y el aceite vegetal, todo de una vez. Revuelve un poco solo en una oportunidad y ya.',
    'Pon a fuego alto y deja que hierva durante unos minutos.',
    'Al cabo de unos pocos minutos (no más de 5), se va a secar el agua por completo. Cuando veas que esto sucede, más precisamente, cuando veas que está a punto de dejar de botar burbujas de agua sobre la superficie del arroz, baja el fuego al mínimo y tapa la olla.',
    'Deja que transcurran 15 minutos, destapa y prueba el grano. Ya debería estar listo. Si no lo está (recuerda que algunas cocinas son menos potentes), vuelve a tapar por otros 5 minutos. Si el grano ya está, apaga y retira de la hornilla, esto es críticamente importante si tu cocina es eléctrica, el calor podría fastidiarlo todo.',
    'Lista, ya tienes arroz blanco casero y fácil.',
  ];

  return (
    <View style={styles.container}>
      <Image source={require('../assets/arroz.jpg')} style={styles.recipeImage} />
      <Text style={styles.recipeTitle}>Cómo hacer arroz</Text>

      <Text style={styles.subtitle}>Ingredientes:</Text>
      <FlatList
        data={ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>- {item}</Text>}
      />

      <Text style={styles.subtitle}>Elaboración paso a paso:</Text>
      <FlatList
        data={steps}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text>
            {index + 1}. {item}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  recipeImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ArrozScreen;
