import xs from 'xstream'
import { div, input, p } from '@cycle/dom'
import intent from  './intent'
import model from  './model'
import view from  './view'
import './index.less'

const App = sources => {

  const actions$ = intent(sources)
  const state$ = model(sources.props, actions$)
  const vdom$ = view(state$)
  
  return {
    DOM: vdom$,
    // HTTP: getRandomUser$
  }

}

module.exports = {
  App
}