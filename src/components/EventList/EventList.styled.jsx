import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  gap: 24px;
  margin-top: 40px;
  padding: 0;
  grid-template-rows: 480px 480px 480px 480px;
  grid-template-columns: repeat(auto-fill, 302px);
  justify-content: center;
`;
