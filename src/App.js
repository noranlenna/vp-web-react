import Hello from "./component/Hello";
import Wrapper from "./component/Wrapper";

// props 값을 생략하면 true
// isSpecial={true}
function App() {
  return (
    <div className="App">
      <Wrapper>
    <Hello name={"React"} color={{backgroundColor : "red"}} isSpecial></Hello>
      <Hello></Hello>

      </Wrapper>
    </div>
  );
}

export default App;
