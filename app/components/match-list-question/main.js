// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import shuffle from '@stdlib/random/shuffle';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import * as d3 from 'd3';
import generateUID from 'utils/uid';
import SolutionButton from 'components/solution-button';
import ChatButton from 'components/chat-button';
import HintButton from 'components/hint-button';
import Tooltip from 'components/tooltip';
import ResponseVisualizer from 'components/response-visualizer';
import FeedbackButtons from 'components/feedback';
import Text from 'components/text';
import SessionContext from 'session/context.js';
import { MATCH_LIST_TOGGLE_SOLUTION, MATCH_LIST_OPEN_HINT, MATCH_LIST_SUBMISSION } from 'constants/actions.js';
import OptionsList from './options_list.js';
import './load_translations.js';
import './match_list_question.css';


// VARIABLES //

const debug = logger( 'isle:match-list-question' );
const uid = generateUID( 'match-list-question' );


// FUNCTIONS //

function createColorScale( length ) {
	const color = d3.scaleLinear().domain([ 1, length ])
		.interpolate( d3.interpolateHclLong )
		.range([ d3.rgb( 'violet' ), d3.rgb( 'yellow' ) ]);

	const colorScale = new Array( length );
	for ( let i = 0; i < length; i++ ) {
		colorScale[ i ] = color( i );
	}
	return shuffle( colorScale );
}


// MAIN //

/**
* An ISLE component that renders a question in which the learner has to match elements from two lists with each other in the correct way.
*
* @property {(string|node)} question - question to be displayed at the top of the match list question component
* @property {Array} elements - an `array` holding the correct pairs displayed at the top of the free text question component. Each `array` element must be an `object` with `a` and `b` properties; supply elements with only `a` or `b` properties to add distractor answers
* @property {Array<string>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} provideFeedback - indicates whether the solution should be accessible after learners submit their answers
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {Array} colorScale - if set, the supplied colors are used for the tiles
* @property {string} shuffle - specifies whether to shuffle the `left`, `right`, or `both` columns whose elements have to be matched
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {string} submissionMsg - notification displayed when the learner first submits his answer
* @property {string} resubmissionMsg - notification displayed for all submissions after the first one
* @property {number} maxlength - maximum allowed number of characters
* @property {Date} until - time until students should be allowed to submit answers
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onSubmit - callback invoked when students submits an answer
*/
class MatchListQuestion extends Component {
	constructor( props ) {
		super( props );
		let { elements, colorScale } = this.props;
		if ( !colorScale ) {
			colorScale = createColorScale( 2 * elements.length );
		}
		this.id = props.id || uid( props );
		this.state = {
			selectedA: null,
			selectedB: null,
			colorScale,
			answers: [],
			submitted: false
		};
	}

	componentDidUpdate() {
		const { selectedA, selectedB, answers, colorScale } = this.state;

		if ( selectedA && selectedB ) {
			answers.push({
				a: selectedA,
				b: selectedB,
				color: colorScale.pop()
			});
			this.setState({
				selectedA: null,
				selectedB: null,
				answers
			});
		}
	}

	onSelect( list, option ) {
		const { colorScale } = this.state;
		const answers = this.state.answers.filter(
			answer => {
				if ( answer.a === option || answer.b === option ) {
					colorScale.push( answer.color );
				}
				return answer.a !== option && answer.b !== option;
			}
		);
		this.setState({ [ list ]: option, answers, colorScale });
	}

	sendSubmitNotification = () => {
		const session = this.context;
		if ( this.state.submitted ) {
			session.addNotification({
				title: this.props.t('answer-resubmitted'),
				message: this.props.resubmissionMsg,
				level: 'info'
			});
		} else {
			session.addNotification({
				title: this.props.t('answer-submitted'),
				message: this.props.submissionMsg,
				level: 'info'
			});
		}
	}

	handleSubmit = () => {
		const session = this.context;
		if ( !this.props.disableSubmitNotification ) {
			this.sendSubmitNotification();
		}
		this.setState({
			submitted: true
		});
		const answers = this.state.answers.map( ans => ({ a: ans.a, b: ans.b }) );
		session.log({
			id: this.id,
			type: MATCH_LIST_SUBMISSION,
			value: JSON.stringify( answers )
		});
		this.props.onSubmit( answers );
	}

	toggleSolution = () => {
		let { elements, colorScale } = this.props;
		if ( !colorScale ) {
			colorScale = createColorScale( 2 * elements.length );
		}
		const session = this.context;
		session.log({
			id: this.id,
			type: MATCH_LIST_TOGGLE_SOLUTION,
			value: null
		});
		if ( !this.state.userAnswers ) {
			const userAnswers = this.state.answers;
			const answers = elements.map( ( q, i ) => {
				if ( !q.a || !q.b ) {
					return q;
				}
				return Object.assign({}, q, { color: colorScale[ i ] });
			});
			this.setState({ answers, userAnswers });
		} else {
			// Revert answers
			const userAnswers = null;
			const answers = this.state.userAnswers;
			this.setState({ answers, userAnswers });
		}
	}

