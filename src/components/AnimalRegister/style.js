import styled from "styled-components";

export const FolderContainer = styled.section`
  width: 100vw;
  max-width: 1000px;
  /* height: 100%; */
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const HeaderFormContainer = styled.div`
    gap: 2.6rem;
    display: flex;
    

  .registerBtn, .editBtn {
    padding: 0.5rem 2.5rem;
    border: none;
    border-radius: 30px 30px 0px 0px;
    background-color: var(--petroleumBlue);
    color: white;
    font-family: "Fredoka";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 114.5%;
    letter-spacing: 0.06em;
  }

  .disable {
    filter: brightness(0.5);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--petroleumBlue);
  padding: 1.29rem 2.2rem;
  border-radius: 0.7rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  /* border: 3px solid #ffffff; */

  h2 {
    font-family: "Fredoka";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 114.5%;
    letter-spacing: 0.06em;
    text-align: center;
    color: #ffffff;
  }

  .separator {
    height: 5px;
    width: 100%;
    border-radius: 1rem;
    background-color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;

    label {
      font-family: "Fredoka";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
    }

    input {
      width: 255px;
      background: rgba(0, 0, 0, 0.24);
      border: 3px solid #ffffff;
      border-radius: 10px;
      height: 40px;
      padding-left: 12px;

      ::placeholder {
        color: #ffffff;
        font-family: "Fredoka";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.06em;
      }
    }

    select {
      background: rgba(0, 0, 0, 0.24);
      border: 3px solid #ffffff;
      border-radius: 10px;
      height: 40px;
      padding-left: 12px;
      color: #ffffff;
      font-family: "Fredoka";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.06em;
    }
  }

  @media (min-width: 1024px) {
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const ColumnForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  @media (min-width: 1024px) {
  }
`;
