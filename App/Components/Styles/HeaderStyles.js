import {Platform, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.transparent,
    height: 70,
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },
  headerText: {
    color: Colors.snow,
    fontSize: 30,
    fontWeight: 'bold',
    padding: Metrics.baseMargin,
    marginTop: Metrics.smallMargin
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