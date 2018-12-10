
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStackNavigator, createAppContainer, addNavigationHelpers } from 'react-navigation'

import Feed from './Feed'


export const Navigator = new createStackNavigator({
  Feed: { screen: Feed }
},{
  initialRouteName: 'Feed',
})

class Nav extends Component {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      })} />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default createAppContainer(connect(mapStateToProps)(Nav))
