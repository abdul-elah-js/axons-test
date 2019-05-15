import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Layouts
import Home from '@layouts/home';
import Login from '@layouts/login';

const Router = props => {

  const StackNavigator = createStackNavigator(
    {
      Home: Home,
      Login: Login
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        header: null
      })
    }
  )

  const AppContainer = createAppContainer(StackNavigator);

  return <AppContainer />

}

export default Router;
