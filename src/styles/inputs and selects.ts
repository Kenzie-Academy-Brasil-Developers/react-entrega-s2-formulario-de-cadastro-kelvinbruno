import styled from "styled-components";

export const FormSelect = styled.select`
  display: block;
  width: 330px;
  height: 48px;
  background: #343b41;
  border: 1.2182px solid #343b41;
  border-radius: 4px;
  color: #868e96;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  padding: 0px 16.2426px;
  ::placeholder {
    color: #868e96;
    padding-left: 10px;
  }

  :hover,
  :focus {
    border: 1.2182px solid #f8f9fa;
    outline: none;
    color: #f8f9fa;
  }

  @media (max-width: 600px) {
    padding: 0px 12.9865px;
    width: 265px;
    height: 38.5px;
    font-size: 13.0293px;
    line-height: 21px;
    border-radius: 3.20867px;
  }
`;
export const FormInput = styled.input`
  display: block;
  width: 314.93px;
  height: 48px;
  background: #343b41;
  border: 1.2182px solid #343b41;
  border-radius: 4px;
  color: #868e96;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  padding-left: 15px;
  ::placeholder {
    color: #868e96;
    padding-left: 10px;
  }

  :hover,
  :focus {
    border: 1.2182px solid #f8f9fa;
    outline: none;
    color: #f8f9fa;
  }

  @media (max-width: 600px) {
    width: 251.66px;
    height: 38.5px;
    font-size: 13.0293px;
    line-height: 21px;
    border-radius: 3.20867px;
  }
`;
export const InputDiv = styled.div`
  display: block;
  width: 329.93px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 266.66px;
  }
`;
