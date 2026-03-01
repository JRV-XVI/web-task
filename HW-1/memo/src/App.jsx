import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA'
import ChildB from './components/ChildB'
import ChildC from './components/ChildC'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ChildA></ChildA>
        <ChildB></ChildB>
        <ChildC></ChildC>
      </div>
    </>
  )
}

export default App
