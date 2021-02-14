import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookMore from "./components/HookMore";
import ClassHookMore from "./components/ClassHookMore";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="component-flex">
        <ClassCounter />
        <HookCounter />
      </div>
      <div className="component-flex">
        <HookMore />
        <ClassHookMore />
      </div>
      <div className="component-flex">
        <HookCounterThree />
        <HookCounterFour />
      </div>
    </div>
  );
}

export default App;
