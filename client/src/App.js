import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Header from "./Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        <Header />
        <Home />
        <Projects />
        <About />
        <Contact />
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
