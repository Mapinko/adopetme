import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;

  box-sizing: border-box;
  padding: 20px;
  gap: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .fraseVitrine {
    color: var(--black);
    font-family: "Fredoka";
    font-size: 48px;
    text-align: center;
    font-weight: 500;
  }

  ul {
    width: 100%;

    display: flex;
    flex-direction: row;

    overflow-x: auto;
    gap: 10px;
  }

  @media (max-width: 999px) {
    ul {
      margin-left: 3vw;
    }
  }

  @media (min-width: 1000px) {
    width: 100%;
    max-height: 700px;
    ul {
      justify-content: center;

      margin: auto;

      flex-wrap: wrap;
    }
  }
`;

export const ButtonsLeftRight = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 3vw;
  button {
    background-color: #FFFFFF;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
