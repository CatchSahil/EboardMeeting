import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .something {
    background-color: white;
    background-size: cover;
    color: #000;
    height: 200px;
    position: relative;
    z-index: -2;
  }
`;

export const Body = () => (
    <Styles>
        <div className="overlay"></div>
        <Container>
          <h1>Welcome</h1>
        </Container>
    </Styles>
  )