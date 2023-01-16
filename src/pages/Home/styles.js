import styled from 'styled-components';

export const MainHero = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 25px;

  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 992px) {
    grid-template-columns: 3fr 1fr;
  }
`;

export const SectionHero = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  .section-image {
    margin-bottom: 1rem;
  }

  .section-content {
    display: grid;
    grid-template-columns: 1fr;

    h1 {
      font-size: 54px;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    div {
      width: 80%;

      p {
        margin-bottom: 1rem;
        font-size: 20px;
        font-weight: 400;
      }

      button {
        width: 35%;
        padding: 1rem 20px;
        font-size: 1rem;
        font-weight: 700;
        border: 0;
        background-color: var(--softRed);
        color: var(--offWhite);
        cursor: pointer;
        transition: all 0.5s ease-in-out;

        &:hover {
          filter: opacity(0.8);
        }
      }
    }
  }
`;
