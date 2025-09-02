import styled from "styled-components";

interface projectProps {
  img: string;
  title: string;
  description: string;
}
export default function Projectbox({ img, title, description }: projectProps) {
  return (
    <ProjectboxStyle>
      <img src={img} />
      <h2>{title}</h2>
      <p>{description}</p>
    </ProjectboxStyle>
  );
}
const ProjectboxStyle = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    object-fit: contain;
    border-radius: 1rem;
    width: 100%;
  }

  p {
    color: #595858;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;

    h2 {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;

    h2 {
      font-size: 1.2rem;
    }
  }
`;
