import { useState } from "react";
import "./form.scss";

function Form(props) {
  const [url, setUrl] = useState("");
  const [request, setRequest] = useState("");
  const [method, setMethod] = useState("get");
  const [textArea, setTextArea] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        method: method,
        url: url,
        request,
      };
      await props.handleApiCall(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleURL = (e) => {
    setUrl(e.target.value);
  };

  const handleRequest = (e) => {
    let data = JSON.parse(e.target.value);
    setRequest(data);
  };

  const handleGet = (e) => {
    setMethod("get");
    setTextArea(false);
  };

  const handlePost = (e) => {
    setMethod("post");
    setTextArea(true);
  };

  const handlePut = (e) => {
    setMethod("put");
    setTextArea(true);
  };

  const handleDelete = (e) => {
    setMethod("delete");
    setTextArea(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={handleURL} />
          <button type="submit" data-testid="submit">
            GO!
          </button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleGet}>
            GET
          </span>
          <span id="post" onClick={handlePost}>
            POST
          </span>
          <span id="put" onClick={handlePut}>
            PUT
          </span>
          <span id="delete" onClick={handleDelete}>
            DELETE
          </span>
        </label>
        {textArea && (
          <textarea rows="15" cols="35" onChange={handleRequest}></textarea>
        )}
      </form>
    </>
  );
}

export default Form;
