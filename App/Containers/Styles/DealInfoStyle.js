import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow
  },
  imgWrapper: {
    // width: '100%',
  },
  img: {
    height: '50%',
    // resizeMode: 'contain'
  },
  iconList: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: Colors.fire
  },
  icon: {
    color: Colors.snow,
    fontSize: 27,
    padding: Metrics.baseMargin
  },
  textWrapper: {
    marginBottom: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
  },
  text: {
    fontSize: 30,
    color: Colors.transparent,
    marginLeft: Metrics.baseMargin * 2,
    fontWeight: 'bold'
  },
  orderList: {
    color: Colors.transparent,
    marginLeft: Metrics.baseMargin * 2,
    fontSize: 25,
  },
  price: {
    padding: Metrics.baseMargin,
    color: Colors.snow,
    fontSize: 25,
    textAlign: 'center'
  },
  priceWrapper: {
    backgroundColor: Colors.transparent,
    width: 100,
    marginLeft: Metrics.baseMargin * 2,
    marginTop: Metrics.baseMargin * 2
  }
})
