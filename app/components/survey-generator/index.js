// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart } from 'victory';
import { tabulate } from '@stdlib/utils';
import { Button, Grid, Col, Panel } from 'react-bootstrap';
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
			anonymous: true
		};

	}

	setQuestion = ( text ) => {
		this.setState({
			question: text
		});
	}

	setType = ( type ) => {
		this.setState({
			type
		});
	}

	onData = ( data ) => {
		debug( 'SurveyGenerator is receiving data: ' + JSON.stringify( data ) );
		let counts = tabulate( data[ this.props.id+':question' ]);
		counts = counts.map( d => {
			return {
				x: d[ 0 ],
				y: d[ 1 ]
			};
		});
		console.log( counts );
		this.setState({
			data: counts
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
		this.setState({
			answers
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
							data: [],
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
							showSurvey: false
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
		return ( <div>
			<Gate owner>
				<Panel header="Survey Generator" >
					<SelectInput options={[ 'multiple-choice', 'number' ]} onChange={this.setType} />
					<CheckboxInput
						legend="Anonymous"
						defaultValue={true}
						onChange={this.toggleAnonymous}
					/>
					<TextInput legend="Question" onChange={this.setQuestion} width={320} />
					{ this.state.type === 'multiple-choice' ?
						<TextArea legend="Answer Options (new-line delimited)" onChange={this.getAnswers} /> : null
					}
					<Button onClick={this.startSurvey}>{ !this.state.showSurvey ?
						'Start Survey' : 'Stop Survey' }</Button>
				</Panel>
			</Gate>
			{ this.state.showSurvey ?
				<Grid>
					<Col md={6}>
						<label>Data is { !this.state.anonymous ? 'not' : '' }collected anonymously.</label>
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
					</Col>
				</Grid> : <Panel>
					<h3>The survey has not been started yet.</h3>
				</Panel>
			}
		</div> );
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
