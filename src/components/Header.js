import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
.navbar-default {
    position: fixed;
    top: 0;
    width: 100%
    padding: 10px 16px;
    background: #ffffff;
    box-shadow: 4px 4px 22px -10px rgba(48,46,48,1);
}
.loginnav {
    left: 1000px;
}
.container {
    font-size: 1.2vw;
    line-height: 2vw;
}
`;

export const Header = () => (
<Styles>
    <nav className="navbar navbar-default">
        <div className="container">
            <div class="navbar-header">
                <ul className="nav navbar-nav">
                    <li><Link to="/home">Home</Link></li>
                    <li className="loginnav"><Link to="/login">Login</Link></li>
                    <li className="loginnav"><Link to="/signup">Signup</Link></li>
                </ul>
            </div>
        </div>
    </nav>
</Styles>
)
