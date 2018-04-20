import xs from 'xstream'
import { div, input, p } from '@cycle/dom'

const App = sources => {

  // 点击事件
  const $click = sources.DOM.select('a').events('click')
  const $clickDecrement = sources.DOM.select('.dec').events('click').mapTo(-1)
  const $clickIncrement = sources.DOM.select('.inc').events('click').mapTo(+1)
  const $toggleClick = $click.fold(x => !x).startWith(false)

  // 请求
  const getRandomUser$ = $click.map(() => {
    const randomNum = Math.round(Math.random() * 9) + 1
    return {
      url: 'https://jsonplaceholder.typicode.com/users/' + String(randomNum),
      category: 'users',
      method: 'GET'
    }
  })


  // 累加
  const action$ = xs.merge(
    $clickDecrement,
    $clickIncrement
  )

  const count$ = action$.fold((x, y) => x + y, 0)

  const combined$ = xs.combine(count$, $toggleClick)

  // dom变化
  const vdom$ = combined$
    .map(([count, toggled]) => 
      <div>
        <div>
          <a>button</a>
          <p>{toggled ? 'ON' : 'OFF'}</p>
        </div>
        <div>
          <botton className="dec">Decrement</botton>
          <botton className="inc">Increment</botton>
          <p>Counter: {count}</p>
        </div>
      </div>
    )


  return {
    DOM: vdom$,
    HTTP: getRandomUser$
  }

}

module.exports = {
  App
}