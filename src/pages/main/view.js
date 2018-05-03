const view = state$ => state$.map(({ toggle, count, slider }) => 
  <div className="wrapper">
    <div>
      <a className="toggle">toggle</a>
      <p>{toggle ? 'ON' : 'OFF'}</p>
    </div>
    <div>
      <a className="dec">dec</a>
      <a className="inc">inc</a>
      <p>Counter: {count}</p>
    </div>
    <div>
      <input className="slider" type="range" min='0' max='100' value={slider}/>
      <label>{slider}</label>
    </div>
  </div>
)

module.exports = view