import xs from 'xstream'
import { main as mainType } from '../../common/type.js'

const intent = sources => xs.merge( 

  sources.DOM.select('a').events('click')
    .mapTo({ type: mainType.TOOGLE }),

  sources.DOM.select('.dec').events('click').mapTo(-1)
    .map(v => ({ v, type: mainType.COUNT })),

  sources.DOM.select('.inc').events('click').mapTo(+1)
    .map(v => ({ v, type: mainType.COUNT })),

  sources.DOM.select('.slider').events('input')
    .map(e => e.target.value)
    .map(v => ({ v, type: mainType.SLIDER }))
    
)

module.exports = intent
