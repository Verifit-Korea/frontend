import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginPage from '../screens/auth/LoginPage.tsx';
import Signup from '../screens/auth/Signup.tsx';
import MyPage from '../screens/myPage/MyPage.tsx';
import Setting from '../screens/myPage/Setting.tsx';
import MyData from '../screens/myPage/MyData.tsx';
import SocialLoginPage from '../screens/auth/SocialLoginPage.tsx';
import Home from '../screens/Home.tsx';
import Point from '../screens/point/Point.tsx';
import Ranking from '../screens/point/PointRanking.tsx';
import NegativeCheck from '../screens/main/checkList/NegativeCheck.tsx';
import Guideline from '../screens/camera/guideline.tsx';

export type RootStackParamList = {
  SocialPage: undefined;
  LoginPage: undefined;
  SignupPage: undefined;
  MyPage: undefined;
  Setting: undefined;
  MyData: undefined;
  Home: undefined;
  Point: undefined;
  Ranking: undefined;
  NegativeCheck: undefined;
  MainPage: undefined;
  Guideline: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SocialPage">
        <Stack.Screen
          name="SocialPage"
          component={SocialLoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupPage"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyData"
          component={MyData}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Point"
          component={Point}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ranking"
          component={Ranking}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NegativeCheck"
          component={NegativeCheck}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Guideline"
          component={Guideline}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
