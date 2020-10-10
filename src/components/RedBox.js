import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const RedBox = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.graybox}>
          <View style={styles.orangecircle}>
            <Text style={styles.text_orangecircle}>Orange Circle</Text>
          </View>
          <View style={styles.yellowbox}>
            <Text style={styles.text_yellowbox}>Yellow Box</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RedBox;

const styles = StyleSheet.create({
  container: {
    flex: 1.3,
    backgroundColor: 'red',
  },

  graybox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
    margin: 23,
    borderRadius: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  orangecircle: {
    width: 120,
    height: 120,
    backgroundColor: 'orange',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text_orangecircle: {
      fontSize: 18,
      fontWeight: 'bold',
  },

  yellowbox: {
    width: 110,
    height: 60,
    backgroundColor: 'yellow',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text_yellowbox: {
    fontSize: 17,
  },
});
