import { GlobalStyle } from "../global";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
}
