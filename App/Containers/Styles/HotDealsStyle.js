import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.snow
  },
  wrapper: {
    marginTop: Metrics.baseMargin * 1.3,
  },
  takeaway: {
    backgroundColor: 'black',
    height: 50,
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,
  },
  takeawayText: {
    color: Colors.snow,
    textAlign: 'center',
    fontSize: 20,
    padding: Metrics.baseMargin
  },
  cateBtn: {
    backgroundColor: Colors.fire,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Metrics.smallMargin,
    paddingBottom: Metrics.smallMargin,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  categoryText: {
    color: Colors.snow,
    fontSize: 15,
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
