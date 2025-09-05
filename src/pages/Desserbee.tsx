import styled from "styled-components";
import ProjectDetailBox, {
  ProjectDetailBoxStyle,
} from "../components/ProjectDetailbox";
import DetailSection from "../components/DetailSection";
import desserbee_solve_1 from "../img/desserbee_solve_1.png";
import desserbee_solve_2 from "../img/desserbee_solve_2.png";
import desserbee_solve_3 from "../img/desserbee_solve_3.png";
import { CommitButtonStyle } from "./AlbaSchool";

export default function Desserbee() {
  const data = {
    introduce: `지도 기반 맞춤형 디저트 매장 탐색 및 커뮤니티 통합 플랫폼`,
    period: "2025.04.23 ~ 2025.07.13 (약 3개월)",
    member:
      "PM 1명, 디자이너 2명, 백엔드 3명, 앱 프론트엔드 2명, 웹 프론트엔드 1명(본인)",
    skill: "React, TypeScript, Next.js, TailwindCSS",
    contribution: `🔹디자이너가 제공한 UI 시안을 실제 서비스 화면으로 구현 \n 🔹약 20여 개의 UI 컴포넌트/페이지(기본 정보, 메뉴, 공지, 쿠폰, 통계 등) 설계 및 단독 개발 \n🔹각 화면별 CRUD 기능 자체 설계 및 구현\n🔹REST API 연동을 통해 실시간 데이터 반영 및 처리 \n 🔹입력값 검증, 에러 처리 등 사용자 경험을 고려하여 개발\n🔹백엔드 / 디자이너와 협업하며 디자인 시안 반영 및 기능 상세화`,
  };

  return (
    <DesserbeeStyle>
      <h2>디저비</h2>
      <ProjectDetailBox
        introduce={data.introduce}
        period={data.period}
        member={data.member}
        skill={data.skill}
        contribution={data.contribution}
      />
      <h2>트러블 슈팅</h2>
      <ProjectDetailBoxStyle>
        <DetailSection
          heading="문제 정의 1️⃣"
          content="가게 기본 정보 수정 시, 원래 있던 정보와 동일할 때도 ‘완료ʼ 버튼이 활성화되어 불필요한 제출이 발생하는 문제가 있었습니다 ."
        />
        <h3>해결 방법</h3>
        <img src={desserbee_solve_2} />
        <img src={desserbee_solve_1} />
        <p>
          React Hook Form 의 isDirty 상태값을 활용해 , 폼의 값이 초기 값과 다를
          경우에만 완료 버튼이 활성화되도록 개선하였습니다 .
        </p>
        <DetailSection
          heading="결과"
          content="불필요한 데이터 제출을 예방하여 서버 트래픽을 감소시키고, 사용자의 조작 오류로 인한 혼란을 줄였습니다."
        />
      </ProjectDetailBoxStyle>

      <ProjectDetailBoxStyle>
        <DetailSection
          heading="문제 정의 2️⃣"
          content="서버에서 빈 응답이나 예상과 다른 형식의 데이터가 반환될 때, 기존에 적절한 처리가 없어 클라이언트에서 JSON 파싱 오류가 발생하고, 이로 인해 웹 화면이 멈추거나 정보가 정상적으로 표시되지 않는 문제가 있었습니다."
        />
        <h3>해결 방법</h3>
        <img src={desserbee_solve_3} />
        <p>
          🔹 Content-Type과 Content-Length 헤더를 검사하여, JSON 응답일 때만
          response.json()을 호출하고, 그렇지 않은 경우엔 response.text()로
          안전하게 처리하도록 변경했습니다.
        </p>
        <p>
          🔹 예외를 throw하지 않고 에러 정보를 포함한 객체를 반환하는 방식으로
          바꾸어, 호출 측에서 에러를 유연하게 처리할 수 있도록 하였습니다.
        </p>

        <h3>결과</h3>
        <p>
          예외 상황에서도 웹이 정상적으로 동작하도록 개선하여{" "}
          <strong>서비스 안정성</strong>을 높였습니다 .
        </p>
        <CommitButtonStyle
          href="https://github.com/swyp-season8-4-team/frontend/commit/1b8de7066282cbcd953576b913c7b37bcfe96674"
          target="_blank"
          rel="noopener noreferrer"
        >
          커밋 확인하기
        </CommitButtonStyle>
      </ProjectDetailBoxStyle>
    </DesserbeeStyle>
  );
}
const DesserbeeStyle = styled.div`
  height: calc(100vh - 3.75rem);
  margin-top: 3.75rem;
  padding: 0 2rem;

  h2 {
    padding: 0.5rem;
  }
`;
