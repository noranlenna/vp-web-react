import React from 'react';

// 삼항연산자 사용해도 되지만,
// undefined, null, false 는 렌더하지 않으므로,
// && 연산자를 사용해서 처리하는 것이 간편하다.
// 단축 평가 논리 계산법

function Hello({color,name, isSpecial}) {
	return (
		<div>
			<div style={color}>
				{isSpecial && <b>*</b>}
				안녕하세요 {name}
			</div>

		</div>

	);
}
	Hello.defaultProps = {
	name:'none'
}


export default Hello;