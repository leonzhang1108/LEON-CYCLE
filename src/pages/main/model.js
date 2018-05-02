import xs from 'xstream'
import { model } from '../../utils'

const makeReducer$ = action$ => {
  let toggle$ = action$
    .filter(action => action.type === 'toggle')
    .mapTo(data => ({
      ...data,
      toggle: !data.toggle
    }))

  let count$ = action$
    .filter(action => action.type === 'count')
    .map(action => data => ({
      ...data,
      count: data.count + action.v
    }))

  return xs.merge(
    toggle$, count$
  )
}

module.exports = model(makeReducer$)
