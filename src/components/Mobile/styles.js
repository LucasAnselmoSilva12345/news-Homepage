import styled from 'styled-components';

export const StyledMenuMobile = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 0.9375rem;
  right: 1.25rem;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  .iconMenuMobile {
    color: var(--veryDarkBlue);
    cursor: pointer;
  }
`;
