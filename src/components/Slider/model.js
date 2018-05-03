import xs from 'xstream'
import { model } from '@utils'
import { main as mainType } from '@common/type.js'

const makeReducer$ = action$ => xs.merge(

  //slider
  action$
    .filter(action => action.type === mainType.SLIDER)
    .map(action => data => ({
      ...data,
      slider: action.v
    }))
)

module.exports = model(makeReducer$)
