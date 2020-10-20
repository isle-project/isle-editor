// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import omit from '@stdlib/utils/omit';
import Tooltip from 'components/tooltip';
import FullscreenButton from 'components/internal/fullscreen-button';
import './load_translations.js';
import './panel.css';


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
class Wrapper extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			minimized: false
		};
	}

	toggleMinimize = () => {
		this.setState({
			minimized: !this.state.minimized
		});
	}

	renderHeader() {
		if ( !this.props.header ) {
			return null;
		}
		return ( <Card.Header as="h3">
			<span className="unselectable" >{this.props.header}</span>
			{ this.props.onHide ?
				<Tooltip tooltip={this.props.hideTooltip || this.props.t( 'close' )} >
					<button className="panel-hide-button fa fa-times" onClick={this.props.onHide} />
				</Tooltip> : null
			}
			{ this.props.minimizable ? <Tooltip tooltip={this.state.minimized ? this.props.t( 'maximize' ) : this.props.t( 'minimize' )}><button
				className={`panel-hide-button ${this.state.minimized ? 'far fa-window-maximize' : 'fas fa-window-minimize'}`}
				onClick={this.toggleMinimize}
			/></Tooltip> : null }
		</Card.Header> );
	}

	render() {
		return ( <Card
			{...omit( this.props, [ 'footerStyle', 'bodyStyle', 'onHide', 'minimizable', 'hideTooltip', 'fullscreen', 't', 'tReady' ] )}
			className={`panel ${this.props.className}`}
			style={{
				height: this.state.minimized ? '53px' : void 0,
				...this.props.style
			}}
		>
			{ this.props.fullscreen ? <FullscreenButton
				header={this.props.header}
				body={this.props.children}
				footer={this.props.footer}
				className={this.props.className}
				t={this.props.t}
				owner
			/> : null }
			{this.renderHeader()}
			<Card.Body style={{
				...this.props.bodyStyle,
				display: this.state.minimized ? 'none' : null
			}} >
				{this.props.children}
			</Card.Body>
			{this.props.footer ? <Card.Footer
				style={{
					...this.props.footerStyle,
					display: this.state.minimized ? 'none' : null
				}}
			>{this.props.footer}</Card.Footer> : null}
		</Card> );
	}
}


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

export default withTranslation()( Wrapper );
