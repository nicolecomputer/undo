import "./App.css";
import { Tools } from "./Tools.tsx";

function App() {
  return (
    <div
      id="stage"
      style={{
        flexDirection: "row",
      }}
    >
      <Tools />
      <div
        style={{
          width: 800,
          height: 600,
          backgroundColor: "white",
          border: "1px solid black",
          marginLeft: "10px",
          borderRadius: 8,
          boxShadow: "1px 1px 10px rgba(0,0,0,0.1)",
        }}
      >
      </div>
    </div>
  );
}

export default App;
