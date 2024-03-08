import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginPage from '../screens/LoginPage.tsx';
import Signup from '../screens/Signup.tsx';

export type RootStackParamList = {
  LoginPage: undefined;
  SignupPage: undefined;
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignupPage"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      {/* <Stack.Navigator>
                <Stack.Screen name="Signup" component={Signup} options={{
                    headerShown : false
                }}/>
            </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
