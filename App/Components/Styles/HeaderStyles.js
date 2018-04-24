import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.transparent,
    height: 70
  },
  headerText: {
    color: Colors.snow,
    fontSize: 30,
    fontWeight: 'bold',
    padding: Metrics.baseMargin
  },

  icon: {
    color: Colors.snow,
    fontSize: 30,
    padding: Metrics.baseMargin
  },
  iconBar: {
    padding: Metrics.baseMargin
  }
})