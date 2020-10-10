import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import RedBox from './components/RedBox';
import PinkBox from './components/PinkBox';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>

      <RedBox />

      <PinkBox />
      
    </SafeAreaView>
  );
};

export default App;
