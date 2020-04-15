import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './home';
import Appointment from './appointment';

const screens= {
    Home: {
        screen: Home
    },
    Appointment: {
        screen: Appointment
    }
}

const HomeRoute = createStackNavigator(screens);

export default createAppContainer(HomeRoute);