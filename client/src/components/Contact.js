import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

import { Text, LanguageContext } from "../contexts/LanguageContext";

const Contact = ({ opacity }) => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <Wrapper id="contact" opacity={opacity}>
      <Title><Text tid="option4" /></Title>
      <Container>
          <Info href="mailto:lesclotures5etoiles@outlook.com"><Mail />lesclotures5etoiles@outlook.com</Info>
          <Info href="tel:+14385186668"><Call />(438) 518-6668</Info>
          <Info href="https://www.facebook.com/profile.php?id=100089104131045" target="_blank">
            <Facebook />
          </Info>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  opacity: ${(props) => props.opacity};
  margin: 5% 10% 0px 10%;
  border-top: 1px solid var(--dark-grey);
  transition: opacity 0.2s ease-in-out;
  background-color: var(--light-grey);
  padding: 50px 100px;

  @media (width < 1000px) {
    display: flex;
    flex-direction: column;
    margin: 10% 0px;
    padding: 10%;
  }

  animation: ${(props) => props.opacity && "slideUp"} 1s;

  @keyframes slideUp {
    from {
      transform: translateY(800px);
      opacity: 0;
    }
  }
`;


const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
    
  @media (width < 1000px) {
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
`;
const Info = styled.a`
  font-weight: 300;
  line-height: 1.5rem;
  margin: 15px;

  @media (width < 1000px) {
    font-size: 0.9rem;
  }
`
const Mail = styled(IoMdMail)`
  font-size: 1.5rem;
`
const Call = styled(IoCall)`
  font-size: 1.5rem;
`
const Facebook = styled(BsFacebook)`
  font-size: 1.5rem;
`
export default Contact;
