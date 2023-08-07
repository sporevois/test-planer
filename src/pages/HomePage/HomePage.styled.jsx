import styled from 'styled-components';

export const PageBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 42px;
`;

export const CardGrid = styled.ul`
  display: grid;
  gap: 24px;
  margin-top: 40px;
  padding: 0;
  grid-template-rows: 480px 480px 480px 480px;
  grid-template-columns: repeat(auto-fill, 302px);
  justify-content: center;
`;
