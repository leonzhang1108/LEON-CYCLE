module.exports = {
  model: makeReducer$ => (props$, action$) => {
    let reducer$ = makeReducer$(action$)
    return props$.map(props => 
      reducer$.fold((data, reducer) => reducer(data), props)
    ).flatten().remember()
  }
}