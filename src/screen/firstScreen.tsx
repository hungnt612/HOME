import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../compoments/CustomButton';

const {width, height} = Dimensions.get('window');

const FirstScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Hello</Text>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            lable="JOIN NOW"
            onPress={() => {
              navigation.navigate('Register');
            }}
          />
          <CustomButton
            lable="EXISTING USERS"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    //backgroundColor:'green'
  },
  logoContainer: {
    height: height * 0.7,
    width: '100%',
    backgroundColor: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {},
  btnContainer: {
    height: height * 0.3,
    width: '100%',
    backgroundColor: 'azure',
  },
});

export default FirstScreen;
