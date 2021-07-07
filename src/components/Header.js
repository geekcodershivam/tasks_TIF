import React from 'react';
import styled from 'styled-components';

import logo from '../Assets/logo.svg';


const Container = styled.div`
  width: 70%;
  padding: 20px 0px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: 15px;
`;

const Item = styled.li`
  list-style-type: none;
  margin: 0 15px;
  color: #bfbfbf;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #232127;
  }
  ${(props) => {
    if (props.type === 'button') {
      return `
      background-color: #28d3d3;
      color: white;
      padding: 8px 15px;
      border-radius: 25px;`;
    }
  }}
`;

export default function Header() {
  return (
    <Container>
        <NavBar>
          <Logo src={logo} alt="logo" />
          <Item>Features</Item>
          <Item>Pricing</Item>
          <Item>Resources</Item>
        </NavBar>
        <NavBar>
          <Item>Login</Item>
          <Item type="button">Signup</Item>
        </NavBar>
    </Container>
  );
}
