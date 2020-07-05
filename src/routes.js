import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Home from './pages/Home';
import Newsletter from './pages/Newsletter';
import Ebooks from './pages/Ebooks';
import ForgotPassowrd from './pages/ForgotPassword';
import ForgotPassowrd2 from './pages/ForgotPassword2';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Newsletter" component={Newsletter}/>
                <AppStack.Screen name="Ebooks" component={Ebooks}/>
                <AppStack.Screen name="ForgotPassword" component={ForgotPassowrd}/>
                <AppStack.Screen name="ForgotPassword2" component={ForgotPassowrd2}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}