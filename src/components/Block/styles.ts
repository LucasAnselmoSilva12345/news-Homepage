import styled from 'styled-components';

export const ContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 64rem) {
    flex-direction: row;
  }
`;

export const BlockItem = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const BlockContent = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 700;
    color: var(--veryDarkBlue);
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-size: 400;
  }

  p {
    font-size: 1rem;
    color: var(--darkGrayishBlue);
  }
`;
