// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Tooltip from '@isle-project/components/tooltip';
import FullscreenButton from '@isle-project/components/internal/fullscreen-button';
import './panel.css';


// FUNCTIONS //

const Header = ({ children, hideTooltip, onHide, minimizable, minimized, onMinimize }) => {
	const { t } = useTranslation( 'Panel' );
	if ( !children ) {
		return null;
	}
	return ( <Card.Header as="h3">
		<span className="unselectable" >{children}</span>
		{ onHide ?
			<Tooltip tooltip={hideTooltip || t( 'close' )} >
				<button className="panel-hide-button fa fa-times" onClick={onHide} />
			</Tooltip> : null
		}
		{ minimizable ? <Tooltip tooltip={minimized ? t( 'maximize' ) : t( 'minimize' )}><button
			className={`panel-hide-button ${minimized ? 'far fa-window-maximize' : 'fas fa-window-minimize'}`}
			onClick={onMinimize}
		/></Tooltip> : null }
	</Card.Header> );
};


// MAIN //

/**
* Card component.
*
* @property {string} className - CSS class name
* @property {(string|node)} header - panel heading (h3)
* @property {(string|node)} footer - panel footer
* @property {boolean} minimizable - whether the panel can be minimized
* @property {boolean} fullscreen - whether the panel can be made fullscreen (only for instructors)
* @property {string} hideTooltip - tooltip displayed over the hide button
* @property {Function} onHide - callback invoked when the close button is clicked
* @property {Object} style - CSS inline styles for container
* @property {Object} bodyStyle - CSS inline styles for body
* @property {Object} footerStyle - CSS inline styles for footer
*/
const Wrapper = ({ className, header, footer, minimizable, fullscreen, hideTooltip, onHide, style, bodyStyle, footerStyle, children, tReady, ...rest }) => {
	const [ minimized, setMinimized ] = useState( false );
	return ( <Card
		{...rest}
		className={`panel ${className}`}
		style={{
			height: minimized ? '53px' : void 0,
			...style
		}}
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
	</Card> );
};


// PROPERTIES //

Wrapper.propTypes = {
	className: PropTypes.string,
	header: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
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

Wrapper.defaultProps = {
	className: '',
	header: null,
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

export default Wrapper;
