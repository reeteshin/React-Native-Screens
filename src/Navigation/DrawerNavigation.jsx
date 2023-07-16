import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBottomStack from './AppBottomStack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Login from '../LoginComponents/Login'
import CustomDrawer from '../HomeScreenComponents/CustomDrawer'

const DrawerNavigation = () => {
    const DrawerStack = createDrawerNavigator()
    return (
        <DrawerStack.Navigator
            screenOptions={{
                
                drawerStyle: { width: Dimensions.get('window').width / 1.20, },
            }}
            drawerContent={(props) => <CustomDrawer {...props} />} >
            <DrawerStack.Screen name='AppBottomStack' component={AppBottomStack} options={{headerShown:false}} />

        </DrawerStack.Navigator>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})