// MODULES //

import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import isNull from '@stdlib/assert/is-null';
import SessionContext from '@isle-project/session/context.js';
import isLineWrapper from '@isle-project/utils/is-line-wrapper';
import { addResources } from '@isle-project/locales';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './question_form.css';


// VARIABLES //

addResources( 'QuestionForm' );
const debug = logger( 'isle:question-form' );


// MAIN //

/**
* A form component combining different question components together with a single submission button.
*
* @property {string} buttonLabel - label of the submit button
* @property {Function} onSubmit - callback invoked when the submit button is clicked
*/
const QuestionForm = ({ buttonLabel, onSubmit, children, t }) => {
	const session = useContext( SessionContext );
	const [ answered, setAnswered ] = useState({});
	if ( !children ) {
		return <Alert variant="danger" >{t('missing-children')}</Alert>;
	}
	let questionForm;
	const handleClick = () => {
		const elements = questionForm.getElementsByClassName( 'submit-button' );
		for ( let i = 0; i < elements.length; i++ ) {
			elements[ i ].click();
		}
		onSubmit();
	};
	const cloneChild = ( child, idx ) => {
		return React.cloneElement( child, {
			disableSubmitNotification: true,
			onChange: () => {
				const newAnswered = { ...answered };
				newAnswered[ idx ] = true;
				setAnswered( newAnswered );
			},
			key: idx
		});
	};
	const clonedChildren = React.Children.map( children, ( child, idx ) => {
		if ( isNull( child ) ) {
			return child;
		}
		if ( isLineWrapper( child ) ) {
			debug( 'Encountered a line wrapper, go one level deeper...' );
			return React.cloneElement( child, {
				children: cloneChild( child.props.children, idx ),
				key: idx
			});
		}
		return cloneChild( child, idx );
	});
	let finished = 0;
	for ( let key in answered ) {
		if ( answered[ key ] ) {
			finished += 1;
		}
	}
	const disabled = ( finished !== clonedChildren.length ) && !session.isOwner();
	return ( <div
		ref={( div ) => {
			questionForm = div;
		}}
		className="question-form"
	>
		{clonedChildren}
		<Button disabled={disabled} onClick={handleClick} style={{ float: 'right' }}>
			{buttonLabel || t('submit')}
		</Button>
	</div> );
};


// PROPERTIES //

QuestionForm.propTypes = {
	buttonLabel: PropTypes.string,
	onSubmit: PropTypes.func
};

QuestionForm.defaultProps = {
	buttonLabel: null,
	onSubmit() {}
};


// EXPORTS //

export default withTranslation( 'QuestionForm' )( withPropCheck( QuestionForm ) );
