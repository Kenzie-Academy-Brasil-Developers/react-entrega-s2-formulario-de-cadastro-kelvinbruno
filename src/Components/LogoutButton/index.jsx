import { ShortBlackButton } from "../../styles/buttons";

export default function LogoutButton({logout}) {
  return <ShortBlackButton onClick={() => logout()}>Sair</ShortBlackButton>;
}
