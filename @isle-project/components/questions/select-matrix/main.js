// MODULES //

import React, { Component, Fragment } from 'react';
import logger from 'debug';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import copy from '@stdlib/utils/copy';
import keys from '@stdlib/utils/keys';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import generateUID from '@isle-project/utils/uid';
import Panel from '@isle-project/components/panel';
import HintButton from '@isle-project/components/hint-button';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import ChatButton from '@isle-project/components/internal/chat-button';
import Text from '@isle-project/components/text';
import FeedbackButtons from '@isle-project/components/feedback';
import SessionContext from '@isle-project/session/context.js';
import { SELECT_QUESTION_MATRIX_SUBMISSION } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './select-question-matrix.css';


// VARIABLES //

const debug = logger( 'isle:select-question-matrix' );
const uid = generateUID( 'select-question-matrix' );


// MAIN //

/**
* A question with an answer consisting of multiple select boxes.
*
* @param {(node|string)} question - question to be displayed at the top of the select question matrix
* @param {Array} rows - row labels
* @param {Array} cols - column labels
* @param {Object} options - object with key-value pairs with keys having the form `row:col`, e.g. `0:0`, `0:1`, `1:0` etc., and their corresponding values being arrays of the possible answer choices for the individual select questions
* @param {Object} solution - solution object with key-value pairs with keys having the form `row:col`, e.g. `0:0`, `0:1`, `1:0` etc., and their corresponding values being the index of the correct answer element from the respective `options` array
* @param {Object} cellLabels - labels for cells defined by object with keys having the format `row:col`
* @property {Array<(string|node)>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {string} provideFeedback - whether to provide `none` feedback at all, `individual` feedback on the submitted answer(s), or `overall` feedback for all questions
* @property {boolean} allowIncomplete - whether to allow submissions without a selection made in each select box
* @property {number} nTries - after how many tries no further answers are accepted (if `provideFeedback` is not `none`)
* @property {string} failureMsg - notification text displayed upon submitting incorrect answers
* @property {string} successMsg - notification text displayed upon submitting correct answers
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {Object} panelProps - additional properties to be passed to the outer <Panel /> component
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback function invoked upon changing the answers
* @property {Function} onSubmit - callback function invoked upon submission with the answers as a first and a boolean indicating correctness as second parameter
*/
class SelectQuestionMatrix extends Component {
	constructor( props ) {
		super( props );
		this.id = props.id || uid( props );
		this.state = {
			answers: {},
			submitted: false,
			answerState: null,
			completed: false,
			numbSubmissions: 0,
			submittedAnswers: null
		};
	}

	renderColumnNames() {
		const len = this.props.cols.length;
		let offset;
		if ( len > 7 ) {
			offset = 1;
		} else if ( len > 4 ) {
			offset = 2;
		} else {
			offset = 3;
		}
		return (
			<Row className="multiple-choice-matrix-question-header" >
				<Col sm={offset}></Col>
				{this.props.cols.map( ( elem, idx ) => {
					return ( <Col key={idx}>
						<Form.Label>
							{ isString( elem ) ? <Text raw={elem} /> : elem }
						</Form.Label>
					</Col> );
				})}
			</Row>
		);
	}

	handleChangeFactory = ( label ) => {
		return ( selected ) => {
			debug( `Received a new value for ${label}...` );
			const answers = copy( this.state.answers, 1 );
			answers[ label ] = selected.value;
			this.setState({
				answers
			});
			this.props.onChange( answers );
		};
	};

	handleSubmit = () => {
		const session = this.context;
		let correct = true;
		const labels = keys( this.props.solution );
		for ( let i = 0; i < labels.length; i++ ) {
			const key = labels[ i ];
			const sol = this.props.solution[ key ];
			const answer = this.state.answers[ key ];
			if ( isNumber( answer ) ) {
				if ( isArray( sol ) ) {
					if ( !contains( sol, answer ) ) {
						correct = false;
					}
				}
				else if ( sol !== answer ) {
					correct = false;
				}
			}
		}
		const hasSolution = !isEmptyObject( this.props.solution );
		if ( this.props.provideFeedback !== 'none' && hasSolution ) {
			if ( correct ) {
				session.addNotification({
					title: this.props.t('correct'),
					message: this.props.successMsg || this.props.t('success-message'),
					level: 'success'
				});
			} else {
				session.addNotification({
					title: this.props.t('incorrect'),
					message: this.props.failureMsg || this.props.t('failure-message'),
					level: 'error'
				});
			}
		} else {
			session.addNotification({
				title: this.state.submitted ? this.props.t('answer-resubmitted') : this.props.t('answer-submitted'),
				message: this.state.submitted ?
					this.props.t('resubmit-message') :
					this.props.t('submit-message'),
				level: 'info'
			});
		}
		session.log({
			id: this.id,
			type: SELECT_QUESTION_MATRIX_SUBMISSION,
			value: this.state.answers
		});
		this.props.onSubmit( this.state.answers, correct );
		let answerState = null;
		if ( this.props.provideFeedback && hasSolution ) {
			answerState = correct ? 'success' : 'danger';
		}
		const numbSubmissions = this.state.numbSubmissions + 1;
		this.setState({
			submitted: true,
			answerState,
			submittedAnswers: copy( this.state.answers ),
			numbSubmissions,
			completed: (
				numbSubmissions >= this.props.nTries || correct
			) && this.props.provideFeedback !== 'none' && hasSolution
		});
	};

