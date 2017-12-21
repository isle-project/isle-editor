// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// PANEL //

class Panel extends Component {
	constructor( props ) {
		super( props );

		this.scrollPercentage = 0;
		this.scrollTop = null;
		this.scrollHeight = null;
		this.offsetHeight = null;

		this.ignoreScrollEvents = false;

		this.onScroll = () => {
			this.scrollTop = this.panel.scrollTop;
			this.scrollHeight = this.panel.scrollHeight;
			this.offsetHeight = this.panel.offsetHeight;

			if ( !this.ignoreScrollEvents ) {
				this.props.onScroll(
					this.scrollTop,
					this.scrollHeight,
					this.offsetHeight
				);
				this.ignoreScrollEvents = true;
			} else {
				this.ignoreScrollEvents = false;
			}
		};

		this.setScrollTop = ( percentage ) => {
			const scrollHeight = this.scrollHeight;
			const offsetHeight = this.offsetHeight;
			this.ignoreScrollEvents = true;
			this.panel.scrollTop = percentage * (
				scrollHeight - offsetHeight ) / 100;
			this.scrollPercentage = percentage;
			setTimeout( () => {
				this.ignoreScrollEvents = false;
			}, 20 );
		};
	}

	componentDidMount() {
		this.scrollTop = this.panel.scrollTop;
		this.scrollHeight = this.panel.scrollHeight;
		this.offsetHeight = this.panel.offsetHeight;
	}

	componentDidUpdate() {
		this.scrollTop = this.panel.scrollTop;
		this.scrollHeight = this.panel.scrollHeight;
		this.offsetHeight = this.panel.offsetHeight;
		this.setScrollTop( this.scrollPercentage );
	}

	render() {
		return (
			<div ref={( div ) => { this.panel = div; }} onScroll={this.onScroll} style={{
				height: 'calc(100vh - 90px)',
				overflow: 'scroll'
			}}>
				{this.props.children}
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

Panel.defaultProps = {
	onScroll() {}
};


// PROPERTY TYPES //

Panel.propTypes = {
	onScroll: PropTypes.func
};


// EXPORTS //

export default Panel;
