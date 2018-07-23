// MODULES //

import React, { Component, Fragment } from 'react';
import Floater from 'react-floater';
import PropTypes from 'prop-types';
import './beacon_tooltip.css';


// VARIABLES //

const WAIT_TIME = 1000;


// MAIN //

class BeaconTooltip extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			ready: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.show();
		}, WAIT_TIME );
	}

	show() {
		this.setState({
			ready: true
		});
	}

	render() {
		if ( !this.state.ready ) {
			return null;
		}
		return (
			<Fragment>
				{this.props.children}
				<Floater
					callback={this.props.onChange}
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


// DEFAULT PROPERTIES //

BeaconTooltip.defaultProps = {
	title: null,
	content: '`content` comes here...',
	event: 'click',
	placement: 'left',
	target: '',
	offset: 15,
	onChange() {},
};


// PROPERTY TYPES //

BeaconTooltip.propDescriptions = {
	title: 'title to be displayed at the top of the tooltip',
	content: 'tooltip content',
	event: 'if set to `click`, tooltip is toggled when clicking on beacon; if set to `hover`, the tooltip is activated via hovering',
	placement: 'placement of the tooltip relative to `target` (either `top`, `top-start`, `top-end`, `bottom`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, or `center`)',
	target: 'class or ID selector for element to attach tooltip to',
	offset: 'distance between the tooltip and `target` in pixels',
	onChange: 'callback invoked upon state change of the tooltip. Receives two arguments: the `action` (`open` or `close`) and the passed `props`'
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
