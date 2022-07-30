import styled from "styled-components";

export const Footer = styled.div`
  background-color: #dfe6ed;
  width: 100vw;

  height: 117px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;

  .image {
    width: 64px;
    height: 89px;
    background-color: #fff;

    margin-right: 21px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
  }

  img {
    width: 56px;
    height: 72px;
    object-fit: cover;
    margin: 8px;
  }

  p {
    font-size: 26px;
    line-height: 31px;
    color: #293845;
  }
`;
