import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

const Styles = styled.div` {
.icon {
    color: #fff4e3;
    margin-left: 20px;
  }
  
  .icon:hover {
    color: tomato;
  }
 `; 

const SocialIcons = () => {
  return (
    <Styles> 
    <Fragment>
      <span className="d-inline">
        <Link to="/" className="icon d-inline">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
        </Link>
      </span>
      <span className="d-inline">
        <Link to="/" className="icon">
          <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
        </Link>
      </span>
      <span className="d-inline">
        <Link to="/" className="icon">
          <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
        </Link>
      </span>
    </Fragment>
    </Styles>
  );
};

export default SocialIcons;