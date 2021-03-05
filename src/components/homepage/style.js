import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: papayawhip;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: 80px;
`;

export const Header = styled.header`
  background-color: palevioletred;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
`

export const Title = styled.section`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  color: papayawhip;
  font-weight: 700;
`

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: papayawhip;
`;