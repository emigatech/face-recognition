import React, { Component } from "react";
import Logo from '../images/emiga-logo.png';

class Navbar extends Component {
    render() {

      return (
        <nav className="navbar navbar-dark" id="navbar">
        		<div className="container p-0">
              <a href="/" title="Go to main">
                <img className="text-hide" title="emiga.tech" src={Logo} width="32" height="32" alt="emiga-tech logo"/>
              </a>

        			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#emiga_navbar" aria-controls="emiga_navbar" aria-expanded="false" aria-label="Toggle navigation">
        				<svg fill="#003333" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32px" height="32px"><path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"/></svg>
        			</button>

        			 <div className="collapse navbar-collapse navbar-container border mt-3" id="emiga_navbar">
        			   	<ul className="navbar-nav pt-2 pb-2 container">
                    <li className="nav-item">
        			        <a className="nav-link" href="/video" title="Go to Video Feature">Face Recognition using Video</a>
        			      </li>
                    <li className="nav-item">
        			        <a className="nav-link" href="/photo" title="Go to Photo Feature">Face Recognition using Photo</a>
        			      </li>
                    <li className="nav-item">
        			        <a className="nav-link" href="https://emiga.tech" title="Go to Photo Feature"><b>emiga.tech</b></a>
        			      </li>
        			  	</ul>
        			 </div>
        		</div>
        	</nav>
      );
    }
}


export default Navbar;
