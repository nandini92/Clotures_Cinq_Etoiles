import styled from "styled-components";

import woodenFence from "../assets/wooden-fence.jpg";
import woodenFence2 from "../assets/wooden-fence-2.jpg";
import woodenFence3 from "../assets/wooden-fence-3.jpg";
import cloture from "../assets/clotures_piscine.jpg";
import blackFence from "../assets/black-fence.jpg";
import blackFence2 from "../assets/black-fence-2.jpg";
import blackFence3 from "../assets/black-fence-3.jpg";

const Projects = () => {
  const slides = [cloture, blackFence, blackFence2, blackFence3, woodenFence, woodenFence2, woodenFence3];

  return (
    <Wrapper id="projects">
    </Wrapper>
  );
};

const Wrapper = styled.div`
display: flex;
justify-content: center;
`
export default Projects;
