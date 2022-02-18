import "./App.css";
import CounterComponent from "./components/counterComponent";
import HoverCounter from "./components/hoverCounter";
import PropsContainer from "./components/propsContainer.js";
import RenderProps from "./components/renderProps";
import SetStateInClass from "./components/setStateInClass";
function App() {
  return (
    <div className="App">
      {/* <PropsContainer /> */}
      {/* <SetStateInClass /> */}
      {/* <RenderProps
        render={(count, incrementCount) => {
          return <HoverCounter count={count} incrementCount={incrementCount} />;
        }}
      />

      <RenderProps
        render={(count, incrementCount) => {
          return (
            <CounterComponent count={count} incrementCount={incrementCount} />
          );
        }}
      /> */}
      <HoverCounter />
      <CounterComponent />
    </div>
  );
}

export default App;
