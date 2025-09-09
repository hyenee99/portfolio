import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <HeaderStyle $scrolled={scrolled}>
        <h1>🩷 Yoon hyewon's portfolio</h1>

        <nav>
          <ul>
            <li>
              <Link to="/#about">About me</Link>
            </li>
            <li>
              <Link to="/#strength">Strength</Link>
            </li>
            <li>
              <Link to="/#skill">Skills</Link>
            </li>
            <li>
              <Link to="/#project">Projects</Link>
            </li>
          </ul>
        </nav>
      </HeaderStyle>
    </>
  );
}

const HeaderStyle = styled.div<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 3.75rem;
  background-color: ${({ $scrolled }) =>
    $scrolled ? "rgba(255, 255, 255, 0.5)" : "transparent"};
  transition: background-color 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    padding: 0 1.25rem;
    font-size: 1.25rem;
    color: white;
    -webkit-text-stroke: 0.5px #595858;
  }
  nav {
    width: 50%;
    padding: 0 1.25rem;
    cursor: pointer;
    color: #595858;

    ul {
      display: flex;
      justify-content: space-between;

      & > li:hover {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    height: 3.75rem;
    h1 {
      font-size: 1rem;
      padding: 0 0.5rem;
    }
    nav {
      width: 70%;
      padding: 0 0.5rem;
      ul > li {
        font-size: 0.9rem;
        padding: 0 0.25rem;
      }
    }
  }

  @media (max-width: 480px) {
    height: 3rem;
    h1 {
      font-size: 0.8rem;
      padding: 0 0.2rem;
    }
    nav {
      width: 90%;
      padding: 0 0.2rem;
      ul > li {
        font-size: 0.8rem;
        padding: 0 0.1rem;
      }
    }
  }
`;
