import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from './Styles/HeaderStyles'

 class Header extends Component {
  constructor(props) {
    super(props)
  }
  render () {

    const { icon, headerText, routeAction } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconBar} onPress={() => routeAction('OrderPage', { name: 'seun'})}>
          <FontAwesome name="arrow-left" style={styles.icon}/>
        </TouchableOpacity>

        <View>
          <Text style={styles.headerText}>{headerText}</Text>
        </View>

        <View style={styles.iconBar}>
          <FontAwesome name={icon} style={styles.icon}/>
        </View>
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(Header)
