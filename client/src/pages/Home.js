import styled from "styled-components";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  const [height, setHeight] = useState([100,0]);

  return (
    <Wrapper id="home">
      <InnerWrapper>
        <TitleText>
          <Title>Discover</Title>
          <Title2>Possibilities</Title2>
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
          <Button smooth to='/#contact'>Contact Us</Button>
        </Desc>
        <Images>
          <Image1>
            <Hue1 height={height[0]}></Hue1>
          </Image1>
          <Image2 onMouseEnter={() => setHeight([0,100])} onMouseLeave={() => setHeight([100,0])}>
            <Hue2 height={height[1]}></Hue2>
          </Image2>
        </Images>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 220px 50px 50px 50px;
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
`;
const TitleText = styled.div`
  padding: 50px 50px 50px 0px;
  position: absolute;
  z-index: 1;
  font-size: 100px;
`;
const Title = styled.h1`
  font-weight: 300;
  animation: slideRight 1s;
  
  @keyframes slideRight {
    from {
      transform: translateX(-800px);
      opacity: 0;
    }
  }
`;
const Title2 = styled.h1`
  font-weight: 500;
  padding-left: 50px;
  animation: slideLeft 1s;
  
  @keyframes slideLeft {
    from {
      transform: translateX(800px);
      opacity: 0;
    }
  }
`;
const Desc = styled.div`
  width: 50%;
  margin: 300px 50px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Description = styled.p`
  font-weight: 300;
  line-height: 20px;
  margin: 20px 0px 50px 0px;
`;
const Button = styled(HashLink)`
  text-decoration: none;
  text-align: center;
  background-color: var(--yellow);
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 50px;
  max-width: 200px;
  color: var(--dark-grey); 
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;
const Images = styled.div`
  display: flex;
`;
const Image1 = styled.div`
  position: relative;
  top: 110px;
  right: 50px;
  background-image: url("assets/crop1.JPG");
  background-size: cover;
  height: 500px;
  width: 150px;

  animation: slideUp 1s;
  
  @keyframes slideUp {
    from {
      transform: translateY(800px);
      opacity: 0;
    }
  }
`;
const Hue1 = styled.div`
  background-color: var(--dark-grey);;
  z-index: 1;
  opacity: 0.5;
  height: ${props => `${props.height}%`};
  transition: ease-in-out 1s;
`;
const Image2 = styled.div`
  background-image: url("assets/crop2.JPG");
  background-size: cover;
  height: 500px;
  width: 350px;

  animation: slideDown 1s;
  
  @keyframes slideDown {
    from {
      transform: translateY(-800px);
      opacity: 0;
    }
  }
`;
const Hue2 = styled.div`
  background-color: var(--dark-grey);
  z-index: 1;
  opacity: 0.5;
  height: ${props => `${props.height}%`};
  transition: ease-in-out 1s;
`;
export default Home;
