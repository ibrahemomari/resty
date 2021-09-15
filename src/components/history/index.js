import "./history.scss";

function History(props) {
    
  async function data(index) {
    const obj = {
      method: props.history[index].method,
      url: props.history[index].url,
      request: props.history[index].request,
    };
    console.log(obj);
    await props.handleApiCalls(obj);
  }

  return (
    <div className="history-container">
      <h3>History</h3>
      <span>▼</span>
      <ul>
        {props.history.map((el, idx) => {
          return (
            <li  key={idx}>
              <div className="history-card">
                <p>
                  <span>
                    <b>Method: </b>
                    {el.method}
                  </span>
                  <br />
                  <span>
                    <b>Url: </b>
                    {el.url}
                  </span>
                  <button onClick={() => data(idx)}>Request</button>
                  <hr />
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;

{
  /* <div className="history-card" key={idx}>
            
          </div> */
}
