import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("bg-orange-200");

  return (
    <>
      <div className={color}>
        <h1 className="text-3xl font-bold underline ">Project Girgit</h1>
      </div>
    </>
  );
}

export default App;
