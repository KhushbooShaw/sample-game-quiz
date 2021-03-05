import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    Button,
    ButtonContainer,
    OptionContainer,
    Input
} from './style'

const Questions = (props) => {
  const {
      question,
      questionNumber,
      handleSkip,
      handleSubmit
  } = props
  const [disabled, setDisabled] = useState(true)
  const [selected, setSelected] = useState()

  const handleChange = (e) => {
    setDisabled(false)
    setSelected(e.target.value)
  }
  const handleClick = () => {
    setDisabled(true)
    setSelected(null)
    handleSubmit( selected, question, questionNumber)
  }
  const onSkipClick = () => {
    setDisabled(true)
    setSelected(null)
    handleSkip(question, questionNumber)
  }

  return (
   <Container>
       <p>{(questionNumber+1) + '. ' + question?.question}</p>
       <OptionContainer>
        <section>
            <Input
                type="radio"
                name="options"
                value={question.option1}
                checked={question.option1 === selected}
                onChange={handleChange}
            />
            <label>{question.option1}</label>
        </section>
        <section>
            <Input
                type="radio"
                name="options"
                value={question.option2}
                checked={question.option2 === selected}
                onChange={handleChange}
            />
            <label>{question.option2}</label>
        </section>
        <section>
            <Input
                type="radio"
                name="options"
                value={question.option3}
                checked={question.option3 === selected}
                onChange={handleChange}
            />
            <label>{question.option3}</label>
        </section>
        <section>
            <Input
                type="radio"
                name="options"
                value={question.option4}
                checked={question.option4 === selected}
                onChange={handleChange}
            />
            <label>{question.option4}</label>
        </section>
       </OptionContainer>
       <ButtonContainer>
           <Button
             onClick={handleClick}
             disabled={disabled}
           >
             Submit Answer
           </Button>
           <Button onClick={onSkipClick}>Skip Answer</Button>
       </ButtonContainer>
   </Container>
  )
}

Questions.prototype = {
    questionNumber: PropTypes.number,
    question: PropTypes.object,
    handleSubmit: PropTypes.func,
    handleSkip: PropTypes.func
}

export default Questions;
