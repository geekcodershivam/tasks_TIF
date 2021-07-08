import styled from 'styled-components';

export const Card = styled.div`
   position: inherit;
  display: flex;
  height: 680px;
  margin-top:-100px;
  width: 100%;
  background-color: #eff1f7;
  @media screen and (max-width: 760px) {
    display: flex;
    z-index: 0;
    background-color: #eff1f7;
    position: absolute;
    margin-top: 62rem;
    height: 1400px;
    width: 100%;
  }
`;

export const Heading = styled.h1`
  display: flex;
  position: absolute;
  margin-top: 5rem;
  height: 3rem;
  right: 36rem;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 760px) {
    display: flex;
    height: 5%;
    width: 90%;
    font-size: 20px;
    margin-top: 2rem;
    left: 1.6rem;
  }
`;

export const Para = styled.p`
  display: flex;
  position: absolute;
  margin-top: 9rem;
  height: 3.5rem;
  width: 35%;
  left: 25rem;
  font-size: 15px;
  color: #bfbfbf;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 760px) {
    display: flex;
    left: 1.6rem;
    margin-right: 2rem;
    height: 10%;
    width: 90%;
    margin-top: 6rem;
    paddiing: 0;
  }
`;

export const Modal1 = styled.div`
  display: flex;
  position: absolute;
  height: 230px;
  width: 280px;
  margin-top: 16rem;
  left: 12rem;
  background-color: white;
  z-index: 999;

  @media screen and (max-width: 760px) {
    display: flex;
    margin-top: 20.5rem;
    margin-left: -6.8rem;
    height: 20%;
    width: 80%;
    background-color: white;
  }
`;

export const Modal2 = styled.div`
  display: flex;
  position: absolute;
  height: 230px;
  width: 280px;
  margin-top: 18rem;
  left: 30.8rem;
  background-color: white;

  @media screen and (max-width: 760px) {
    display: flex;
    margin-top: 44rem;
    margin-left: -27.5rem;
    margin-right: 2rem;
    height: 20%;
    width: 80%;
    background-color: white;
  }
`;

export const Modal3 = styled.div`
  display: flex;
  position: absolute;
  height: 230px;
  width: 280px;
  margin-top: 20rem;
  right: 17.4rem;
  background-color: white;

  @media screen and (max-width: 760px) {
    display: flex;
    margin-top: 67rem;
    margin-right: -7.8rem;
    height: 20%;
    width: 80%;
    background-color: white;
  }
`;

export const Heading1 = styled.h3`
  position: absolute;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 3rem;
  padding: 3px;

  @media screen and (max-width: 760px) {
    display: flex;
  }
`;

export const Para1 = styled.p`
  position: absolute;
  display: flex;
  font-size: 14px;
  color: #bfbfbf;
  margin-top: 6rem;
  margin-left: 20px;

  @media screen and (max-width: 760px) {
    display: flex;
  }
`;

export const Heading2 = styled.h3`
  position: absolute;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 3rem;
  padding: 3px;

  @media screen and (max-width: 760px) {
    display: flex;
  }
`;

export const Para2 = styled.p`
  position: absolute;
  display: flex;
  color: #bfbfbf;
  font-size: 14px;
  margin-top: 6rem;
  margin-left: 20px;

  @media screen and (max-width: 760px) {
    display: flex;
  }
`;

export const Heading3 = styled.h3`
  position: absolute;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 3rem;
  padding: 3px;

  @media screen and (max-width: 760px) {
    display: flex;
  }
`;

export const Para3 = styled.p`
  position: absolute;
  display: flex;
  color: #bfbfbf;
  font-size: 14px;
  margin-top: 6rem;
  margin-left: 20px;

  @media screen and (max-width: 760px) {
    display: flex;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b3054;
  height: 68px;
  width: 63px;
  margin-top: -2rem;
  margin-left: 2rem;
  border-radius: 100%;

  @media screen and (max-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8.3rem;
  }
`;

export const Line = styled.div`
  display: flex;
  position: relative;
  margin-top: 23.3em;
  margin-left: 26rem;
  height: 7px;
  width: 24rem;
  background-color: #2acfcf;

  @media screen and (max-width: 760px) {
    display: flex;
    margin-left: 0rem;
    margin-top: 53rem;
    height: 8px;
    transform: rotate(90deg);
  }
`;
