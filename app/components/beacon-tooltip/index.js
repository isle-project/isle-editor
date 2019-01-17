// MODULES //

import React, { Component, Fragment } from 'react';
import Floater from 'react-floater';
import PropTypes from 'prop-types';
import logger from 'debug';
import './beacon_tooltip.css';


// VARIABLES //

const debug = logger( 'isle:beacon-tooltip' );
const WAIT_TIME = 5000;


// MAIN //

/**
* Component placing a beacon in the lesson, either independently or attached to a `target`. Upon hovering or clicking on the beacon, a tooltip is displayed.
*
* @property {(string|node)} title - title to be displayed at the top of the tooltip
* @property {(string|node)} content - tooltip content
* @property {string} event - if set to `click`, tooltip is toggled when clicking on beacon; if set to `hover`, the tooltip is activated via hovering
* @property {string} placement - placement of the tooltip relative to `target` (either `top`, `top-start`, `top-end`, `bottom`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, or `center`)
* @property {string} target - class or ID selector for element to attach tooltip to
* @property {number} offset - distance between the tooltip and `target` in pixels
* @property {Function} onChange - callback invoked upon state change of the tooltip. Receives two arguments: the `action` (`open` or `close`) and the passed `props`
*/
class BeaconTooltip extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			show: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.show();
		}, WAIT_TIME );
	}

	show() {
		this.setState({
			show: true
		});
	}

	handleChange = ( action, props ) => {
		debug( 'Received action: '+action );
		this.props.onChange( action, props );
	}

	render() {
		if ( !this.state.show ) {
			null;
		}
		return (
			<Fragment>
				{this.props.children}
				<Floater
					callback={this.handleChange}
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
					{...this.props}
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


// PROPERTIES //

BeaconTooltip.defaultProps = {
	title: null,
	content: '`content` comes here...',
	event: 'click',
	placement: 'left',
	target: '',
	offset: 15,
	onChange() {}
};

BeaconTooltip.propTypes = {
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	event: PropTypes.oneOf([ 'click', 'hover' ]),
	placement: PropTypes.oneOf([ 'top', 'top-start', 'top-end', 'bottom', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end', 'auto', 'center' ]),
	target: PropTypes.string,
	offset: PropTypes.number,
	onChange: PropTypes.func
};


// EXPORTS //

export default BeaconTooltip;
