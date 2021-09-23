
import React from 'react';
import {View,Platform,StatusBar,Text} from 'react-native';
import colors from './app/config/colors';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';



import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppButton from './app/components/AppButton';

export default function App() {

  return (
    <ViewImageScreen></ViewImageScreen>


  );
}

