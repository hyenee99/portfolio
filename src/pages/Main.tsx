import styled from "styled-components";
import Introduce from "../components/Introduce";
import Strength from "../components/Strength";
import Skill from "../components/Skill";

export default function MainPage() {
  return (
    <MainPageStyle>
      <Introduce />
      <Strength />
      <Skill />
    </MainPageStyle>
  );
}
const MainPageStyle = styled.div`
  height: calc(100vh - 3.75rem);
  margin-top: 3.75rem;
`;
