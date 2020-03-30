import styled from 'styled-components'

export default styled.div`

  @media screen and (max-width: 767px) {
    margin-top: 40px;
  }
  
  max-width: ${props => props.wide ? "705px" : "500px"};
  margin-bottom: 60px;
  margin-left: ${props => props.center ? "auto" : "0"};
  margin-right: ${props => props.center ? "auto" : "0"};  
  text-align: ${props => props.center ? "center" : "left"};
`