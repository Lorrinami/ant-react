import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/action/action'
import Link from '../components/link'

//典型的数据传递
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps,
//   mergeProps
// )(Link)


// const mergeProps = (stateProps, dispatchProps) => ({
//   ...stateProps,
//   ...dispatchProps,
//   onMessageSubmit: text =>
//     dispatchProps.dispatch(addMessage(text, stateProps.thread.id))
// });

// <TextFieldSubmit onSubmit={props.onMessageSubmit} /> 

export default FilterLink