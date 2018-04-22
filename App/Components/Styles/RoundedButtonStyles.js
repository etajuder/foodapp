import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 3,
    marginHorizontal: Metrics.midSection,
    marginBottom: Metrics.baseMargin,
    backgroundColor: Colors.fire,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: Fonts.size.regular,
    marginVertical: Metrics.baseMargin
  }
})
