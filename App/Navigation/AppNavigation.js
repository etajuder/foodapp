import { StackNavigator } from 'react-navigation'
import OrderPage from '../Containers/OrderPage'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  OrderPage: { screen: OrderPage },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'OrderPage',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
