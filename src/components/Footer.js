import React from 'react';
import styled from 'styled-components';
import SocialIcons from "./SocialIcons";

const Styles = styled.div` {
    .footer {
        flex: 0 0 auto;
        color: #fff4e3;
        background-color: #ffa45c;
      }
`;

export const Footer = () => (
    <Styles>
        <footer className="footer">
      <div className="container">
        <div className="row justify-content-between text-center">
          <div className="col-md-4 text-md-left">
            <p>
              Copyright &copy; 2019. Invincix Private Limited. All rights reserved!
            </p>
          </div>
          <div className="col-md-4 text-md-right">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
    </Styles>
)
