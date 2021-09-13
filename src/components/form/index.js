import { useState } from "react";
import axios from "axios";
import "./form.scss";

function Form(props) {
  const [textArea, setTextArea] = useState(false);
  const [method, setMethod] = useState("get");
  const [URL, setURL] = useState("");
  const [request, setRequest] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const formData = await axios({
        method: method,
        url: URL,
      });
      props.handleApiCall(formData, request);
    } catch (error) {
      console.log(error.message);
    }
  };

  const URLHandler = (e) => {
    setURL(e.target.value);
  };

  const methodHandler = (e) => {
    setMethod(e.target.id);
    setTextArea(false);
  };

  const textAreaHandler = (e) => {
    setTextArea(true);
    setMethod(e.target.id);
  };

  const requestHandler = (e) => {
    setRequest(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={URLHandler} />
          <button type="submit"  data-testid="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={methodHandler}>
            GET
          </span>
          <span id="post" onClick={textAreaHandler}>
            POST
          </span>
          <span id="put" onClick={textAreaHandler}>
            PUT
          </span>
          <span id="delete" onClick={methodHandler}>
            DELETE
          </span>
        </label>
        {textArea && (
          <textarea rows="15" cols="35" onChange={requestHandler}></textarea>
        )}
      </form>
    </>
  );
}

export default Form;
