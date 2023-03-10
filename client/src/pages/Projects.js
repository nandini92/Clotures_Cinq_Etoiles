import styled from "styled-components";
import { useState } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

import woodenFence from "../assets/wooden-fence.jpg";
import woodenFence2 from "../assets/wooden-fence-2.jpg";
import woodenFence3 from "../assets/wooden-fence-3.jpg";
import cloture from "../assets/clotures_piscine.jpg";
import blackFence from "../assets/black-fence.jpg";
import blackFence2 from "../assets/black-fence-2.jpg";
import blackFence3 from "../assets/black-fence-3.jpg";

const metal = [cloture, blackFence, blackFence2, blackFence3];
const wood = [woodenFence, woodenFence2, woodenFence3];

const Projects = () => {
  const [type, setType] = useState(metal);
  const [count, setCount] = useState(0);

  const scrollLeft = () => {
    count > 0 ? setCount((count) => count - 1) : setCount(type.length - 1);
  };

  const scrollRight = () => {
    count < type.length - 1 ? setCount((count) => count + 1) : setCount(0);
  };

  return (
    <Wrapper id="projects">
      <Options>
        <Button onClick={() => {setType(metal); setCount(0)}} active={type === metal}>metal fence</Button>
        <Button onClick={() => {setType(wood); setCount(0)}} active={type === wood}>wood fence</Button>
      </Options>
      <Carousel>
        <ArrowLeft onClick={() => scrollLeft()} />
        <Image src={type[count]} alt={type[count]} />
        <ArrowRight onClick={() => scrollRight()} />
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
  border-bottom: 1px solid var(--dark-grey);
`;
const Options = styled.div`
  align-self: center;
`;
const Button = styled.button`
  margin: 15px;
  border: 1px solid var(--dark-grey);
  border-radius: 5px;
  padding: 5px 20px;
  color: ${props => props.active ? "var(--light-grey)" : "var(--dark-grey)"};
  background-color: ${props => props.active ? "var(--dark-grey)" : "var(--light-grey)"};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;
const Carousel = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;
const Image = styled.img`
  height: 650px;
  max-width: 80%;
`;
const ArrowLeft = styled(BsArrowLeftCircleFill)`
  align-self: center;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
`;
const ArrowRight = styled(BsArrowRightCircleFill)`
  align-self: center;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
`;
export default Projects;
