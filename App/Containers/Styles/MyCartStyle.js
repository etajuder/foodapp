import {Platform, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow
  },
  textHead: {
    color: Colors.fire,
    fontSize: 15,
    textAlign: 'center',
    margin: Metrics.smallMargin
  },
  orderWrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 120,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 100
  },

  orderName: {
    fontWeight: 'bold',
    fontSize: 30
  },
  price: {
    fontSize: 20
  },
  icon: {
    fontSize: 25,
    color: Colors.steel
  },
  priceQty: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: Metrics.baseMargin,
  },
  fontIcon: {
    marginTop: Metrics.baseMargin,
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between'
  },
  image: {
    flex: 1,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin

  },
  orderSide: {
    flex: 3,
    paddingLeft: Metrics.baseMargin * 1.5
  },
  footer: {
    height: 80,
    backgroundColor: Colors.mud,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Metrics.baseMargin
  },
  checkout: {
    height: 45,
    backgroundColor: Colors.fire,

  },
  checkoutText: {
    textAlign: 'center',
    color: Colors.snow,
    fontSize: 20,
    padding: Metrics.baseMargin
  },
  totalPrice: {
    color: Colors.snow,
    fontSize: Platform.OS === 'android' ? 25 : 20,
    marginTop: Metrics.smallMargin
  }
})
