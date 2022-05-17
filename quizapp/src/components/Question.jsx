import {questions} from '../questions'
import {useState, useEffect} from 'react'


export default function Question(props) {
    const [completed, setCompleted] = useState(false)
    const [answerStorage, setAnswerStorage] = useState({})

    const [count, setCount] = useState(0)
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0)

    const [selectedAnswer, setSelectedAnswer] = useState('')
    const correctPercentage = `${((correctAnswerCount)/ (questions.length)) *100}%`;

    function back(){
        setCount(prev => prev -1)    
    }
console.log(questions)
    function answerValidator() {
        if (questions[count].correctAnswer.toLowerCase() === selectedAnswer.toLowerCase()) {
            setCorrectAnswerCount(prev => prev + 1)
            setAnswerStorage(prev => ({
                ...prev, 
                [count]: 'correct',
            }
            ))

        } else {
            setAnswerStorage(prev => ({
                ...prev, 
                [count]: 'incorrect'
            }
            ))
        }
    }


    function next(){
        if (count < questions.length -1){
            answerValidator()
        setCount(prev => prev +1)
        } else {
            alert('your done')
        }
        setSelectedAnswer('')
    }

    function submitter(){
        answerValidator()
        setCompleted(true)
        // checkAnswers()
    }

    function checkAnswers() {
        for(let i = 0; i < questions.length; i++){
            if (answerStorage[i] === 'correct'){
                console.log(answerStorage[i])
                setCorrectAnswerCount(prev => prev +1)
            }
        } 
    } 

    return(
        <div>
           {!completed && <div className='question-container'>
                <h3>{questions[count].question}</h3>
                <div className='answer--container'>
                    <button className='answer--button' onClick={() => {setSelectedAnswer('a')}}>A. {questions[count].answers.a}</button>
                    <button className='answer--button' onClick={() => {setSelectedAnswer('b')}}>B. {questions[count].answers.b}</button>
                    <button className='answer--button' onClick={() => {setSelectedAnswer('c')}}>C. {questions[count].answers.c}</button>
                    <button className='answer--button' onClick={() => {setSelectedAnswer('d')}}>D. {questions[count].answers.d}</button>
                </div>
                
                {count > 0 && <button onClick={back}>Back</button>}
                {questions.length - 1 === count? <button onClick={submitter}>Submit</button>:<button onClick={next}>Next</button>}
                
            </div>}
            {completed && <div>
                <h2>Congratulation, you got a {correctPercentage}</h2>
                {/* <button onClick={()=>{console.log(answerStorage)}}>butoo</button> */}
                {/* <button onClick={checkAnswers}>butono</button> */}
            </div>}
        </div>
        
    )
}