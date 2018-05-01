import React, { Component } from 'react'
import { ScrollView, Text, View, Image, List, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Header from '../Components/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Images } from '../Themes'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MyCartStyle'

class MyCart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      orderList: [
        {
          name: 'Grilled Chicken',
          price: '$67.9',
          quantity: 2
        },
        {
          name: 'Krispy Sandwich',
          price: '$47.9',
          quantity: 2
        },
        {
          name: 'Grilled Chicken',
          price: '$37.9',
          quantity: 2
        },
        {
          name: 'Grilled Chicken',
          price: '$68.9',
          quantity: 2
        },
        {
          name: 'Grilled Chicken',
          price: '$67.9',
          quantity: 2
        },
        {
          name: 'Krispy Sandwich',
          price: '$47.9',
          quantity: 2
        },
        {
          name: 'Grilled Chicken',
          price: '$37.9',
          quantity: 2
        },
        {
          name: 'Grilled Chicken',
          price: '$68.9',
          quantity: 2
        }
      ]
    }

    this.routeAction = this.routeAction.bind(this)
  }

  routeAction(route, params) {
    this.props.navigation.navigate(route, params);
  }

  render () {
    const itemQty = this.state.orderList.length
    const orders = this.state.orderList.map((order) => (
      <View style={styles.orderWrapper}>
        <View style={styles.image}>
          <Image source={Images.launch} style={styles.logo} />
        </View>
        <View style={styles.orderSide}>
          <Text style={styles.orderName}>{order.name}</Text>
          <View style={styles.priceQty}>
            <Text style={styles.price}>Quantity: {order.quantity}</Text>
            <Text style={styles.price}>Total: {order.price}</Text>
          </View>
          <View style={styles.fontIcon}>
            <TouchableOpacity onPress={() => window.alert('Delete order')}><FontAwesome name="trash" style={styles.icon}/></TouchableOpacity>
            <TouchableOpacity onPress={() => window.alert('Edit order')}><FontAwesome name="pencil" style={styles.icon}/></TouchableOpacity>
          </View>
        </View>
      </View>
    ))
    return (
      <View style={styles.container}>
        <Header routeAction={this.routeAction} headerText="MY CART" icon="spoon" />
        <Text style={styles.textHead} >YOU HAVE {itemQty} ITEMS IN YOUR CART</Text>
        <ScrollView>
          {orders}
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.totalPrice}>Total Order: $30.4</Text>
          <TouchableOpacity style={styles.checkout}>
            <Text style={styles.checkoutText}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)
