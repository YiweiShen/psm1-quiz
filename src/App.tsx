import { useState } from 'react'
import Quiz from 'react-quiz-component'
import quiz from './quiz'
import './App.css'

function App() {
  const [, setQuizResult] = useState()

  return (
    <div style={{ margin: 'auto', width: '500px' }}>
      <Quiz
        quiz={quiz}
        shuffle
        shuffleAnswer
        showInstantFeedback
        onComplete={setQuizResult}
        timer={60}
        allowPauseTimer
      />
    </div>
  )
}

export default App
