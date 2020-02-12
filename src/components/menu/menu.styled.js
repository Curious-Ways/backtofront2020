import styled from 'styled-components';

export const StyledMenu = styled.div`
  background: ${({ theme }) => theme.colorPurple};
  height: 100vh;
  text-align: center;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  width: 100%;
  z-index: 50;
  display: grid;  

  nav {
    margin: auto;
    padding: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    display: inline-block;
    font-size: 26px;
    padding: 0.5rem 0;
    margin: 5px 0;
    color: pink;

    &:hover {
      color: blue;
    }
  }
`;