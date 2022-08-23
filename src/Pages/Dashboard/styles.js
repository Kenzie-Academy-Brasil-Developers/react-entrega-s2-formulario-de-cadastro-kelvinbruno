import styled from "styled-components";

export const DashboardOrganizer = styled.div`
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
