// MODULES //

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import FocusTrap from 'focus-trap-react';
import Tooltip from '@isle-project/components/tooltip';
import FullscreenButton from '@isle-project/components/internal/fullscreen-button';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './panel.css';


// FUNCTIONS //

const Header = ({ children, headerTag, hideTooltip, onHide, minimizable, minimized, onMinimize }) => {
	const { t } = useTranslation( 'panel' );
	if ( !children ) {
		return null;
	}
	return ( <Card.Header as={headerTag} >
		<span className="unselectable" >{children}</span>
		<div style={{ float: 'right' }} >
		{ minimizable ? <Tooltip tooltip={minimized ? t( 'maximize' ) : t( 'minimize' )}><button
			className={`panel-button ${minimized ? 'far fa-window-maximize' : 'fas fa-window-minimize'}`}
			onClick={onMinimize}
		/></Tooltip> : null }
		{ onHide ?
			<Tooltip tooltip={hideTooltip || t( 'close' )} >
				<button className="panel-button fa fa-times" onClick={onHide} />
			</Tooltip> : null
		}
		</div>
	</Card.Header> );
};


// MAIN //

/**
* Card component.
*
* @property {string} className - CSS class name
* @property {(string|node)} header - panel heading
* @property {string} headerTag - tag used for the panel heading
* @property {(string|node)} footer - panel footer
* @property {boolean} trapFocus - whether to trap the user's focus in the panel
* @property {boolean} minimizable - whether the panel can be minimized
* @property {boolean} fullscreen - whether the panel can be made fullscreen (only for instructors)
* @property {string} hideTooltip - tooltip displayed over the hide button
* @property {Function} onHide - callback invoked when the close button is clicked
* @property {Object} style - CSS inline styles for container
* @property {Object} bodyStyle - CSS inline styles for body
* @property {Object} footerStyle - CSS inline styles for footer
*/
const Panel = ({ className, header, headerTag, footer, trapFocus, minimizable, fullscreen, hideTooltip, onHide, style, bodyStyle, footerStyle, children, tReady, ...rest }) => {
	const [ minimized, setMinimized ] = useState( false );
	const cardRef = useRef( null );
	const card = <Card
		{...rest}
		className={`panel ${className}`}
		style={{
			height: minimized ? '53px' : void 0,
			...style
		}}
		ref={cardRef}
	>
		{ fullscreen ? <FullscreenButton
			header={header}
			body={children}
			footer={footer}
			className={className}
			owner
		/> : null }
		<Header
			minimizable={minimizable} minimized={minimized}
			onMinimize={() => {
				setMinimized( !minimized );
			}}
			hideTooltip={hideTooltip} onHide={onHide}
			headerTag={headerTag}
		>
			{header}
		</Header>
		<Card.Body style={{
			...bodyStyle,
			display: minimized ? 'none' : null
		}} >
			{children}
		</Card.Body>
		{footer ? <Card.Footer
			style={{
				...footerStyle,
				display: minimized ? 'none' : null
			}}
		>{footer}</Card.Footer> : null}
	</Card>;
	if ( trapFocus ) {
		return ( <FocusTrap focusTrapOptions={{
			clickOutsideDeactivates: true,
			initialFocus: () => {
				return cardRef.current;
			}
		}} >
			{card}
		</FocusTrap> );
	}
	return card;
};


// PROPERTIES //

Panel.propTypes = {
	className: PropTypes.string,
	header: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	headerTag: PropTypes.string,
	footer: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	minimizable: PropTypes.bool,
	fullscreen: PropTypes.bool,
	hideTooltip: PropTypes.string,
	bodyStyle: PropTypes.object,
	footerStyle: PropTypes.object,
	style: PropTypes.object,
	onHide: PropTypes.func
};

Panel.defaultProps = {
	className: '',
	header: null,
	headerTag: 'h3',
	footer: null,
	minimizable: false,
	fullscreen: false,
	hideTooltip: null,
	bodyStyle: {},
	footerStyle: {},
	style: {},
	onHide: null
};


// EXPORTS //

export default withPropCheck( Panel );
