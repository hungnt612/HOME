import React from 'react';
import {View, Text} from 'react-native';
import store from '../../redux/store';
import LoginReducer from '../../redux/reducer/LoginReducer';
import {connect} from 'react-redux';
import {changeDataLogin, removeDataLogin} from '../../redux/action/authenticateAction';
import CustomButton from '../../compoments/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC<{
  dataUser: any;
  changeDataLogin: (data: any) => void;
}> = ({dataUser, changeDataLogin}) => {
  const navigation = useNavigation();
  console.log(dataUser.user);
  return (
    <View>
      <Text>Hello {dataUser.user}</Text>
      <CustomButton
        lable="Log Out"
        onPress={() => {
          navigation.navigate('Login');
          store.dispatch(removeDataLogin());
        }}
      />
    </View>
  );
};
const mapStateToProps = (state: any) => {
  const {LoginReducer} = state;
  return {dataUser: LoginReducer};
};

export default connect(mapStateToProps, {changeDataLogin: changeDataLogin})(
  Home,
);
