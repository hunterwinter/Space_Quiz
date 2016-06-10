import * as React from 'react';
import Timer from '../Timer';

const benQuestion = [
	{	
		question: "Do you get uncomfortable in confined spaces?", 
		answer: "ben affleck"
	}, 

	{
		question: "Who was the best actor in the film \"Armageddon\"",
		answer: "ben affleck"
	}, 

	{
		question: "Are you a Star Wars fan or a Star Trek fan?",
		answer: "ben affleck"
	}
]

export default class TestPage extends React.Component {

	constructor(props){
		super(props);
		this.state = { 
			question: 0, correct: 0}
	
	}

_accepted(){
		this.props.navigate("accepted")
	}
_rejected(){
		this.props.navigate("rejected")
	}

_submitAnswer(e){
		e.preventDefault();	
	if(this.refs.quizInput.value === benQuestion[this.state.question].answer ){
		this.setState({ correct: this.state.correct += 1});
	}
	if(this.state.question === 2 && this.state.correct >= 2) {
		this._accepted();
	}  else {
		if(this.state.question === 2 && this.state.correct !== 3) {
			this._rejected();
		}
	}

	this.setState({ question: this.state.question += 1});

	this.refs.quizInput.value = "";

} 

	componentDidMount() {
     this.refs.quizInput.focus();  
 }
	
	render(){
		return (
			<div className="test-page flex">
					<div className="clock">
						<Timer navigate={this.props.navigate}/>
					</div>
				<div className="quiz-box-wrapper">
					<div className="quiz-box-container">
						<p>{benQuestion[this.state.question].question}</p>
						<form className="quiz-input">
							<input type='text' ref="quizInput"/>
						</form>
						<div className="button-container">
							<button onClick={this._submitAnswer.bind(this)}>submit answer</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}