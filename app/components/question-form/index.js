// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import isNull from '@stdlib/assert/is-null';
import SessionContext from 'session/context.js';
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

		this.state = {
			answered: {}
		};
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
			if ( !child.props.requireAnswer ) {
				this.state.answered[ idx ] = true; // eslint-disable-line react/no-direct-mutation-state
			}
			return React.cloneElement( child, {
				disableSubmitNotification: true,
				onChange: () => {
					const answered = this.state.answered;
					answered[ idx ] = true;
					this.setState( answered );
				},
				key: idx
			});
		});
		let finished = 0;
		for ( let key in this.state.answered ) {
			if ( this.state.answered[ key ] ) {
				finished += 1;
			}
		}
		const session = this.context;
		const disabled = ( finished !== children.length ) && !session.isOwner();
		return ( <div
			ref={( div ) => {
				this.questionForm = div;
			}}
			className="question-form"
		>
			{children}
			<Button disabled={disabled} onClick={this.handleClick}>{this.props.buttonLabel}</Button>
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

QuestionForm.contextType = SessionContext;


// EXPORTS //

export default QuestionForm;
