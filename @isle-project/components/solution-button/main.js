// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from '@isle-project/components/overlay-trigger';


// MAIN //

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

export default withTranslation()( SolutionButton );
