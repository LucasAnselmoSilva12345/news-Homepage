import styled from 'styled-components';

export const ListElementsNav = styled.ul`
  display: flex;
  align-items: center;

  li {
    padding: 18px 10px;
    color: var(--veryDarkBlue);
    cursor: pointer;

    &:hover {
      color: var(--softRed);
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--offWhite);
    position: fixed;
    transform: ${({ openMenu }) =>
      openMenu ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 20rem;
    transition: transform 0.3s ease-in-out;
  }
`;
