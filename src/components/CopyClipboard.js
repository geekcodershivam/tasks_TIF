import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const Item = styled.div`
  width: 70%;
  height: fit-content;
  margin: 20px auto;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Link = styled.div`
  height: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #2acfcf;
  @media (max-width: 375px) {
    border-bottom: 1px solid #f0f1f6;
    width: auto;
    padding: 5px 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 375px) {
    flex-direction: column;
    width: 100%;

    text-align: left;
  }
`;

const Short = styled.p`
  color: #2acfcf;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

  @media (max-width: 375px) {
    width: 100%;
    margin: 10px 0px;
  }
`;

const Button = styled.button`
  background-color: #2acfcf;
  color: white;

  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-weight: 600;
  margin-left: 10px;

  ${(props) => {
    if (props.copied) {
      return `background-color:#3b3054 ;`;
    }
  }}

  @media (max-width: 375px) {
    width: 100%;
    margin-left: 0px;
    padding: 10px 0px;
    font-size: 1.2em;
  }
`;
export default function CopyClipboard(props) {
  const [Copy, setCopy] = useState(false);
  const { original_link, short_link } = props.ele.result;
  useEffect(() => {
    if (Copy) {
      setTimeout(() => setCopy(false), 3000);
    }
  }, [Copy]);
  return (
    <Item>
      <Link>{original_link}</Link>
      <Wrapper>
        <Short>{short_link}</Short>
        <CopyToClipboard text={short_link} onCopy={() => setCopy(true)}>
          <Button copied={Copy} onClick={() => setCopy(true)}>
            {Copy ? 'Copied!' : 'Copy'}
          </Button>
        </CopyToClipboard>
      </Wrapper>
    </Item>
  );
}
