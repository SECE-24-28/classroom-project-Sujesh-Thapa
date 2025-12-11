import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2 className="counter-title">Counter App</h2>
      <h1 className="counter-display">{count}</h1>

      <div className="button-group">
        <button className="counter-button increase" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="counter-button decrease" onClick={() => setCount(count - 1)}>Decrease</button>
        <button className="counter-button reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App;