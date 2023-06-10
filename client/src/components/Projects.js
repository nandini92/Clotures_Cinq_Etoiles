import styled from "styled-components";
import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import { Text } from "../contexts/LanguageContext";
import images from "./images.js";

const fences = ["ornamental", "glass", "frost", "pvc", "karbon", "zen", "commercial"];

const Projects = ({ opacity }) => {
  const [type, setType] = useState("ornamental");
  const [count, setCount] = useState(1);

  const scrollLeft = () => {
    count > 0 ? setCount((count) => count - 1) : setCount(images[type].length - 1);
  };

  const scrollRight = () => {
    count < images[type].length - 1 ? setCount((count) => count + 1) : setCount(0);
  };

  return (
    <Wrapper id="projects" opacity={opacity}>
      <Options>{
        fences.map((fence, index) => (
          <Button
            onClick={() => {
              setType(fence);
              setCount(1);
            }}
            active={type === fence}
          >
            <Text tid={`productType${index + 1}`} />
          </Button>
        ))
        }
      </Options>
      <Carousel>
        <ArrowLeft onClick={() => scrollLeft()} />
        <MoreImage src={count > 0 ? images[type][count - 1 ] : images[type][images[type].length - 1]} alt={type} opacity={opacity} />
        <Image src={images[type][count]} alt={type} opacity={opacity} />
        {/* <FenceDesc></FenceDesc> */}
        <MoreImage src={count < images[type].length - 1? images[type][count + 1] : images[type][0]} alt={type} opacity={opacity} />
        <ArrowRight onClick={() => scrollRight()} />
      </Carousel>
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
  font-size: 15px;
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

const Image = styled.div`
  width: 40%;
  background-image: url(${(props) => props.src});
  background-position: cover;
  transition: height 1s ease-in-out;
  height: ${(props) => (props.opacity ? "650px" : "0px")};

  @media (width < 1000px) {
    height: 70vh;
  }
`;
const MoreImage = styled.div`
  align-self: center;
  width: 15%;
  background-image: url(${(props) => props.src});
  transition: height 1s ease-in-out;
  height: ${(props) => (props.opacity ? "500px" : "0px")};

  @media (width < 1000px) {
    height: 70vh;
  }
`;

const ArrowLeft = styled(GrPrevious)`
  align-self: center;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
`;
const ArrowRight = styled(GrNext)`
  align-self: center;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
`;
export default Projects;
