import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/action/action'

// AddTodo的数据传递，点击添加时分发addTodo的action来修改state
let AddTodo = ({ onClick }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          onClick(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {//处理各种事件
  return {
    onClick: value => {
      dispatch(addTodo(value))
    }
  }
}

AddTodo = connect(()=>{},mapDispatchToProps)(AddTodo)

export default AddTodo