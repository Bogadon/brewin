import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import { setName } from './brew-actions'

class Brew extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <input
         type="text"
         />
         <button onClick={this.props.setName}>Rat?</button>
      </div>
    )
  }
}

Brew.propTypes = {
  name: PropTypes.string
}

const mapStateToProps = state => {
  return {
    name: state.brew.name
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      setName
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Brew)
