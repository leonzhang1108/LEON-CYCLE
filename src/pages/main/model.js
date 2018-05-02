import xs from 'xstream'

const makeReducer$ = action$ => {
  let toggle$ = action$
    .filter(action => action.type === 'toggle')
    .mapTo(data => {
      return {
        ...data,
        toggle: !data.toggle
      }
    })

  let count$ = action$
    .filter(action => action.type === 'count')
    .map(action => data => {
      return {
        ...data,
        count: data.count + action.v
      }
    })

  return xs.merge(
    toggle$, count$
  )
  
}

const model = (props$, action$) => {
  
  // let sanitizedProps$ = props$.startWith({ toggle: true, count: 0 })
  let reducer$ = makeReducer$(action$)

  return props$.map(props => 
    reducer$.fold((data, reducer) => reducer(data), props)
  ).flatten().remember()

}

module.exports = model
