import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookMore from "./components/HookMore";
import ClassHookMore from "./components/ClassHookMore";
import HookCounterThree from "./components/HookCounterThree";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ClassCounter />
      <HookCounter />
      <HookMore />
      <ClassHookMore />
      <HookCounterThree />
    </div>
  );
}

export default App;
