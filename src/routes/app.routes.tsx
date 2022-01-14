import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import HeaderTitle from '../components/HeaderTitle';

type AppStackParamList = {
  Home: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppRoutes: FC = () => (
  <AppStack.Navigator
    
  >
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{
       headerTitle: () => <HeaderTitle text="keycash" hasIcon />,
      }}
    />
  
  </AppStack.Navigator>
);

export default AppRoutes;
