import React from 'react'
import List from '../components/list'
import * as AllActions from '../actions/actions'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { PropTypes} from 'react'

const listMovies = ({moviesState, actions}) => (
  <div>
    <List actions={actions} movies={moviesState} />
  </div>
)

listMovies.propTypes = {
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
)(listMovies)
