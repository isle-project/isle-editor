// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import shuffle from '@stdlib/random/shuffle';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import * as d3 from 'd3';
import SolutionButton from 'components/solution-button';
import ChatButton from 'components/chat-button';
import HintButton from 'components/hint-button';
import Tooltip from 'components/tooltip';
import ResponseVisualizer from 'components/response-visualizer';
import FeedbackButtons from 'components/feedback';
import Text from 'components/text';
import SessionContext from 'session/context.js';
import OptionsList from './options_list.js';
import './match_list_question.css';


// VARIABLES //

const debug = logger( 'isle:match-list-question' );


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
* @property {string} question - question to be displayed at the top of the match list question component
* @property {Array} elements - an `array` holding the correct pairs displayed at the top of the free text question component. Each `array` element must be an `object` with `a` and `b` properties
* @property {Array<string>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} showSolution - indicates whether the solution should be accessible after learners submit their answers
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {Array} colorScale - if set, the supplied colors are used for the tiles
* @property {string} shuffle - specifies whether to shuffle the `left`, `right`, or `both` columns whose elements have to be matched
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {string} submissionMsg - notification displayed when the learner first submits his answer
* @property {string} resubmissionMsg - notification displayed for all submissions after the first one
* @property {number} maxlength - maximum allowed number of characters
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
				title: 'Answer re-submitted.',
				message: this.props.resubmissionMsg,
				level: 'success',
				position: 'tr'
			});
		} else {
			session.addNotification({
				title: 'Answer submitted.',
				message: this.props.submissionMsg,
				level: 'success',
				position: 'tr'
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
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'MATCH_LIST_SUBMISSION',
				value: JSON.stringify( answers )
			});
		}
		this.props.onSubmit( answers );
	}

	toggleSolution = () => {
		let { elements, colorScale } = this.props;
		if ( !colorScale ) {
			colorScale = createColorScale( 2 * elements.length );
		}
		if ( this.props.id ) {
			const session = this.context;
			session.log({
				id: this.props.id,
				type: 'MATCH_LIST_TOGGLE_SOLUTION',
				value: null
			});
		}
		if ( !this.state.userAnswers ) {
			const userAnswers = this.state.answers;
			const answers = elements.map( ( q, i ) => {
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
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'MATCH_LIST_OPEN_HINT',
				value: idx
			});
		}
	}

	render() {
		const { question, elements, hints } = this.props;
		const { answers } = this.state;
		const nHints = hints.length;
		const onSelectA = this.onSelect.bind( this, 'selectedA' );
		const onSelectB = this.onSelect.bind( this, 'selectedB' );
		const solutionButton = <SolutionButton onClick={this.toggleSolution} disabled={!this.state.submitted} />;
		const unfinished = answers.length !== elements.length;
		return (
			<div className="match-list-question-container" style={this.props.style} >
				{ isString( question ) ? <Text inline className="question" raw={question} /> : <span className="question">{question}</span> }
				<i style={{ fontSize: '0.8rem' }}>Match the elements from the left-hand side with those on the right-hand side by clicking on them.</i>
				<div className="match-list-question-lists">
					<OptionsList
						options={elements.map( q => q.a )}
						onSelect={onSelectA}
						answers={answers}
						active={this.state.selectedA}
						shuffle={this.props.shuffle === 'left' || this.props.shuffle === 'both'}
					/>
					<OptionsList
						options={elements.map( q => q.b )}
						onSelect={onSelectB}
						answers={answers}
						active={this.state.selectedB}
						baseColor="rgb(250,250,255)"
						shuffle={this.props.shuffle === 'right' || this.props.shuffle === 'both'}
					/>
				</div>
				<div className="match-list-question-controls">
					<Tooltip id={`${this.props.id}_tooltip`} tooltip="You may submit after you have matched all elements from the left-hand side with the corresponding elements from the right-hand side" >
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
								{ !this.state.submitted ? 'Submit' : 'Resubmit' }
							</Button>
						</div>
					</Tooltip>
					{ this.props.showSolution ? solutionButton : null }
					{ nHints > 0 ?
						<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
						null
					}
					{
						this.props.chat && this.props.id ?
							<div style={{ display: 'inline-block', marginLeft: '4px' }}>
								<ChatButton for={this.props.id} />
							</div> : null
					}
					<ResponseVisualizer
						buttonLabel="Answers"
						id={this.props.id}
						data={{
							type: 'matches',
							left: this.props.elements.map( x => x.a ),
							right: this.props.elements.map( x => x.b )
						}}
					/>
				</div>
				{ this.props.id && this.props.feedback ? <FeedbackButtons
					style={{ marginTop: '10px', marginRight: '8px' }}
					id={this.props.id+'_feedback'}
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
	showSolution: true,
	feedback: false,
	chat: false,
	colorScale: null,
	shuffle: 'both',
	disableSubmitNotification: false,
	submissionMsg: 'You have successfully submitted your answer.',
	resubmissionMsg: 'You have successfully re-submitted your answer.',
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
	hints: PropTypes.arrayOf( PropTypes.string ),
	showSolution: PropTypes.bool,
	feedback: PropTypes.object,
	chat: PropTypes.bool,
	colorScale: PropTypes.array,
	shuffle: PropTypes.oneOf([ 'left', 'right', 'both' ]),
	disableSubmitNotification: PropTypes.bool,
	submissionMsg: PropTypes.string,
	resubmissionMsg: PropTypes.string,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};

MatchListQuestion.contextType = SessionContext;


// EXPORTS //

export default MatchListQuestion;
