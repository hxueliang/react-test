import React, { Component } from 'react'
import List from './list'
import Input from './input'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  render() {
    return (
      <div>
        <Input addTitle={this.addTitle.bind(this)} />
        <List data={this.state.list} />
      </div>
    )
  }
  addTitle(title) {
    const currentList = this.state.list
    this.setState({
      list: currentList.concat(title)
    })
  }
}

export default Todo