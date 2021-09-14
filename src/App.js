import React, { useState, useEffect } from "react";

import "./app.scss";
import axios from "axios";
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";

function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [body, setbody] = useState("");
  // const [state,]
  useEffect(() => {
    try {
      async function getData() {
        if (requestParams.url) {
          const response = await axios({
            method: requestParams.method,
            url: requestParams.url,
            data: body,
          });
          setData(response);
          
        }
      }
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, [requestParams]);

  async function callApi(data) {
    console.log(data);
    if (data.url !== "") {
      setRequestParams(data);
      setbody(data.request);
    } else {
      const response = {
        count: 2,
        results: [
          { name: "fake thing 1", url: "http://fakethings.com/1" },
          { name: "fake thing 2", url: "http://fakethings.com/2" },
        ],
      };
      setData({ response });
      setRequestParams(data);
    }
  }

  return (
    <React.Fragment>
      <Header />
      <div className="info">
        <div>
          <span>Request Method:</span> {requestParams.method}
        </div>
        <div>
          <span>URL:</span> {requestParams.url}
        </div>
      </div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
