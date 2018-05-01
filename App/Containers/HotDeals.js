import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import shortid from 'shortid'
import { connect } from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Header from '../Components/Header'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/HotDealsStyle'

class HotDeals extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hotDeals: ['Deal 1: FOR 1 PERSON','Deal 1: FOR 2 PERSONS','Deal 2: FOR 1 PERSON','Deal 2: FOR 2 PERSONS','Deal 1: FOR 1 PERSON']
    }
    this.routeAction = this.routeAction.bind(this);
  }

  routeAction(route, params) {
    this.props.navigation.navigate(route, params);
  }

  render () {
    const { navigate } = this.props.navigation;
    const deals = this.state.hotDeals.map((deal) =>
      <View style={styles.categoryWrapper} key={shortid.generate()}>
        <ImageBackground source={Images.whopper} style={styles.categoryInner} >
          <TouchableOpacity style={styles.cateBtn} onPress={() => navigate('DealInfo', { name: 'seun'})}>
            <Text style={styles.categoryText}>{deal}</Text>
          </TouchableOpacity>
          </ImageBackground>
      </View>
    );
    return (
      <View style={styles.container}>
        <Header routeAction={this.routeAction} headerText="HOT DEALS" icon="shopping-cart" />
        <ScrollView style={styles.wrapper}>
        <View style={styles.takeaway}>
          <Text style={styles.takeawayText}>DELIVERY AND TAKEAWAY ONLY</Text>
        </View>
        <View style={styles.category}>
          {deals}
        </View>

      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(HotDeals)
