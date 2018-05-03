const view = state$ => state$.map(({ toggle, count, slider }) => 
  <div className="wrapper">
    <div>
      <button className="toggle">button</button>
      <p>{toggle ? 'ON' : 'OFF'}</p>
    </div>
    <div>
      <button className="dec">Decrement</button>
      <button className="inc">Increment</button>
      <p>Counter: {count}</p>
    </div>
    <div>
      <input className="slider" type="range" min='0' max='100' value={slider}/>
      <label>{slider}</label>
    </div>
  </div>
)

module.exports = view