import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the % of the page that user has scrolled through
      setScrollPercentage(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header scrollPercentage={scrollPercentage} />
      <Container>
        {window.screen.width > 1000 ? (
          <>
            <Home />
            <About opacity={scrollPercentage > 15 ? 1 : 0} />
            <Projects opacity={scrollPercentage > 50 ? 1 : 0} />
            <Contact opacity={scrollPercentage > 80 ? 1 : 0} />
          </>
        ) : (
          <>
            <Home />
            <About opacity={scrollPercentage > 10 ? 1 : 0} />
            <Projects opacity={scrollPercentage > 60 ? 1 : 0} />
            <Contact opacity={scrollPercentage > 90 ? 1 : 0} />
          </>
        )}
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  height: 100%;
  background-color: var(--light-grey);
`;

export default App;
