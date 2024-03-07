import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginPage from "../screens/LoginPage.tsx";
const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginPage">
                <Stack.Screen name="LoginPage" component={LoginPage} options={{
                    headerShown : false
                }}/>
            </Stack.Navigator>
            <Stack.Navigator>
                <Stack.Screen name="Signup" component={Signup} options={{
                    headerShown : false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
