import React from 'react'
import AppLoading from 'expo-app-loading'

import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_300Light,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes/'

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_300Light,
    Roboto_700Bold,
    Roboto_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Routes />
      </NavigationContainer>
    )
  }
}
