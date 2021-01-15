// MODULES //

import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import FullscreenButton from '@isle-project/components/internal/fullscreen-button';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Iframe' );


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
class IFrame extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			width: props.width || window.innerWidth,
			height: props.height || window.innerHeight,
			loading: true
		};
	}

	static getDerivedStateFromProps( props, state ) {
		if ( props.fullscreen ) {
			return {
				width: window.innerWidth,
				height: window.innerHeight
			};
		}
		else if (
			state.width !== props.width ||
			state.height !== props.height
		) {
			return {
				width: props.width,
				height: props.height
			};
		}
		return null;
	}

	render() {
		let style;
		if ( this.props.fullscreen ) {
			style = {
				position: 'absolute',
				width: this.state.width,
				height: this.state.height,
				top: 0,
				left: 0,
				...this.props.style
			};
		} else {
			style = {
				width: this.state.width,
				height: this.state.height,
				...this.props.style
			};
		}
		return (
			<Card id={this.props.id} className={`center ${this.props.className}`} style={style} >
				{!this.state.loading && !this.props.fullscreen ? <FullscreenButton
					header={`${this.props.title}: ${this.props.src}`}
					body={<iframe
						src={this.props.src}
						width="100%"
						height="100%"
						title={this.props.title}
					/>}
					className={this.props.className}
					t={this.props.t}
					style={{
						left: 0
					}}
					wrapInCard={false}
				/> : null}
				<iframe
					src={this.props.src}
					width={this.state.width}
					height={this.state.height}
					style={{
						display: this.state.loading ? 'none' : 'inherit'
					}}
					title={this.props.title}
					onLoad={( event ) => {
						this.setState({
							loading: false
						});
					}}
				/>
				{this.state.loading ? <Alert variant="warning" style={{ margin: 0 }} >
					{this.props.t('alert-message')}
				</Alert> : null}
			</Card>
		);
	}
}


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

export default withTranslation( 'Iframe' )( IFrame );
