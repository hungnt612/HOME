import React from 'react';
import {View, Text} from 'react-native';
import store from "../../redux/store";
import LoginReducer from "../../redux/reducer/LoginReducer";
import { connect } from "react-redux";
import { changeDataLogin } from "../../redux/action/LoginAction";

const Home: React.FC<{
  dataUser: any;
  changeDataLogin: (data: any) => void;
}> = ({dataUser, changeDataLogin}) => {
  return (
    <View>
      <Text>Hello {dataUser.user}</Text>
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
