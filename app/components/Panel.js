// MODULES //

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { StyleSheet, css } from 'aphrodite';


// PANEL //

class Panel extends Component {

	constructor( props ) {
		super( props );

		this.ignoreScrollEvents = false;

		this.onScroll = () => {

			if ( !this.ignoreScrollEvents ) {
				this.props.onScroll(
					this.refs.panel.scrollTop,
					this.refs.panel.scrollHeight,
					this.refs.panel.offsetHeight
				);
				this.ignoreScrollEvents = true;
			} else {
				this.ignoreScrollEvents = false;
			}
		};

		this.setScrollTop = ( percentage ) => {

			console.log( percentage )
			const scrollHeight = this.refs.panel.scrollHeight;
			const offsetHeight = this.refs.panel.offsetHeight;

			this.ignoreScrollEvents = true;

			this.refs.panel.scrollTop = percentage * (
				scrollHeight - offsetHeight ) / 100;

			setTimeout( () => {
				this.ignoreScrollEvents = false;
			}, 50 );
		};

	}

	componentDidMount() {
	}

	componentWillReceiveProps( props ) {}

	render() {
		const cssClasses = classnames({
			[ css( style.common ) ]: true,
			[ css( style.overflowScroll ) ]: !this.props.overflowY,
			[ css( style.overflowYScroll ) ]: this.props.overflowY
		});

		return (
			<div ref="panel" onScroll={this.onScroll} className={cssClasses}>
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


// STYLE SHEET //

const style = StyleSheet.create({
	common: {
		height: 'calc(100vh - 90px)'
	},
	overflowYScroll: {
		overflow: 'scroll',
		paddingLeft: '10px'
	},
	overflowScroll: {
		overflow: 'scroll'
	}
});


// EXPORTS //

export default Panel;
