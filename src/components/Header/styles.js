import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px;

  h1 {
    color: ${({ theme }) => theme.backgroundColor}
  }
`;
