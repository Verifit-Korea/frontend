import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginPage from '../screens/auth/LoginPage.tsx';
import Signup from '../screens/auth/Signup.tsx';
import MyPage from "../screens/myPage/MyPage.tsx";
import Setting from "../screens/myPage/Setting.tsx";
import MyData from "../screens/myPage/MyData.tsx";
import SocialLoginPage from "../screens/auth/SocialLoginPage.tsx";
import Home from "../screens/Home.tsx";

export type RootStackParamList = {
  SocialPage : undefined;
  LoginPage: undefined;
  SignupPage: undefined;
  MyPage : undefined;
  Setting : undefined;
  MyData : undefined;
  Home : undefined;
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SocialPage">
        <Stack.Screen name="SocialPage" component={SocialLoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="SignupPage" component={Signup} options={{headerShown: false}}/>
        <Stack.Screen name="MyPage" component={MyPage} options={{headerShown: false}}/>
        <Stack.Screen name="Setting" component={Setting} options={{headerShown: false}}/>
        <Stack.Screen name="MyData" component={MyData} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
