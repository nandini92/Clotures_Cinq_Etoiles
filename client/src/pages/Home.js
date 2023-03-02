import styled from "styled-components";
import { useState } from "react";

const Home = () => {
  const [active, setActive] = useState(false);

  return (
    <Wrapper>
      <InnerWrapper>
        <TitleText>
          <Title>Discover</Title>
          <Title2>Posibilities</Title2>
        </TitleText>
        <Desc>
          <Description>
            Sunt consequat cillum duis excepteur ea adipisicing Lorem occaecat
            id excepteur irure commodo occaecat. Laborum officia officia eiusmod
            fugiat velit. Ad culpa elit non irure irure. Aliquip irure ullamco
            consectetur ut incididunt ea ea excepteur deserunt aliqua nulla
            exercitation. Veniam tempor quis aliquip ullamco est amet dolor qui
            occaecat Lorem. Consectetur cupidatat laboris nostrud officia cillum
            esse pariatur veniam.
          </Description>
          <Button>Contact Us</Button>
        </Desc>
        <Images>
          <Image1 onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            <Hue1 active></Hue1>
          </Image1>
          <Image2 onMouseEnter={() => setActive(false)} onMouseLeave={() => setActive(true)}>
            <Hue2 active></Hue2>
          </Image2>
        </Images>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  margin: 0px 50px;
  border-bottom: 1px solid var(--dark-grey);
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
`;
const TitleText = styled.div`
  padding: 50px 50px 50px 0px;
  position: absolute;
  z-index: 100;
  font-size: 98px;
`;
const Title = styled.h1`
  font-weight: 500;
`;
const Title2 = styled.h1`
  font-weight: 300;
  padding-left: 50px;
`;
const Desc = styled.div`
  width: 50%;
  margin: 280px 50px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin-bottom: 50px;
  max-width: 200px;
  color: var(--dark-grey);
  font-size: 15px;
  font-weight: 500;
`;
const Images = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Image1 = styled.div`
  align-self: center;
  background-image: url("assets/crop1.JPG");
  height: 450px;
  width: 94px;
  margin-right: 50px;
`;
const Hue1 = styled.div`
  background-color: var(--light-grey);
  z-index: 1;
  opacity: 0.5;
  height: ${props => props.active ? '100%' : '0px'};
  transition: ease-in-out 1s;
`;
const Image2 = styled.div`
  background-image: url("assets/crop2.JPG");
  height: 550px;
  width: 300px;
`;
const Hue2 = styled.div`
  background-color: var(--light-grey);
  z-index: 1;
  opacity: 0.5;
  height: ${props => props.active ? '0px' : '100%'};
  transition: ease-in-out 1s;
`;
export default Home;
