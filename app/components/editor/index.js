// MODULES //

import React, { Component, PropTypes } from 'react';
import SimpleMDE from 'simplemde';


// MAIN //

class MarkdownEditor extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			value: props.defaultValue
		};
	}

	componentDidMount () {
		this.simplemde = new SimpleMDE({ element: this.refs.simplemde });

		this.simplemde.codemirror.on( 'change', () => {
			this.setState({
				value: this.simplemde.value()
			});
		});
	}

	componentWillUnmount () {
	}

	render() {
		return (
			<textarea ref="simplemde" defaultValue={this.props.defaultValue} autoComplete="off" />
		);
	}
}


// DEFAULT PROPERTIES //

MarkdownEditor.defaultProps = {
	defaultValue: '',
	options: {}
};


// PROPERTY TYPES //

MarkdownEditor.propTypes = {
	defaultValue: PropTypes.string,
	options: PropTypes.object
};


// EXPORTS //

export default MarkdownEditor;
