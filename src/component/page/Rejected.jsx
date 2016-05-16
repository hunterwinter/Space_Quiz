import * as React from 'react';
import Timer2 from '../Timer2';


export default class Rejected extends React.Component {
	_quiz(){
		this.props.navigate("test")
	}
	render(){
		return (
			<div className="flex">
				<div className="retry-timer">
					<Timer2 navigate={this.props.navigate}/>
				</div>
				<h1 className="rejected">rejected</h1>
			</div>
		)
	}
}