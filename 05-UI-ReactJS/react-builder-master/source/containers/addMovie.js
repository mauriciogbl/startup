import React from 'react'
import Add from '../components/add'
import * as AllActions from '../actions/actions'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { PropTypes} from 'react'

const AddMovie = React.createClass ({

  propTypes: {
    actions: PropTypes.object.isRequired
  },

  render: function () {
    return (
      <div>
        <Add {...this.getAddProps()} />
      </div>
    )
  },

  getAddProps() {
    return {
      actions: this.props.actions,
      index: this.props.params.idxMovie,
      movies: this.props.moviesState
    }
  }
})

const mapStateToProps = state => ({
  moviesState: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AllActions, dispatch)
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(AddMovie)
