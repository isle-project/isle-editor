// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'components/overlay-trigger';


// MAIN //

class SolutionButton extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			showSolution: false
		};
	}

	handleClick = () => {
		this.setState({
			showSolution: !this.state.showSolution
		});
		this.props.onClick();
	}

	render() {
		const tooltip = (
			<Tooltip
				id="tooltip"
			>
				Solution becomes available after answer is submitted and all hints have been required.
			</Tooltip>
		);
		return ( !this.props.disabled ?
		<Button
			variant="warning"
			size="sm"
			onClick={this.handleClick}
		>{ !this.state.showSolution ? 'Show Solution' : 'Hide Solution' }</Button> :
		<OverlayTrigger
			placement="top"
			positionLeft={100}
			overlay={tooltip}
			rootClose={true}
		>
			<div style={{ display: 'inline-block' }}>
				<Button
					variant="warning"
					size="sm"
					disabled
					style={{
						pointerEvents: 'none'
					}}
				>Show Solution</Button>
			</div>
		</OverlayTrigger> );
	}
}


// PROPERTIES //

SolutionButton.propTypes = {
	disabled: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};


// EXPORTS //

export default SolutionButton;
