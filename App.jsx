import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/Navigation/StackNavigation'
import { PaperProvider } from 'react-native-paper'

const App = () => {

    return (
        <NavigationContainer>
        <PaperProvider>
            <StackNavigation />
        </PaperProvider>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})