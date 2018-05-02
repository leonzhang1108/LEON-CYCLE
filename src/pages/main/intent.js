import xs from 'xstream'

const intent = sources => xs.merge( 

  sources.DOM.select('a').events('click')
    .mapTo({type: 'toggle'}),

  sources.DOM.select('.dec').events('click').mapTo(-1)
    .map(v => ({
      v,
      type: 'count'
    })),

  sources.DOM.select('.inc').events('click').mapTo(+1)
    .map(v => ({
      v,
      type: 'count'
    }))

  // xs.merge(
  //   sources.DOM.select('.dec').events('click').mapTo(-1),
  //   sources.DOM.select('.inc').events('click').mapTo(+1)
  // ).map(data => {
  //   console.log(data)
  //   return {
  //     ...data,
  //     type: 'count'
  //   }
  // })
)

module.exports = intent
