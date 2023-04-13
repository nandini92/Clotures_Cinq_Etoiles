import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Header from "./Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useEffect } from "react";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the % of the page that user has scrolled through
      setScrollPercentage((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    }

    window.addEventListener('scroll', handleScroll);

    return (() => {
      window.removeEventListener('scroll', handleScroll);
    })
  }, [])

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header scrollPercentage={scrollPercentage}/>
      <Container >
        <Home />
        <About opacity={scrollPercentage > 20 ? 1 : 0}/>
        <Projects opacity={scrollPercentage > 45 ? 1 : 0}/>
        <Contact opacity={scrollPercentage > 85 ? 1 : 0}/>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  height: 100%;
  background-color: var(--light-grey);
`;
export default App;
