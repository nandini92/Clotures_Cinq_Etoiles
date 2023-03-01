import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "./assets/clotures_cinq_etoiles.jpg";

const Header = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="logo clôtures cinq étoiles" />
      <Links>
      <Option to="/">Home</Option>
      <Option>Projects</Option>
      <Option>About Us</Option>
      <Option>Contact Us</Option>
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  height: 110px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
`;
const Logo = styled.img`
    height: 100px;
`
const Links = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`
const Option = styled(NavLink)`
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
