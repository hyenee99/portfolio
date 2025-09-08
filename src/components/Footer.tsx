import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyle>
      <p>© 2025 YoonHyewon. All Rights Reserved.</p>
    </FooterStyle>
  );
}
const FooterStyle = styled.div`
  height: 8rem;
  border-top: 1px solid #595858;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #595858;
`;
