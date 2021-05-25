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
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm, SubmitHandler} from 'react-hook-form';
import CustomInput from '../../compoments/CustomInput';
import CustomButton from '../../compoments/CustomButton';
import {useNavigation} from '@react-navigation/native';
import store from '../../redux/store';
import LoginReducer from '../../redux/reducer/LoginReducer';
import {
  CHANGE_DATA_LOGIN,
  changeDataLogin,
} from '../../redux/action/LoginAction';
import {connect} from 'react-redux';

interface FormData {
  user: string;
  password: string;
}

const LoginScreen: React.FC<{
  dataUser: any;
  changeDataLogin: (data: any) => void;
}> = ({dataUser, changeDataLogin}) => {

  const navigation = useNavigation();

  const {control, handleSubmit} = useForm<FormData>();

  const onSubmit = (data: FormData) => store.dispatch(changeDataLogin(data));

  console.log(dataUser);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Controller
          name="user"
          control={control}
          render={({field: {onChange, value}}) => (
            <CustomInput
              value={value}
              placeholder="User Name"
              label={'User Name'}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({field: {onChange, value}}) => (
            <CustomInput
              value={value}
              placeholder="Password"
              label={'Password'}
              onChange={onChange}
            />
          )}
        />
        <CustomButton lable={'Change'} onPress={handleSubmit(onSubmit)}></CustomButton>
        <CustomButton
          lable={'Submit'}
          onPress={() => {
            handleSubmit(onSubmit);
            navigation.navigate('Home');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state: any) => {
  const {LoginReducer} = state;
  return {dataUser: LoginReducer};
};

export default connect(mapStateToProps, {changeDataLogin: changeDataLogin})(
  LoginScreen,
);
