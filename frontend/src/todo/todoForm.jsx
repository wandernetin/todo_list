import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { changeDescription, search } from './todoActions'
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
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id='description' className='form-control'
            placeholder='Add a task'
            onChange={this.props.changeDescription}></input> 
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus'
            onClick={this.props.handleAdd}></IconButton>
          <IconButton style='info' icon='search'
            onClick={this.props.handleSearch}></IconButton>
          <IconButton style='default' icon='close'
            onClick={this.props.handleClear}></IconButton>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
  bindActionCreators({ changeDescription, search}, dispatch)
export default connect (mapStateToProps, mapDispatchToProps)(TodoForm)