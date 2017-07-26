// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart } from 'victory';
import { tabulate } from '@stdlib/utils';
import isNumber from '@stdlib/assert/is-number';
import { Button, ControlLabel, FormGroup, Grid, Col, Panel, Well } from 'react-bootstrap';
import mean from 'compute-mean';
import stdev from 'compute-stdev';
import Gate from 'components/gate';
import { CheckboxInput, SelectInput, TextInput } from 'components/input';
import TextArea from 'components/text-area';
import MultipleChoiceSurvey from 'components/multiple-choice-survey';
import NumberSurvey from 'components/number-survey';
import RealtimeMetrics from 'components/metrics/realtime';
const debug = require( 'debug' )( 'isle-editor' );


// MAIN //

class MCSgenerator extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			data: [],
			answers: [],
			question: '',
			type: null,
			showSurvey: false,
			anonymous: true,
			disabled: true,
			avg: null,
			sd: null,
			freqTable: null
		};

	}

	setQuestion = ( text ) => {
		let disabled = true;
		if (
			text.length > 3 &&
			(
				this.state.answers.length > 1 ||
				this.state.type !== 'multiple-choice'
			)
		) {
			disabled = false;
		}
		this.setState({
			question: text,
			disabled
		});
	}

	setType = ( type ) => {
		this.questionDIV.focus();
		this.setState({
			type
		});
	}

	onData = ( data ) => {
		debug( 'SurveyGenerator is receiving data: ' + JSON.stringify( data ) );
		data = data[ this.props.id+':question' ];
		let tabulated = tabulate( data );
		let freqTable;
		let avg;
		let sd;
		let counts = tabulated.map( d => {
			return {
				x: d[ 0 ],
				y: d[ 1 ]
			};
		});
		if ( this.state.type === 'number' ) {
			avg = mean( data );
			sd = stdev( data );
		} else if ( this.state.type === 'multiple-choice' ) {
			freqTable = <table className="table table-bordered">
				<tr>
					<th>Category</th>
					<th>Count</th>
					<th>Relative Frequency</th>
				</tr>
				{tabulated.map( ( elem ) => {
					return ( <tr>
						{elem.map( ( x, idx ) => {
							if ( idx === 2 ) {
								x = x.toFixed( 3 );
							}
							return <td>{x}</td>;
						})}
					</tr> );
				})}
			</table>;
		}
		this.setState({
			data: counts,
			freqTable,
			avg,
			sd
		});
	}

	startSurvey = () => {
		const { session } = this.context;
		if ( this.state.showSurvey ) {
			session.log({
				id: this.props.id,
				type: 'STOP_SURVEY',
				value: null
			}, 'members' );
		} else {
			session.log({
				id: this.props.id,
				type: 'START_SURVEY',
				value: {
					answers: this.state.answers,
					type: this.state.type,
					question: this.state.question
				}
			}, 'members' );
		}
	}

	getAnswers = ( text ) => {
		let answers = text.split( '\n' );
		let disabled = true;
		if (
			this.state.question.length > 3 && answers.length > 1
		) {
			disabled = false;
		}
		this.setState({
			answers,
			disabled
		});
	}

	toggleAnonymous = ( value ) => {
		this.setState({
			anonymous: value
		});
	}

	componentDidMount() {
		const { session } = this.context;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( type === 'member_action' ) {
				if ( action.type === 'START_SURVEY' ) {
					if ( this.props.id === action.id  ) {
						this.setState({
							question: action.value.question,
							type: action.value.type,
							answers: action.value.answers,
							showSurvey: true
						});
					}
				}
				else if ( action.type === 'STOP_SURVEY' ) {
					debug( 'Should stop the survey...' );
					if ( this.props.id === action.id  ) {
						this.setState({
							showSurvey: false,
							data: [],
							avg: null,
							sd: null,
							freqTable: null
						});
					}
				}
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return ( <Panel>
			<Gate owner>
				<Well style={{
					maxWidth: '800px',
					border: 'solid 2px rgb(186, 204, 234)'
				}}>
					<h3>Survey Generator</h3>
					<FormGroup>
						<Col componentClass={ControlLabel} md={3}>Question Type:</Col>
						<Col md={9}>
							<SelectInput options={[ 'multiple-choice', 'number' ]} onChange={this.setType} />
						</Col>
					</FormGroup>
					<TextInput
						legend="Question"
						ref={ ( questionDIV ) => { this.questionDIV = questionDIV; }}onChange={this.setQuestion}
						width={400}
					/>
					{ this.state.type === 'multiple-choice' ?
						<FormGroup>
							<TextArea legend="Answer Options (new-line delimited)" onChange={this.getAnswers} />
						</FormGroup> : null
					}
					<CheckboxInput
						legend="Make the survey anonymous"
						defaultValue={true}
						onChange={this.toggleAnonymous}
					/>
					<Button
						disabled={this.state.disabled && !this.state.showSurvey}
						onClick={this.startSurvey}
					>
						{ !this.state.showSurvey ? 'Start Survey' : 'Stop Survey' }
					</Button>
				</Well>
			</Gate>
			{ this.state.showSurvey ?
				<Grid>
					<Col md={6}>
						{ this.state.type === 'multiple-choice' ?
							<MultipleChoiceSurvey
								user
								question={this.state.question}
								answers={this.state.answers}
								id={this.props.id+':question'}
								anonymous={this.state.anonymous}
							/> : null
						}
						{ this.state.type === 'number' ?
							<NumberSurvey
								user
								question={this.state.question}
								id={this.props.id+':question'}
								anonymous={this.state.anonymous}
							/> : null
						}
						<label>Data is { !this.state.anonymous ? 'not' : '' }collected anonymously.</label>
					</Col>
					<Col md={6}>
						<RealtimeMetrics for={[ this.props.id+':question' ]} onData={this.onData} />
						<VictoryChart width={350} height={200} domainPadding={20} domain={{ y: [ 0, 20 ]}} >
							<VictoryBar
								data={this.state.data}
								x="x"
								y="y"
							/>
						</VictoryChart>
						{ this.state.type === 'number' && isNumber( this.state.avg ) && isNumber( this.state.sd ) ?
							<p>The average is {this.state.avg.toFixed( 3 )} (SD: {this.state.sd.toFixed( 3 )}).
							</p> : <p>
								{this.state.freqTable}
							</p>
						}
					</Col>
				</Grid> : <h3>The survey has not been started yet.</h3>
			}
		</Panel> );
	}
}


// DEFAULT PROPERTIES //

MCSgenerator.defaultProps = {

};


// PROPERTY TYPES //

MCSgenerator.propTypes = {
	id: PropTypes.string.isRequired,
};

MCSgenerator.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default MCSgenerator;
