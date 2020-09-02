import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../screens/Homepage';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const HomepageNavigator = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen(props) {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomepageScreen" component={Homepage} options={{
                title: '',
                headerStyle: {
                    backgroundColor: 'grey'
                },
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.dispatch(DrawerActions.openDrawer())
                        }}>
                        <Icon
                            name="bars"
                            color='black'
                            size={30}
                            style={{
                                marginLeft: 15
                            }}
                        />
                    </TouchableOpacity>
                )
            }} />
        </HomeStack.Navigator>
    );
}

export default function AppNavigation() {
    return (
        <HomepageNavigator.Navigator>
            <HomepageNavigator.Screen name="Homepage" component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }} />
            <HomepageNavigator.Screen name="Screen1" component={Screen1}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="mobile" color={color} size={size} />
                    ),
                }} />
            <HomepageNavigator.Screen name="Screen2" component={Screen2}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="mobile" color={color} size={size} />
                    ),
                }} />
            <HomepageNavigator.Screen name="Screen3" component={Screen3}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="mobile" color={color} size={size} />
                    ),
                }} />
        </HomepageNavigator.Navigator>
    );
}
