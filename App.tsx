import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {connect, Provider} from 'react-redux';
import store from './src/redux/store';
import LoginScreen from './src/screen/loginScreens/loginScreen';
import AppNavigation from './src/appNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
