import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import logo from "./assets/clotures_cinq_etoiles.jpg";

const Header = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="logo clôtures cinq étoiles" />
      <Links>
      <Option smooth to="/#home">Home</Option>
      <Option smooth to='/#projects'>Projects</Option>
      <Option smooth to='/#about-us'>About Us</Option>
      <Option smooth to='/#contact'>Contact Us</Option>
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  background-color: white;
  height: 110px;
  width: 100%;
  padding: 0px 100px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--dark-grey);
`;
const Logo = styled.img`
    height: 100px;
`
const Links = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`
const Option = styled(HashLink)`
    color: var(--dark-grey);
    text-decoration: none;
    text-align: center;
    line-height: 110px;
    width: 100%;

    &:hover {
        background-color: var(--light-grey);
    }
`
export default Header;
