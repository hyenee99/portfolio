import styled from "styled-components";
import profileImg from "../img/profile.png";
import AboutMe from "../content/AboutMe";

export default function Introduce() {
  return (
    <IntroduceStyle>
      <img src={profileImg} alt="profile" />
      <DescriptionStyle>
        <AboutMe />
      </DescriptionStyle>
    </IntroduceStyle>
  );
}

const IntroduceStyle = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 95%;
    overflow: hidden;
  }
`;

const DescriptionStyle = styled.div`
  white-space: pre-line;
  font-size: 1.2rem;
  width: 60%;
`;
