import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import { App, HTTP } from './app'
import { makeHTTPDriver } from '@cycle/http'

const main = App

const drivers = {
  DOM: makeDOMDriver('#root'),
  HTTP: makeHTTPDriver()
}

run(main, drivers)

