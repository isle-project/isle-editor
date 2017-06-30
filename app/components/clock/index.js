// MODULES //

import React, { Component } from 'react';



// MAIN //

class Clock extends Component {

	constructor( props ) {

		super( props );

		this.state = {
			time: new Date().toLocaleTimeString()
		};

		this.updateTime = () => {
			const currentTime = new Date().toLocaleTimeString();
			this.setState({
				time: currentTime
			});
		};
	}

	componentDidMount() {
		this.interval = setInterval( this.updateTime, 1000 );
	}

	componentWillUnmount() {
		clearInterval( this.interval );
	}

	render() {
		let styles = {
			fontSize: 12, 
			fontFamily: 'monospace',
			...this.props.style
		};
		return (
			<span style={styles}>
				{this.state.time}
			</span>
		);
	}
}


// EXPORTS //

export default Clock;
