import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  modalView: {
    backgroundColor: '#262526',
    flex: 1,
    justifyContent: 'center',

  },

  closeModal: {
    marginBottom: 30,
    marginRight: 30,
    flexDirection: 'row-reverse',
    paddingHorizontal: 10,
    zIndex: 10
  },

  resetText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    marginBottom: 15
  },

  // inputSection: {
  //   padding: 25
  // },

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
