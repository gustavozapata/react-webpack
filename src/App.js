import React from "react";

const App = () => {
  return (
    <div>
      <h1>The App</h1>
      <p>{new Date().toISOString()}</p>
    </div>
  );
};

export default App;
