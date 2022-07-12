import React,{useState} from 'react';


// 리액트 16.8 이후 Hooks 도입으로 인해, 함수형 컴포넌트에도 상태관리가 된다.
function Counter() {

	// useState를 사용할 때는 배열 비구조화 할당을 이용한다.
	// const numberState = useState(0);
	// const number = numberState[0];
	// const setNumber = numberState[1];
	//
	// const [number, setNumber] = useState(0);

	const [number, setNumber] = useState(0);
	const onIncrease = () => {
		setNumber(number + 1)
	}

	const onDecrease = () => {
		setNumber(number -1)
	}


	// onclick에는 함수형태를 넣고, 함수를 실행시키면 안된다.
	// 렌더링 되는 과정에서 실행되기 때문이다.
	return (
		<div>
			<h1>{number}</h1>
			<button type="button" onClick={onIncrease}>1</button>
			<button type="button" onClick={onDecrease}>2</button>

		</div>
	);
}

export default Counter;