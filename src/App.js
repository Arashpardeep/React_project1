import logo from "./logo.svg";
import "./App.css";
import Demo from './components/Demo';
import Newdemo from "./components/Newdemo";
import NoJsx from "./components/Nojsx";
import Class1demo from "./components/Class1demo";

function App() {
  return (
    <div className="App">
      <p>This is a paragraph</p>
      <Demo/>
      <Newdemo/>
      <NoJsx/>
      <Class1demo/>
    </div>
  );
}

export default App;
