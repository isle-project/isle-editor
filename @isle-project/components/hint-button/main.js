
// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import TimedButton from '@isle-project/components/timed-button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from '@isle-project/components/overlay-trigger';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'HintButton' );
const debug = logger( 'isle:hint-button' );


// FUNCTIONS //

/**
* Returns a popover displaying the unlocked hints.
*
* @private
* @param {integer} index - current hint index
* @param {Array} hints - array of hints
* @param {string} id - unique identifier
* @param {Function} t - translation function
* @returns {Node} popover with hints
*/
const displayHint = ( index, hints, id, t ) => {
	return (
		<Popover
			id={`${id}-hint-popover`}
			title={t( 'hints' )}
			style={{
				minWidth: '400px',
				padding: '3px',
				zIndex: 9999
			}}
		>
			{ hints
				.filter( ( e, i ) => i <= index )
				.map( ( hintText, i ) => ( <span key={i}>
					<label style={{ marginBottom: 0 }}>{t( 'hint' )} {i+1}:</label>
					<br />
					<span>{hintText}</span>
					<br />
				</span> ) )
			}
		</Popover>
	);
};

/**
* Returns a hint button label.
*
* @private
* @param {integer} index - current hint index
* @param {integer} noHints - total number of hints
* @param {boolean} hintOpen - indicates whether hint popover is opened
* @returns {string} hint button label
*/
const getHintLabel = ( index, noHints, hintOpen, t ) => {
	if ( hintOpen ) {
		return index <= 1 ? t( 'close-hint' ) : t( 'close-hints' );
	}
	if ( index === 0 ) {
		return t( 'get-hint' );
	}
	if ( index === noHints ) {
		return t( 'show-hints' );
	}
	return t( 'next-hint' );
};


// MAIN //

/**
* A button for displaying question hints.
*
* @param {boolean} disabled - controls whether the button is disabled
* @param {Array<string|node>} hints - array of hints
* @param {Function} onClick - event handler invoked when user clicks on the button
* @param {Function} onFinished - event handler invoked once all hints are exhausted
* @param {string} placement - tooltip placement
* @param {string} size - button size
* @param {Object} style - CSS inline styles
*/
const HintButton = ({ disabled, hints, onClick, onFinished, placement, size, style, id, t }) => {
	const [ hintOpen, setHintOpen ] = useState( false );
	const [ currentHint, setCurrentHint ] = useState( 0 );
	const label = getHintLabel( currentHint, hints.length, hintOpen, t );
	return (
		<OverlayTrigger
			trigger="click"
			placement={placement}
			overlay={displayHint( currentHint - 1, hints, id, t )}
		>
			<TimedButton
				className="hint-button"
				variant="success"
				size={size}
				onClick={( callback ) => {
					debug( 'Clicked on a hint button...' );
					if ( currentHint < hints.length && hintOpen === false ) {
						onClick( currentHint );
						setCurrentHint( currentHint + 1 );
						setHintOpen( true );
						if ( currentHint + 1 === hints.length ) {
							onFinished();
						}
						return callback( false );
					}
					setHintOpen( false );
					return callback( hintOpen );
				}}
				disabled={disabled}
				autoActivate={false}
				style={style}
			>{label}</TimedButton>
		</OverlayTrigger>
	);
};


// TYPES //

HintButton.propTypes = {
	disabled: PropTypes.bool,
	hints: PropTypes.arrayOf( PropTypes.oneOfType( [
		PropTypes.string, PropTypes.element
	]) ).isRequired,
	onClick: PropTypes.func,
	onFinished: PropTypes.func,
	placement: PropTypes.string,
	size: PropTypes.string,
	style: PropTypes.object
};

HintButton.defaultProps = {
	disabled: false,
	onClick() {},
	onFinished() {},
	placement: 'left',
	size: 'sm',
	style: {}
};


// EXPORTS //

export default withTranslation( 'HintButton' )( HintButton );
