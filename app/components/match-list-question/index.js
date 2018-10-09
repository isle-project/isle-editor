// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/lib/Button';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import shuffle from '@stdlib/random/shuffle';
import * as d3 from 'd3';
import ChatButton from 'components/chat-button';
import HintButton from 'components/hint-button';
import ResponseVisualizer from 'components/response-visualizer';
import OverlayTrigger from 'components/overlay-trigger';
import FeedbackButtons from 'components/feedback';
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
* @property {string} submissionMsg - notification displayed when the learner first submits his answer
* @property {string} resubmissionMsg - notification displayed for all submissions after the first one
* @property {number} maxlength - maximum allowed number of characters
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

	handleSubmit = () => {
		const session = this.context.session;
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
			this.context.session.log({
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
		const { session } = this.context;
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
		const tooltip = (
			<Tooltip
				id="tooltip"
			>
				Solution becomes available after answer is submitted.
			</Tooltip>
		);
		const solutionButton = this.state.submitted ?
			<Button
				variant="warning"
				size="sm"
				onClick={this.toggleSolution}
			>{ !this.state.userAnswers ? 'Show Solution' : 'Hide Solution' }</Button> :
			<OverlayTrigger
				placement="top"
				positionLeft={100}
				overlay={tooltip}
				rootClose={true}
			>
				<div style={{ display: 'inline-block' }}>
					<Button
						variant="warning"
						size="sm"
						disabled
						style={{
							pointerEvents: 'none'
						}}
					>Show Solution</Button>
				</div>
			</OverlayTrigger>;
		return (
			<div className="match-list-question-container" >
				<span className="question">{question}</span>
				<div className="match-list-question-lists">
					<OptionsList
						options={elements.map( q => q.a )}
						onSelect={onSelectA}
						answers={answers}
						active={this.state.selectedA}
					/>
					<OptionsList
						options={elements.map( q => q.b )}
						onSelect={onSelectB}
						answers={answers}
						active={this.state.selectedB}
						baseColor="rgb(250,250,255)"
					/>
				</div>
				<div className="match-list-question-controls">
					<Button
						variant="primary"
						size="sm"
						onClick={this.handleSubmit}
						disabled={answers.length !== elements.length}>
						{ !this.state.submitted ? 'Submit' : 'Resubmit' }
					</Button>
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
					<ResponseVisualizer buttonLabel="Answers" id={this.props.id} />
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
	submissionMsg: 'You have successfully submitted your answer.',
	resubmissionMsg: 'You have successfully re-submitted your answer.',
	onSubmit() {}
};

MatchListQuestion.propTypes = {
	question: PropTypes.string,
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
	submissionMsg: PropTypes.string,
	resubmissionMsg: PropTypes.string,
	onSubmit: PropTypes.func
};

MatchListQuestion.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default MatchListQuestion;
