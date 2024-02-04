import { useState } from "react";
import "./App.css";
import Navigate from "./component/Navigate";
import Home from "./page/Home";

function App() {
  const [active, setActive] = useState<string>("new");

  const handleActive = (value: string) => {
    setActive(value);
  };
  return (
    <div>
      <div className="navigate">
        <Navigate active={active} onActive={handleActive} />
      </div>
      <div className="container">
        <Home active={active} />
      </div>
    </div>
  );
}

export default App;
