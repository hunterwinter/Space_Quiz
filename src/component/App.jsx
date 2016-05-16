import * as React from 'react';
import Home from "./page/Home";
import Accepted  from "./page/Accepted";
import Rejected from "./page/Rejected";
import Begin from "./page/Begin";
import Test from "./page/Tester";

export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = { 
			page: "home"
		}
		
	}

	_navigate(page){
		this.setState({ page });
	}

	_renderPage(){
		switch(this.state.page){
			case "home":
			 	return (<Home navigate={this._navigate.bind(this)}/>)
			break;
			case "begin":
				return (<Begin navigate={this._navigate.bind(this)}/>)
			break;
			case "test":
				return (<Test navigate={this._navigate.bind(this)}/>)
			break;
			case "accepted":
				return (<Accepted navigate={this._navigate.bind(this)}/>)
			break;
			case "rejected":
				return (<Rejected navigate={this._navigate.bind(this)}/>)
		}
	}

	render() {
		return (
			<div className="mars-app">
				{this._renderPage()}
			</div>
		)
	}
}
