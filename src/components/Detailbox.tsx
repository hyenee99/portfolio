import styled from "styled-components";
import type { IconBaseProps } from "react-icons";

interface detailProps {
  Icon: React.ComponentType<IconBaseProps>;
  title: string;
  content: string;
}
export default function DetailBox({ Icon, title, content }: detailProps) {
  return (
    <DetailBoxStyle>
      <Icon size={25} style={{ color: "#595858" }} />
      <ContentStyle>
        <p style={{ color: "#595858" }}>{title}</p>
        <p>{content}</p>
      </ContentStyle>
    </DetailBoxStyle>
  );
}
const DetailBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
`;
