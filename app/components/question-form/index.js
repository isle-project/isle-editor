// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import isNull from '@stdlib/assert/is-null';
import './question_form.css';


// MAIN //

/**
* A form component combining different question components together with a single submission button.
*
* @property {string} buttonLabel - label of the submit button
* @property {Function} onSubmit - callback invoked when the submit button is clicked
*/
class QuestionForm extends Component {
	constructor( props ) {
		super( props );
	}

	handleClick = () => {
		const elems = this.questionForm.getElementsByClassName( 'submit-button' );
		for ( let i = 0; i < elems.length; i++ ) {
			elems[ i ].click();
		}
		this.props.onSubmit();
	}

	render() {
		let children = React.Children.map( this.props.children, ( child, idx ) => {
			if ( isNull( child ) ) {
				return child;
			}
			return React.cloneElement( child, {
				disableSubmitNotification: true,
				key: idx
			});
		});
		return ( <div
			ref={( div ) => {
				this.questionForm = div;
			}}
			className="question-form"
		>
			{children}
			<Button onClick={this.handleClick}>{this.props.buttonLabel}</Button>
		</div> );
	}
}


// PROPERTIES //

QuestionForm.propTypes = {
	buttonLabel: PropTypes.string,
	onSubmit: PropTypes.func
};

QuestionForm.defaultProps = {
	buttonLabel: 'Submit',
	onSubmit() {}
};


// EXPORTS //

export default QuestionForm;
