import styled from "styled-components";
import ProjectDetailBox, {
  ProjectDetailBoxStyle,
} from "../components/ProjectDetailbox";
import alba_problem1 from "../img/alba_problem1.png";
import alba_problem1_solve from "../img/alba_problem1_solve.png";
import alba_problem2_solve from "../img/alba_problem2_solve.png";
import DetailSection from "../components/DetailSection";

export default function AlbaSchool() {
  const data = {
    title: "알바스쿨",
    introduce: `사업자와 아르바이트생을 위한 통합 업무 관리 플랫폼입니다. 가게 매뉴얼 관리, 근무 스케줄 관리, 메신저 기능을 한 곳에서 제공합니다.`,
    period: "2025.01 ~ 2025. 02 (약 6주)",
    member: "백엔드 2명, 프론트엔드 3명 (본인 포함)",
    skill: "React, TypeScript, TanStack Query, Zustand, MUI, Styled-components",
    contribution: `🔹프로젝트 아이디어 제안 및 UI/UX 기획 주도 \n 🔹로그인, 회원가입, 교육 페이지 등 10개 이상의 주요 화면 구현 \n🔹회원가입, 로그인 기능 구현 및 zustand를 활용한 전역 상태(인증, 사용자 정보) 관리\n🔹교육 페이지 CRUD 기능 구현 \n 🔹마이페이지 내 가게 정보 및 직원 관리 기능 구현\n🔹사용자 권한별 라우팅 보호 및 맞춤형 접근 제어 구현
    🔹TanStack Query를 활용한 REST API 연동으로 서버 상태 관리와 데이터 캐싱을 효율적으로 처리`,
  };

  return (
    <AlbaSchoolStyle>
      <h2>알바스쿨</h2>
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
          content="사장과 직원 권한 구분 없이 URL 경로 끝부분 (/manager, /staff) 만으로 접근 권한을 나누어, 사용자가 잘못된 조작을 할 가능성과 혼란을 겪을 우려가 있었습니다."
        />
        <img src={alba_problem1} />
        <h3>해결 방법</h3>
        <img src={alba_problem1_solve} />
        <p>
          🔹ProtectedRoute 컴포넌트를 구현하여 사용자(사장, 직원) 역할에 따라
          페이지 접근 권한을 제어하였습니다.
        </p>
        <p>
          {" "}
          🔹권한이 없는 경우 안내 메시지(Toast) 노출 후 이전 페이지로 자동
          리디렉션되도록 개선하였습니다.
        </p>
        <DetailSection
          heading="결과"
          content="사용자는 자신의 권한 범위 내에서만 기능을 사용할 수 있어, 의도치 않은 잘못된 조작 가능성이 줄어들고 서비스 이용에 혼란이 없어졌습니다."
        />
        <CommitButtonStyle
          href="https://github.com/albaschool/frontend/pull/23/commits/55378fa5b81f404284b768e976f452ff25eb9400"
          target="_blank"
          rel="noopener noreferrer"
        >
          커밋 확인하기
        </CommitButtonStyle>
      </ProjectDetailBoxStyle>

      <ProjectDetailBoxStyle>
        <DetailSection
          heading="문제 정의 2️⃣"
          content="사용자가 데이터를 변경한 뒤에도 화면이 자동으로 갱신되지 않아 새로고침이 필요한 문제가 있었습니다."
        />
        <h3>해결 방법</h3>
        <img src={alba_problem2_solve} />
        <p>
          Tanstack Query 의 queryClient.invalidateQueries 를 사용해서 캐시가
          무효화되면 자동으로 새로운 데이터를 서버에서 다시 가져오게 하여 UI 를
          최신 데이터로 업데이트 시켰습니다 .
        </p>

        <h3>결과</h3>
        <p>
          🔹사용자는 별도의 조작 없이도 <strong>즉시 변화된 화면</strong>을
          확인할 수 있게 되었습니다.
        </p>
        <p>
          🔹기존에는 새로고침 후 약{" "}
          <strong>2초 걸리던 업데이트 시간이 0.5초 이내</strong>로
          단축되었습니다.
        </p>
      </ProjectDetailBoxStyle>
    </AlbaSchoolStyle>
  );
}
const AlbaSchoolStyle = styled.div`
  height: calc(100vh - 3.75rem);
  margin-top: 3.75rem;
  padding: 0 2rem;

  h2 {
    padding: 0.5rem;
  }
`;

const CommitButtonStyle = styled.a`
  width: 10%;
  height: 2.5rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  border: 3px solid #edd4ff;
  background-color: #e4f7ff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #edd4ff;
    font-weight: bold;
  }
`;
