import DashboardHeader from "../../Components/DashBoardHeader";
import DashboardSubHeader from "../../Components/DashBoardSubheader";
import DashboardMain from "../../Components/DashboardMain";

export default function Dashboard({ user, logout }) {
  return (
    <div>
      <DashboardHeader logout={logout} />
      <DashboardSubHeader user={user} />
      <DashboardMain user={user} />
    </div>
  );
}
