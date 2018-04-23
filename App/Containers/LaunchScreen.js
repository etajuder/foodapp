import React, { Component } from 'react'
import { Text, Image, View, Modal, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import LoginForm from './LoginForm'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ResetPassword from '../Components/ResetPassword'
import SignupModal from '../Components/SignupModal'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showSignup: false,
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal})
  }

  toggleSignupModal = () => {
    this.setState({ showSignup: !this.state.showSignup })
  }
  render () {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.mainContainer}>
        <View style={styles.loginImg}>
          <Image source={Images.launch} style={styles.logo} />
        </View>
          <View style={{flex: 1}}>
            <LoginForm />

            <View style={styles.passwordText}>
              <TouchableOpacity onPress={this.toggleModal}>
                <Text style={styles.text}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.toggleSignupModal}>
                <Text style={styles.text}>Create an Account</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ResetPassword showModal={this.state.showModal} toggleModal={this.toggleModal}/>
          <SignupModal showModal={this.state.showSignup} toggleModal={this.toggleSignupModal}/>
      </KeyboardAvoidingView>
    );
  }
}

