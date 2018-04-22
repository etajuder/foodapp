import React, { Component } from 'react'
import { Text, Image, View, Modal, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SignupForm from '../Containers/SignupForm'
import { Images } from '../Themes'

import styles from '../Components/Styles/ModalStyles'

export default class ModalScreen extends Component {

  render () {
    const { showModal, toggleModal, } = this.props;
    return (
      <Modal
          animationType="slide"
          visible={showModal}
          onRequestClose={toggleModal}
          presentationStyle="fullScreen" >
            <View style={styles.modalView}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeModal}>
              <Image source={Images.closeButton} />
            </TouchableOpacity>
              <View>
                <Text style={styles.resetText}>Register</Text>
              </View>
              <SignupForm />
            </View>
         </Modal>

    );
  }
}