import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Tasks from 'react-native-vector-icons/FontAwesome'
import MyTask from '../HomeScreenComponents/MyTask';
import MyTeam from '../HomeScreenComponents/MyTeam';
import MySpace from '../HomeScreenComponents/MySpace';
import Home from '../HomeScreenComponents/Home';
import Color from '../Common/Color';
import MapView from '../HomeScreenComponents/MapView';

const AppBottomStack = () => {
    const BottomStack = createMaterialBottomTabNavigator();
    return (
        <BottomStack.Navigator>
            <BottomStack.Screen
                name='Home'
                component={Home}
                options={{
                    
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="home" size={20} color={"gray"} />;
                    },
                }}
            />
           <BottomStack.Screen
                name='MySpace'
                component={MySpace}
                options={{
                    tabBarLabel: 'My Space',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="account-tie" size={20} ccolor={"gray"} />;
                    },
                }}
            />
            <BottomStack.Screen
                name='My Team'
                component={MyTeam}
                options={{
                    tabBarLabel: 'My Team',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="microsoft-teams" size={20} color={"gray"} />;
                    },
                }}
            />
            <BottomStack.Screen
                name='MyTask'
                component={MyTask}
                options={{
                    tabBarLabel: 'My Task',
                    tabBarIcon: ({ color, size }) => {
                        return <Tasks name="tasks" size={20} color={"gray"} />;
                    },
                }}
            />
            
        </BottomStack.Navigator>
    )
}





export default AppBottomStack

const styles = StyleSheet.create({})
