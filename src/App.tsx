import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { calculateJupiterTime } from './modules/calculateJupiterTime'

function App() {
  const [lune, setLune] = useState<number>()
  const [soleil, setSoleil] = useState<number>()
  const [terre, setTerre] = useState<number>()
  const [result, setResult] = useState<string>("")

  const isDisabled = [lune, soleil, terre].some(v => v !== 1 && v !== 2 || v === undefined)

  return (
    <>
      <h1>Horloge Jupiterienne</h1>
      <input type="number" min="1" max="2" required onChange={(e) => setLune(+e.target.value)} placeholder="Lune (1 ou 2)" /><br/>
      <input type="number" min="1" max="2" required onChange={(e) => setSoleil(+e.target.value)} placeholder="Soleil (1 ou 2)" /><br/>
      <input type="number" min="1" max="2" required onChange={(e) => setTerre(+e.target.value)} placeholder="Terre (1 ou 2)" /><br/>
      <button onClick={() => setResult(calculateJupiterTime({ lune: lune!, soleil: soleil!, terre: terre! }))} disabled={isDisabled}>Calculer</button>
      <p>{!isDisabled ? result : ""}</p>
    </>
  )
}

export default App
