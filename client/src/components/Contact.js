import styled from "styled-components";
import { useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoLocation } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

import { Text, LanguageContext } from "../contexts/LanguageContext";

const Contact = ({ opacity }) => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <Wrapper id="contact" opacity={opacity}>
      <ContactWrapper>
        <Title>
          <Text tid="ContactTitle" />
        </Title>
        <Card>
          <Info>
            <Mail />
            <div>
              <a
                href="mailto:lesclotures5etoiles@outlook.com"
                style={{ fontWeight: 600 }}
              >
                lesclotures5etoiles@outlook.com
              </a>
              <p>
                <Text tid="emailPrompt" />
              </p>
            </div>
          </Info>
          <Info>
            <Call />
            <div>
              <a href="tel:+14 38-518 6668" style={{ fontWeight: 600 }}>
                (438) 518-6668
              </a>
              <p>
                <Text tid="phonePrompt" />
              </p>
            </div>
          </Info>
          <Info>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100089104131045"
                target="_blank"
              >
                <Facebook />
              </a>
            </div>
            <p>
              <Text tid="facebookPrompt" />
            </p>
          </Info>
        </Card>
        {/* <Card>
          <h3 style={{ fontWeight: 600, textAlign: "center", margin: "15px" }}>
            Opening Hours
          </h3>
          <OpeningHours>
            <Days>Monday-Friday</Days>
            <p>9am - 6pm</p>
          </OpeningHours>
          <OpeningHours>
            <Days>Saturday</Days>
            <p>9am - 4pm</p>
          </OpeningHours>
          <OpeningHours>
            <Days>Sunday</Days>
            <p>Closed</p>
          </OpeningHours>
          <OpeningHours>
            <Days>Public Holidays</Days>
            <p>On Selected Days</p>
          </OpeningHours>
        </Card> */}
      </ContactWrapper>
      <p style={{fontSize: "0.6rem"}}>
        <FaCopyright />{" "}
        Clôtures Cinq Étoiles
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  opacity: ${(props) => props.opacity};
  margin-top: 5%;
  padding: 5% 1% 1%;
  background-color: var(--dark-grey);
  transition: opacity 0.2s ease-in-out;

  @media (width < 1000px) {
    margin-top: 10%;
    padding: 1%;
  }

  *{ 
    color: var(--light-grey);
  }

  animation: ${(props) => props.opacity && "slideUp"} 1s;

  @keyframes slideUp {
    from {
      transform: translateY(800px);
      opacity: 0;
    }
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 5%;

  @media (width < 1000px) {
    display: flex;
    flex-direction: column;
    padding: 10%;
  }
`;

// const Container = styled.div`
//   display: flex;
//   justify-content: space-evenly;

//   @media (width < 1000px) {
//     display: flex;
//     flex-direction: column;
//     margin: 0px;
//   }
// `;

const Title = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  color: var(--yellow);

  @media (width < 1000px) {
    padding: 0 0 10% 0;
  }
`;

const Card = styled.div`
  padding: 1% 2%;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--grey);
  border-radius: 10px;
  box-shadow: 0px -1px 20px 5px var(--grey);

  @media (width < 1000px) {
    min-width: 100%;
    margin-bottom: 5%;
  }
`;
const Info = styled.div`
  display: flex;
  line-height: 1.5rem;
  padding: 5% 0;

  @media (width < 1000px) {
    font-size: 0.9rem;
    padding: 10px 0;
  }
`;
const Mail = styled(IoMdMail)`
  font-size: 2rem;
  margin-right: 15px;
`;
const Call = styled(IoCall)`
  font-size: 2rem;
  margin-right: 15px;
`;
// const Pin = styled(IoLocation)`
//   font-size: 2rem;
//   margin-right: 15px;
// `;
const Facebook = styled(BsFacebook)`
  font-size: 2rem;
  margin-right: 15px;
`;
// const Instagram = styled(RiInstagramFill)`
//   font-size: 2rem;
//   margin-right: 15px;

//   @media (width < 1000px) {
//     margin-right: 5px;
//   }
// `;

// const OpeningHours = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   padding: 5px;
// `;

// const Days = styled.p`
//   font-weight: 600;
//   margin-right: 25px;
// `;

export default Contact;