	logHint = ( idx ) => {
		debug( 'Logging hint...' );
		const session = this.context;
		session.log({
			id: this.id,
			type: MATCH_LIST_OPEN_HINT,
			value: idx
		});
	}

	renderSubmitButton( unfinished ) {
		const session = this.context;
		if ( this.props.until && session.startTime > this.props.until ) {
			return <span className="title" style={{ marginLeft: 4 }} >{this.props.t('question-closed')}</span>;
		}
		return (
			<Tooltip id={`${this.id}_tooltip`} tooltip={this.props.t('submit-tooltip')} >
				<div style={{ display: 'inline-block' }}>
					<Button
						className="submit-button"
						variant="primary"
						size="sm"
						onClick={this.handleSubmit}
						style={{
							pointerEvents: unfinished ? 'none' : null
						}}
						disabled={unfinished}
					>
						{ !this.state.submitted ? this.props.t('submit') : this.props.t('resubmit') }
					</Button>
				</div>
			</Tooltip>
		);
	}

	render() {
		const { question, elements, hints } = this.props;
		const { answers } = this.state;
		const nHints = hints.length;
		const onSelectA = this.onSelect.bind( this, 'selectedA' );
		const onSelectB = this.onSelect.bind( this, 'selectedB' );
		const solutionButton = <SolutionButton onClick={this.toggleSolution} disabled={!this.state.submitted} />;
		const optionsA = [];
		const optionsB = [];
		let nComplete = 0;
		for ( let i = 0; i < elements.length; i++ ) {
			const { a, b } = elements[ i ];
			optionsA.push( a || null );
			optionsB.push( b || null );
			if ( a && b ) {
				nComplete += 1;
			}
		}
		const unfinished = answers.length !== nComplete;
		return (
			<div id={this.id} className={`match-list-question-container ${this.props.className}`} style={this.props.style} >
				{ isString( question ) ? <Text inline className="question" raw={question} /> : <span className="question">{question}</span> }
				<i style={{ fontSize: '0.8rem' }}>{this.props.t('instructions', { complete: nComplete })}</i>
				<div className="match-list-question-lists">
					<OptionsList
						options={optionsA}
						onSelect={onSelectA}
						answers={answers}
						active={this.state.selectedA}
						shuffle={this.props.shuffle === 'left' || this.props.shuffle === 'both'}
					/>
					<OptionsList
						options={optionsB}
						onSelect={onSelectB}
						answers={answers}
						active={this.state.selectedB}
						baseColor="rgb(250,250,255)"
						shuffle={this.props.shuffle === 'right' || this.props.shuffle === 'both'}
					/>
				</div>
				<div className="match-list-question-controls">
					{this.renderSubmitButton( unfinished )}
					{ this.props.provideFeedback ? solutionButton : null }
					{ nHints > 0 ?
						<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
						null
					}
					{
						this.props.chat ?
							<div style={{ display: 'inline-block', marginLeft: '4px' }}>
								<ChatButton for={this.id} />
							</div> : null
					}
					<ResponseVisualizer
						buttonLabel={this.props.t('answers')}
						info={MATCH_LIST_SUBMISSION}
						id={this.id}
						data={{
							type: 'matches',
							left: this.props.elements.map( x => x.a ),
							right: this.props.elements.map( x => x.b ),
							question: this.props.question,
							solution: this.props.elements
						}}
					/>
				</div>
				{ this.props.feedback ? <FeedbackButtons
					style={{ marginTop: '5px', marginRight: '8px' }}
					id={this.id+'_feedback'}
				/> : null }
			</div>
		);
	}
}


// PROPERTIES //

MatchListQuestion.defaultProps = {
	question: '',
	elements: [],
	hints: [],
	hintPlacement: 'bottom',
	provideFeedback: true,
	feedback: true,
	chat: false,
	colorScale: null,
	shuffle: 'both',
	disableSubmitNotification: false,
	submissionMsg: 'You have successfully submitted your answer.',
	resubmissionMsg: 'You have successfully re-submitted your answer.',
	until: null,
	className: '',
	style: {},
	onSubmit() {}
};

MatchListQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	elements: PropTypes.arrayOf( PropTypes.shape({
		a: PropTypes.string.isRequired,
		b: PropTypes.string.isRequired
	}) ),
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	provideFeedback: PropTypes.bool,
	feedback: PropTypes.bool,
	chat: PropTypes.bool,
	colorScale: PropTypes.array,
	shuffle: PropTypes.oneOf([ 'left', 'right', 'both' ]),
	disableSubmitNotification: PropTypes.bool,
	submissionMsg: PropTypes.string,
	resubmissionMsg: PropTypes.string,
	until: PropTypes.instanceOf( Date ),
	className: PropTypes.string,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};

MatchListQuestion.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'match-list-question' )( MatchListQuestion );
