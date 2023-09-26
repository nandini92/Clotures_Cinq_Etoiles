import styled from "styled-components";
import { useState } from "react";

import { ArrowLeft, ArrowRight } from 'react-feather';


import { Text } from "../contexts/LanguageContext";
import images from "./images.js";

const fences = [
  "ornamental",
  "serie5000",
  "frost",
  "karbonComposite",
  "zen",
  "zenTrellis",
  "commercial",
  "glass",
  "pvc",
  "ramp"
];

const Projects = ({ opacity }) => {
  const [type, setType] = useState("ornamental");
  const [count, setCount] = useState(1);

  const scrollLeft = () => {
    count > 0
      ? setCount((count) => count - 1)
      : setCount(images[type].length - 1);
  };

  const scrollRight = () => {
    count < images[type].length - 1
      ? setCount((count) => count + 1)
      : setCount(0);
  };

  return (
    <Wrapper id="projects" opacity={opacity}>
      <Options>
        {fences.map((fence, index) => (
          <Button
            onClick={() => {
              setType(fence);
              setCount(1);
            }}
            active={type === fence}
            key={fence}
          >
            <Text tid={`productType${index + 1}`} />
          </Button>
        ))}
      </Options>
      {window.screen.width < 1000 && <Instructions><Text tid={"instructions"} /><MobileArrowRight color="white" size="2rem" /></Instructions>}
      {window.screen.width > 1000 ? (
        type !== "commercial" ? (
        <Carousel>
          <MoreImage
            src={
              count > 0
                ? images[type][count - 1]
                : images[type][images[type].length - 1]
            }
            alt={type}
            opacity={opacity}
            onClick={() => scrollLeft()}
          >
            <ArrowLeft color="white" size="3rem"/> 
          </MoreImage>
          <Image src={images[type][count]} alt={type} opacity={opacity} />
          <MoreImage
            src={
              count < images[type].length - 1
                ? images[type][count + 1]
                : images[type][0]
            }
            alt={type}
            opacity={opacity}
            onClick={() => scrollRight()}
          >
            <ArrowRight color="white" size="3rem"/>
          </MoreImage>
        </Carousel>
        ) : (
          <Image src={images[type][0]} alt={type} opacity={opacity} />
        )
      ) : (
        <MobileCarousel>
          {images[type].map((image) => {
            return <MobileImage src={image} alt={type} opacity={opacity} />;
          })}\
        </MobileCarousel>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  opacity: ${(props) => props.opacity};
  transition: opacity 1s ease-in-out;
  display: flex;
  flex-direction: column;
`;

const Options = styled.div`
  align-self: center;
  max-width: 100vw;

  @media (width < 1000px) {
    display: flex;
    flex-wrap: nowrap;
    align-self: flex-start;
    overflow-x: auto;
  }
`;

const Button = styled.button`
  cursor: pointer;
  margin: 15px;
  border: 1px solid var(--dark-grey);
  border-radius: 5px;
  padding: 5px 20px;
  color: ${(props) =>
    props.active ? "var(--light-grey)" : "var(--dark-grey)"};
  background-color: ${(props) =>
    props.active ? "var(--dark-grey)" : "var(--light-grey)"};
  font-size: 1rem;
  font-weight: 500;

  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--light-grey);
    background-color: var(--dark-grey);
  }
`;

const Carousel = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;
const MobileCarousel = styled.div`
  margin-top: 0;
  height: 50vh;
  display: flex;
  overflow-x: auto;
`
const Image = styled.img`
  align-self: center;
  min-width: 40%;
  max-height: 70vh;
`;
const MobileImage = styled.img`
  align-self: center;
  height: 100%;
  margin-right: 5%;
`;
// const Image = styled.div`
//   align-self: center;
//   width: 40%;
//   background-image: url(${(props) => props.src});
//   background-size: contain;
//   background-position: cover;
//   background-repeat: no-repeat;
//   transition: height 1s ease-in-out;
//   height: ${(props) => (props.opacity ? "650px" : "0px")};
// `;

const MoreImage = styled.div`
  align-self: center;
  background-repeat: no-repeat;
  width: 15%;
  background-image: url(${(props) => props.src});
  background-position: center;
  transition: height 1s ease-in-out;
  height: ${(props) => (props.opacity ? "500px" : "0px")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--dark-grey);
    background-image: none;

    transition: background-image background-color 1s ease-in-out;
  }
`;
const Instructions = styled.div`
  width: 100%;
  padding: 3% 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 0.8rem;

  
`
const MobileArrowRight = styled(ArrowRight)`
  background-color: var(--dark-grey);
  border-radius: 50%;
`;
export default Projects;
