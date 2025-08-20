import styled from "styled-components";
import profileImg from "../img/profile.png";
import AboutMe from "../content/AboutMe";
import { IoPersonSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { IoSchool } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import DetailBox from "./Detailbox";

export default function Introduce() {
  const details = [
    {
      Icon: IoPersonSharp,
      title: "이름",
      content: "윤혜원",
    },
    {
      Icon: FaBirthdayCake,
      title: "생년월일",
      content: "1999.08.08",
    },
    {
      Icon: GiPositionMarker,
      title: "위치",
      content: "인천광역시",
    },
    {
      Icon: IoSchool,
      title: "학력",
      content: "성공회대학교\n(컴퓨터공학, 소프트웨어공학)",
    },
    {
      Icon: MdEmail,
      title: "이메일",
      content: "twoddal2@naver.com",
    },
    {
      Icon: FaBloggerB,
      title: "블로그",
      content: "https://hyenee99.tistory.com/",
    },
  ];

  return (
    <>
      <IntroduceStyle>
        <img src={profileImg} alt="profile" />
        <DescriptionStyle>
          <AboutMe />
        </DescriptionStyle>
      </IntroduceStyle>
      <TitleStyle>About me</TitleStyle>
      <DetailStyle>
        {details.map((item, idx) => (
          <DetailBox
            key={idx}
            Icon={item.Icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </DetailStyle>
    </>
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

const TitleStyle = styled.h1`
  width: fit-content;
  font-size: 2.5rem;
  color: #e4f7ff;
  -webkit-text-stroke: 0.5px #9c9c9c;
  margin: 0 auto 2rem;
`;

const DetailStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0 5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem;
  }
`;
