import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../LoginComponents/SignIn';
import Login from '../LoginComponents/Login';
import DrawerNavigation from './DrawerNavigation';
import MapView from '../HomeScreenComponents/MapView';
import ForgotPass from '../LoginComponents/ForgotPass';

const StackNavigation = () => {
    const Stack = createStackNavigator();
  return (
    
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
                <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
                <Stack.Screen name='ForgotPassword' component={ForgotPass} options={{headerShown:false}}/>
                <Stack.Screen name="HomePage" component={DrawerNavigation} options={{headerShown:false}}/>
                <Stack.Screen name="MapView" component={MapView} options={{headerShown:false}}/>
            </Stack.Navigator>
       
  )
}

export const MapViewOnly = () => {
  const Stack = createStackNavigator();
return (
  
          <Stack.Navigator initialRouteName='MapView'>
              <Stack.Screen name="MapView" component={MapView} options={{headerShown:false}}/>
          </Stack.Navigator>
     
)
}


export default StackNavigation

const styles = StyleSheet.create({})