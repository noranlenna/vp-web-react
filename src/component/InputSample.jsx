import React, {useRef, useState} from 'react';


function InputSample() {
	const [inputs, setInputs] = useState({
		name:'',
		nickname:''
	});
	const nameInput = useRef()

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
		nameInput.current.focus();

	}

	// ref 객체를 만들고, 선택하고 싶은 dom에 ref 프로퍼티 값을 설정한다.
	return (
		<div>
			<input type="text" name="name" value={name} placeholder="이름" onChange={handleOnChange} ref={nameInput}/>
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