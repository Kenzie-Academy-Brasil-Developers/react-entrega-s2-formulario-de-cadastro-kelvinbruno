import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
const GlobalStyle = createGlobalStyle`
 body{
    background: #121214;
 }
`;
export default GlobalStyle;

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

export const Title1 = styled.h1`
  display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #f8f9fa;
`;
export const Title1Res /* res = resizable */ = styled(Title1)`
  @media (max-width: 600px) {
    font-size: 13.0293px;
    line-height: 21px;
  }
`;

export const InfoSpan = styled.span`
  display: block;
  color: #868e96;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  @media (max-width: 600px) {
    font-size: 9.62602px;
    line-height: 14px;
  }
`;
export const FormLabel = styled.label`
  margin-bottom: 15px;
  display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12.182px;
  line-height: 0px;
  color: #f8f9fa;
  @media (max-width: 600px) {
    font-size: 9.772px;
    line-height: 0px;
  }
`;
export const ErrorLabel = styled(FormLabel)`
  display: block;
  line-height: 20px;
  width: 329.93px;
  color: #ff2b2b;
  text-align: center;
  @media (max-width: 600px) {
    width: 263.79px;
  }
`;

export const ButtonPattern = styled.button`
display: block;
  border-radius: 4.06066px;
  width: 330px;
  height: 48px;
  padding: 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 600px) {
    width: 265.9px;
    height: 38.5px;
    font-size: 12.8347px;
    line-height: 21px;
  }
`;
export const PrimaryButton = styled(ButtonPattern)`
  background: #ff577f;
  border: 1.2182px solid #ff577f;
  cursor: pointer;

  :hover,
  :focus {
    background: #ff427f;
    border: 1.2182px solid #ff427f;
  }
`;
export const PrimaryButtonNegative = styled(ButtonPattern)`
  background: #59323f;
  border: 1.2182px solid #59323f;
`;

export const SecondButton = styled(ButtonPattern)`
  background: #868e96;
  border: 1.2182px solid #868e96;
  cursor: pointer;

  :hover,
  :focus {
    background: #343b41;
    border: 1.2182px solid #343b41;
  }
`;

export const DivFormPattern = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 22px;
  justify-content: space-between;
  align-items: center;
  
  width: 370px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 42px 22px;
  @media (max-width: 600px) {
    width: 295.83px;
    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    padding: 33.5803px 17.5897px;
  }
`;
export const LoginDiv = styled(DivFormPattern)`
  height: 502px;
  @media (max-width: 600px) {
    height: 402.69px;
  }
`;
export const RegisterDiv = styled(DivFormPattern)`
  min-height: 1000px;

  @media (max-width: 600px) {
    max-height: 1500px;
  }
`;
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
