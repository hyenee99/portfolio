import styled from "styled-components";

export default function Desserbee() {
  return (
    <DesserbeeStyle>
      <h1>Desserbee</h1>
    </DesserbeeStyle>
  );
}
const DesserbeeStyle = styled.div`
  height: calc(100vh - 3.75rem);
  margin-top: 3.75rem;
`;
