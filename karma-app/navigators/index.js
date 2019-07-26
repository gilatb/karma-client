import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import AuthLoading from '../screens/AuthLoading';

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading,
    AuthNavigator, // route to login
    AppNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));

export default AppContainer;
