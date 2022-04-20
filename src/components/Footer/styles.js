import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  position: sticky;
  bottom: 50px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #017EFF;
  border-radius: 4px;
  height: 100px;
  width: 200px;
  transition: 0.2s ease-in;
  margin: 50px;

  &:hover {
    color: #017EFF;
    background: #fff;
    cursor: pointer;
  }
`;
