import {useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import './loading.scss'

function Loading() {

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("rgba(255, 0, 0, 0.979)");
  return (
    <div className="sweet-loading" >
      <ClipLoader color={color} loading={loading} size={150} />
    </div>
  );
}

export default Loading;
