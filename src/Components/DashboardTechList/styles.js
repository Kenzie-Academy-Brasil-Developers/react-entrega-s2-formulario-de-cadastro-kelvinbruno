import styled from "styled-components";

export const TechList = styled.ul`
  width: 780px;
  height: 416px;
  background: #212529;
  border-radius: 4px;
  padding: 22px 19px 22px 19px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: space-between;



  @media (max-width: 820px) {
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
  margin-top: 20px;
  cursor: pointer;
  :hover,
  :focus {
    background: #343b41;
  }
  @media (max-width: 820px) {
    width: 296px;
    height: 416.37px;
  }
`;
