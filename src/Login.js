import React from "react";
import {  Form, Button} from 'react-bootstrap';
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

export const Login = () => (
  <Styles>
      <div class="Email">
         <Form> 
              <Form.Group controlId="formGroupEmail">
                 <Form.Label>Email address</Form.Label>
                 <br/>
                 <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                 <Form.Label>Password</Form.Label>
                 <br/>
                 <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="submitbutton">
                  <Button variant="outline-light">submit</Button>
              </Form.Group>
          </Form>
       </div>
  </Styles>
  )