import styled from "styled-components";
import { TitleStyle } from "./Introduce";
import Projectbox from "./Projectbox";
import albaschoolImg from "../img/albaschool.png";
import desserbeeImg from "../img/desserbee.png";

export default function Project() {
  const projects = [
    {
      img: albaschoolImg,
      title: "알바스쿨",
      description: "사업자와 아르바이트생을 위한 통합 업무 관리 플랫폼",
    },
    {
      img: desserbeeImg,
      title: "디저비",
      description: "지도 기반 맞춤형 디저트 매장 탐색 및 커뮤니티 통합 플랫폼",
    },
  ];
  return (
    <>
      <TitleStyle>Projects</TitleStyle>
      <ProjectStyle>
        {projects.map((item, idx) => (
          <Projectbox
            key={idx}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </ProjectStyle>
    </>
  );
}
const ProjectStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 0 2rem;
`;
