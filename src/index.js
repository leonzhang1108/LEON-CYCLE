import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import { App, HTTP } from './app'
import { makeHTTPDriver } from '@cycle/http'
import xs from 'xstream'

const main = App

const drivers = {
  props: () => xs.of({
    toggled: false,
    count: 0
  }),
  DOM: makeDOMDriver('#root'),
  HTTP: makeHTTPDriver()
}

run(main, drivers)

