import "./spinner.css";
import { PropagateLoader } from "react-spinners";

const Spinner = () => (
  <div
    className="fallback-spinner flex items-center justify-center"
    style={{
      height: "calc(100vh - 100px)",
    }}
  >
    <div className="loading component-loader">
      <PropagateLoader color="#ed9557" />
    </div>
  </div>
);
export default Spinner;
