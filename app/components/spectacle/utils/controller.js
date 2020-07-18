// MODULES //

import React, { Component } from 'react';
import { createHashHistory } from 'history';
import PropTypes from 'prop-types';
import { countSlides } from './slides';
import theme from './../theme.json';
import Context from './context';


// VARIABLES //

const history = createHashHistory();


// MAIN //

class Controller extends Component {
	constructor(props) {
		super(...arguments);
		this.history = props.history || history;
	}

	componentDidMount() {
		this.unlisten = this.history.listen( this._updateRoute );
		const location = this.history.location;
		const slideCount = countSlides(this.props.children.props.children);
		this.props.updateRoute({
			location,
			slideCount
		});
	}

	shouldComponentUpdate( nextProps, nextState ) {
		return this.props !== nextProps || this.state !== nextState;
	}

	componentWillUnmount() {
		this.unlisten();
	}

	_updateRoute = ( location ) => {
		const slideCount = countSlides(this.props.children.props.children);
		this.props.updateRoute({
			location,
			slideCount
		});
	}

	render() {
		const styles = theme;
		return (
			<Context
				history={this.history}
				onStateChange={this.props.onStateChange}
				store={this.props.store}
				styles={styles.screen}
			>
				{this.props.children}
			</Context>
		);
	}
}


// PROPERTIES //

Controller.propTypes = {
	history: PropTypes.object,
	onStateChange: PropTypes.func.isRequired,
	store: PropTypes.object
};

Controller.defaultProps = {
	history: null,
	store: null
};


// EXPORTS //

export default Controller;
