import styled from "styled-components";



export const ModalFormPattern = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 68px 22px 32px;
  gap: 22px;
  position: absolute;
  width: 369px;
  height: 342px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media (max-width: 800px) {
    padding: 54.5474px 17.6477px 25.6694px;
    gap: 17.65px;
    width: 296px;
    height: 274.34px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
  }
`;

export const ModalHeaderPattern = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 20px;
  gap: 10px;

  width: 369px;
  height: 50px;
  background: #343b41;
  border-radius: 4px 4px 0px 0px;

  @media (max-width: 800px) {
    padding: 9.62602px 16.0434px;
    gap: 8.02px;
    width: 296px;
    height: 40.11px;
    border-radius: 3.20867px 3.20867px 0px 0px;
  }

  i {
    color: white;
  }
`;

export const ModalHeaderTitle = styled.span`
  display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #f8f9fa;

  @media (max-width: 800px) {
    font-size: 11.2304px;
    line-height: 19px;
  }
`;
