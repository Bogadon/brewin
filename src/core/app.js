import React, { Component } from 'react'
import { connect } from 'react-redux'

import Brew from '../brew/brew'

class App extends Component {
  render () {
    return (
      <Brew />
    )
  }
}

export default connect(state => state)(App)
