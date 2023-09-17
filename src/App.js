//import logo from "./logo.svg";
import "./App.css";

function App() {
  let family = ["Raja", "Rayeesa", "Aira Fathima"];
  // function handleButton() {
  //   alert("Button clicked!!");
  // }
  let member = family.map((mem) => mem);

  return (
    <div id="container">
      <h1>{member + " "}</h1>
    </div>
  );
}

export default App;
