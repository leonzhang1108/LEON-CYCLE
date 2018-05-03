import xs from 'xstream'
import { main as mainType } from '@common/type.js'

const intent = (sources, ramdom) => xs.merge( 

  sources.DOM.select(`.slider${ramdom}`).events('input')
    .map(e => e.target.value)
    .map(v => ({ v, type: mainType.SLIDER }))
    
)

module.exports = intent
