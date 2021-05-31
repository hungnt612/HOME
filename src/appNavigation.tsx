import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Provider} from 'react-redux';
import LoginScreen from './screen/loginScreens/loginScreen';
import Home from './screen/homeScreen/home';
import store from './redux/store';
import LoginReducer from './redux/reducer/LoginReducer';

const Stack = createNativeStackNavigator();
const AppNavigation: React.FC<{
  dataUser: any;
  changeDataLogin: (data: any) => void;
}> = ({dataUser, changeDataLogin}) => {
  console.log(store.getState().LoginReducer);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          {store.getState().LoginReducer == undefined ? (
            <Stack.Screen name="Login" component={LoginScreen} />
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          )}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default AppNavigation;
