import Start from './components/Start'
import Question from './components/Question'
import {useState, useEffect} from 'react'
import {questions} from './questions'
import './App.css';

function App() {
  const [began, setBegan] = useState(false)

  const [count, setCount] = useState(0)

  const [currentQuestion, setCurrentQuestion] = useState(questions[3].question)

  const words = !began ?'Begin':'Exit'
  
  useEffect(()=> {
    setCurrentQuestion((prev) => prev)
  }, count)

  return (
    <div className="hero-Section">
        {!began && <Start 
          name = {!began.toString()}
        />}
        {began && <Question 
          q1er = {currentQuestion}
          
        />}
        {began &&  <button onClick={() => {setCount(prev => prev+1)}}>Next</button>}
        <button onClick={() => {setBegan(prev =>!prev)}}>{words}</button>
    </div>
  )
}

export default App;
