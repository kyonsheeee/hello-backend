import React from "react";
import "./App.css";

function App() {
  const handleClick = async () => {
    const response = await fetch('/api/hello');
    const text = await response.text();
    alert(text);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <button onClick={handleClick}>Say Hello</button>
      </header>
    </div>
  );
}

export default App;
