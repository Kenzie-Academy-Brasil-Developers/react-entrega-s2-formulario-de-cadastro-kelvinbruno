import styled from "styled-components";

export const TechList = styled.ul`
  width: 780px;
  height: 416px;
  background: #212529;
  border-radius: 4px;
  padding: 22px 19px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;



  @media (max-width: 800px) {
    width: 296px;
    height: 416.37px;
  }
`;

export const TechListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12.182px;
  gap: 12.18px;
  width: 732px;
  height: 49px;
  background: #121214;
  border-radius: 4.06066px;
  cursor: pointer;
  :hover,
  :focus {
    background: #343b41;
  }
  @media (max-width: 800px) {
    width: 296px;
    height: 416.37px;
  }
`;


