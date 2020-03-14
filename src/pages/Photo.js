import React, {useState} from "react";

import {loadModels} from "../helpers/faceApi";
import {createFaLibrary} from "../helpers/icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Switch from "react-switch";
import Camera from "../components/Camera/Camera";
import Helmet from 'react-helmet';

createFaLibrary();
loadModels();


function Photo() {
  const [mode, setMode] = useState(true);
   //true = photo mode; false = video mode

  return (
    <div>
      <Camera photoMode={mode}/>
      <Helmet>
        <title>Photo - Face Recognition Application | emiga.tech</title>
      </Helmet>
    </div>
  );
}

export default Photo;
