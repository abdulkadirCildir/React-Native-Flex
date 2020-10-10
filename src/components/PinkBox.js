import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const PinkBox = () => {
  return (
    <SafeAreaView style={{flex: 1.7}}>
      <View style={styles.container}>
        <View style={styles.blackbox}>
          <Text style={styles.text_blackbox}>Black Box</Text>
        </View>
        <View style={styles.brownbox}>
          <Text style={styles.text_brownbox}>Brown Box</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PinkBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'pink',
    justifyContent: 'space-around',
  },

  blackbox: {
    flex: 2.3,  
    backgroundColor: 'black',
    margin: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },

  brownbox: {
    flex: 0.8,  
    backgroundColor: 'brown',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  text_blackbox: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  text_brownbox: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    transform: [{ rotate: '-90deg' }],
  },
});
