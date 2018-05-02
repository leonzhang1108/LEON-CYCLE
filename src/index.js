import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import { App, HTTP } from './pages/main'
import { makeHTTPDriver } from '@cycle/http'
import xs from 'xstream'

const main = App

const drivers = {
  props: () => xs.of({
    toggle: true,
    count: 0
  }),
  DOM: makeDOMDriver('#root'),
  // HTTP: makeHTTPDriver()
}

run(main, drivers)

