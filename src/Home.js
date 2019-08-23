import React from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div` {
  .features {
     width: 350px;
     position: sticky; 
    }
  .feature {
     padding: 20px;
    }
  .features6 {
    width: 300px;
    height: 300px;
  }
  .copyright {
    padding: 20px;
  }
  .getstartedbtn {
    height: 3vw;
    width: 14.08333333vw;
    text-align: center;
    background: #3e52d9;
    border-radius: .33333333vw;
    transition: background .25s;
    font-family: Formular,Helvetica,Arial,serif;
    font-size: 1.5vw;
  }
  .getstarted {
    margin-top: 30px;
  }
`;

export const Home = () => (
<Container>
  <Styles>
    <Jumbotron className="getstarted">
      <h2>Why EboardOnline</h2>
      <p>Many organizations have come to the realization that a critical component of effective governance is communication. So Here we are with a solution E-BOARD ONLINE , which will manage the board meeting in a simple, smart, secure and paperless way.</p>
      <Link to="/">
        <Button className="getstartedbtn">Get Started</Button>
      </Link>
    </Jumbotron>
    <Row className="show-grid text-center">
      <Col xs={12} sm={4} className="feature">
        <Image src="./assets/meeting.svg" circle className="features"/>
        <h3>Schedule Meeting Made Easy</h3>
        <p>The meeting materials can be accessible immediately form any where just with the login credentials of E-Board online system.</p>
      </Col>

      <Col xs={12} sm={4} className="feature">
        <Image src="./assets/videocall.svg" circle className="features"/>
        <h3>Joining a meeting</h3>
        <p>The meeting materials can be accessible immediately form any where just with the login credentials of E-Board online system.</p>
      </Col>

      <Col xs={12} sm={4} className="feature">
        <Image src="./assets/calender.svg" circle className="features"/>
        <h3>Easily Create Meeting Agenda</h3>
        <p>The meeting materials can be accessible immediately form any where just with the login credentials of E-Board online system.</p>
      </Col>
      
      <Col xs={12} sm={4} className="feature">
        <Image src="./assets/feedback.svg" circle className="features"/>
        <h3>Record Meeting Feedback</h3>
        <p>The meeting materials can be accessible immediately form any where just with the login credentials of E-Board online system.</p>
      </Col>

      <Col xs={12} sm={4} className="feature">
        <Image src="./assets/docs.svg" circle className="features"/>
        <h3>Upload and View Documents</h3>
        <p>The meeting materials can be accessible immediately form any where just with the login credentials of E-Board online system.</p>
      </Col>

      <Col xs={12} sm={4} className="feature6">
        <Image src="./assets/chat.svg" circle className="features6"/>
        <h3>Online Chat</h3>
        <p>The meeting materials can be accessible immediately form any where just with the login credentials of E-Board online system.</p>
      </Col>
    </Row>
  </Styles>
</Container>
  )
