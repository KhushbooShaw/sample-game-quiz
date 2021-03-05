import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button , TableGlobalStyle} from './style'

const Result = (props) => {
  const {
      questions,
      handleClick
  } = props
  return (
   <Container>
       <TableGlobalStyle />
       <table>
        <thead>
            <tr>
                <th>Question No</th>
                <th>Answer Status</th>
            </tr>
        </thead>
        <tbody>
            {questions.map((question, index) => (
              <tr key={index+1}>
                <td>{index+1}</td>
                <td>{question.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Button onClick={handleClick}>Homepage</Button>
   </Container>
  )
}

Result.prototype = {
    questions: PropTypes.array,
    handleClick: PropTypes.func
}

export default Result;
