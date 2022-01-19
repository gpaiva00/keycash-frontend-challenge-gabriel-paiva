import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import HeaderTitle from '../components/HeaderTitle'
import PropertyDetails from '../pages/PropertyDetails'
import { Property } from '../typings/IProperty'
import colors from '../styles/colors'

type AppStackParamList = {
  Home: undefined
  PropertyDetails: {
    property: Property
  }
}

const AppStack = createNativeStackNavigator<AppStackParamList>()

const AppRoutes: FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <HeaderTitle text="keycash" hasIcon />,
      }}
    />

    <AppStack.Screen
      name="PropertyDetails"
      component={PropertyDetails}
      options={{
        headerTitle: () => <HeaderTitle text="Detalhes do imóvel" />,
        headerBackTitleVisible: false,
        headerTintColor: colors.primary,
      }}
    />
  </AppStack.Navigator>
)

export default AppRoutes
