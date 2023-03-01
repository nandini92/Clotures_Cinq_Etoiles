import styled from "styled-components";

import cloturespiscine from "../assets/clotures_piscine.jpg";

const Home = () => {
  return (
    <Wrapper>
      <Text>
        <Title>Your Dream Fence Is Just Around The Corner</Title>
        <Description>
          Amet culpa excepteur ipsum amet eu minim adipisicing. Mollit duis
          velit non ad voluptate sit mollit fugiat exercitation mollit sit. In
          do cupidatat quis labore fugiat officia ex consequat aliqua anim do
          incididunt.
        </Description>
        <Description>
          Sunt consequat cillum duis excepteur ea adipisicing Lorem occaecat id
          excepteur irure commodo occaecat. Laborum officia officia eiusmod
          fugiat velit. Ad culpa elit non irure irure. Aliquip irure ullamco
          consectetur ut incididunt ea ea excepteur deserunt aliqua nulla
          exercitation. Veniam tempor quis aliquip ullamco est amet dolor qui
          occaecat Lorem. Consectetur cupidatat laboris nostrud officia cillum
          esse pariatur veniam.
        </Description>
        <Button>Contact Us</Button>
      </Text>
      <Image src={cloturespiscine} alt="black fence" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const Text = styled.div`
  padding: 50px;
`;
const Title = styled.h1`
  color: var(--light-grey);
  font-size: 48px;
  line-height: 50px;
  font-weight: 400;
`;
const Description = styled.p`
  font-weight: 200;
  line-height: 20px;
  margin: 20px 0px;
`;
const Button = styled.button`
  background-color: var(--yellow);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: var(--dark-grey);
  font-size: 15px;
  font-weight: 500;
`;
const Image = styled.img`
  max-width: 50%;
`;
export default Home;
