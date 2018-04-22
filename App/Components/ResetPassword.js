import React, { Component } from 'react'
import { Text, Image, View, Modal, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import RoundedButton from '../Components/RoundedButton';
import { Images } from '../Themes'

import styles from '../Components/Styles/ModalStyles'

export default class Resetpassword extends Component {

  render () {
    const { showModal, toggleModal, } = this.props;
    return (
      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={toggleModal}
        presentationStyle="fullScreen"
      >
        <View style={styles.modalView}>
          <View>
          <TouchableOpacity onPress={toggleModal}  style={styles.closeModal}>
            <Image source={Images.closeButton} />
          </TouchableOpacity>
          <View>
            <Text style={styles.resetText}>Reset your password</Text>
          </View>
          <View style={styles.inputBar}>
              <View style={styles.inputIcon}>
                <FontAwesome name="envelope" size={20} color="#fff" />
              </View>
              <TextInput
                placeholder="Email"
                placeholderTextColor="white"
                style={styles.inputField}
                keyboardType="email-address"
              />
          </View>

          <RoundedButton onPress={() => window.alert('Email has been sent')}>
            Reset Password
          </RoundedButton>
          </View>
        </View>
      </Modal>

    );
  }
}