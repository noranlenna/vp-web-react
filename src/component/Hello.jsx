import React from 'react';



function Hello({color,name}) {
	return (
		<div>
			<div style={color}>
				안녕하세요 {name}
			</div>

		</div>

	);
}
	Hello.defaultProps = {
	name:'none'
}


export default Hello;