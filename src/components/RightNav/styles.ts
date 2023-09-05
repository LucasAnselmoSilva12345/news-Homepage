import styled from 'styled-components';

interface StyledMenuMobileProps {
  openMenu: boolean;
}

export const ListElementsNav = styled.ul<StyledMenuMobileProps>`
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
    position: fixed;
    width: 300px;
    height: 100vh;
    padding-top: 20rem;
    top: 0;
    right: 0;
    flex-flow: column nowrap;
    transform: ${({ openMenu }) =>
      openMenu ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    background-color: var(--offWhite);
  }
`;
