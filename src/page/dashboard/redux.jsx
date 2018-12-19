import React from 'react'
import { createStore } from 'redux'
import todoApp from '../../redux/reducer/reducers'
// import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../../redux/action/action'

// const store = createStore(todoApp)
import { Provider } from 'react-redux'
import TodoApp from '../../components/TodoApp'

const store = createStore(todoApp)

export default class ReduxPage extends React.Component {
    render() {
        // console.log(store.getState())
        // const unsubscribe = store.subscribe(() => console.log(store.getState()))

        // // Dispatch some actions
        // store.dispatch(addTodo('Learn about actions'))
        // store.dispatch(addTodo('Learn about reducers'))
        // store.dispatch(addTodo('Learn about store'))
        // store.dispatch(toggleTodo(0))
        // store.dispatch(toggleTodo(1))
        // store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

        // // Stop listening to state updates
        // unsubscribe()
        
        return  <Provider store={store}> <TodoApp /></Provider>
    }
}