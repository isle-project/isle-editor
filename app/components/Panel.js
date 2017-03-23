// MODULES //

import React, { Component, PropTypes } from 'react';


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
			this.scrollTop = this.refs.panel.scrollTop;
			this.scrollHeight = this.refs.panel.scrollHeight;
			this.offsetHeight = this.refs.panel.offsetHeight;

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

			this.refs.panel.scrollTop = percentage * (
				scrollHeight - offsetHeight ) / 100;

			this.scrollPercentage = percentage;

			setTimeout( () => {
				this.ignoreScrollEvents = false;
			}, 20 );
		};

	}

	componentDidMount() {
		this.scrollTop = this.refs.panel.scrollTop;
		this.scrollHeight = this.refs.panel.scrollHeight;
		this.offsetHeight = this.refs.panel.offsetHeight;
	}

	componentDidUpdate() {
		this.scrollTop = this.refs.panel.scrollTop;
		this.scrollHeight = this.refs.panel.scrollHeight;
		this.offsetHeight = this.refs.panel.offsetHeight;
		this.setScrollTop( this.scrollPercentage );
	}

	componentWillReceiveProps( props ) {}

	render() {
		return (
			<div ref="panel" onScroll={this.onScroll} style={{
				height: 'calc(100vh - 90px)',
				overflow: 'scroll',
				paddingLeft: '10px'
			}}>
				{this.props.children}
			</div>
		);
	}
};


// DEFAULT PROPERTIES //

Panel.defaultProps = {
	onChange() {},
	onScroll() {}
};


// PROPERTY TYPES //

Panel.propTypes = {
	onChange: PropTypes.func,
	onScroll: PropTypes.func,
	value: PropTypes.string,
	overflowY: PropTypes.bool
};


// EXPORTS //

export default Panel;
