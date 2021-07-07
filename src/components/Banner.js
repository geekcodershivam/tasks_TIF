import React from 'react';
import styled from 'styled-components';
import BannerImg from '../Assets/illustration-working.svg';

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Section = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 120px 20px;

  ${(props) => {
    if (props.SRC) return `background-image: url(${props.SRC})`;
  }}

  ${(props) => {
    if (props.type === 'text') {
      return `
      display: flex;
      justify-content: flex-end;
      background-size: none;
      `;
    }
  }}
`;

const Wrapper = styled.div`
  width: 70%;
  padding-top: 80px;
  text-align: left;
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 650;
  color: #232127;
  margin-bottom: 0;
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: #e6e6e7;
  font-weight: 480;
`;

const Button = styled.div`
  width: 17%;
  border-radius: 25px;
  border: none;
  outline: none;
  background-color: #28d3d3;
  color: white;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 30px;
  cursor: pointer;
`;
export default function Banner() {
  return (
    <Container>
      <Section type="text">
        <Wrapper>
          <Heading>More than just shorter links</Heading>
          <Paragraph>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </Paragraph>
          <Button>Get Started</Button>
        </Wrapper>
      </Section>

      <Section type="img" SRC={BannerImg} />
    </Container>
  );
}
