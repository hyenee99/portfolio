import styled from "styled-components";
import { TitleStyle } from "./Introduce";
import Skillbox from "./Skillbox";

export default function Skill() {
  const skills = [
    {
      title: "🛠️ 언어 및 프레임워크",
      content: `
      HTML
      CSS
      JavaScript
      TypeScript
      React
      `,
    },
    {
      title: "🪄 스타일링 도구",
      content: `
      TailwindCSS
      Styled-components
      `,
    },
    {
      title: "🌱 버전 관리 및 협업",
      content: `
        Git
        GitHub
      `,
    },
  ];
  return (
    <>
      <TitleStyle>Skills</TitleStyle>
      <SkillStyle>
        {skills.map((item, idx) => (
          <Skillbox key={idx} title={item.title} content={item.content} />
        ))}
      </SkillStyle>
    </>
  );
}
const SkillStyle = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;
