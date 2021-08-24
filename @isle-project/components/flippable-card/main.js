// MODULES //

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ReactDraggable from 'react-draggable';
import noop from '@stdlib/utils/noop';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import isArray from '@stdlib/assert/is-array';
import { withPropCheck } from '@isle-project/utils/prop-check';


// MAIN //

/**
* An ISLE component that allows two render two-sides.
*
* @property {(string|node)} button - button label
* @property {boolean} draggable - controls whether the card may be dragged around
* @property {number} flipSpeedBackToFront - the speed by which the card turns from background to foreground, in seconds
* @property {number} flipSpeedFrontToBack - the speed by which the card turns from foreground to background, in seconds
* @property {boolean} defaultValue - initial flip state of the card
* @property {boolean} value - flip state of the card (for controlled component)
* @property {number} perspective - CSS property value to give 3d-positioned element a perspective
* @property {boolean} oneTime - indicates whether the flip process may be executed just once
* @property {boolean} disabled - controls whether the flippable card is disabled
* @property {number} size - size of the card (sets its `width` and `height`)
* @property {Object} containerStyle - CSS style of the container
* @property {Object} frontStyle - CSS style of the front card
* @property {Object} backStyle - CSS style of the back card
* @property {Function} onChange - callback invoked once the card is flipped; receives the current flipped status as its sole argument
*/
const FlippableCard = ( props ) => {
	const defaultValue = props.defaultValue;
	const [ isFlipped, setIsFlipped ] = useState( defaultValue );
	const [ fired, setFired ] = useState( false );
	const { t } = useTranslation( 'general' );
	useEffect( () => {
		setIsFlipped( defaultValue );
	}, [ defaultValue ] );

	if ( !isArray( props.children ) ) {
		return <Alert variant="danger" >{t('flippable-requires-two-children')}</Alert>;
	}
	const handleToggle = () => {
		if ( props.value !== void 0 ) {
			return props.onChange( !props.value );
		}
		if ( !props.oneTime ) {
			setIsFlipped( !isFlipped );
			props.onChange( !isFlipped );
		} else if ( !fired ) {
			// Case: one-shot
			setFired( true );
			setIsFlipped( !isFlipped );
			props.onChange( !isFlipped );
		}
	};
	const flipped = props.value !== void 0 ? props.value : isFlipped;
	const styles = {
		container: {
			perspective: props.perspective,
			transformStyle: 'preserve-3d',
			width: props.size,
			height: props.size,
			cursor: 'pointer',
			...props.containerStyle
		},
		flipper: {
			position: 'relative',
			transformStyle: 'preserve-3d',
			width: '100%',
			height: '100%'
		},
		front: {
			background: 'gainsboro',
			WebkitBackfaceVisibility: 'hidden',
			backfaceVisibility: 'hidden',
			left: '0',
			position: 'absolute',
			top: '0',
			transform: `rotateY(${flipped ? 180 : 0 }deg)`, // eslint-disable-line i18next/no-literal-string
			transformStyle: 'preserve-3d',
			width: '100%',
			height: '100%',
			zIndex: '2',
			transition: `${props.flipSpeedBackToFront}s`, // eslint-disable-line i18next/no-literal-string
			...props.frontStyle
		},
		back: {
			background: 'pink',
			WebkitBackfaceVisibility: 'hidden',
			backfaceVisibility: 'hidden',
			left: '0',
			position: 'absolute',
			transform: `rotateY(${flipped ? 0 : -180 }deg)`, // eslint-disable-line i18next/no-literal-string
			transformStyle: 'preserve-3d',
			top: '0',
			width: '100%',
			height: '100%',
			zIndex: 2,
			transition: `${props.flipSpeedFrontToBack}s`, // eslint-disable-line i18next/no-literal-string
			...props.backStyle
		}
	};
	const button = props.button ?
		<Button onClick={!props.disabled ? handleToggle : noop} block >
			{props.button}
		</Button> : null;
	const handleClick = !button && !props.disabled ? handleToggle : noop;
	const out = <div
		id={props.id} role="button" tabIndex={0}
		onClick={handleClick} onKeyPress={handleClick}
		className="react-card-flip" style={styles.container}
	>
		<div className="react-card-flipper" style={styles.flipper} >
			<div className="react-card-front" style={styles.front} >
				{props.children[ 0 ]}
				{button}
			</div>
			<div className="react-card-back" style={styles.back} >
				{props.children[ 1 ]}
				{button}
			</div>
		</div>
	</div>;
	if ( props.draggable ) {
		return ( <ReactDraggable>{out}</ReactDraggable> );
	}
	return out;
};


// PROPERTIES //

FlippableCard.propTypes = {
	button: PropTypes.string,
	children: ( props, propName, componentName ) => {
		if ( React.Children.count( props[ propName ] ) !== 2 ) {
			// eslint-disable-next-line i18next/no-literal-string
			return new Error( `${componentName} requires two children.` );
		}
		return null;
	},
	draggable: PropTypes.bool,
	flipSpeedBackToFront: PropTypes.number,
	flipSpeedFrontToBack: PropTypes.number,
	oneTime: PropTypes.bool,
	perspective: PropTypes.number,
	size: PropTypes.number,
	disabled: PropTypes.bool,
	value: PropTypes.bool,
	defaultValue: PropTypes.bool,
	containerStyle: PropTypes.object,
	frontStyle: PropTypes.object,
	backStyle: PropTypes.object,
	onChange: PropTypes.func
};

FlippableCard.defaultProps = {
	button: null,
	children: null,
	draggable: false,
	flipSpeedBackToFront: 1,
	flipSpeedFrontToBack: 1,
	oneTime: false,
	perspective: 1000,
	size: 250,
	disabled: false,
	value: void 0,
	defaultValue: false,
	containerStyle: {},
	frontStyle: {},
	backStyle: {},
	onChange() {}
};


// EXPORTS //

export default withPropCheck( FlippableCard );
