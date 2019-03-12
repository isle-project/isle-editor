// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Panel from 'components/panel';


// MAIN //

/**
* A component for generating other components (e.g., automatically generated questions).
*/
class Generator extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			element: null
		};
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
	buttonLabel: PropTypes.string,
	onGenerate: PropTypes.func.isRequired
};

Generator.defaultProps = {
	buttonLabel: 'Generate'
};


// EXPORTS //

export default Generator;
