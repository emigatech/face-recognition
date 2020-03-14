import React, {useEffect, useRef, useState} from "react";
import {detectFaces, drawResults} from "../../helpers/faceApi";

import Results from "../Results/Results";

const SelectedImage = ({img}) => {
  const selected = useRef();
  const canvas = useRef();

  const [processing, setProcessing] = useState(true);
  const [results, setResults] = useState([]);

  const getFaces = async () => {
    setProcessing(true);
    const faces = await detectFaces(selected.current);
    setResults(faces);
    drawResults(selected.current, canvas.current, faces, "box");
    drawResults(selected.current, canvas.current, faces, "landmarks");

    setProcessing(false);
  };

  useEffect(() => {
    getFaces();
  }, [img]);

  return (
    <div className="processing">
      <div className="row">
        <div className="col-sm-12 col-md-6 selected-image-wrapper">
          <img
            ref={selected}
            src={img}
            alt="selected"
            className="selected-image shadow-sm"
          />
        <canvas className="selected-image-overlay ml-3" ref={canvas} />
        </div>
        <div className="col-sm-12 col-md-6">
          <Results results={results} processing={processing} />
        </div>
      </div>
    </div>
  );
};

export default SelectedImage;
