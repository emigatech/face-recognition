import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Spinner from "../Spinner/Spinner";

import {mapExpressionToEmoji} from "../../helpers/emojis";

const Results = ({results, processing}) => {
  if (processing && results) {
    return <Spinner/>;
  }
  if (!processing && results && results.length > 0) {
    return (
      <div className="results">
        <div className="container">
          {results.length > 1 ? (
            <div>
              {results.map((result, i) => (
                <div className="results__wrapper" key={i}>

                  <div className="w-100">
                    <div className="row pt-2 pb-2">
                      <div className="col-6">
                        <FontAwesomeIcon
                          icon={mapExpressionToEmoji(
                            results[0].expressions.asSortedArray()[0].expression
                          )}
                          size="4x"
                        />
                      </div>
                      <div className="col-6">
                        <FontAwesomeIcon
                          icon={mapExpressionToEmoji(
                            results[0].gender
                          )}
                          size="4x"
                        />
                      </div>
                      <div className="col-12 pt-5">
                        <p>
                          You are looking{" "}
                          {results[0].expressions.asSortedArray()[0].expression}
                        </p>
                        <p>You look around {Math.round(results[0].age)} years old</p>
                        <p>I think you are a {results[0].gender}</p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="results__wrapper">

              <div className="w-100">
                <div className="row pt-2 pb-2">
                  <div className="col-6">
                    <FontAwesomeIcon
                      icon={mapExpressionToEmoji(
                        results[0].expressions.asSortedArray()[0].expression
                      )}
                      size="4x"
                    />
                  </div>
                  <div className="col-6">
                    <FontAwesomeIcon
                      icon={mapExpressionToEmoji(
                        results[0].gender
                      )}
                      size="4x"
                    />
                  </div>
                  <div className="col-12 pt-5">
                    <p>
                      You are looking{" "}
                      {results[0].expressions.asSortedArray()[0].expression}
                    </p>
                    <p>You look around {Math.round(results[0].age)} years old</p>
                    <p>I think you are a {results[0].gender}</p>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="results">
        <Spinner />
      </div>
    );
  }
};

export default Results;
