// MODULES //

import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import indexOf from '@stdlib/utils/index-of';
import SessionContext from '@isle-project/session/context.js';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import { SUBMISSION } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { useActionLogger } from '@isle-project/session/action_logger.js';


// VARIABLES //

const DEFAULT_OPTIONS = [
	'strongly-disagree',
	'disagree',
	'neither-agree-nor-disagree',
	'agree',
	'strongly-agree'
];


// MAIN //

/**
* A component showing a question and a five-point scale for students to answer.
*
* @property {(string|node)} question - question to be printed
* @property {Array} options - an array of five elements holding custom labels for the different scale levels
* @property {boolean} noMultipleResponses - disallow multiple submissions from a single student
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
const LikertScale = ( props ) => {
	const session = useContext( SessionContext );
	const { id, logAction } = useActionLogger( 'LIKERT_SCALE', props );
	const [ value, setValue ] = useState( null );
	const [ submitted, setSubmitted ] = useState( false );
	const { t } = useTranslation( 'likert-scale' );
	const options = props.options || DEFAULT_OPTIONS.map( x => t( x ) );

	const submitHandler = () => {
		if ( !props.disableSubmitNotification ) {
			session.addNotification({
				title: t('answer-submitted'),
				message: t('answer-submitted-msg'),
				level: 'success'
			});
		}
		setSubmitted( true );
		logAction( SUBMISSION, indexOf( options, value ) );
	};
	const handleChange = ( event ) => {
		setValue( event.target.value );
	};
	const disabled = props.noMultipleResponses && submitted;
	return (
		<Card className={`${props.className} center`} style={{ width: '75%', ...props.style }} >
			<Card.Body>
				<FormGroup className="center" >
					<label>{props.question}</label>
					<br />
					{options.map( ( elem, idx ) => {
						return (
							<Form.Check
								type="radio"
								label={elem}
								checked={value === elem}
								value={elem}
								key={idx}
								disabled={disabled}
								inline
								onClick={handleChange}
							/>
						);
					})}
				</FormGroup>
				<br />
				<Button
					className="submit-button"
					variant="primary"
					size="sm"
					disabled={!value || disabled}
					onClick={submitHandler}
					style={{
						marginRight: '5px'
					}}
				>
					{ ( submitted && !props.noMultipleResponses ) ? t('resubmit') : t('submit') }
				</Button>
				<ResponseVisualizer
					buttonLabel={t('responses')}
					id={id}
					data={{
						type: 'factor',
						levels: options
					}}
					info="LIKERT_SCALE_SUBMISSION"
				/>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

LikertScale.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	options: PropTypes.array,
	noMultipleResponses: PropTypes.bool,
	disableSubmitNotification: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object
};

LikertScale.defaultProps = {
	question: '',
	options: null,
	noMultipleResponses: false,
	disableSubmitNotification: false,
	className: '',
	style: {}
};


// EXPORTS //

export default withPropCheck( LikertScale );
