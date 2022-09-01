import { ShortBlackButton } from "../../styles/buttons";

interface ILogoutButtonProps{
  logout: () => void;
}

export default function LogoutButton({logout}: ILogoutButtonProps) {
  return <ShortBlackButton onClick={() => logout()}>Sair</ShortBlackButton>;
}
