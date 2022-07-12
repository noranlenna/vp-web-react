import UserList from "./component/UserList";
import { useRef, useState } from "react";
import CreateUser from "./component/CreateUser";

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
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: true,
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

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
    focusRef.current.focus();
  };

  const handleOnRemove = (id) => {
    setUsers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
  };

  // toggle로 들어오는 id ->
  const handelOnToggle = (id) => {
    setUsers(
      users.map((user) => {
        return user.id === id ? { ...user, active: !user.active } : user;
      })
    );
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
        <UserList
          users={users}
          handleOnRemove={handleOnRemove}
          handleOnToggle={handelOnToggle}
        ></UserList>
      </>
    </div>
  );
}

export default App;
