import "./minispinner.css";

import { PropagateLoader } from "react-spinners";

const MiniSpinner = () => (
  <div
    className="minifallback-spinner flex items-center justify-center"
    style={{
      height: "calc(100vh - 100px)",
    }}
  >
    <div className="loading component-loader">
      <PropagateLoader color="#ed9557" />
    </div>
  </div>
);
export default MiniSpinner;
