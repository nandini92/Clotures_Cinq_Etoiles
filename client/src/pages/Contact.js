import styled from "styled-components";
import { Link } from "react-router-dom";

import {BsFacebook} from "react-icons/bs";


const Contact = ({opacity}) => {
    return (<Wrapper id="contact" opacity={opacity}>
        <Title>Contact Us</Title>
        <p>Email address: lesclotures5etoiles@outlook.com</p>
        <p>Phone Number: (438) 518-6668</p>
        <Link><BsFacebook /></Link>
    </Wrapper>);
}
 
const Wrapper = styled.div`
    opacity : ${props => props.opacity};
    transition: opacity 0.2s ease-in-out;
    margin: 0px 50px;
    border-top: 1px solid var(--dark-grey);
    background-color: var(--light-grey);
    width: 100%;
    padding: 50px;
    
    p {
        font-weight: 200;
        margin: 10px 0px;
    }
`
const Title = styled.h2`
    font-size: 36px;
`
const Logo = styled.img`
    background-color: var(--lightgrey);
`
export default Contact;