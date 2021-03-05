import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  color: palevioletred;
`

export const OptionContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 24px;
`

export const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: ${props => props.disabled ? 'lightgrey': 'papayawhip'};
`

export const Input = styled.input`
  background-color: papayawhip;
`