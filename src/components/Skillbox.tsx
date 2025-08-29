import styled from "styled-components";

interface skillProps {
  title: string;
  content: string;
}

function Skillbox({ title, content }: skillProps) {
  return (
    <SkillboxStyle>
      <h2>{title}</h2>
      <p>{content}</p>
    </SkillboxStyle>
  );
}
const SkillboxStyle = styled.div`
  border: 3px solid #edd4ff;
  background-color: rgba(255, 252, 232, 0.8);
  width: 30%;
  height: 13rem;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  white-space: pre-line;

  h2 {
    margin: 0 auto;
    font-size: 1.3rem;
  }

  p {
    font-size: 1.1rem;
    font-family: "Paperozi";
    color: #595858;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;

    h2 {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;

    h2 {
      font-size: 1.3rem;
    }
  }
`;

export default Skillbox;
