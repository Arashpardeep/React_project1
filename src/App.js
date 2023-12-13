import logo from "./logo.svg";
import "./App.css";
import Demo from "./components/Demo";
import Newdemo from "./components/Newdemo";
import NoJsx from "./components/Nojsx";
import Class1demo from "./components/Class1demo";
import Demo2 from "./components/Demo2";
import Newdemo2 from "./components/Newdemo2";
import Demo3 from "./components/Demo3";
import Classprops from "./components/classprops";
import Newclass from "./components/Newclass";
import Demo4 from "./components/Demo4";
import Imagedemo from "./components/Imagedemo";

function App() {
  return (
    <div className="App">
      <p>This is a paragraph</p>
      <Demo />
      <Newdemo />
      <NoJsx />
      <Class1demo />
      <Demo2 name="Andy" age="20" />
      <Newdemo2 username="Arash" email="arash3842@gmail.com" salary="$100" />
      <Demo3>
        <button>Demo 3 button</button>
      </Demo3>
      <Demo3>
        <input type="text" name="demo3inp" id="demo3inp"></input>
      </Demo3>
      <Demo3>
        <p>This is for Demo3</p>
      </Demo3>
      <Classprops message="Hello" />
      <Newclass />
      <Demo4/>
      <Imagedemo/>
    </div>
  );
}

export default App;
