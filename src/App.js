import React from "react";
import GlobalStyles from "./components/styles/Global";
import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <main>
        <Card />
      </main>
    </div>
  );
}

export default App;
