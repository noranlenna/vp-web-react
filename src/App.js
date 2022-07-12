import UserList from "./component/UserList";
import { useRef, useState } from "react";
import CreateUser from "./component/CreateUser";

// 배열에 변화를 줄 땐, 객체와 마찬가지로 불변성을 지켜야 한다.
// 배열의 Push, Splice, Sort 등 직접 수정하는 함수를 그냥 사용해선 안된다.
// 사용할 경우에는 스프레드 문법을 이용하여 객체를 복사한 뒤, 위 함수를 사용하거나,
// 새로운 배열을 리턴하는 함수를 사용한다.

function App() {
  // focus 추가
  const focusRef = useRef("");

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);
  const nextId = useRef(4);

  const handleOnCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers(users.concat(user));
    // setUsers([...users,user]); 배열 복사

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
    focusRef.current.focus();
  };

  return (
    <div className="App">
      <>
        <CreateUser
          username={username}
          email={email}
          handleOnChange={handleOnChange}
          handleOnCreate={handleOnCreate}
          focusRef={focusRef}
        ></CreateUser>
        <UserList users={users}></UserList>
      </>
    </div>
  );
}

export default App;
