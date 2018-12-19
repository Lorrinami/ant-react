import { combineReducers } from 'redux'
import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from '../action/action';

const { SHOW_ALL } = VisibilityFilters

// const initialState = {
//     visibilityFilter: VisibilityFilters.SHOW_ALL,
//     todos: []
// }

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp

// function todoApp(state = initialState, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return Object.assign({}, state, {
//                 visibilityFilter: action.filter
//             })
//         case ADD_TODO:
//             // return Object.assign({}, state, {
//             //     todos: [
//             //         ...state.todos,
//             //         {
//             //             text: action.text,
//             //             completed: false
//             //         }
//             //     ]
//             // })
//             //优化为
//             return Object.assign({}, sate, {
//                 todos: todos(state.todos, action)
//             })
//         case TOGGLE_TODO:
//             // return Object.assign({},state,{
//             //     todos:state.todos.map((todo,index) => {
//             //         if(index === action.index){
//             //             return Object.assign({},todo,{
//             //                 completed: !todo.completed
//             //             })
//             //         }
//             //         return todo
//             //     })
//             // })
//             todos: todos(state.todos, action)
//         default:
//             return state
//     }
// }