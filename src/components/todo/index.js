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
        <List data={[1, 2, 3]} />
        <List data={['a', 'b', 'c']} />
      </div>
      /**
       *  =>
       * React.createElement(
       *  "div",
       *  null,
       *  React.createElement(Input, { addTitle: this.addTitle.bind(this) }),
       *  React.createElement(List, { data: this.state.list }),
       *  React.createElement(List, { data: [1, 2, 3] }),
       *  React.createElement(List, { data: ['a', 'b', 'c'] })
       * )
       * 
       * React.createElement(List, { data: this.state.list })
       *  =>
       * var list = new List({ data: this.state.list })
       * var vnode = list.render()
       */
    )
  }
  addTitle(title) {
    const currentList = this.state.list
    // patch(vndoe, newVnode)
    this.setState({
      list: currentList.concat(title)
    })
  }
}

export default Todo