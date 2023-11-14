import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "../styles/Home.css";

const Home = () => {
    return (
        <Container>
            <h1>Welcome to our Website</h1>
            <p>We are here to serve you</p>
            <Button variant='primary' type='submit'>Get started</Button>
        </Container>
    );
};

export default Home;
