import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  height: auto;
  margin-top: -29px;
  @media (max-width: 786px) {
    padding-bottom: 20px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    padding-bottom: 0px;
  }
`;

const Section = styled.div`
  width: 100%;
  text-align: left;

  @media (max-width: 786px) {
    text-align: center;
  }
`;

const Title = styled.h5`
  color: white;
  font-size: 1em;

  @media (max-width: 375px) {
    margin: 20px 0px;
  }
`;

const Item = styled.li`
  cursor: pointer;
  list-style-type: none;
  color: #bfbfbf;
  font-size: 0.8em;
  margin: 10px 0px;

  &:hover {
    color: #28d3d3;
  }
`;

export default function FooterItems() {
  return (
    <Wrapper>
      <Section>
        <Title>Features</Title>
        <Item>Link Shortening</Item>
        <Item>Branded Links</Item>
        <Item>Analytics</Item>
      </Section>
      <Section>
        <Title>Resources</Title>
        <Item>Blog</Item>
        <Item>Developers</Item>
        <Item>Support</Item>
      </Section>
      <Section>
        <Title>Company</Title>
        <Item>About</Item>
        <Item>Our Team</Item>
        <Item>Careers</Item>
        <Item>Contact</Item>
      </Section>
    </Wrapper>
  );
}
