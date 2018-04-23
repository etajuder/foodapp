import React, { Component } from 'react'
import { ScrollView, Text, ImageBackground, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import shortid from 'shortid'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import { Images } from '../Themes'

// Styles
import styles from './Styles/OrderPageStyle'

class OrderPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: ['Sandwich', 'Burgers', 'Pizza', 'Salad','Sandwich', 'Burgers', 'Pizza', 'Salad']
    }
  }

  render () {
    const categories = this.state.categories.map((category) =>
      <View style={styles.categoryWrapper} key={shortid.generate()}>
        <ImageBackground source={Images.whopper} style={styles.categoryInner} >
          <TouchableOpacity style={styles.cateBtn}>
            <Text style={styles.categoryText}>{category}</Text>
            <FontAwesome name="angle-right" style={styles.icon}/>
          </TouchableOpacity>
          </ImageBackground>
      </View>
    );
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>START YOUR ORDER</Text>
        <View style={styles.img}></View>
        <TouchableOpacity style={styles.hotDeals}>
          <Text style={styles.hotText}>Hot Deals</Text>
          <FontAwesome name="angle-right" style={styles.icon}/>
        </TouchableOpacity>
        <View style={styles.category}>
          {categories}
        </View>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)
