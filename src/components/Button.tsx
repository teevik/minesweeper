import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  padding: 10px 48px;
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
