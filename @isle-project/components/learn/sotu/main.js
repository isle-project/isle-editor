// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import logger from 'debug';
import uniq from 'uniq';
import sotu from '@stdlib/datasets/sotu';
import isArray from '@stdlib/assert/is-array';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LearnWordVennDiagram from '@isle-project/components/learn/word-venn-diagram';
import NumberInput from '@isle-project/components/input/number';
import Plotly from '@isle-project/components/plotly';
import Panel from '@isle-project/components/panel';
import Pages from '@isle-project/components/pages';
import Dashboard from '@isle-project/components/dashboard';


// VARIABLES //

const debug = logger( 'isle:learn-sotu' );


// MAIN //

/**
* Learning component to explore the State of the Union speeches of US presidents.
*
* @property {Array<(string|node)>} questions - array of questions
*/
class SOTU extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			vennWords: [],
			timeseries: [],
			speech: {},
			tdm: null
		};
	}

	componentDidMount() {
		import( /* webpackChunkName: "tdm" */ './tdm_sparse.json' )
			.then( json => {
				debug( 'Successfully loaded fonts...' );
				this.setState({
					tdm: json.default
				});
			})
			.catch( err => {
				debug( 'Encountered an error while loading fonts: '+err.message );
			});
	}

	getYear = x => {
		return this.state.tdm.years[ x ];
	};

	handleVennClick = ( state ) => {
		const freqs = state.freqs;
		const timeseries = [];
		for ( let i = 0; i < freqs.length; i++ ) {
			if ( freqs[ i ].docIndices ) {
				const years = freqs[ i ].docIndices.map( this.getYear );
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
	};

	render() {
		const { vennWords, timeseries, tdm } = this.state;
		const { t } = this.props;
		let hasQuestions = isArray( this.props.questions );
		return (
			<Fragment>
				<Container>
					<Row>
					<Col md={8 - ( hasQuestions ? 0 : 2 )}>
						{ hasQuestions ? <Pages title={t('questions')} height={300} style={{ paddingBottom: 0 }}>
							{this.props.questions}
						</Pages> : null }
						{ vennWords.length > 0 ? <Panel header={`${vennWords.join( ', ')} over Time`}>
							<Plotly
								data={timeseries}
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
					<Col md={4 + ( hasQuestions ? 0 : 2 )}>
						{ tdm ? <LearnWordVennDiagram tdm={tdm.tdm} vocabulary={tdm.vocabulary}
							nTexts={tdm.party.length} height={250} width={350}
							onClick={this.handleVennClick}
						/> : null }
					</Col>
				</Row>
				</Container>
				<Dashboard autoUpdate autoStart maxWidth={900} title={t('state-of-the-union-addresses')}
					onGenerate={( year ) => {
						if ( year === 1933 ) {
							return this.setState({
								speech: {
									name: t('not-available'),
									text: t('not-available'),
									party: t('not-available')
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
						legend={t('year')}
						min={1900}
						max={2021}
						defaultValue={2021}
						step={1}
					/>
					<Container>
						<h4>{t('president')} {this.state.speech.name}, {this.state.speech.party} {t('party')}</h4>
						<h4>{t('speech')}</h4>
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
	questions: null
};


// EXPORTS //

export default withTranslation( 'learn/sotu' )( SOTU );
