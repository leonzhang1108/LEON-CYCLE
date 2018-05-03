import xs from 'xstream'
import intent from './intent'
import model from './model'
import view from './view'
import './index.less'

const Slider = sources => {

  const ramdom = (new Date().getTime() + Math.random()) * 10000

  const actions$ = intent(sources, ramdom)
  const state$ = model(sources.props, actions$)
  const vdom$ = view(state$, ramdom)
  
  return {
    DOM: vdom$,
    state$,
    actions$
  }
}

module.exports = Slider