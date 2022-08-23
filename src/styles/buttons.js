import styled from "styled-components";

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

export const ShortBlackButton = styled.button`
  padding: 0px;
  border: none;
  background: #212529;
  border-radius: 4px;

  width: 55.49px;
  height: 32px;
  padding: 0px 16px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  cursor: pointer;

  text-align: center;



  color: #f8f9fa;
  :hover{
    background: #343B41;
  }
`;



