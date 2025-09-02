import styled from "styled-components";

interface projectProps {
  img: string;
  title: string;
  description: string;
}
export default function Projectbox({ img, title, description }: projectProps) {
  return (
    <ProjectboxStyle>
      <ImgStyle>
        <img src={img} />
        <div className="click-text">자세히 보기</div>
      </ImgStyle>

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

const ImgStyle = styled.div`
  position: relative;

  .click-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #595858;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover img {
    filter: blur(2px);
  }
  &:hover .click-text {
    opacity: 1;
  }
`;
