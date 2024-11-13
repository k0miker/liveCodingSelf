import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100vw;
    height: 50vh;
    background-color: antiquewhite
`

function Header() {

    return (
        <StyledHeader>
            <h1>Ich bin ein toller Header</h1>
            
        </StyledHeader>
    )

}

export default Header