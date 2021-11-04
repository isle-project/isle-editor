// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Overlay from 'react-bootstrap/Overlay';


// MAIN //

class ColumnTitle extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			showTooltip: false
		};
	}

	showTooltip = () => {
		this.setState({
			showTooltip: true
		});
	};

	hideTooltip = () => {
		this.setState({
			showTooltip: false
		});
	};

	render() {
		return (
			<Fragment>
				<Overlay
					show={this.state.showTooltip}
					target={this.title}
				>
					{({ placement, scheduleUpdate, arrowProps, outOfBoundaries, show, ...props }) => {
						return (
							<div
								{...props}
								style={{
									backgroundColor: 'rgba(10, 10, 10,0.9)',
									padding: '2px 10px',
									color: 'white',
									borderRadius: 3,
									maxWidth: '300px',
									marginBottom: '10px',
									...props.style
								}}
							>
								{this.props.tooltip}
							</div>
						);
					}}
				</Overlay>
				<span
					ref={( title ) => { this.title = title; }}
					onMouseOver={this.showTooltip} onFocus={this.showTooltip}
					onMouseOut={this.hideTooltip} onBlur={this.hideTooltip}
				>{this.props.title}</span>
			</Fragment>
		);
	}
}


// PROPERTIES //

ColumnTitle.propTypes = {
	title: PropTypes.string.isRequired,
	tooltip: PropTypes.string
};

ColumnTitle.defaultProps = {
	tooltip: ''
};


// EXPORTS //

export default ColumnTitle;
