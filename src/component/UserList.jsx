import React from "react";

// CSS cursor : pointer로 하면 손가락 모양으로 변한다.
// 꼭 기억하기. onClick 프로퍼티에 파라메터가 필요한 함수를 실행시킬 땐 arrow function을 써서 함수 전달하기.

function User({ user, handleOnRemove, handleOnToggle }) {
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
        onClick={() => {
          handleOnToggle(user.id);
        }}
      >
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
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

function UserList({ users, handleOnRemove, handleOnToggle }) {
  // users를 user 컴포넌트로.
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          handleOnRemove={handleOnRemove}
          handleOnToggle={handleOnToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
