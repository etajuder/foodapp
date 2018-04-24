import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  text: {
    color: Colors.snow,
    fontSize: 25,
    textAlign: 'center',
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
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
    width: '100%',
    height: Metrics.images.logo * 1.5,
    padding: Metrics.smallMargin,
  },
  categoryInner: {
    flex: 1,
  },
  price: {
    position: 'absolute',
    left: 0,
    bottom: 50,
    paddingBottom: Metrics.smallMargin,
    paddingTop: Metrics.smallMargin,
    paddingRight: Metrics.baseMargin,
    paddingLeft: Metrics.baseMargin * 2,
    backgroundColor: 'red',
  },
  priceText: {
    color: Colors.snow,
    fontSize: 20
  },
  icon: {
    fontSize: 25,
    color: Colors.snow,
    position: 'absolute',
    top: 15,
    right: 10,
    backgroundColor: 'transparent',
  },

  cart: {
    backgroundColor: Colors.fire,
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  cartIcon: {
    textAlign: 'center',
    fontSize: 30,
    color: Colors.snow
  },
  tab: {
    flexDirection: 'row',
    // backgroundColor: 'blue'
  },
  tabList: {
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin,
    paddingLeft: Metrics.baseMargin,
    borderBottomWidth: 4,
    borderBottomColor: Colors.fire
  },
  tabListText: {
    fontSize: 22,
    color: Colors.snow,
  }
})
