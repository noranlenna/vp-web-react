import UserList from "./component/UserList";
import {useRef} from "react";

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  // useRef를 사용하여 변수를 관리.
  // useRef로 관리하는 변수는, 값이 바뀌어도 컴포넌트가 리렌더링 되지 않는다.
  // useRef로 관리하는 변수는, 설정 후 바로 조회가 가능하지만,
  // 일반 컴포넌트는 렌더링이 된 이후에 상태를 조회할 수 있다.
  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  }

  return (
    <div className="App">
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
