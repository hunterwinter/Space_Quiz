import * as React from 'react';

export default class Begin extends React.Component {
	_quiz(){
		this.props.navigate("test")
	}
	
	render(){
		return (
			<div className="flex">
				<button onClick={this._quiz.bind(this)}>begin evaluation</button>
			</div>
		)
	}
}