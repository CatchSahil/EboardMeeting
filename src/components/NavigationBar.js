import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
.loginnav {
    left: 1000px;
    color: blue;
}
`;

export const NavigationBar = () => (
<Styles>
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <ul className="nav navbar-nav">
                    <li><Link to="/home">Home</Link></li>
                    <li class="loginnav"><Link to="/login">Login</Link></li>
                    <li class="loginnav"><Link to="/signup">Signup</Link></li>
                </ul>
            </div>
        </div>
    </nav>
</Styles>
)