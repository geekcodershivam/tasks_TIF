import React, { useState } from 'react';
import styled from 'styled-components';
import Apis from '../utils/Apis';
import CopyClipboard from './CopyClipboard';
import Desktop from '../Assets/bg-shorten-desktop.svg';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin: 3rem 12.5%;
  max-width: 100%;
  height: 10rem;
  background-color: #3b3054;
  border-radius: 12px;
  background: url(${(props) => props.Desktop});
  background-color: #3b3054;
  background-size: cover;
`;
const FormInput = styled.input`
  display: -ms-flexbox;
  position: absolute;
  left: 2rem;
  top: 3rem;
  height: 36%;
  border-radius: 8px;
  outline: none;
  width: 70%;
  padding: 1em 0em 1em 2em;
  box-sizing: border-box;
  opacity: 1;
  font-size: 18px;
  font-color: red;
`;
const Button = styled.button`
  display: flex;
  position: absolute;
  border-radius: 8px;
  color: white;
  background-color: #2acfcf;
  white-space: nowrap;
  padding: 16px 30px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;
  margin-left: 76%;
  margin-top: 3rem;
`;

const Error = styled.p`
  color: red;
  font-style: italic;
  font-size: 16px;
  margin-block-start: 115px;
  padding-left: 49px;
`;


export default function SearchBar() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const renderList=()=>{
    return data.map((ele,idx)=>  <CopyClipboard keys={idx} ele={ele}/> )
  }

  const handleOutput = () => {
    setLoading(true);
    if (value !== '') {
      (async () => {
        let response = await Apis.get(`/shorten?url=${value}`);
        setData([...data,response.data]);
        setLoading(false);
      })();
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Wrapper Desktop={Desktop}>
        <FormInput
          input
          type="text"
          placeholder="Shorten a link here..."
          value={value}
          onChange={(e) => {
            setError(false);
            setValue(e.target.value);
          }}
          style={error ? { border: '3px solid red' } : null}
        />
        <Error>{error ? 'Please add a link' : null}</Error>
        <Button onClick={handleOutput}>
          {loading ? 'Shortening....' : 'Shorten It!'}
        </Button>
      </Wrapper>

      
         {renderList()}
  
    </>
  );
}