	renderSelectInput( row, i ) {
		const label = row + ':' + i;
		let options = this.props.options[ label ] || [];
		options = options.map( ( e, i ) => {
			return { 'label': e, 'value': i };
		});
		let valueColor;
		const displayFeedback = ( this.props.provideFeedback === 'overall' && this.state.submitted ) ||
			( this.props.provideFeedback === 'individual' && this.state.submitted && isNumber( this.state.submittedAnswers[ label ] ) );
		if (
			displayFeedback &&
			isNumber( this.props.solution[ label ] )
		) {
			valueColor = this.state.submittedAnswers[ label ] === this.props.solution[ label ] ? 'green' : 'red';
		}
		const select = <Select
			name="form-field-name"
			className="select-field"
			isDisabled={this.state.completed}
			isSearchable={false}
			options={options}
			key={`select-${row}-${i}`}
			onChange={this.handleChangeFactory( label )}
			menuPlacement="top"
			menuPortalTarget={document.body}
			styles={{
				menuPortal: base => ({
					...base,
					zIndex: 1010
				}),
				singleValue: ( base ) => ({
					...base,
					color: valueColor
				}),
				menu: base => ({
					...base,
					width: 'max-content',
					minWidth: '100%'
				})
			}}
		/>;
		const cellLabel = this.props.cellLabels[ label ];
		let badgeLabel;
		if ( this.state.completed ) {
			badgeLabel = ( valueColor === 'green' ) ? this.props.t('correct-answer') : this.props.t('should-have-been');
		} else {
			badgeLabel = ( valueColor === 'green' ) ? this.props.t('correct') : this.props.t('try-again');
		}
		return ( <Fragment>
			{cellLabel ? <span className="select-question-matrix-cell-label" >{cellLabel}</span> : null }{select}
			{displayFeedback ?
				<Badge bg={valueColor === 'green' ? 'success' : 'danger'}>
					{badgeLabel}
					{this.state.completed ? this.props.options[ label ][ this.props.solution[ label ] ] : null}
				</Badge> : null}
		</Fragment> );
	}

	renderRowSelects( row ) {
		const len = this.props.cols.length;
		const buttons = new Array( len );
		for ( let i = 0; i < len; i++ ) {
			buttons[ i ] = <Col key={i}>
				{this.renderSelectInput( row, i )}
			</Col>;
		}
		return ( <Fragment>
			{buttons}
		</Fragment> );
	}

	renderRows() {
		const len = this.props.rows.length;
		let offset;
		if ( len > 7 ) {
			offset = 1;
		} else if ( len > 4 ) {
			offset = 2;
		} else {
			offset = 3;
		}
		return this.props.rows.map( ( rowLabel, idx ) => {
			return (
				<Row key={idx} style={{ marginBottom: 15, marginTop: 15 }} >
					<Col sm={offset}>
						<Form.Label column style={{ textAlign: 'right' }}>
							{ isString( rowLabel ) ? <Text raw={rowLabel} /> : rowLabel }
						</Form.Label>
					</Col>
					{this.renderRowSelects( idx )}
				</Row>
			);
		});
	}

	render() {
		const nHints = this.props.hints.length;
		const nAnswers = keys( this.state.answers ).length;
		const nInputs = keys( this.props.options ).length;
		const disabled = ( nAnswers === 0 ) ||
			( nAnswers < nInputs && !this.props.allowIncomplete ) ||
			this.state.completed;
		return (
			<Panel
				id={this.id} border={this.state.answerState}
				className={`select-question-matrix ${this.props.className}`}
				style={this.props.style}
				{...this.props.panelProps}
			>
				{ this.props.question ? <label>{this.props.question}</label> : null }
				{this.renderColumnNames()}
				{this.renderRows()}
				<div className="select-question-matrix-toolbar">
					<Button className="submit-button"
						variant="primary" size="sm" onClick={this.handleSubmit}
						disabled={disabled}
					>
						{ this.state.submitted ? this.props.t('resubmit') : this.props.t('submit') }
					</Button>
					{ nHints > 0 ?
						<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
						null
					}
					{
						this.props.chat ? <ChatButton for={this.id} /> : null
					}
				</div>
				<div>
					<ResponseVisualizer
						id={this.id}
						data={{
							type: 'tensor',
							rows: this.props.rows,
							cols: this.props.cols,
							question: this.props.question,
							solution: this.props.solution,
							options: this.props.options
						}}
						info={SELECT_QUESTION_MATRIX_SUBMISSION}
					/>
					{ this.props.feedback ? <FeedbackButtons
						id={this.id+'_feedback'}
						style={{ float: 'left' }}
					/> : null }
				</div>
			</Panel>
		);
	}
}


// PROPERTIES //

SelectQuestionMatrix.defaultProps = {
	question: '',
	rows: [],
	cols: [],
	solution: {},
	options: {},
	hints: [],
	hintPlacement: 'bottom',
	feedback: true,
	provideFeedback: 'individual',
	allowIncomplete: false,
	nTries: 3,
	failureMsg: null,
	successMsg: null,
	cellLabels: {},
	chat: false,
	panelProps: {},
	className: '',
	style: {},
	onChange() {},
	onSubmit() {}
};

SelectQuestionMatrix.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	rows: PropTypes.array,
	cols: PropTypes.array,
	options: PropTypes.object,
	solution: PropTypes.object,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	hintPlacement: PropTypes.string,
	feedback: PropTypes.bool,
	provideFeedback: PropTypes.oneOf([ 'none', 'overall', 'individual' ]),
	allowIncomplete: PropTypes.bool,
	nTries: PropTypes.number,
	failureMsg: PropTypes.string,
	successMsg: PropTypes.string,
	cellLabels: PropTypes.object,
	chat: PropTypes.bool,
	panelProps: PropTypes.object,
	className: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

SelectQuestionMatrix.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'questions/select-matrix' )( withPropCheck( SelectQuestionMatrix ) );
