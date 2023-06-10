import { useState } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import LanguageSelector from "./LanguageSelector";
import { Text } from "../contexts/LanguageContext";
import Menu from "./Menu";


const Header = ({ scrollPercentage }) => {
  const [rollDown, setRollDown] = useState(false);

  const scrollWithOffset = (el, yOffset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return (
    <>
      <Wrapper>
        <Content>
          <Logo
            src="/assets/clotures_cinq_etoiles.jpg"
            alt="logo clôtures cinq étoiles"
          />
          {window.screen.width > 1400 ? (
            <Links>
              <Option smooth to="/#home">
                <Text tid="option1" />
              </Option>
              <Option smooth to="/#about-us"  scroll={el => scrollWithOffset(el, -300)}>
                <Text tid="option2" />
              </Option>
              <Option smooth to="/#projects">
                <Text tid="option3" />
              </Option>
              <Option smooth to="/#contact" >
                <Text tid="option4" />
              </Option>
            </Links>
          )
          : (!rollDown ? <Burger onClick={() => setRollDown(true)}/> : <Cross onClick={() => setRollDown(false)}/>)
          }
            <LanguageSelector />
        </Content>
        <ScrollTracker
          style={{ width: `${scrollPercentage}%` }}
        ></ScrollTracker>
      </Wrapper>
      <Menu rollDown={rollDown} setRollDown={setRollDown}/>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
`;
const Content = styled.div`
  padding: 0px 15%;
  display: flex;
  background-color: white;
  justify-content: space-between;

  @media (width < 400px) {
    padding: 10px 10% 10px 5%;
  }
`;
const Logo = styled.img`
  height: 100px;

  @media (width < 400px) {
    height: 80px;
  }
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
  white-space: nowrap;
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
const Burger = styled(GiHamburgerMenu)`
  font-size: 1.10em;
  align-self: center;
  position: relative;
`;
const Cross = styled(RxCross2)`
  font-size: 1.10em;
  align-self: center;
  position: relative;
`;
export default Header;
