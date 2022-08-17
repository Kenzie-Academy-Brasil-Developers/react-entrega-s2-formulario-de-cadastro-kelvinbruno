import styled from "styled-components";

export const GlobalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
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

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 60%; //arrumar o width e o justify-content para ficar alinhado as tecnologias
  height: ${(props) => props.height};
  background: #121214;
  border-bottom: 1px solid #212529;
  padding: 0px 20% 0px 20%;
  ${(props) => props.add}
`;

export const MainStyled = styled.main`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) { 
    display: none;
  }
  
`;
