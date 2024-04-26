import './App.css'
import { Otro } from './components/Otro'
import { useCatFact } from './hooks/useCatFact'
export const App = () => {
   const {fact, refreshFact} = useCatFact()
   
  
   const handleClick = async() => { 
    refreshFact()
   }

  return (
    <main>
      <h1>App de gatos </h1>
      <button onClick={handleClick}>Nueva cita</button>
      {fact && <p>{fact}</p>}
      <Otro fact={fact} />
    </main>
  )
}
