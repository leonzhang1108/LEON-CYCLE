const view = state$ => state$.map(({ toggle, count, slider }) => 
  <div>
    <div>
      <a className="toggle">toggle</a>
      <p>{toggle ? 'ON' : 'OFF'}</p>
    </div>
    <div>
      <a className="dec">dec</a>
      <a className="inc">inc</a>
      <p>Counter: {count}</p>
    </div>
  </div>
)

module.exports = view