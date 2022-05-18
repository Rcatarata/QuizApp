import {questions} from '../questions'
import {useState, useEffect} from 'react'


export default function Question(props) {
    // state for completed quiz
    const [completed, setCompleted] = useState(false)
    // state for to determine if answer is correct with back button 
    const [answerStorage, setAnswerStorage] = useState({})
    // state for count of current question index
    const [count, setCount] = useState(0)
    // state for correct answer if only the next button is used 
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
    // state for selecting the answer 
    const [selectedAnswer, setSelectedAnswer] = useState('')
    // var for percentage displayed at the end of quiz
    let correctPercentage = `${((correctAnswerCount)/ (questions.length)) *100}%`;


    // decrements the count of question index
    function back(){
        setCount(prev => prev -1)    
    }
    
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
        console.log(answerStorage)
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

    async function submitter(){
        answerValidator()
        setCompleted(true)
    }

    // useEffect(()=>{
    //     answerValidator()
    // },[count])

    // useEffect(()=>{
    //     checkAnswers()
    // },[count])
    

    // function checkAnswers() {
    //     console.log(count + 'check anser')
    //     if (setCompleted) {
    //         for(let i = 0; i < questions.length; i++){
    //             if (answerStorage[i] === 'correct'){
    //                 setCorrectAnswerCount(prev => prev +1)
    //             }
    //         }
    //     }
    //     console.log(answerStorage)
    // } 

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
                
                {/* {count > 0 && <button onClick={back}>Back</button>} */}
                {questions.length - 1 === count? <button onClick={submitter}>Submit</button>:<button onClick={next}>Next</button>}
                
            </div>}
            {completed && <div>
                <h2>Congratulation, you got a {correctPercentage}</h2>
                {/* <button onClick={checkAnswers}>butoo</button> */}
                {/* <button onClick={checkAnswers}>butono</button> */}
            </div>}
        </div>
        
    )
}