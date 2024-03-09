import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginPage from '../screens/auth/LoginPage.tsx';
import Signup from '../screens/auth/Signup.tsx';
import MyPage from "../screens/myPage/MyPage.tsx";
import Setting from "../screens/myPage/Setting.tsx";

export type RootStackParamList = {
  LoginPage: undefined;
  SignupPage: undefined;
  MyPage : undefined;
  Setting : undefined;
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="SignupPage" component={Signup} options={{headerShown: false}}/>
        <Stack.Screen name="MyPage" component={MyPage} options={{headerShown: false}}/>
        <Stack.Screen name="Setting" component={Setting} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
