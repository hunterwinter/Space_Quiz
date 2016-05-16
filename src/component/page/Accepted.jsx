import * as React from 'react';

	export default class Accept extends React.Component {

		render(){
			return (
				<div className="flex">
					<h1 className="accepted">Accepted</h1>			
					<i className="launch fa fa-space-shuttle fa-rotate-270" aria-hidden="true"></i>
				</div>
			)
		}
	}