import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import RoundedButton from '../../App/Components/RoundedButton';

import styles from './Styles/LaunchScreenStyles'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
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
            onChangeText={(username) => this.setState({username})}
            value={this.state.login}
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
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        </View>

        <RoundedButton onPress={() => window.alert(this.state.username, this.state.password)}>
          Login
        </RoundedButton>
      </View>
    );
  }
}
