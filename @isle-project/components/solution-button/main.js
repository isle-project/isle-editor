// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from '@isle-project/components/overlay-trigger';


// MAIN //

/**
* A button component for displaying a solution.
*
* @property {Object} props - component properties
* @param {boolean} props.disabled - whether or not the solution button is disabled
* @param {boolean} [props.hasHints=true] - whether or not the solution button has hints
* @param {Function} props.onClick - a function to call when the solution button is clicked
* @returns {React.Element} solution button
*/
const SolutionButton = ({ disabled, hasHints, onClick, t }) => {
	const [ showSolution, setShowSolution ] = useState( false );
	const tooltip = (
		<Tooltip
			id="tooltip"
		>
			{t( 'solution-available-tooltip')}
			{hasHints ? t( 'solution-available-tooltip-hints' ) : null}.
		</Tooltip>
	);
	return ( !disabled ?
		<div style={{ display: 'inline-block' }}>
			<Button
				className="solution-button"
				variant="warning"
				size="sm"
				onClick={() => {
					setShowSolution( !showSolution );
					onClick();
				}}
			>
				{ !showSolution ? t( 'show-solution' ) : t( 'hide-solution' ) }
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
				>{t( 'show-solution' )}</Button>
			</div>
		</OverlayTrigger>
	);
};


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

export default withTranslation( 'solution-button' )( SolutionButton );
