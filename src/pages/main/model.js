import xs from 'xstream'
import { model } from '@utils'
import { main as mainType } from '@common/type.js'

const makeReducer$ = action$ => xs.merge(

  // toggle
  action$
    .filter(action => action.type === mainType.TOOGLE)
    .mapTo(data => ({
      ...data,
      toggle: !data.toggle
    })),
  
  // count
  action$
    .filter(action => action.type === mainType.COUNT)
    .map(action => data => ({
      ...data,
      count: data.count + action.v
    }))
)

module.exports = model(makeReducer$)
