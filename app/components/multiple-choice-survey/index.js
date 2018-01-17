// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Panel from 'react-bootstrap/lib/Panel';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';
import logger from 'debug';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import tabulate from '@stdlib/utils/tabulate';
import Gate from 'components/gate';
import InstructorBar from 'components/instructor-bar';
import RealtimeMetrics from 'components/metrics/realtime';
import AnswerOption from './answer_option';


// VARIABLES //

const debug = logger( 'isle-editor' );


// MAIN //

class MultipleChoiceSurvey extends Component {
	constructor( props ) {
		super( props );

		let active = props.multipleAnswers ?
			new Array( props.answers.length ) :
			null;
		this.state = {
			data: [],
			submitted: false,
			active,
			answerSelected: false
		};
	}

	submitQuestion = () => {
		const { session } = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'MULTIPLE_CHOICE_SURVEY_SUBMISSION',
				value: this.props.multipleAnswers ?
					this.state.active.map( idx => this.props.answers[ idx ]) :
					this.props.answers[ this.state.active ],
				anonymous: this.props.anonymous
			}, 'members' );
		}
		if ( !this.props.allowMultipleAnswers ) {
			this.setState({
				submitted: true
			});
		}
		session.addNotification({
			title: 'Submitted',
			message: 'Your answer has been submitted.',
			level: 'success',
			position: 'tr'
		});
		this.props.onSubmit( this.state.active );
	}

	onData = ( data ) => {
		debug( 'MultipleChoiceSurvey is receiving data: ' + JSON.stringify( data ) );
		let tabulated = tabulate( data );
		let freqTable;
		let counts = tabulated.map( d => {
			return {
				x: d[ 0 ],
				y: d[ 1 ]
			};
		});
		freqTable = <table className="table table-bordered">
			<tr>
				<th>Category</th>
				<th>Count</th>
				<th>Relative Frequency</th>
			</tr>
			{tabulated.map( ( elem, row ) => {
				return ( <tr key={row}>
					{elem.map( ( x, col ) => {
						if ( col === 2 ) {
							x = x.toFixed( 3 );
						}
						return <td key={`${row}:${col}`}>{x}</td>;
					})}
				</tr> );
			})}
		</table>;
		this.setState({
			data: counts,
			freqTable
		});
	}

	renderChart() {
		if ( isEmptyArray( this.state.data ) ) {
			return null;
		}
		return ( <VictoryChart width={350} height={200} domainPadding={20} domain={{ y: [ 0, 20 ]}} >
			<VictoryAxis tickValues={this.props.answers} />
			<VictoryAxis dependentAxis />
			<VictoryBar
				data={this.state.data}
				x="x"
				y="y"
			/>
		</VictoryChart> );
	}

	render() {
		const props = this.props;
		const { multipleAnswers } = props;

		const renderAnswerOptionsMultiple = ( key, id ) => {
			return (
				<AnswerOption
					key={key}
					no={id}
					answerContent={key}
					active={this.state.active[ id ]}
					submitted={this.state.submitted}
					onAnswerSelected={() => {
						if ( !this.state.submitted ) {
							let newActive = this.state.active.slice();
							newActive[ id ] = !newActive[ id ];
							this.setState({
								active: newActive
							});
						}
					}}
				/>
			);
		};

		const renderAnswerOptionsSingle = ( key, id ) => {
			return (
				<AnswerOption
					key={id}
					no={id}
					answerContent={key}
					active={this.state.active === id}
					submitted={this.state.submitted}
					onAnswerSelected={() => {
						if ( !this.state.submitted ) {
							this.setState({
								active: id,
								answerSelected: true
							});
						}
					}}
				/>
			);
		};

		let disabled;
		if ( multipleAnswers ) {
			disabled = this.state.submitted;
		} else {
			disabled = this.state.submitted || !this.state.answerSelected;
		}

		return (
			<Gate {...props} >
				<Grid>
					<Col md={6}>
						<Panel className="multipleChoiceSurvey" style={{
							margin: '0 auto 10px',
							maxWidth: 600,
							marginTop: '8px'
						}}>
							<h3>{props.question}</h3>
							{ multipleAnswers ? <span>You may select multiple answers</span> : null }
							<ListGroup fill >
								{ multipleAnswers ?
									props.answers.map( renderAnswerOptionsMultiple ) :
									props.answers.map( renderAnswerOptionsSingle )
								}
							</ListGroup>
							<Button
								bsSize="small"
								bsStyle="success"
								block fill
								onClick={this.submitQuestion}
								disabled={disabled}
							>{ this.state.submitted ? 'Submitted' : 'Submit'}</Button>
						</Panel>
					</Col>
					<Col md={6}>
						<RealtimeMetrics for={this.props.id} onData={this.onData} />
						{this.renderChart()}
						<p>
							{this.state.freqTable}
						</p>
					</Col>
				</Grid>
				<InstructorBar id={props.id} />
			</Gate>
		);
	}
}


// DEFAULT PROPERTIES //

MultipleChoiceSurvey.defaultProps = {
	allowMultipleAnswers: false,
	anonymous: false,
	answers: [],
	multipleAnswers: false,
	onSubmit() {},
	question: ''
};


// PROPERTY TYPES //

MultipleChoiceSurvey.propTypes = {
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	answers: PropTypes.array,
	multipleAnswers: PropTypes.bool,
	onSubmit: PropTypes.func,
	question: PropTypes.string
};

MultipleChoiceSurvey.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default MultipleChoiceSurvey;
