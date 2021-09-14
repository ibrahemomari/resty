import React from "react";
import ReactJson from "react-json-view";
import "./result.scss";
import Loading from "../loading/Loading";

const Results = (props) => {
  return (
    <div className="result-container">
      <div className="result">
        {props.data ? (
          <div className="result-titles">
            <h2>HEADERS:</h2>
            <ReactJson src={props.data.headers} />
            <h2>DATA:</h2>
            <ReactJson src={props.data.data} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Results;
