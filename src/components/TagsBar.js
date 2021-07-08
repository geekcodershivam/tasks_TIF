import React from 'react';
import styled from 'styled-components';

import bgDesktop from '../Assets/bg-boost-desktop.svg';
import bgMobile from '../Assets/bg-boost-mobile.svg';

const Tags = styled.div`
  width: 100%;
  min-height: 150px;
  background: url(${(props) => props.ImageDesktop});
  background-color: #3b3054;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
`;

const Body = styled.div`
  margin: 0 auto;
`;

const Heading = styled.h1`
  color: white;
  font-size: 2.5em;

  @media (max-width: 375px) {
    font-size: 1.5em;
  }
`;

const Button = styled.button`
  background-color: #2acfcf;
  color: white;

  margin-top: 20px;
  font-weight: 600;
  font-size: 1em;

  outline: none;
  border: none;
  border-radius: 25px;
  padding: 0.8em 2em;
  cursor: pointer;
  margin-left: 125px;
  align-items: center;
  margin-bottom: 50px;
`;

export default function TagsBar() {
  return (
    <Tags ImageDesktop={bgDesktop} ImageMobile={bgMobile}>
      <Body>
        <Heading>Boost your links today</Heading>
        <Button>Get Started</Button>
      </Body>
    </Tags>
  );
}
