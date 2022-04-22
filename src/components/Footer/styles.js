import styled from 'styled-components';

export const Container = styled.div`
  background: #DDDEE1;
  bottom: 0px;
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #017EFF;
  border-radius: 4px;
  height: 50px;
  width: 200px;
  transition: 0.2s ease-in;
  margin: 50px;

  &:hover {
    color: #017EFF;
    background: #fff;
    cursor: pointer;
  }
`;

export const JsonError = styled.p`
  color: #f00;
  font-style: 16px;
  font-family: 'Source Sans Pro';
`;
