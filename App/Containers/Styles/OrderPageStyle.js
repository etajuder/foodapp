import {Platform, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 35 : 5,
  },
  barIcon: {
    marginTop: Metrics.baseMargin * 1.5,
    marginLeft: Metrics.baseMargin * 2,
    fontSize: 25,
    color: Colors.snow
  },

  text: {
    color: Colors.snow,
    fontSize: 25,
    textAlign: 'center',
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
  },
  img: {
    height: 170,
    backgroundColor: Colors.eggplant
  },
  hotDeals: {
    backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,
    paddingTop: Metrics.smallMargin,
    paddingBottom: Metrics.smallMargin
  },
  icon: {
    marginRight: Metrics.baseMargin * 2,
    fontSize: 25,
    color: Colors.snow
  },
  hotText: {
    color: Colors.snow,
    fontSize: 25,
    marginLeft: Metrics.smallMargin
  },
  cateBtn: {
    backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Metrics.smallMargin,
    paddingBottom: Metrics.smallMargin,
    position: 'absolute',
    bottom: 0,
    opacity: 0.8,
    width: '100%',
  },
  categoryText: {
    color: Colors.snow,
    fontSize: 25,
    marginLeft: Metrics.smallMargin,
    zIndex: 999
  },
  category: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: Metrics.smallMargin
  },
  categoryWrapper: {
    width: '50%',
    height: Metrics.images.logo,
    padding: Metrics.smallMargin,
  },
  categoryInner: {
    flex: 1,
  }
})
