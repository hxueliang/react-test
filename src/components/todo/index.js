import React, { Component } from 'react'
import List from './list'
import Input from './input'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['A', 'B']
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
    console.log(this.state.list) // ['A', 'B']
    // patch(vndoe, newVnode)
    this.setState({
      list: currentList.concat(title) // 'c'
    })
    console.log(this.state.list) // ['A', 'B'] // 因为setState是异步的，所以结果不是 ['A', 'B', 'C'] 
  }
}

export default Todo