import React from 'react';
import styled from 'styled-components';
import SocialIcons from "./SocialIcons";
import { Container } from 'react-bootstrap';

const Styles = styled.div` {
    .footer {
        height: 100px;
        margin-top:auto;
        color: #ffffff;
        background-color: #050038;
      }
    .copyright {
      padding: 20px;
    }
`;

export const Footer = () => (
    <Styles>
        <footer className="footer">
      <Container>
        <div className="row justify-content-between text-center">
            <p className="copyright">
              Copyright &copy; 2019. Invincix Private Limited. All rights reserved!
            </p>
        </div>
          <div className="col-md-4 text-md-right">
            <SocialIcons />
          </div>
        </Container>
    </footer>
    </Styles>
)
