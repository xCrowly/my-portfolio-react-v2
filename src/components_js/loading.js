import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div className="loading">
      <Spinner className="loading-icon" animation="border" />
      <div className="loading-text">Loading...</div>
    </div>
  );
}

export default Loading;
