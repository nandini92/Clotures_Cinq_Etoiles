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
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return (() => {
      window.removeEventListener('scroll', handleScroll);
    })
  }, [])

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container >
        <Header />
        <Home />
        <About opacity={scrollTop > 100 ? 1 : 0}/>
        <Projects opacity={scrollTop > 500 ? 1 : 0}/>
        <Contact opacity={scrollTop > 1200 ? 1 : 0}/>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: var(--light-grey);
`;
export default App;
