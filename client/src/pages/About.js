import styled from "styled-components";

const About = () => {
  return (
    <Wrapper id="about-us">
      <Title>About Us</Title>
      <Description>
        Nulla tempor ullamco aute cupidatat nulla eu. Non nostrud duis labore
        consectetur Lorem qui consequat proident ipsum eiusmod nostrud dolor
        duis ullamco. Cupidatat amet dolor irure consectetur in velit quis
        reprehenderit quis qui. Dolore ullamco eu ea laborum veniam tempor sint
        labore est nostrud do et non. Consectetur ea veniam ut officia esse anim
        incididunt. Incididunt adipisicing reprehenderit nisi eiusmod. Voluptate
        nisi tempor aute enim duis.
      </Description>
      <Description>
        Nulla tempor ullamco aute cupidatat nulla eu. Non nostrud duis labore
        consectetur Lorem qui consequat proident ipsum eiusmod nostrud dolor
        duis ullamco. Cupidatat amet dolor irure consectetur in velit quis
        reprehenderit quis qui. Dolore ullamco eu ea laborum veniam tempor sint
        labore est nostrud do et non. Consectetur ea veniam ut officia esse anim
        incididunt. Incididunt adipisicing reprehenderit nisi eiusmod. Voluptate
        nisi tempor aute enim duis.
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px;
  margin: 0px 50px;
  border-bottom: 1px solid var(--dark-grey);
`;
const Title = styled.h2`
  font-size: 36px;
  text-align: center;
`;
const Description = styled.p`
  font-weight: 200;
  line-height: 20px;
  margin: 20px 0px;
`;
export default About;
