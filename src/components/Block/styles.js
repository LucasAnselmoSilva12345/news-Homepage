import styled from 'styled-components';

export const ContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const BlockItem = styled.div`
  padding: 8px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const BlockContent = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--veryDarkBlue);
  }

  h4 {
    font-size: 20px;
    font-size: 400;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: var(--darkGrayishBlue);
  }
`;
