import Start from './components/Start'
import Question from './components/Question'
import {useState, useEffect} from 'react'
import {questions} from './questions'
import './App.css';

function App() {
  const [began, setBegan] = useState(false)
  const words = !began ?'Begin':'Exit'
  

  return (
    <div className="hero-Section">
        {!began ? <Start /> : <Question />}
        <div className='button--container'>
            <button className='start--button' onClick={() => {setBegan(prev =>!prev)}}>{words}</button>
        </div>
      </div>
  )
}

export default App;
