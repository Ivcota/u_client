import styled from "styled-components";
import { primary_color } from "../global/theme";

export const FormCard = styled.div`
  max-height: 20rem;
  margin-top: 8vh;
  padding: 1rem;
  border-radius: 8px;
  background-color: #ffffff;

  h1 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  margin-top: 0.5rem;
  outline: none;
  border: none;
  padding: 0.5rem 0.5rem;
  background-color: ${primary_color};
  color: white;
  transition: all;
  transition-duration: 200ms;
  font-size: medium;
  border-radius: 0.3rem;

  :hover {
    background-color: #326da3;
  }
`;
