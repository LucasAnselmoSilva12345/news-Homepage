import styled from 'styled-components';

export const Sidebar = styled.div`
  padding: 12px;
  background-color: var(--veryDarkBlue);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    color: var(--softOrange);
    font-size: 2rem;
    text-transform: capitalize;
  }
`;
