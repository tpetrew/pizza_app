import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../../screens/MainScreen';

const Stack = createStackNavigator();

const LoggedNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home" component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default LoggedNavigation;