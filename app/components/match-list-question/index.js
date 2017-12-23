// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import shuffle from '@stdlib/math/random/shuffle';
import * as d3 from 'd3';
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
} // end FUNCTION createColorScale()


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
		const { question, elements, onSubmit } = this.props;
		const { answers } = this.state;
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
			<div className="container">
				<span>{question}</span>
				<div className="lists">
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
				<div className="controls">
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
				</div>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

MatchListQuestion.defaultProps = {
	colorScale: null,
	elements: [],
	onSubmit() {},
	question: null
};


// PROPERTY TYPES //

MatchListQuestion.propTypes = {
	colorScale: PropTypes.array,
	elements: PropTypes.arrayOf( PropTypes.shape({
		a: PropTypes.string.isRequired,
		b: PropTypes.string.isRequired
	}) ),
	onSubmit: PropTypes.func,
	question: PropTypes.string
};


// EXPORTS //

export default MatchListQuestion;
