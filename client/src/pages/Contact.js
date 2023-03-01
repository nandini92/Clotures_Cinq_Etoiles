import styled from "styled-components";
import { Link } from "react-router-dom";

import {BsFacebook} from "react-icons/bs";


const Contact = () => {
    return (<Wrapper>
        <Title>Contact Us</Title>
        <p>Email address: lesclotures5etoiles@outlook.com</p>
        <p>Phone Number: (438) 518-6668</p>
        <Link><BsFacebook /></Link>
    </Wrapper>);
}
 
const Wrapper = styled.div`
    background-color: var(--dark-grey);
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