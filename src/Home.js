import React from "react";
import { Footer } from './components/Footer';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Home = () => (
    <Container>
  <Jumbotron>
    <h2>Welcome to EboardOnline</h2>
    <p>Many organizations have come to the realization that a critical component of effective governance is communication. So Here we are with a solution E-BOARD ONLINE , which will manage the board meeting in a simple, smart, secure and paperless way.</p>
    <Link to="/">
      <Button bsStyle="primary">Learn More</Button>
    </Link>
  </Jumbotron>
  <Row className="show-grid text-center">
    <Col xs={12} sm={6}>
      <Image src="assets/feature1.jpg" circle className="features"/>
      <h3>Schedule Meeting</h3>
      <p>The meeting materials can be accessible immediately form any where just with the login credentials of E-Board online system.</p>
    </Col>
    <Col xs={12} sm={6}>
      <Image src="assets/feature2.jpg" circle className="features"/>
      <h3>Add Participants</h3>
      <p>The meeting materials can be accessible immediately form any where just with the login credentials of E-Board online system.</p>
    </Col>
    <Col xs={12} sm={6}>
      <Image src="assets/feature3.jpg" circle className="features"/>
      <h3>Online Chat</h3>
      <p>The meeting materials can be accessible immediately form any where just with the login credentials of E-Board online system.</p>
    </Col>
    <Col xs={12} sm={6}>
      <Image src="assets/feature3.jpg" circle className="features"/>
      <h3>Online Chat</h3>
      <p>The meeting materials can be accessible immediately form any where just with the login credentials of E-Board online system.</p>
    </Col>
  </Row>
</Container>
  )
