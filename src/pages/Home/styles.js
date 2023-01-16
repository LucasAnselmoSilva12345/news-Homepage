import styled from 'styled-components';

export const MainHero = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 25px;

  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 370px;
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
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 1rem;
      }

      button {
        width: 35%;
        padding: 1rem 20px;
        font-size: 1rem;
        font-weight: 700;
        border: 0;
        background-color: var(--softRed);
        color: var(--offWhite);
      }
    }
  }
`;

export const SidebarHero = styled.div`
  padding: 12px;
  background-color: var(--veryDarkBlue);

  h2 {
    color: var(--softOrange);
    font-size: 2rem;
    text-transform: capitalize;
  }

  div {
    padding: 8px 0;
    border-bottom: 2px solid #f1f1f1;

    h3 {
      margin: 20px 0;
      color: var(--offWhite);
    }

    p {
      margin-bottom: 20px;
      color: var(--grayishBlue);

      &:last-child {
        background-color: tomato;
        margin-bottom: 0;
      }
    }
  }
`;
