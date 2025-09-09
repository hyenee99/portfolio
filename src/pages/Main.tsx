import styled from "styled-components";
import Introduce from "../components/Introduce";
import Strength from "../components/Strength";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <MainPageStyle>
      <Introduce id="about" />
      <Strength id="strength" />
      <Skill id="skill" />
      <Project id="project" />
      <Footer />
    </MainPageStyle>
  );
}
const MainPageStyle = styled.div`
  height: calc(100vh - 3.75rem);
  margin-top: 3.75rem;
`;
