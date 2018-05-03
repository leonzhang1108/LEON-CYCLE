const view = state$ => state$.map(({ slider }) => 
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
)

module.exports = view