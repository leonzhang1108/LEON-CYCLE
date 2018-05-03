import xs from 'xstream'
import { main as mainType } from '@common/type.js'

const intent = sources => xs.merge( 

  sources.DOM.select('.slider').events('input')
    .map(e => e.target.value)
    .map(v => ({ v, type: mainType.SLIDER }))
    
)

module.exports = intent
