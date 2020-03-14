import React, {useState, useEffect} from "react";
import classnames from "classnames";
import SelectedImage from "../SelectedImage/SelectedImage";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Gallery = props => {
  const [selected, setSelected] = useState(props.selected);
  const [photos, setPhotos] = useState(props.photos);

  useEffect(() => {
    if (photos.length !== props.photos.length) {
      setSelected(props.selected);
      setPhotos(props.photos);
    }
  }, [photos.length, props.photos.length, props.photos, props.selected]);

  if (photos.length < 1) {
    return null;
  } else {
    return (

      <div className="row">
        <div className="col-12">
          {selected && <SelectedImage img={selected} />}
        </div>
        <div className="col-12">
          <div className="gallery">
          {photos.map((photo, i) => (
            <div className="gallery-row" key={i}>
              <img
                src={photo}
                alt={`image_${i}`}
                onClick={() => {
                  setSelected(photo);
                }}
                className={classnames(
                  "gallery-photo",
                  photo === selected && "gallery-photo-selected"
                )}
              />
              <FontAwesomeIcon
                icon="times-circle"
                size="sm"
                className="gallery-photo-delete"
                onClick={() => props.deleteImage(photo)}
              />
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Gallery;
