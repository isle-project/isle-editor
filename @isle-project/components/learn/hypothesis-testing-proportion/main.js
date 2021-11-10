// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import logger from 'debug';
import abs from '@stdlib/math/base/special/abs';
import sqrt from '@stdlib/math/base/special/sqrt';
import roundn from '@stdlib/math/base/special/roundn';
import linspace from '@stdlib/array/linspace';
import isInfinite from '@stdlib/assert/is-infinite';
import isnan from '@stdlib/assert/is-nan';
import dnorm from '@stdlib/stats/base/dists/normal/pdf';
import pnorm from '@stdlib/stats/base/dists/normal/cdf';
import FeedbackButtons from '@isle-project/components/feedback';
import NumberInput from '@isle-project/components/input/number';
import SelectInput from '@isle-project/components/input/select';
import Switch from '@isle-project/components/switch';
import TeX from '@isle-project/components/tex';


// VARIABLES //

const areaStyle = {
	data: {
		fill: 'tomato', stroke: 'tomato', opacity: 0.3
	}
};
const debug = logger( 'isle:learn:hypothesis-testing-proportion' );


// FUNCTIONS //

/**
 * Evaluates the normal probability density function (PDF) at a given value.
 *
 * @param {number} d - input value
 * @returns {Object} object with the value (`x`) and corresponding density (`y`)
 */
function normalPDF( d ) {
	return { x: d, y: dnorm( d, 0, 1 ) };
}


// MAIN //

