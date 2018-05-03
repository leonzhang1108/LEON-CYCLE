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
      <input className="slider" type="range" min='20' max='100' value={slider}/>
      <label>{slider}</label>
      <div style={{
        backgroundColor: '#58D3D8', 
        width: String(2 * slider) + 'px',
        height: String(2 * slider) + 'px',
        borderRadius: String(slider) + 'px'
      }}></div>
    </div>
  </div>
)

module.exports = view