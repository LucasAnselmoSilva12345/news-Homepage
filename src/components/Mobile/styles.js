import styled from 'styled-components';

export const StyledMenuMobile = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  .iconMenuMobile {
    cursor: pointer;
    color: var(--veryDarkBlue);
  }
`;
