import styled from "styled-components";
import { TitleStyle } from "./Introduce";
import strengthImg1_1 from "../img/strength1_1.png";
import strengthImg1_2 from "../img/strength1_2.png";
import strengthImg2 from "../img/strength2.png";
import Strength1 from "../content/Strength1";
import Strength2 from "../content/Strength2";
type props = {
  id?: string;
};

export default function Strength({ id }: props) {
  return (
    <StrengthStyle id={id}>
      <TitleStyle>Strength</TitleStyle>
      <h2> 강점 1. 원활한 커뮤니케이션 능력</h2>
      <StrengthBox>
        <ImgStyle>
          <img src={strengthImg1_1} alt="강점1_1" />
          <img src={strengthImg1_2} alt="강점1_2" />
        </ImgStyle>
        <Strength1 />
      </StrengthBox>

      <h2 style={{ marginTop: "2rem" }}> 강점 2. 빠른 기술 습득력과 적응력</h2>
      <StrengthBox2>
        <img src={strengthImg2} alt="강점2" />
        <Strength2 />
      </StrengthBox2>
    </StrengthStyle>
  );
}
const StrengthStyle = styled.div`
  padding: 2rem;

  h2 {
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ImgStyle = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;

  img {
    border-radius: 1rem;
  }
`;

const StrengthBox = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  font-size: 1.2rem;
  gap: 1rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const StrengthBox2 = styled.div`
  display: flex;
  white-space: pre-line;
  font-size: 1.2rem;
  align-items: center;
  gap: 1rem;

  img {
    width: 35%;
    border-radius: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 80%;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
