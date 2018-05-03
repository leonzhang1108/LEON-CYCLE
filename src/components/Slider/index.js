import xs from 'xstream'
import intent from './intent'
import model from './model'
import view from './view'
import './index.less'

const Slider = sources => {

  const actions$ = intent(sources)
  const state$ = model(sources.props, actions$)
  const vdom$ = view(state$)
  
  return {
    DOM: vdom$,
    state$,
    actions$
  }
}

module.exports = Slider