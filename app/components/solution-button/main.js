// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'components/overlay-trigger';
import './load_translations.js';


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
				{this.props.t( 'solution-available-tooltip')}
				{this.props.hasHints ? this.props.t( 'solution-available-tooltip-hints' ) : null}.
			</Tooltip>
		);
		return ( !this.props.disabled ?
			<div style={{ display: 'inline-block' }}>
				<Button
					className="solution-button"
					variant="warning"
					size="sm"
					onClick={this.handleClick}
				>
					{ !this.state.showSolution ? this.props.t( 'show-solution' ) : this.props.t( 'hide-solution' ) }
				</Button>
			</div> :
			<OverlayTrigger
				placement="top"
				positionLeft={100}
				overlay={tooltip}
				rootClose={true}
			>
				<div style={{ display: 'inline-block' }}>
					<Button
						className="solution-button"
						variant="warning"
						size="sm"
						disabled
						style={{
							pointerEvents: 'none'
						}}
					>{this.props.t( 'show-solution' )}</Button>
				</div>
			</OverlayTrigger>
		);
	}
}


// PROPERTIES //

SolutionButton.propTypes = {
	disabled: PropTypes.bool.isRequired,
	hasHints: PropTypes.bool,
	onClick: PropTypes.func.isRequired
};

SolutionButton.defaultProps = {
	hasHints: true
};


// EXPORTS //

export default withTranslation()( SolutionButton );
