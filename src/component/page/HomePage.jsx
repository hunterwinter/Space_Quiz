import * as React from 'react';

export default class Home extends React.Component {
	_beginTest(){
		this.props.navigate("begin")
	}
	
	render(){
		return (
			<div className="flex">
				<button onClick={this._beginTest.bind(this)}>Take Quiz</button>
			</div>
		)
	}
}
