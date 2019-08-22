import React from "react";
import { Form,Col, Row, Button  } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.Email{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 2px 16px;
  border: 2px rgb(45, 17, 231);
  padding: 100px;
  width: 700px;
  margin: 100px auto;
}
`;

export const Signup = () => (
  <Styles>
    <div class="Email"> 
      <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
 
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
      </Form>
    </div>
  </Styles>
  )