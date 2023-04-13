import styled from "styled-components";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { TfiLock } from "react-icons/tfi";
import { MdCheckCircle } from "react-icons/md";

const About = ({ opacity }) => {
  return (
    <Wrapper id="about-us" opacity={opacity}>
      <Separator opacity={opacity} />
      <Content>
        <Icons>
          <div opacity={opacity}>
            <AiOutlineEyeInvisible style={{ fontSize: "50px" }} />
            <p>Private</p>
          </div>
          <div opacity={opacity}>
            <TfiLock style={{ fontSize: "50px"}} />
            <p>Secure</p>
          </div>
          <div opacity={opacity}>
            <MdCheckCircle style={{ fontSize: "50px" }} />
            <p>Reliable</p>
          </div>
        </Icons>
        <Description opacity={opacity}>
          <p>
            Nulla tempor ullamco aute cupidatat nulla eu. Non nostrud duis
            labore consectetur Lorem qui consequat proident ipsum eiusmod
            nostrud dolor duis ullamco. Cupidatat amet dolor irure consectetur
            in velit quis reprehenderit quis qui. Dolore ullamco eu ea laborum
            veniam tempor sint labore est nostrud do et non. Consectetur ea
            veniam ut officia esse anim incididunt. Incididunt adipisicing
            reprehenderit nisi eiusmod. Voluptate nisi tempor aute enim duis.
            Nulla tempor ullamco aute cupidatat nulla eu. Non nostrud duis
            labore consectetur Lorem qui consequat proident ipsum eiusmod
            nostrud dolor duis ullamco. Cupidatat amet dolor irure consectetur
            in velit quis reprehenderit quis qui. Dolore ullamco eu ea laborum
            veniam tempor sint labore est nostrud do et non. Consectetur ea
            veniam ut officia esse anim incididunt. Incididunt adipisicing
            reprehenderit nisi eiusmod. Voluptate nisi tempor aute enim duis.
          </p>
        </Description>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 80px;
  opacity: ${(props) => props.opacity};
`;

const Separator = styled.div`
  border-top: 1px solid var(--dark-grey);
  display: flex;
  justify-content: center;
  width: 100%;

  animation: ${(props) => props.opacity && "expand"} 1s;

  @keyframes expand {
    from {
      width: 0px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 80px 0px;
`;

const Icons = styled.div`
  width: 50%;
  padding: 0px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40%;
    justify-content: space-between;
  }
`;

const Description = styled.div`
  width: 50%;
  font-weight: 200;
  line-height: 20px;

  animation: ${(props) => props.opacity && "slideLeft"} 1s;

  @keyframes slideLeft {
    from {
      transform: translateX(800px);
      opacity: 0;
    }
  }
`;
export default About;
