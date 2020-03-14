import React, { Component } from "react";
import Logo from "../images/emiga-logo.png";
import Helmet from 'react-helmet';

class Error extends Component {

    render() {

      return (
        <div>
          <div className="container pt-5 text-center">
            <a href="/" title="Go to main">
              <img src={Logo}  className="img-fluid" height={128} width={128} alt="emiga.tech logo"/>
            </a>
            <h1 className="pt-5">Error 404</h1>
            <p>The requested URL was not found on this server. That is all we know.</p>
          </div>
          <Helmet>
            <title>Error - Face Recognition Application | emiga.tech</title>
          </Helmet>
        </div>
      );
    }
}


export default Error;
