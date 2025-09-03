import styled from "styled-components";

interface sectionProps {
  heading: string;
  content: string;
}
export default function DetailSection({ heading, content }: sectionProps) {
  return (
    <DetailSectionStyle>
      <h3>{heading}</h3>
      <p>{content}</p>
    </DetailSectionStyle>
  );
}
const DetailSectionStyle = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    white-space: pre-line;
  }
`;
