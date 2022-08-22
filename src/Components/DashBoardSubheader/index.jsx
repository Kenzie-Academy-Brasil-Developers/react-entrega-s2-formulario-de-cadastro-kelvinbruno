import { HeaderStyled } from "../../styles/forms and divs";
import { Title1, InfoSpan } from "../../styles/titles and text blocks";

export default function DashboardSubHeader() {
    // const formattedName = user.name.split(' ').slice(0,2).join(' ');
    // console.log(formattedName)
  return (
    <HeaderStyled height = '131px'>
     <Title1>Olá,  {/*formattedName*/}</Title1>
     <InfoSpan>{/*user.course_module*/}</InfoSpan>
    </HeaderStyled>
  );
}
