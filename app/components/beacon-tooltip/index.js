// MODULES //

import React, { Component, Fragment } from 'react';
import Floater from 'react-floater';
import PropTypes from 'prop-types';
import './beacon_tooltip.css';


// MAIN //

class BeaconTooltip extends Component {
	constructor( props ) {
		super( props );

		this.state = {};
	}

	componentDidMount() {
		if ( this.props.target ) {
			this.setState({
				target: this.props.target
			});
		}
	}

	render() {
		return (
			<Fragment>
				{this.props.children}
				<Floater
					callback={this.props.clbk}
					content={this.props.content}
					event={this.props.event}
					placement={this.props.placement}
					title={this.props.title}
					showCloseButton={this.props.event === 'click'}
					offset={this.props.offset}
					wrapperOptions={{
						offset: -22,
						placement: 'top',
						position: true
					}}
					{...this.state}
				>
					<button
						className="beacon-button"
					>
						<span className="beacon-inner" />
						<span className="beacon-outer" />
					</button>

				</Floater>
			</Fragment>
		);
	}
}


// DEFAULT PROPERTIES //

BeaconTooltip.defaultProps = {
	clbk(){},
	content: '`content` comes here...',
	event: 'click',
	offset: 15,
	placement: 'left',
	target: null,
	title: null
};


// PROPERTY TYPES //

BeaconTooltip.propTypes = {
	clbk: PropTypes.func,
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	event: PropTypes.oneOf([ 'click', 'hover' ]),
	offset: PropTypes.number,
	placement: PropTypes.oneOf([ 'top', 'top-start', 'top-end', 'bottom', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end', 'auto', 'center' ]),
	target: PropTypes.string,
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	])
};


// EXPORTS //

export default BeaconTooltip;
