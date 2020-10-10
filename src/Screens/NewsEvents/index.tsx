import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import  NewsEvents from "./NewsEvents";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewsEventsEvents from './NewsEventsEvents';
import NewsEventsUpcoming from './NewsEventsUpcoming';
import {useTheme} from '../../components';




const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const NewsEventsTab = () => {
    const theme = useTheme();
    return (
        <TopTab.Navigator   tabBarOptions={{
            activeTintColor: theme.colors.primaryText,
            inactiveTintColor: theme.colors.grey,
            indicatorStyle: {
              backgroundColor: theme.colors.mainIconColor,
            },
          }}>
            <TopTab.Screen options={{tabBarLabel:'News'}} name="newsEventNews" component={NewsEvents}/>
            <TopTab.Screen options={{tabBarLabel:'Events'}} name="newsEventEvent" component={NewsEventsEvents}/>
            <TopTab.Screen options={{tabBarLabel:'Upcoming'}} name="newsEventUpcoming" component={NewsEventsUpcoming}/>
        </TopTab.Navigator>
    )
}


const NewsAndEventsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="NewsEvent" component={NewsEventsTab} />
        </Stack.Navigator>
    )
}

export default NewsAndEventsStack;