import DashboardHeader from "../../Components/DashBoardHeader";
import DashboardSubHeader from "../../Components/DashBoardSubheader";
import DashboardMain from "../../Components/DashboardMain";


import { Navigate } from "react-router-dom";

import { useLoginContext } from "../../Contexts/Login";

export default function Dashboard() {
  const { user, loading, logout } = useLoginContext();

  if (loading) {
    return <div>Carregando ...</div>;
  }

  return user ? (
    <div>
      <DashboardHeader logout={logout} />
      <DashboardSubHeader user={user} />
      <DashboardMain />:
    </div>
  ) : (
    <Navigate to="/" replace={true} />
  );
}
