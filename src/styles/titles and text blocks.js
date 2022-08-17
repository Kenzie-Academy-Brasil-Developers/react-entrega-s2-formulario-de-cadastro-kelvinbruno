import styled from "styled-components";

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

export const Title1Variation = styled(Title1)`
font-size: 16px;
color:#FFFFFF;
line-height: 24px;
font-weight: 400;
`

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



export const LogoStyle = styled.span`
  display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 50px;
  color: #ff577f;
`;


