import DashboardHeader from "../../Components/DashBoardHeader";
import DashboardSubHeader from "../../Components/DashBoardSubheader";
import DashboardMain from "../../Components/DashboardMain";

import { useContext } from "react";
import { LoginContext } from "../../Contexts/Login";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const { user, loading, logout } = useContext(LoginContext);
  const history = useHistory();

  if(loading){
    return <div>Carregando ...</div>
  }

  return user ? (
    <div>
      <DashboardHeader logout ={logout} />
      <DashboardSubHeader user ={user}/>
      <DashboardMain/>:
    </div>
  ) : (
    history.push("/")
  );
}
