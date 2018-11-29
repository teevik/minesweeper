import styled from "styled-components"

export const Input = styled.input`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(89, 96, 228, 0.73);
  background-color: #0b0c1e;
  outline: none !important;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0e1028;
  }

  &:active {
    background-color: #0c0d22;
  }
`