/**
* A learning component on hypothesis tests for a population proportion.
*
* @property {Array} types - the type(s) of test (`One-Sample`, `Two-Sample`) the widget should expose
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} nullHypothesisAsValue - always display the null hypothesis as a single value
* @property {string} pValue - custom label for the p-value (should be a LaTeX equation string)
* @property {Object} style - CSS inline styles
*/
class ProportionTest extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			n: 5,
			n2: 5,
			p0: 0.5,
			phat: 0,
			phat2: 0.001,
			pStat: 0,
			probFormula: '',
			pdfData: null,
			areaData: null,
			areaData2: null,
			type: 0,
			samples: this.props.types[ 0 ]
		};
	}

	componentDidMount() {
		this.onGenerate();
	}

	onGenerate = () => {
		debug( 'Should generate new values...' );
		const { p0, phat, phat2, n, n2, samples, type } = this.state;
		const { pValue } = this.props;
		let pdfData;
		let areaData;
		let areaData2;
		let probFormula;
		let stderr;

		pdfData = linspace( -3.50, 3.5, 300 );
		pdfData = pdfData.map( x => {
			return { x: x, y: dnorm( x, 0, 1 ) };
		});
		let pStat;
		if ( samples === 'Two-Sample' ) {
			let sd1 = ( phat * ( 1-phat ) ) / n;
			let sd2 = ( phat2 * ( 1-phat2 ) ) / n2;
			stderr = sqrt( sd1 + sd2 );
			pStat = roundn( ( phat - phat2 - p0 ) / stderr, -3 );
		} else {
			pStat = roundn( ( phat - p0 ) / ( sqrt( p0 * ( 1-p0 ) / n ) ), -3 );
		}
		switch ( type ) {
		case 2:
			if ( !isInfinite( pStat ) && !isnan( pStat ) ) {
				areaData = linspace( -3, pStat, 200 ).map( normalPDF );
			} else {
				areaData = linspace( -3, 3, 200 ).map( normalPDF );
			}
			probFormula = `P( Z < ${pStat}) = ${roundn( pnorm( pStat, 0, 1 ), -3 )}`;
			break;
		case 1:
			if ( !isInfinite( pStat ) && !isnan( pStat ) ) {
				areaData = linspace( pStat, 3, 200 ).map( normalPDF );
			} else {
				areaData = linspace( -3, 3, 200 ).map( normalPDF );
			}
			probFormula = `P( Z > ${pStat}) = ${roundn( 1-pnorm( pStat, 0, 1 ), -3 )}`;
			break;
		case 0:
			if ( !isInfinite( pStat ) && !isnan( pStat ) ) {
				areaData = linspace( abs( pStat ), 3, 200 ).map( normalPDF );
				areaData2 = linspace( -3, -abs( pStat ), 200 ).map( normalPDF );
			} else {
				areaData = linspace( 0, 3, 200 ).map( normalPDF );
				areaData2 = linspace( -3, 0, 200 ).map( normalPDF );
			}
			probFormula = `${pValue ? pValue : `P( |Z| > ${abs( pStat )})`} = ${roundn( ( 1-pnorm( abs( pStat ), 0, 1 ) )+pnorm( -abs( pStat ), 0, 1 ), -3 )}`;
			break;
		}
		const newState = {
			n, n2, p0, phat, phat2, pStat, areaData, areaData2, pdfData, probFormula, stderr
		};
		this.setState( newState );
	};

	onDirectionChange = ( pos ) => {
		let areaData;
		let areaData2;
		let probFormula;
		let { pStat } = this.state;
		const { pValue } = this.props;
		switch ( pos ) {
		case 0:
			areaData = linspace( abs( pStat ), 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			areaData2 = linspace( -3, -abs( pStat ), 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `${pValue ? pValue : `P( |Z| > ${abs( pStat )})`} = ${roundn( 1-pnorm( abs( pStat ), 0, 1 ) + pnorm( -abs( pStat ), 0, 1 ), -3 )}`;
			break;
		case 1:
			areaData = linspace( pStat || 0.0, 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z > ${pStat}) = ${roundn( 1-pnorm( pStat, 0, 1 ), -3 )}`;
			break;
		case 2:
			areaData = linspace( -3, pStat, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z < ${pStat}) = ${roundn( pnorm( pStat, 0, 1 ), -3 )}`;
			break;
		}
		this.setState({
			type: pos,
			probFormula,
			areaData,
			areaData2
		});
	};

	renderParametersPanel() {
		const { p0, samples } = this.state;
		const { t } = this.props;
		const firstSampleParams = <div>
			{ samples === 'Two-Sample' ? <Badge bg="secondary">First Sample</Badge> : null }
			<NumberInput
				legend={t('sample-proportion')}
				defaultValue={this.state.phat}
				step={0.001}
				min={0}
				max={1}
				onChange={( value ) => {
					this.setState({
						phat: value
					}, this.onGenerate );
				}}
			/>
			<NumberInput
				legend={t('sample-size')}
				defaultValue={this.state.n}
				step={1}
				min={1}
				onChange={( value ) => {
					this.setState({
						n: value
					}, this.onGenerate );
				}}
			/>
		</div>;
		const secondSampleParams = <div>
			{ samples === 'Two-Sample' ? <Badge bg="secondary">Second Sample</Badge> : null }
			<NumberInput
				legend={t('sample-proportion')}
				defaultValue={this.state.phat2}
				step={0.001}
				min={0.001}
				max={0.999}
				onChange={( value ) => {
					this.setState({
						phat2: value
					}, this.onGenerate );
				}}
			/>
			<NumberInput
				legend={t('sample-size')}
				defaultValue={this.state.n2}
				step={1}
				min={1}
				onChange={( value ) => {
					this.setState({
						n2: value
					}, this.onGenerate );
				}}
			/>
		</div>;
		const testStat = samples === 'Two-Sample' ? 'p_1 - p_2' : 'p';
		const asValue = this.props.nullHypothesisAsValue;
		return ( <Card maxWidth={1600}>
			<Card.Header as="h4">
				{t('parameters')}
			</Card.Header>
			<Card.Body>
				<Card body className="bg-light">
					<SelectInput
						options={this.props.types}
						defaultValue={samples}
						onChange={( value ) => {
							this.setState({
								samples: value,
								p0: value === 'Two-Sample' ? 0.0 : 0.5
							}, this.onGenerate );
						}}
					/>
					<NumberInput
						legend={`${ samples === 'Two-Sample' ? 'Difference in proportions' : 'Hypothesized proportion' } (null hypothesis)`}
						defaultValue={p0}
						step={0.001}
						min={0}
						max={1}
						onChange={( value ) => {
							this.setState({
								p0: value
							}, this.onGenerate );
						}}
					/>
				</Card>
				{t('lets-assume')}
				<Card body className="bg-light">
					{firstSampleParams}
					{samples === 'Two-Sample' ? secondSampleParams : null }
				</Card>
				<p>{t('conduct-the-following-test')}</p>
				<Switch onChange={this.onDirectionChange} style={{ width: '100%' }} >
					<TeX displayMode tag="" raw={`H_0: ${testStat} = ${p0} \\; vs. \\; H_1: ${testStat} \\ne ${p0}`} />
					<TeX displayMode tag="" raw={`H_0: ${testStat} ${asValue ? '=' : '\\le'} ${p0} \\; vs. \\; H_1: ${testStat} > ${p0}`} />
					<TeX displayMode tag="" raw={`H_0: ${testStat} ${asValue ? '=' : '\\ge'} ${p0} \\; vs. \\; H_1: ${testStat} < ${p0}`} />
				</Switch>
				<p>{t('calculate-test-statistic')}</p>
				{ samples === 'Two-Sample' ?
					<TeX
						displayMode
						tag=""
						style={{ fontSize: '1.5em' }}
						raw="z  = \frac{(\hat p_1 - \hat p_2) - (p_1 - p_2)}{\sqrt{\tfrac{\hat p_1 (1- \hat p_1)}{n_1} + \tfrac{\hat p_2 (1 - \hat p_2)}{n_2} }}"
						elems={{
							'n': {
								tooltip: t('sample-size')
							},
							'p': {
								tooltip: t('proportion')
							},
							'z': {
								tooltip: t('test-statistic')
							}
						}}
					/> :
					<TeX
						displayMode
						tag=""
						style={{ fontSize: '1.5em' }}
						raw="z = \frac{\hat{p} - p}{\sqrt{p (1-p) / n}}"
						elems={{
							'n': {
								tooltip: t('sample-size')
							},
							'p': {
								tooltip: t('proportion')
							},
							'z': {
								tooltip: t('test-statistic')
							}
						}}
					/>
				}
			</Card.Body>
		</Card> );
	}

	renderResultPanel() {
		const { p0, phat, phat2, pStat, samples, n, stderr } = this.state;
		const { t } = this.props;
		return ( <Card>
			<Card.Header as="h4">{t('test-result')}</Card.Header>
			<Card.Body>
				<p>{t('plugging-in')}</p>
				{ samples === 'Two-Sample' ?
					<TeX
						tag=""
						displayMode
						raw={`z  = \\frac{${roundn( phat - phat2, -3 )} - ${p0}}{\\sqrt{${roundn( stderr*stderr, -5 )}}} = ${pStat}`}
					/> :
					<TeX
						tag=""
						displayMode
						raw={`z  = \\frac{${phat} - ${p0}}{\\sqrt{\\frac{(${roundn( p0, -3 )}) (${roundn( 1-p0, -3 )})}{${n}} }} = ${pStat}`}
					/>
				}
				<p>{t('calculate-p-value')}</p>
				<TeX raw={this.state.probFormula} />
				<VictoryChart
					domain={{ x: [ -3, 3 ]}}
				>
					<VictoryLine data={this.state.pdfData} />
					<VictoryArea
						data={this.state.areaData}
						style={areaStyle}
					/>
					{ this.state.areaData2 ? <VictoryArea
						data={this.state.areaData2}
						style={areaStyle}
					/> : null }
				</VictoryChart>
			</Card.Body>
		</Card> );
	}

	render() {
		return (
			<Container style={{ paddingTop: 20, paddingBottom: 20, ...this.props.style }}>
				<Row>
					<Col md={6}>
						{this.renderParametersPanel()}
					</Col>
					<Col md={6}>
						{this.renderResultPanel()}
						<br />
						{this.props.feedback ?
							<FeedbackButtons id="hypothesisTestingProportion" /> :
							null
						}
					</Col>
				</Row>
			</Container>
		);
	}
}


// PROPERTIES //

ProportionTest.defaultProps = {
	types: [ 'One-Sample', 'Two-Sample' ],
	feedback: false,
	nullHypothesisAsValue: false,
	pValue: null,
	style: {}
};

ProportionTest.propTypes = {
	types: PropTypes.arrayOf( PropTypes.string ),
	feedback: PropTypes.bool,
	nullHypothesisAsValue: PropTypes.bool,
	pValue: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

export default withTranslation( 'learn/hypothesis-testing' )( ProportionTest );
