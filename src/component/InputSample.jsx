import React, {useState} from 'react';

function InputSample() {
	const [text, setText] = useState('');
	const handleOnChange = (e) => {
		setText(e.target.value);
	}

	const handleOnReset = () => {
		setText('')
	}

	return (
		<div>
			<input type="text" onChange={handleOnChange} value={text}/>
			<button type="button" onClick={handleOnReset}>초기화</button>
			<div className="">
				<b>값 : {text}</b>
			</div>
		</div>
	);
}

export default InputSample;