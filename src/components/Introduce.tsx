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
    width: 30%;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 40%;
    }
  }
`;

const DescriptionStyle = styled.div`
  white-space: pre-line;
  font-size: 1.2rem;
  width: 60%;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    font-size: 0.8rem;
  }
`;
