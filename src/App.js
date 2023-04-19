import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <h1>Hello Bot</h1>
    </div>
  );
}

export default App;
