// MODULES //

import React, { Component, PropTypes } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
const d3 = require( 'd3' );


// FUNCTIONS //

function createColorScale( length ) {
	const color = d3.scaleLinear().domain([ 1, length ])
		.interpolate( d3.interpolateHcl )
		.range([ d3.rgb( "#007AFF" ), d3.rgb( '#FFF500' ) ]);

	const colorScale = new Array ( length );
	for ( let i = 0; i < length; i++ ) {
		colorScale[ i ] = color( i );
	}
	return colorScale;
} // end FUNCTION createColorScale()


// COMPONENTS //

class OptionsList extends Component {

	static styles = {
		container: {
			flex: 1,
			listStyleType: 'none',
			padding: 0
		},
		option: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '10px 0px',
			margin: '10px',
			border: 'solid 1px gainsboro',
			cursor: 'pointer'
		}
	}

	constructor( props ) {
		super( props );
	}

	shuffle( array ) {
		let currentIndex = array.length;
		let temporaryValue;
		let randomIndex;
		while ( 0 !== currentIndex ) {
			// Pick a remaining element...
			randomIndex = Math.floor( Math.random() * currentIndex );
			currentIndex -= 1;
			// And swap it with the current element...
			temporaryValue = array[ currentIndex ];
			array[ currentIndex ] = array[ randomIndex ];
			array[ randomIndex ] = temporaryValue;
		}
		return array;
	}

	render() {
		const styles = OptionsList.styles;
		const selected  = Object.assign({}, styles.option, { backgroundColor: 'gainsboro' });
		this.options = this.options || this.shuffle( this.props.options );
		const { active, onSelect, answers } = this.props;

		return (
			<ul style={styles.container}>
				{
					this.options.map( ( q, i ) => {
						let style = q == active ? selected : styles.option;
						const match = answers.filter( answer => answer.a == q || answer.b == q );
						style = match[ 0 ] ?
							Object.assign({}, style, { backgroundColor: match[ 0 ].color }) :
							style;

						return (
							<li
								key={i}
								onClick={ () => onSelect( q ) }
								style={style}
							>
								{q}
							</li>
						);
					})
				}
			</ul>
		);
	}
}


// MATCH LIST QUESTION //

class MatchListQuestion extends Component {

	static styles = {
		container: {
			display: 'flex',
			width: '100%',
			padding: '15px',
			border: '2px solid lightblue',
			backgroundColor: 'white',
			flexDirection: 'column'
		},
		lists: {
			display: 'flex',
			flexDirection: 'row'
		},
		controls: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			paddingLeft: '10px',
			paddingRight: '10px'
		}
	}

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
			solutionDisplayed: false,
			submitted: false
		};
	}

	componentDidUpdate() {
		const { selectedA, selectedB, answers, colorScale, currentColor } = this.state;

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

		const { elements } = this.props;
		this.setState({ [ list ]: option, answers, colorScale });
	}

	toggleSolution() {
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

		const styles = MatchListQuestion.styles;
		const onSelectA = this.onSelect.bind( this, 'selectedA' );
		const onSelectB = this.onSelect.bind( this, 'selectedB' );
		const toggleSolution = this.toggleSolution.bind( this );

		const tooltip = (
			<Tooltip
				id="tooltip"
			>
				Solution becomes available after answer is submitted.
			</Tooltip>
		);

		return (
			<div style={styles.container}>
				<span>{question}</span>
				<div style={styles.lists}>
					<OptionsList
						options={elements.map( q => q.a )}
						onSelect={onSelectA}
						answers={answers}
						active={this.state.selectedA} />
					<OptionsList
						options={elements.map( q => q.b )}
						onSelect={onSelectB}
						answers={answers}
						active={this.state.selectedB} />
				</div>
				<div style={styles.controls}>
					<Button
						bsStyle="primary"
						bsSize="sm"
						onClick={ () => {
							this.setState({
								submitted: true
							});
							onSubmit(
								answers.map( ans => ({ a: ans.a, b: ans.b }) )
							);
						} }
						disabled={ answers.length !== elements.length }>
						{ !this.state.submitted ? 'Submit' : 'Resubmit' }
					</Button>
					{ this.state.submitted ?
						<Button
							bsStyle="warning"
							bsSize="sm"
							onClick={toggleSolution}
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
	onSubmit(){},
	question: null
};


// PROPERTY TYPES //

MatchListQuestion.propTypes = {
	question: PropTypes.string,
	elements: PropTypes.arrayOf( PropTypes.shape({
		a: PropTypes.string.isRequired,
		b: PropTypes.string.isRequired
	}) ),
	onSubmit: PropTypes.func
};


// EXPORTS //

export default MatchListQuestion;
