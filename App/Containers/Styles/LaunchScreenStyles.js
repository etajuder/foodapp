import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },

  loginImg: {
    alignItems: 'center',
    flex: 1.3
  },

  inputSection: {
    // padding: 25
  },

  inputField: {
    height: 50,
    backgroundColor: '#404040',
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 20,
    color: 'white',
    width: 320
  },

  inputBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  inputIcon: {
    height: 50,
    width: 30,
    alignItems: 'center',
    paddingTop: 12,
    backgroundColor: '#404040',
    paddingLeft: 10
  }
})
