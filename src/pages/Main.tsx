import styled from "styled-components";
import Introduce from "../components/Introduce";
import Strength from "../components/Strength";

export default function MainPage() {
  return (
    <MainPageStyle>
      <Introduce />
      <Strength />
    </MainPageStyle>
  );
}
const MainPageStyle = styled.div`
  height: calc(100vh - 3.75rem);
  margin-top: 3.75rem;
`;
