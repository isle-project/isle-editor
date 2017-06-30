// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
			const { session } = this.context;
			request.post( session.server + '/retrieve_data', {
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
				{ this.props.showClear ?
					<Button
						style={{ float: 'right' }}
						bsStyle="primary"
						onClick={ () => {
							const { session } = this.context;
							request.post( session.server + '/delete_session_data', {
								form: {
									query: JSON.stringify( this.props.query ),
									user: JSON.stringify( session.user )
								}
							}, ( err ) => {
								this.props.onData( null, []);
							});
						}}
					>Clear Data</Button> : null
				}
				{this.props.children}
			</Panel>
		);
	}

}


// DEFAULT PROPERTIES //

Metrics.defaultProps = {
	interval: null,
	onData() {},
	showClear: false
};


// PROPERTY TYPES //

Metrics.propTypes = {
	interval: PropTypes.number,
	onData: PropTypes.func,
	query: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	]).isRequired,
	showClear: PropTypes.bool
};

Metrics.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Metrics;
