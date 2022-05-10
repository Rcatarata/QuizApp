import {questions} from '../questions'
import {useState} from 'react'


export default function Question(props) {
    const [count, setCount] = useState(0)


    function back(){
        setCount(prev => prev -1)    
    }

    function next(){
        if (count < questions.length -1){
            setCount(prev => prev +1)
        } else {
            alert('your done')
        }
        
    }

    
    return(
        <div className='question-container'>
            <h1>{questions[count].question}</h1>
            <ul>
                <li>A. {questions[count].answers.a}</li>
                <li>B. {questions[count].answers.b}</li>
                <li>C. {questions[count].answers.c}</li>
                <li>D. {questions[count].answers.d}</li>
            </ul> 
            {count > 0 && <button onClick={back}>Back</button>}
            <button onClick={next}>Next</button>               
        </div>
    )
}