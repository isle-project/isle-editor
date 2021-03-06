// MODULES //

import React, { useState, useEffect, useCallback, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import FullscreenButton from '@isle-project/components/internal/fullscreen-button';
import { withPropCheck } from '@isle-project/utils/prop-check';
import generateUID from '@isle-project/utils/uid';
import SessionContext from '@isle-project/session/context.js';
import { IFRAME_INTERACTION } from '@isle-project/constants/actions.js';


// VARIABLES //

const uid = generateUID( 'iframe' );


// MAIN //

/**
* An iFrame component.
*
* @property {string} title - iFrame title
* @property {string} src - source URL
* @property {boolean} fullscreen - controls whether to display the iFrame in fullscreen mode
* @property {number} width - iFrame width (in px)
* @property {number} height - iFrame height (in px)
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
const IFrame = ( props ) => {
	const id = useRef( props.id || uid( props ) );
	const iframeRef = useRef( null );
	const { title, src, fullscreen, width, height, className, style } = props;
	const [ dimensions, setDimensions ] = useState({
		width: width || window.innerWidth,
		height: height || window.innerHeight
	});
	const session = useContext( SessionContext );
	const [ loaded, setLoaded ] = useState( false );
	const { t } = useTranslation( 'iframe' );

	useEffect( () => {
		const listener = () => {
			if ( document.activeElement === iframeRef.current ) {
				session.log({
					id: id.current,
					type: IFRAME_INTERACTION,
					value: true
				});
			}
		};
		window.addEventListener( 'blur', listener );
		return () => {
			window.removeEventListener( 'blur', listener );
		};
	}, [ session ] );
	useEffect( () => {
		if ( fullscreen ) {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}
		else if ( dimensions.width !== width || dimensions.height !== height ) {
			setDimensions({
				width: width,
				height: height
			});
		}
	}, [ dimensions, fullscreen, height, width ] );
	const handleLoad = useCallback( ( event ) => {
		setLoaded( true );
	}, [] );
	let divStyle;
	if ( fullscreen ) {
		divStyle = {
			position: 'absolute',
			width: dimensions.width,
			height: dimensions.height,
			top: 0,
			left: 0,
			...style
		};
	} else {
		divStyle = {
			width: dimensions.width,
			height: dimensions.height,
			...style
		};
	}
	return (
		<Card id={`${id.current}-card`} className={`center ${className}`} style={divStyle} >
			{loaded && !fullscreen ? <FullscreenButton
				header={`${title}: ${src}`}
				body={<iframe
					src={src}
					width="100%"
					height="100%"
					title={title}
				/>}
				className={className}
				t={t}
				style={{
					left: 0
				}}
				wrapInCard={false}
			/> : null}
			<iframe
				id={id.current}
				ref={iframeRef}
				src={src}
				width={dimensions.width}
				height={dimensions.height}
				style={{
					display: !loaded ? 'none' : 'inherit'
				}}
				title={title}
				onLoad={handleLoad}
			/>
			{!loaded ? <Alert variant="warning" style={{ margin: 0 }} >
				{t('alert-message')}
			</Alert> : null}
		</Card>
	);
};


// PROPERTIES //

IFrame.defaultProps = {
	title: 'An iFrame',
	fullscreen: false,
	width: 900,
	height: 600,
	className: '',
	style: {}
};

IFrame.propTypes = {
	src: PropTypes.string.isRequired,
	fullscreen: PropTypes.bool,
	title: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

export default withPropCheck( IFrame );
