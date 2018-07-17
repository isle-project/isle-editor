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
	clbk() {},
	content: '`content` comes here...',
	event: 'click',
	offset: 15,
	placement: 'left',
	target: '',
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
