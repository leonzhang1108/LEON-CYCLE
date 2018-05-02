const view = state$ => state$.map(({ toggle, count, slider }) => 
  <div>
    <div>
      <a>button</a>
      <p>{toggle ? 'ON' : 'OFF'}</p>
    </div>
    <div>
      <botton className="dec">Decrement</botton>
      <botton className="inc">Increment</botton>
      <p>Counter: {count}</p>
    </div>
    <div>
      <label>{slider}</label>
      <input className="slider" type="range" min='0' max='100' value={slider}/>
    </div>
  </div>
)

module.exports = view