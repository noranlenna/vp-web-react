import React from "react";



function CreateUser({
  username,
  email,
  handleOnChange,
  handleOnCreate,
  focusRef,
}) {
	// enterkey onKeyPress 등록함.
	const handleKeyPress = (e) => {
		if (e.key === 'Enter'){
			handleOnCreate();
		}
	}
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="계정명"
        onChange={handleOnChange}
        value={username}
        ref={focusRef}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        onChange={handleOnChange}
        value={email}
				onKeyDown={handleKeyPress}
      />
      <button type="button" onClick={handleOnCreate}>
        등록
      </button>
    </div>
  );
}

export default CreateUser;
