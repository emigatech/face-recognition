import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Home extends Component {

    render() {

      return (
        <div className="container pt-5">

          <h1 className="pt-2 pb-2">
            Hi from <a href="https://emiga.tech" title="Go to emiga.tech"><b>emiga.tech</b> 👋</a>. 
            Check this projects.
          </h1>

          <div className="row">

            <div className="col-sm-12 col-md-4 col-lg-4 landing">
              <a href="/video" title="Go to Video">
                <div>
                  <h1>#Video <FontAwesomeIcon icon="camera" size="md" /> </h1>
                </div>
              </a>
            </div>


            <div className="col-sm-12 col-md-4 col-lg-4 landing">
              <a href="/photo" title="Go to Video">
                <div>
                  <h1>#Photo <FontAwesomeIcon icon="camera" size="md" /> </h1>
                </div>
              </a>
            </div>

          </div>
        </div>
      );
    }
}


export default Home;
