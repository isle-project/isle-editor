// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Panel from 'components/panel';


// MAIN //

/**
* A component for generating other components (e.g., automatically generated questions).
*
* @property {(string|node)} buttonLabel - label for button
* @property {Function} onGenerate - function invoked that should return a new component to be rendered in the lesson
*/
class Generator extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			element: null
		};
	}

	componentWillMount() {
		if ( this.props.autoStart ) {
			this.handleClick();
		}
	}

	handleClick = () => {
		const out = this.props.onGenerate();
		this.setState({
			element: out
		});
	}

	render() {
		return (
			<Panel>
				{this.state.element}
				<Button block onClick={this.handleClick}>{this.props.buttonLabel}</Button>
			</Panel>
		);
	}
}


// PROPERTIES //

Generator.propTypes = {
	autoStart: PropTypes.bool,
	buttonLabel: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	onGenerate: PropTypes.func.isRequired
};

Generator.defaultProps = {
	autoStart: true,
	buttonLabel: 'Generate'
};


// EXPORTS //

export default Generator;
