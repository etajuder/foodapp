import React, { Component } from 'react'
import { ScrollView, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import shortid from 'shortid'
import { Images } from '../Themes'
import Header from '../Components/Header'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/OrderListStyle'

class OrderList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: ['Sandwich', 'Burgers', 'Pizza', 'Salad','Sandwich', 'Burgers', 'Pizza', 'Salad'],
      categoriesList: [
        {
          name: 'Grilled Chicken',
          price: '$67.9'
        },
        {
          name: 'Krispy Sandwich',
          price: '$47.9'
        },
        {
          name: 'Grilled Chicken',
          price: '$37.9'
        },
        {
          name: 'Grilled Chicken',
          price: '$68.9'
        }
      ]
    }
    this.routeAction = this.routeAction.bind(this)
  }

  routeAction(route, params) {
    this.props.navigation.navigate(route, params);
  }


  render () {
    const categories = this.state.categories.map((category) =>
      <View style={styles.tabList}>
        <Text style={styles.tabListText}>{category}</Text>
      </View>
  )
    const categoriesList = this.state.categoriesList.map((items) =>
      <View style={styles.categoryWrapper} key={shortid.generate()}>
        <ImageBackground source={Images.whopper} style={styles.categoryInner} >
        <FontAwesome name="heart" style={styles.icon}/>
          <View style={styles.price}>
            <Text style={styles.priceText}>{items.price}</Text>
          </View>
          <TouchableOpacity style={styles.cateBtn} onPress={() => window.alert({items})}>
            <Text style={styles.categoryText}>{items.name}</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
    return (
      <View style={styles.container}>
        <Header routeAction={this.routeAction} headerText="OUR MENU" icon="fire" />
        <ScrollView style={styles.tab} horizontal={true}>
         {categories}
        </ScrollView>
        <ScrollView>
          <View style={styles.category}>
            {categoriesList}
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.cart} onPress={() => this.props.navigation.navigate('MyCart')}>
          <FontAwesome name="shopping-cart" style={styles.cartIcon}/>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
