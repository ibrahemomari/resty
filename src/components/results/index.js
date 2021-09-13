import React from "react";
import ReactJson from "react-json-view";
import "./result.scss";
import Loading from "../loading/Loading";

const Results = (props) => {
  return (
    <div className="result">
      {props.data ? <ReactJson src={props.data} /> : <Loading />}
    </div>
  );
};

export default Results;
