// MODULES //

import React, { Component, PropTypes } from 'react';
import { Button, Panel } from 'react-bootstrap';
import request from 'request';


// MAIN //

class Metrics extends Component {

	constructor() {
		super();

		this.state = {
			active: false
		};

		this.getData = () => {
			if ( global.lesson && global.lesson.session && global.lesson.session.server ) {
				const { session } = global.lesson;
				request.post( session.server + '/retrieveData', {
					form: {
						query: JSON.stringify( this.props.query ),
						user: JSON.stringify( session.user )
					}
				}, ( error, response, body ) => {
					if ( error ) {
						this.props.onData( error );
					} else {
						this.props.onData( null, JSON.parse( body ) );
					}
				});
			}
		};

		this.start = () => {
			if ( this.props.interval ) {
				this.runner = window.setInterval( this.getData, this.props.interval );
			} else {
				this.getData();
			}
		};

		this.stop = () => {
			if ( this.runner ) {
				clearInterval( this.runner );
			}
		};
	}

	componentWillUnmount() {
		if ( this.runner ) {
			clearInterval( this.runner );
		}
	}

	render() {
		return (
			<Panel>
				<Button
					bsStyle="primary"
					bsSize="large"
					onClick={ () => {
						this.setState({
							active: !this.state.active
						}, () => {
							if ( this.state.active || !this.props.interval ) {
								this.start();
							} else {
								this.stop();
							}
						});
					}}
				>{ ( this.state.active && this.props.interval ) ? 'Stop' : 'Fetch Data' }</Button>
				{this.props.children}
			</Panel>
		);
	}

}


// DEFAULT PROPERTIES //

Metrics.defaultProps = {
	interval: null,
	onData() {}
};


// PROPERTY TYPES //

Metrics.propTypes = {
	interval: PropTypes.number,
	onData: PropTypes.func,
	query: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	]).isRequired
};


// EXPORTS //

export default Metrics;
