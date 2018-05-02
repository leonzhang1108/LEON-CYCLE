const view = state$ => state$.map(({ toggle, count }) => 
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
  </div>
)

module.exports = view