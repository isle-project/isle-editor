// MODULES //

import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';


// MAIN //

class Pages extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			activePage: 1
		};
	}

	handleSelect = ( eventKey ) => {
		this.setState({
			activePage: eventKey
		});
	}

	render() {
		if ( !this.props.children ) return null;
		return (
			<div
				className="panel panel-default"
			>
				<div className="panel-heading">
					<h3 className="panel-title">{this.props.title}</h3>
				</div>
				<Pagination
					prev next first last
					bsSize="medium"
					maxButtons={4}
					items={this.props.children.length || 1}
					activePage={this.state.activePage}
					onSelect={this.handleSelect}
				/>
				<div style={{
					height: this.props.height,
					overflowY: 'scroll',
					padding: '5px',
					borderWidth: '1px 0px 0px 0px',
					borderColor: '#dddddd',
					borderStyle: 'solid'
				}}>
					{this.props.children[ this.state.activePage-1 ] || this.props.children}
				</div>
			</div>
		);
	}
}


// TYPES //

Pages.propTypes = {
	height: PropTypes.number,
	title: PropTypes.string
};

Pages.defaultProps = {
	height: null,
	title: ''
};


// EXPORTS //

export default Pages;
