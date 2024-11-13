import styled from "styled-components"
import { useState } from "react"
import Header from "./components/Header"


const StyledButton = styled.button`
    background-color: ${(props) => (props.primary ? "blue" : "gray")};
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    display: flex;
    position: relative;
    &:hover {
      border: solid yellow 5px
    }
`

const StyledImg = styled.img`
  width: 300px;
  height: auto;
  border: solid black 1p
`

const StyledLink = styled.a`
  color: pink;
`




const App = () => {
  const [primaryState, setPrimary] = useState(false)

  return (
    <>
      <Header />

      <div>
        <StyledImg
          src="https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg"
        />
        <StyledButton>
          Erster Button
        </StyledButton>
        <StyledButton primary>
          Zweiter Button
        </StyledButton>
        <StyledButton
          primary={primaryState}
          onClick={() => setPrimary(!primaryState)}
        >
          Dritter Button
        </StyledButton>

        <StyledLink
          href="https://t3n.de"
          target="_blank"
        > Linkbeispiel</StyledLink>
      </div>
    </>
  )
}

export default App;