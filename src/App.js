import Hello from "./component/Hello";

function App() {
  // Fragment 사용하기. 브라우저에서 나타나지 않는다.
  const name = 'react';
  // kebob-case (x) camelCase (o)
  const style = {
    backgroundColor:'black',
    color:'aqua'
  }
  // class (x) className (o)
  return (
    <div className="App">
      <>
        {/* 주석, 중괄호로 감싸지 않으면 화면에 보인다. */}

      <Hello></Hello>
      <div className="">안녕하세요.</div>
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
      </>
    </div>
  );
}

export default App;
