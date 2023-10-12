import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const WafflesScreen = () => {
  const ingredients = [
    '100 gr de harina de trigo regular, no leudante.',
    '2 huevos',
    '50 gr de mantequilla derretida',
    '50 ml de leche',
    '3 cda de azúcar',
    '1 cda de polvo de hornear',
    '1 Cda de vainilla',
  ];

  const steps = [
    'La mezcla la puedes hacer en una batidora manual o en tu licuadora, o a mano.',
    'Vamos a iniciar nuestra receta, mezclando en un bol el harina de trigo, la pizca de sal, el azúcar y el polvo de hornear. Mezcla hasta que se integren muy bien.',
    'En otro bol, colocaremos los huevos y batirás hasta conseguir una mezcla espumosa.',
    'Añade al bol de los huevos, la mantequilla derretida, la leche y la cucharada de vainilla. Con una espátula, mezcla suavemente para no deshacer el aire en los huevos.',
    'Ahora, vamos a integrar el harina a la mezcla progresivamente y batirás a velocidad media hasta que todo esté incorporado y consigas una textura cremosa y espesa.',
    'Lista nuestra mezcla, procede a calentar tu wafflera. Si es necesario, puedes engrasarla un poco.',
    'Es momento de verter un poco de la mezcla en la wafflera, procurando que cubra toda la superficie, pero que no se derrame.',
    'Tapa tu wafflera y deja cocinar. Regularmente son de 5 a 6 minutos, dependiendo de tu máquina. Sabrás cuando estén doraditos y deliciosos.',
    'Repite el procedimento con toda la mezcla hasta que tengas tus waffles.',
    '¡Disfrútalos!',
  ];

  return (
    <View style={styles.container}>
      <Image source={require('../assets/waffles.jpg')} style={styles.recipeImage} />
      <Text style={styles.recipeTitle}>Cómo hacer waffles</Text>

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

export default WafflesScreen;


