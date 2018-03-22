import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { clear, add, changeDescription, search } from './todoActions'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

class TodoForm extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.search()
  }

  render() {
    const { clear, add, search, description } = this.props
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id='description' className='form-control'
            placeholder='Add a task'
            onChange={this.props.changeDescription}
            value={this.props.description}></input> 
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus'
            onClick={() => add(description)}></IconButton>
          <IconButton style='info' icon='search'
            onClick={() => search()}></IconButton>
          <IconButton style='default' icon='close'
            onClick={() => clear()}></IconButton>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
  bindActionCreators({ clear, add, changeDescription, search}, dispatch)
export default connect (mapStateToProps, mapDispatchToProps)(TodoForm)