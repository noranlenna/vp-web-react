import React from "react";


// onClick={extenalFunc()} 형식으로, 함수 자체를 실행시키면,
// 컴포넌트가 렌더링 되는 동시에 실행이 되버린다.
// 그래서 ()를 빼서 즉시실행 시키기 않도록 한다.
// 하지만, function에 파라메터가 필요할 땐,
// onClick={paramFunc(somePara)} 형태로 하면 바로 실행이 되버리므로,
// onClick에 콜백 함수로 처리를 하고(Arrow Function), 함수가 실행될 때,
// user.id를 건네주어 처리하는 방식으로 한다.

function User({ user, handleOnRemove }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button
        type="button"
        onClick={() => {
          handleOnRemove(user.id);
        }}
      >
        삭제
      </button>
    </div>
  );
}

function UserList({ users, handleOnRemove }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} handleOnRemove={handleOnRemove} />
      ))}
    </div>
  );
}

export default UserList;
