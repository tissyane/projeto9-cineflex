import styled from "styled-components";

export const Button = styled.button`
  width: 60vw;
  height: 43px;
  margin: 0 auto;

  background-color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  line-height: 21.09px;
  color: #ffffff;

  border-radius: 3px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: translateY(2px);
    filter: brightness(120%);
  }
`;
