import Hello from "./component/Hello";
import Wrapper from "./component/Wrapper";


function App() {
  return (
    <div className="App">
      <Wrapper>
    <Hello name={"React"} color={{backgroundColor : "red"}}></Hello>
      <Hello></Hello>

      </Wrapper>
    </div>
  );
}

export default App;
