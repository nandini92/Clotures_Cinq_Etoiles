import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { BsFacebook } from "react-icons/bs";

import { Text, LanguageContext } from "../contexts/LanguageContext";

const Contact = ({ opacity }) => {
  const { dictionary } = useContext(LanguageContext);
  const fullName = useRef();
  const email = useRef();
  const message = useRef();

  const [formAlert, setFormAlert] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    // TODO: refactor to use Axios
    fetch("/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName.current.value,
        email: email.current.value,
        message: message.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setFormAlert("Your inquiry has been sent successfully!");
        } else {
          setFormAlert("Something has gone wrong! Please try again later.");
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper id="contact" opacity={opacity}>
      <Title><Text tid="option4" /></Title>
      <Container>
        <div>
          <p><span>{dictionary.emailLabel}</span>: lesclotures5etoiles@outlook.com</p>
          <p><span>{dictionary.numberLabel}</span>: (438) 518-6668</p>
          <Link
            target="_blank"
            to={"https://www.facebook.com/profile.php?id=100089104131045"}
          >
            <BsFacebook />
          </Link>
        </div>
        <Form onSubmit={(e) => sendEmail(e)}>
          <input
            ref={fullName}
            type="text"
            placeholder={dictionary.formName}
            name="user_name"
            required
          />
          <input
            ref={email}
            type="email"
            placeholder={dictionary.formEmail}
            name="user_email"
            required
          />
          <textarea
            ref={message}
            name="message"
            placeholder={dictionary.fromInquiry}
            required
          ></textarea>
          <Button type="submit">Send Message</Button>
        </Form>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  opacity: ${(props) => props.opacity};
  margin: 80px 80px 0px 80px;
  border-top: 1px solid var(--dark-grey);
  transition: opacity 0.2s ease-in-out;
  background-color: var(--light-grey);
  padding: 50px 100px;

  p {
    font-weight: 300;
    margin: 10% 0 0 0;
  }

  span {
    font-weight: 500;
  }

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
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 50px 0px;
    
  @media (width < 1000px) {
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (width < 1000px) {
    padding-top: 10%;
  }

  * {
    margin: 5px 0px;
    width: 30vw;

    
  @media (width < 1000px) {
    width: 100%;
  }
  }
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  color: var(--dark-grey);
  background-color: var(--yellow);
  border-radius: 0.5rem;
  overflow :hidden; 
  padding: 1rem 2rem;
  text-align: center;
  width: 200px;
  text-decoration: none;
  transition: 0.2s transform ease-in-out;
  will-change: transform;

  &:hover{
    color: var(--yellow);
  }

  &::after{
    background-color: var(--dark-grey);
    border-radius: 0.5rem;
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-110%, 0) rotate(10deg);
    transform-origin: bottom left;
    transition: 0.2s transform ease-out;
    z-index: -1;
  }

  &:hover::after{
    transform: translate(0, 0);
  }
`;
export default Contact;
