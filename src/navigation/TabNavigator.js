import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardDetailsScreen from '../screens/CardDetailsScreen';
import YoloPayScreen from '../screens/YoloPayScreen';
import GinieScreen from '../screens/GinieScreen';
import BottomNav from '../components/BottomNav';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNav {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={CardDetailsScreen} />
      <Tab.Screen name="YoloPay" component={YoloPayScreen} />
      <Tab.Screen name="Ginie" component={GinieScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator; 