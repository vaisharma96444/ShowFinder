import React, { useState } from "react";
import ShowList from "./ShowList";
import ShowSummary from "./ShowSummary";

function App() {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  };

  return (
    <div className="container">
      <h1>TV Show Search</h1>
      {selectedShow ? (
        <ShowSummary show={selectedShow} />
      ) : (
        <ShowList onShowSelect={handleShowSelect} />
      )}
    </div>
  );
}

export default App;
