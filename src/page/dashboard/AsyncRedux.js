import React from 'react'
import thunkMiddlewate from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createStore,applyMiddleware} from 'redux'
import {selectSubreddit, fetchPosts} from '../../redux/action/AsyncAction'
import rootReducer from '../../redux/reducer/AsyncReducers'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddlewate,
        loggerMiddleware
    )
)

export default class AsyncReduxPage extends React.Component {
    render(){
        store.dispatch(selectSubreddit('reactjs'))
        store.dispatch(fetchPosts('reactjs')).then(() => console.log(store.getState()))
        return <h1>AsyncRedux Page</h1>
    }
}