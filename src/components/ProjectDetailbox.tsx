import styled from "styled-components";
import DetailSection from "./DetailSection";

interface props {
  introduce: string;
  period: string;
  member: string;
  skill: string;
  contribution: string;
}
export default function ProjectDetailBox({
  introduce,
  period,
  member,
  skill,
  contribution,
}: props) {
  return (
    <ProjectDetailBoxStyle>
      <DetailSection heading="⭐ 소개" content={introduce} />
      <DetailSection heading="📆 프로젝트 기간" content={period} />
      <DetailSection heading="👥 팀 구성" content={member} />
      <DetailSection heading="🛠️ 사용 기술" content={skill} />
      <DetailSection heading="🏅 기여" content={contribution} />
    </ProjectDetailBoxStyle>
  );
}
export const ProjectDetailBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 3px solid #edd4ff;
  border-radius: 0.5rem;
  background-color: rgba(255, 252, 232, 0.8);
  margin-bottom: 1rem;

  img {
    width: 40%;
    border-radius: 0.5rem;
  }
`;
