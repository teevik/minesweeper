import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  padding: 10px 48px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(89, 96, 228, 0.73);
  background-color: #121431;
  outline: none !important;
  cursor: pointer;

  transition: filter 0.1s ease;

  &:hover,
  &:focus {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(0.9);
  }
`
