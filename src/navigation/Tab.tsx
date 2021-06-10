import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AddTodo} from '../screens/AddTodo';
import {PeindingTodo} from '../screens/PendingTodo';
import {TodoDone} from '../screens/TodoDone';

const Tab = createMaterialBottomTabNavigator();

export const BottomTab = () => (
  <Tab.Navigator
    sceneAnimationEnabled={true}
    barStyle={{
      backgroundColor: '#2196f3',
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({color, focused}) => {
        let iconName: string = '';
        switch (route.name) {
          case 'AddTodo':
            iconName = 'add';
            break;
          case 'PendingTodo':
            iconName = 'pending-actions';
            break;
          case 'TodoDone':
            iconName = 'done-outline';
            break;
        }

        return <Icon name={iconName} size={20} color={color} />;
      },
    })}>
    <Tab.Screen name="AddTodo" component={AddTodo} />
    <Tab.Screen name="PendingTodo" component={PeindingTodo} />
    <Tab.Screen name="TodoDone" component={TodoDone} />
  </Tab.Navigator>
);
