
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import profanities from 'profanities';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel } from 'victory';
import logger from 'debug';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import tabulate from '@stdlib/utils/tabulate';
import lowercase from '@stdlib/string/lowercase';
import tokenize from '@stdlib/nlp/tokenize';
import TextArea from 'components/text-area';
import Gate from 'components/gate';
import InstructorBar from 'components/instructor-bar';
import RealtimeMetrics from 'components/metrics/realtime';


// VARIABLES //

const debug = logger( 'isle-editor' );


// MAIN //

class FreeTextSurvey extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			data: [],
			submitted: false,
			value: null
		};
	}

	submitQuestion = () => {
		const { session } = this.context;
		const val = this.containsProfanity( this.state.value );
		if ( val ) {
			session.addNotification({
				title: 'Action required',
				message: `Your answer contains an offensive word: ${val}. Please remove.`,
				level: 'warning',
				position: 'tr'
			});
		} else {
			if ( this.props.id ) {
				session.log({
					id: this.props.id,
					type: 'TEXT_SURVEY_SUBMISSION',
					value: this.state.value,
					anonymous: this.props.anonymous
				}, 'members' );
			}
			this.setState({
				submitted: true
			});
			session.addNotification({
				title: 'Submitted',
				message: 'Your answer has been submitted.',
				level: 'success',
				position: 'tr'
			});
			this.props.onSubmit( this.state.value );
		}
	}

	onData = ( data ) => {
		debug( 'FreeTextQuestion is receiving data: ' + JSON.stringify( data ) );
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
			{tabulated.map( ( elem, id ) => {
				return ( <tr key={id}>
					{elem.map( ( x, idx ) => {
						if ( idx === 2 ) {
							x = x.toFixed( 3 );
						}
						return <td key={idx}>{x}</td>;
					})}
				</tr> );
			})}
		</table>;
		this.setState({
			data: counts,
			freqTable
		});
	}

	containsProfanity( text ) {
		text = lowercase( text );
		const tokens = tokenize( text );
		for ( let i = 0; i < profanities.length; i++ ) {
			for ( let j = 0; j < tokens.length; j++ ) {
				if ( tokens[ j ] === profanities[ i ]) {
					return profanities[ i ];
				}
			}
		}
		return null;
	}

	renderChart() {
		if ( isEmptyArray( this.state.data ) ) {
			return null;
		}
		return ( <VictoryChart width={350} height={200} domainPadding={20} domain={{ y: [ 0, 20 ]}} >
			<VictoryAxis
				tickLabelComponent={
					<VictoryLabel angle={90} />
				}
			/>
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
		const disabled = this.state.submitted && !props.allowMultipleAnswers;
		return (
			<Gate {...props} >
				<Grid>
					<Col md={6}>
						<Panel className="FreeTextSurvey" style={{
							margin: '0 auto 10px',
							maxWidth: 600,
							marginTop: '8px'
						}}>
							<Panel.Heading>
								<Panel.Title componentClass="h4">{props.question}</Panel.Title>
							</Panel.Heading>
							<Panel.Body>
								<TextArea
									{...props}
									inline
									disabled={disabled}
									onChange={( value ) => {
										this.setState({
											value
										});
									}}
									rows={this.props.rows}
								/>
								<Button
									bsSize="small"
									bsStyle="success"
									block fill
									onClick={this.submitQuestion}
									disabled={disabled}
								>{ disabled ? 'Submitted' : 'Submit'}</Button>
							</Panel.Body>
						</Panel>
					</Col>
					<Col md={6}>
						<RealtimeMetrics for={this.props.id} onData={this.onData} />
						{this.renderChart()}
						{this.state.freqTable}
					</Col>
				</Grid>
				<InstructorBar id={props.id} />
			</Gate>
		);
	}
}


// DEFAULT PROPERTIES //

FreeTextSurvey.defaultProps = {
	onSubmit() {},
	allowMultipleAnswers: false,
	question: '',
	anonymous: false,
	rows: 4
};


// PROPERTY TYPES //

FreeTextSurvey.propTypes = {
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	onSubmit: PropTypes.func,
	question: PropTypes.string,
	rows: PropTypes.number
};

FreeTextSurvey.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default FreeTextSurvey;
