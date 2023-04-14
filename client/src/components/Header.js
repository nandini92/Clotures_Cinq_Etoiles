import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import LanguageSelector from "./LanguageSelector";
import { Text } from "../contexts/LanguageContext";

const Header = ({ scrollPercentage }) => {
  return (
    <>
      <Wrapper>
        <Contents>
          <Logo
            src="/assets/clotures_cinq_etoiles.jpg"
            alt="logo clôtures cinq étoiles"
          />
          <Links>
            <Option smooth to="/#home">
              <Text tid="option1" />
            </Option>
            <Option smooth to="/#about-us">
              <Text tid="option2" />
            </Option>
            <Option smooth to="/#projects">
              <Text tid="option3" />
            </Option>
            <Option smooth to="/#contact">
              <Text tid="option4" />
            </Option>
          </Links>
        <LanguageSelector />
        </Contents>
        <ScrollTracker
          style={{ width: `${scrollPercentage}%` }}
        ></ScrollTracker>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
`;
const Contents = styled.div`
  padding: 0px 250px;
  display: flex;
  background-color: white;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 100px;
`;
const Links = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;
const Option = styled(HashLink)`
  color: var(--dark-grey);
  text-decoration: none;
  text-align: center;
  line-height: 100px;
  width: 100%;
  transition: all 0.35s ease-in-out;

  &:hover {
    background-color: var(--yellow);
    font-size: 1.08em;
  }
`;
const ScrollTracker = styled.div`
  height: 5px;
  background-color: var(--yellow);
`;
export default Header;
