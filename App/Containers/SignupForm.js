import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import RoundedButton from '../Components/RoundedButton';

import styles from './Styles/LaunchScreenStyles'

export default class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      phoneNo: '',
      password: ''
    }
  }

  handleTextChange = (text) => {
    this.setState({ username: text })
  }
  render () {
    return (
      <View>
        <View style={styles.inputBar}>
          <View style={styles.inputIcon}>
            <FontAwesome name="user" size={25} color="#fff" />
          </View>
          <TextInput
            placeholder="Username"
            placeholderTextColor="white"
            style={styles.inputField}
            onChangeText={this.handleTextChange}
            value={this.state.username}
          />
        </View>

        <View style={styles.inputBar}>
          <View style={styles.inputIcon}>
            <FontAwesome name="envelope" size={20} color="#fff" />
          </View>
          <TextInput
          placeholder="Email Address"
          placeholderTextColor="white"
          style={styles.inputField}
        />
        </View>

        <View style={styles.inputBar}>
          <View style={styles.inputIcon}>
            <FontAwesome name="phone" size={25} color="#fff" />
          </View>
          <TextInput
          placeholder="Phone Number"
          placeholderTextColor="white"
          style={styles.inputField}
        />
        </View>

        <View style={styles.inputBar}>
          <View style={styles.inputIcon}>
            <FontAwesome name="lock" size={25} color="#fff" />
          </View>
          <TextInput
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
          style={styles.inputField}
        />
        </View>

        <RoundedButton onPress={() => window.alert(this.state.username)}>
          Register
        </RoundedButton>
      </View>
    );
  }
}