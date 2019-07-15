// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import uniq from 'uniq';
import sotu from '@stdlib/datasets/sotu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LearnWordVennDiagram from 'components/learn/word-venn-diagram';
import NumberInput from 'components/input/number';
import Plotly from 'components/plotly';
import Panel from 'components/panel';
import Pages from 'components/pages';
import Dashboard from 'components/dashboard';


// VARIABLES //

let tdm = null;
const getYear = x => {
	return tdm.years[ x ];
};


// MAIN //

class SOTU extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			vennWords: [],
			timeseries: [],
			speech: {}
		};
	}

	async componentDidMount() {
		tdm = await import( './tdm_sparse.json' );
	}

	handleVennClick = ( state ) => {
		const freqs = state.freqs;
		const timeseries = [];
		for ( let i = 0; i < freqs.length; i++ ) {
			if ( freqs[ i ].docIndices ) {
				const years = freqs[ i ].docIndices.map( getYear );
				uniq( years );
				const heights = years.map( x => 1 );
				timeseries.push({
					x: years,
					y: heights,
					base: i,
					type: 'bar',
					name: state.words[ i ],
					hoverinfo: 'x'
				});
			}
		}
		this.setState({
			timeseries,
			vennWords: state.words
		});
	}

	render() {
		return (
			<Fragment>
				<Container>
					<Row>
					<Col md={8}>
						<Pages title="Questions" height={250} style={{ paddingBottom: 0 }}>
							{this.props.questions}
						</Pages>
						{ this.state.vennWords.length > 0 ? <Panel header={`${this.state.vennWords.join( ', ')} over Time`}>
							<Plotly
								data={this.state.timeseries}
								layout={{
									barmode: 'stack',
									yaxis: {
										fixedrange: true,
										ticks: '',
										showticklabels: false
									},
									xaxis: {
										fixedrange: true
									}
								}}
								removeButtons
								draggable={false}
							/>
						</Panel> : null}
					</Col>
					<Col md={4}>
						{ tdm ? <LearnWordVennDiagram tdm={tdm.tdm} vocabulary={tdm.vocabulary}
							nTexts={120} height={250} width={350}
							onClick={this.handleVennClick}
						/> : null }
					</Col>
				</Row>
				</Container>
				<Dashboard autoUpdate autoStart maxWidth={900} title="State of the Union Addresses"
					onGenerate={( year ) => {
						if ( year === 1933 ) {
							return this.setState({
								speech: {
									name: 'Not available',
									text: 'Not available',
									party: 'Not available'
								}
							});
						}
						const speeches = sotu({
							year: year
						});
						this.setState({
							speech: speeches[ 0 ]
						});
					}}
				>
					<NumberInput
						legend="Year"
						min={1900}
						max={2018}
						defaultValue={2018}
						step={1}
					/>
					<Container>
						<h4>President: {this.state.speech.name}, {this.state.speech.party} Party</h4>
						<h4>Speech:</h4>
						<Panel style={{ height: 400, overflow: 'scroll', fontSize: '14px' }}>
							{this.state.speech.text}
						</Panel>
					</Container>
				</Dashboard>
			</Fragment>
		);
	}
}


// PROPERTIES //

SOTU.propTypes = {
	questions: PropTypes.arrayOf( PropTypes.oneOfType([ PropTypes.node, PropTypes.element ]) )
};

SOTU.defaultProps = {
	questions: []
};


// EXPORTS //

export default SOTU;
