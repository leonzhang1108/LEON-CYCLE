import xs from 'xstream'
import intent from './intent'
import model from './model'
import view from './view'
import './index.less'

import { div } from '@cycle/dom'

import Slider from '@components/Slider'

const App = sources => {

  const actions$ = intent(sources)
  const state$ = model(sources.props, actions$)
  const vdom$ = view(state$)

  const slider = Slider(sources)

  const { DOM: sliderDOM$  } = slider

  const resultDOM$ = xs.combine(vdom$, sliderDOM$)
    .map(([mainDOM, sliderDOM]) => 
      div([
        mainDOM,
        sliderDOM
      ])
    )
  
  return {
    DOM: resultDOM$
  }

}

module.exports = {
  App
}