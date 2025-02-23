import styled from 'styled-components';
import { useContext } from 'react';
import { BsFacebook, BsQuestionCircleFill } from 'react-icons/bs';
import { FaCopyright } from 'react-icons/fa';
import { IoMdMail, IoIosBuild } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';


import { Text, LanguageContext } from '../contexts/LanguageContext';

const Contact = ({ opacity }) => {
  const { dictionary } = useContext(LanguageContext);
  const year = new Date();

  return (
    <Wrapper id='contact' opacity={opacity}>
      <ContactWrapper>
        <Title>
          <Text tid='ContactTitle' />
        </Title>
        <Card>
          <Info>
            <Mail />
              <Module href='https://plannit.io/merchants/lesclotures5etoiles?language=fr&view=merchantProfile&action=Message' target='_blank' rel="noreferrer">
                  <Text tid='emailPrompt' />
              </Module>
          </Info>
          <Info>
            <Quote />
              <Module href='https://plannit.io/merchants/lesclotures5etoiles?language=fr&view=merchantProfile&action=RequestQuote' target='_blank' rel="noreferrer">
                  <Text tid='quotePrompt' />
              </Module>
          </Info>
          <Info>
            <Job />
              <Module href='https://plannit.io/merchants/lesclotures5etoiles?language=fr&view=merchantProfile&action=RequestJob' target='_blank' rel="noreferrer">
                  <Text tid='jobPrompt' />
              </Module>
          </Info>
        </Card>
        <Card>
          <Info>
            <Call />
            <div>
              <a href='tel:+14 38-518 6668' >
                (438) 518-6668
              </a>
              <p>
                <Text tid='phonePrompt' />
              </p>
            </div>
          </Info>
          <Info>
            <div>
              <a
                href='https://www.facebook.com/profile.php?id=100089104131045'
                target='_blank'
                rel='noreferrer'
              >
                <Facebook />
              </a>
            </div>
            <p>
              <Text tid='facebookPrompt' />
            </p>
          </Info>
        </Card>
      </ContactWrapper>
      <p style={{ fontSize: '0.6rem' }}>
        {year.getFullYear()} <FaCopyright /> Clôtures Cinq Étoiles
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

  * {
    color: var(--light-grey);
  }

  animation: ${(props) => props.opacity && 'slideUp'} 1s;

  @keyframes slideUp {
    from {
      transform: translateY(800px);
      opacity: 0;
    }
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5%;

  @media (width < 1000px) {
    display: flex;
    flex-direction: column;
    padding: 10%;
  }
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  color: var(--yellow);
  margin: 0 8%;

  @media (width < 1000px) {
    padding: 0 0 10% 0;
  }
`;

const Card = styled.div`
  padding: 1% 2%;
  margin: 0 2%;
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
const Quote = styled(BsQuestionCircleFill)`
  font-size: 2rem;
  margin-right: 15px;
`;
const Call = styled(IoCall)`
  font-size: 2rem;
  margin-right: 15px;
`;
const Job = styled(IoIosBuild)`
  font-size: 2rem;
  margin-right: 15px;
`;
const Facebook = styled(BsFacebook)`
  font-size: 2rem;
  margin-right: 15px;
`;
const Module = styled.a`
  text-decoration: none;
  line-height: 2rem;
  text-align: center;
`;
export default Contact;
