import React from 'react'
import Add from '../components/add'
import List from '../components/list'
import Application from '../components/application'
import * as AllActions from '../actions/actions'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { PropTypes} from 'react'

const App = ({moviesState, actions}) => (
  <div>
    <Application actions={actions} movies={moviesState} />
  </div>
)

App.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  moviesState: state
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App)
