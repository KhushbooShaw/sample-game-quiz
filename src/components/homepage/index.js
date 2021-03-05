import React, { Fragment, useState, lazy, Suspense } from 'react'
import { Wrapper, Button , Header, Title} from './style'
import { Questions, Result_status } from './constant'
import Loader from '../loader'

const Question = lazy(() => import('../questions'));
const Result = lazy(() => import('../result'));

const Homepage = () => {
  const [questions, setQuestions] = useState(Questions)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [show, setShow] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const handleStartQuiz = () => {
     setCurrentIndex(0)
     setShow(true)
     setShowResult(false)
  }

  const handleHomePageClick = () => {
      setShow(false)
      setShowResult(false)
      setCurrentIndex(0)
  }

  const handleSubmit = (selected, question, questionNumber) => {
    question.status = selected === question?.answer ? Result_status[1]:Result_status[0]
    let tempQuestions = questions
    tempQuestions[questionNumber] = question
    setQuestions([...tempQuestions])
    currentIndex === questions.length -1
      ? setShowResult(true)
      : setCurrentIndex(currentIndex + 1)
  }

  const handleSkip = (question, questionNumber) => {
    question.status = Result_status[2]
    let tempQuestions = questions
    tempQuestions[questionNumber] = question
    setQuestions([...tempQuestions])
    currentIndex === questions.length -1
      ? setShowResult(true)
      : setCurrentIndex(currentIndex + 1)
  }

  return (
   <Fragment>
       <Header>
         <Title>Welcome To quiz</Title>
       </Header>
       <Wrapper>
        {show && currentIndex < questions.length && !showResult && <Suspense fallback={<Loader />}>
          <Question
            questionNumber={currentIndex}
            question={questions[currentIndex]}
            handleSkip={handleSkip}
            handleSubmit={handleSubmit}
          />
        </Suspense>}
        {showResult && <Suspense fallback={<Loader />}>
          <Result questions={questions} handleClick={handleHomePageClick} />
        </Suspense>}
        {!show && !showResult && <Button onClick={handleStartQuiz}>Start Quiz</Button>}
       </Wrapper>
   </Fragment>
  )
}

export default Homepage;
