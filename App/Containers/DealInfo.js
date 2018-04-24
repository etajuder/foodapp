import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import Header from '../Components/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/DealInfoStyle'

class DealInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.routeAction = this.routeAction.bind(this);
  }

  routeAction(route, params) {
    this.props.navigation.navigate(route, params);
  }

  render () {
    return (
      <View style={styles.container}>
        <Header routeAction={this.routeAction} headerText="HOT DEALS" icon="cart-plus"/>
         <View style={styles.imgWrapper}>
            <Image source={Images.whopper} style={styles.img} />
         </View>
          <View  style={styles.iconList}>
            <FontAwesome name="share-alt" style={styles.icon}/>
            <FontAwesome name="cart-plus" style={styles.icon}/>
            <FontAwesome name="heart" style={styles.icon}/>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>DEAL 2: FOR 1 PERSON</Text>
          </View>
          <View>
            <Text style={styles.orderList}>1 Chicken Pasta, 1 House Salad, 2 Burger (Medium), 2PCS Garlic Bread, 1 Cold Drinks</Text>
          </View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$14.5</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(DealInfo)
