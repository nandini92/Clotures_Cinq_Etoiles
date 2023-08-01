import styled from "styled-components";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { TfiLock } from "react-icons/tfi";
import { MdCheckCircle } from "react-icons/md";

import { Text } from "../contexts/LanguageContext";

const About = ({ opacity }) => {
  return (
    <Wrapper id="about-us" opacity={opacity}>
      <Separator opacity={opacity} />
      <Content>
        <Founder>
          <Avatar src="/assets/AlexandreFagnan.jpg" alt="Founder" />
          <Profile>
          <p>Alexandre Fagnan</p>
          <p><Text tid="founder" /></p>
          </Profile>
        </Founder>
        <Description opacity={opacity}>
          <p>
            <Text tid="aboutUsDescription" />
          </p>
        </Description>
      </Content>
      <Icons>
        <div opacity={opacity}>
          <AiOutlineEyeInvisible style={{ fontSize: "50px" }} />
          <p>
            <Text tid="icon1" />
          </p>
        </div>
        <div opacity={opacity}>
          <TfiLock style={{ fontSize: "50px" }} />
          <p>
            <Text tid="icon2" />
          </p>
        </div>
        <div opacity={opacity}>
          <MdCheckCircle style={{ fontSize: "50px" }} />
          <p>
            <Text tid="icon3" />
          </p>
        </div>
      </Icons>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10% 5% 10%;
  opacity: ${(props) => props.opacity};

  @media (width < 1000px) {
    display: block;
    margin: 10%;
  }
`;

const Separator = styled.div`
  border-top: 1px solid var(--dark-grey);
  display: flex;
  justify-content: center;
  width: 100%;

  animation: ${(props) => props.opacity && "expand"} 1s;

  @keyframes expand {
    from {
      width: 0px;
    }
  }
`;
const Founder = styled.div`
  width: 50%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (width < 1000px) {
    width: 100%;
    padding: 8% 0;
  }
`
const Profile =  styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;

    p:nth-child(even){
      padding-top: 5px;
      font-weight: 300;
    }
 `;

const Avatar = styled.img`
  z-index: 100;
  height: 150px;
  width: 150px;
  border-radius: 75px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 80px 0px;

  @media (width < 1000px) {
    display: block;
    padding: 0%;
  }
`;

const Icons = styled.div`
  width: 50%;
  padding: 100px 0 0 0;
  align-self: center;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media (width < 1000px) {
    width: 100%;
    padding: 5% 0;
  }
`;

const Description = styled.div`
  width: 50%;
  font-weight: 300;
  line-height: 1.5rem;

  @media (width < 1000px) {
    width: 100%;
    font-size: 0.8em;
  }

  animation: ${(props) => props.opacity && "slideLeft"} 1s;

  @keyframes slideLeft {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
export default About;
