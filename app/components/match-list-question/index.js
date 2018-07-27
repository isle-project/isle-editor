// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import shuffle from '@stdlib/random/shuffle';
import * as d3 from 'd3';
import ChatButton from 'components/chat-button';
import HintButton from 'components/hint-button';
import InstructorBar from 'components/instructor-bar';
import OptionsList from './options_list.js';
import './match_list_question.css';


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

	toggleSolution = () => {
		let { elements, colorScale } = this.props;
		if ( !colorScale ) {
			colorScale = createColorScale( 2 * elements.length );
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

	render() {
		const { question, elements, onSubmit, hints } = this.props;
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
		return (
			<div className="match-list-question-container">
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
						bsStyle="primary"
						bsSize="sm"
						onClick={() => {
							this.setState({
								submitted: true
							});
							onSubmit(
								answers.map( ans => ({ a: ans.a, b: ans.b }) )
							);
						}}
						disabled={answers.length !== elements.length}>
						{ !this.state.submitted ? 'Submit' : 'Resubmit' }
					</Button>
					{ this.state.submitted ?
						<Button
							bsStyle="warning"
							bsSize="sm"
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
									bsStyle="warning"
									bsSize="sm"
									disabled
									style={{
										pointerEvents: 'none'
									}}
								>Show Solution</Button>
							</div>
						</OverlayTrigger>
					}
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
					<InstructorBar id={this.props.id} />
				</div>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

MatchListQuestion.defaultProps = {
	question: '',
	elements: [],
	hints: [],
	hintPlacement: 'bottom',
	chat: false,
	colorScale: null,
	onSubmit() {}
};


// PROPERTY TYPES //

MatchListQuestion.propDescriptions = {
	question: 'question to be displayed at the top of the match list question component',
	elements: 'an `array` holding the correct pairs displayed at the top of the free text question component. Each `array` element must be an `object` with `a` and `b` properties',
	hints: 'hints providing guidance on how to answer the question',
	hintPlacement: 'placement of the hints (either `top`, `left`, `right`, or `bottom`)',
	chat: 'controls whether the element should have an integrated chat',
	colorScale: 'if set, the supplied colors are used for the tiles',
	onSubmit: 'callback invoked when students submits an answer'
};

MatchListQuestion.propTypes = {
	question: PropTypes.string,
	elements: PropTypes.arrayOf( PropTypes.shape({
		a: PropTypes.string.isRequired,
		b: PropTypes.string.isRequired
	}) ),
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf( PropTypes.string ),
	chat: PropTypes.bool,
	colorScale: PropTypes.array,
	onSubmit: PropTypes.func
};


// EXPORTS //

export default MatchListQuestion;
