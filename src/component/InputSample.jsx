import React, {useState} from 'react';


// input의 개수가 여러개가 됐을 경우, useState를 여러번 사용해선 안된다.
// input에 name을 설정하고, 이벤트가 발생할 떄, 값을 참조하도록 한다.
// useState는 객체 형태로 관리해야한다.

function InputSample() {

	const [inputs, setInputs] = useState({
		name:'',
		nickname:''
	});

	const {name, nickname}= inputs; // 비구조화 할당

	const handleOnChange = (e) => {
		const {value, name} = e.target; // e.target 에서 name과 value를 추출.
		setInputs({
			...inputs,
			[name]:value
		})
	}

	const handleOnReset = () => {
		setInputs({
			name:'',
			nickname: ''
		})

	}

	// 리액트는 객체를 직접 수정해선 안된다.
	// 새로운 객체를 만든 뒤, 해당 객체에 변화를 주고, 그 객체를 상태로 사용한다.

	return (
		<div>
			<input type="text" name="name" value={name} placeholder="이름" onChange={handleOnChange}/>
			<input type="text" name="nickname" value={nickname} id="" placeholder="닉네임" onChange={handleOnChange}/>
			<button type="button" onClick={handleOnReset}>초기화</button>
			<div className="">
				<b>값 : </b>
				{name} ( {nickname} )
			</div>
		</div>
	);
}

export default InputSample;