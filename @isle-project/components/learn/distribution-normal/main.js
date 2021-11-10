// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Alert from 'react-bootstrap/Alert';
import { VictoryAxis, VictoryArea, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import contains from '@stdlib/assert/contains';
import max from '@stdlib/math/base/special/max';
import roundn from '@stdlib/math/base/special/roundn';
import dnorm from '@stdlib/stats/base/dists/normal/pdf';
import pnorm from '@stdlib/stats/base/dists/normal/cdf';
import NumberInput from '@isle-project/components/input/number';
import SliderInput from '@isle-project/components/input/slider';
import Panel from '@isle-project/components/panel';
import TeX from '@isle-project/components/tex';


// VARIABLES //

const LINE_STYLE = {
	data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
};
const AREA_STYLE = {
	data: {
		opacity: 0.3,
		fill: 'tomato'
	}
};


// FUNCTIONS //

/**
 * Returns a domain object for a distribution with the specified mean and standard deviation.
 *
 * @private
 * @param {number} mean - distribution mean
 * @param {number} sigma - distribution standard deviation
 * @returns {Object} domain object with `x` and `y` properties
 */
function calculateDomain( mean, sd ) {
	return {
		x: [ mean - 6 - sd*3, mean + 6 + sd*3 ],
		y: [ 0, 0.6 * ( 100 / max( 100, sd ) ) ]
	};
}


// MAIN //

/**
* A learning component for calculating probabilities of a normal distribution.
*
* @property {boolean} hideCDF - controls whether to hide the CDF plots
* @property {Object} domain - object of `x` and `y` arrays with the starting and end points for the respective axis
* @property {Array} tabs - which tabs to display (either `smaller`, `greater`, or `range`)
* @property {number} minStDev - minimum standard deviation
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class NormalProbs extends Component {
	constructor( props ) {
		super( props );
		const mean = 0;
		const sd = 1;
		this.state = {
			mean,
			sd,
			x0: 0,
			x1: 1,
			domain: calculateDomain( mean, sd )
		};
	}

	handleMeanChange = ( mean ) => {
		const { sd, domain } = this.state;
		const s3 = 3*sd;
		if (
			mean - s3 < domain.x[ 0 ] ||
			mean + s3 > domain.x[ 1 ] ||
			domain.x[ 0 ] < mean - 10*s3 ||
			domain.x[ 1 ] > mean + 10*s3 ||
			dnorm( mean, mean, sd ) >= domain.y[ 1 ]
		) {
			this.setState({
				mean,
				domain: calculateDomain( mean, sd )
			});
		} else {
			this.setState({ mean });
		}
	};

	handleSDChange = ( sd ) => {
		const s3 = 3*sd;
		const { mean, domain } = this.state;
		if (
			mean - s3 < domain.x[ 0 ] ||
			mean + s3 > domain.x[ 1 ] ||
			domain.x[ 0 ] < mean - 10*s3 ||
			domain.x[ 1 ] > mean + 10*s3 ||
			dnorm( mean, mean, sd ) >= domain.y[ 1 ]
		) {
			this.setState({
				sd,
				domain: calculateDomain( mean, sd )
			});
		} else {
			this.setState({ sd });
		}
	};

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	};

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	};

	renderInputs( type ) {
		const { t } = this.props;
		const { mean, sd, x0, x1 } = this.state;
		return (
			<Fragment>
				<NumberInput
					key={`${type}-mean`}
					legend={t('mean')}
					defaultValue={0}
					step={this.props.step}
					onChange={this.handleMeanChange}
				/>
				<NumberInput
					key={`${type}-sd`}
					legend={t('standard-deviation')}
					defaultValue={this.props.minStDev}
					step={this.props.step}
					min={this.props.minStDev}
					onChange={this.handleSDChange}
				/>
				<SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={x0}
					step={this.props.step}
					min={mean-sd*4}
					max={mean+sd*4}
					onChange={this.handleLowerChange}
				/>
				{type === 'range' ?
					<SliderInput
						key={`${type}-x1`}
						legend="x1"
						defaultValue={x1}
						min={mean-sd*4}
						max={mean+sd*4}
						step={this.props.step}
						onChange={this.handleUpperChange}
					/> :
					null
				}
			</Fragment>
		);
	}

	render() {
		const domain = this.props.domain;
		const tabs = this.props.tabs;
		const { mean, sd, x0, x1 } = this.state;
		const { t } = this.props;
		const tabSmaller = contains( tabs, 'smaller' ) ? <Tab eventKey="smaller" title={<TeX raw="P(X \le x_0)" />}>
			<Container><Row>
				<Col>
					<Panel bodyClassName="d-grid gap-1" >
						{this.renderInputs( 'smaller' )}
						<TeX raw={`P(X \\le ${roundn( x0, -4 )}) = ${roundn( pnorm( x0, mean, sd ), -4 )}`} displayMode tag="" />
					</Panel>
				</Col>
				<Col>
					<VictoryChart
						domain={domain ? domain : this.state.domain}
						theme={VictoryTheme.material}
					>
						<VictoryAxis dependentAxis />
						<VictoryAxis
							label="PDF" tickFormat={(x) => `${x}`} crossAxis={false}
							style={{ axisLabel: { padding: 40 }}}
						/>
						<VictoryArea
							samples={200}
							interpolation="step"
							y={( data ) => {
								if ( data.x <= x0 ) {
									return dnorm( data.x, mean, sd );
								}
								return 0.0;
							}}
							style={AREA_STYLE}
						/>
						<VictoryLine
							samples={200}
							y={( data ) => dnorm( data.x, mean, sd )}
						/>
					</VictoryChart>
				</Col>
				{!this.props.hideCDF ? <Col>
					<VictoryChart theme={VictoryTheme.material} >
						<VictoryAxis dependentAxis />
						<VictoryAxis
							label="CDF" tickFormat={(x) => `${x}`}
							style={{ axisLabel: { padding: 40 }}}
						/>
						<VictoryLine
							samples={600}
							y={( data ) => {
								return pnorm( data.x, mean, sd );
							}}
							domain={{
								x: [ mean-sd*4, mean+sd*4 ],
								y: [ 0, 1.1 ]
							}}
						/>
						<VictoryLine
							data={[
								{ x: x0, y: 0 },
								{ x: x0, y: pnorm( x0, mean, sd ) }
							]}
							style={LINE_STYLE}
						/>
						<VictoryLine
							data={[
								{ x: 0, y: pnorm( x0, mean, sd ) },
								{ x: x0, y: pnorm( x0, mean, sd ) }
							]}
							style={LINE_STYLE}
						/>
					</VictoryChart>
				</Col> : null }
			</Row></Container>
		</Tab> : null;
		const tabGreater = contains( tabs, 'greater' ) ? <Tab eventKey="greater" title={<TeX raw="P(X > x_0)" />}>
			<Container><Row>
				<Col>
					<Panel bodyClassName="d-grid gap-1" >
						{this.renderInputs( 'greater' )}
						<TeX raw={`P(X > ${roundn( x0, -4 )}) = ${roundn( 1.0 - pnorm( x0, mean, sd ), -4 )}`} displayMode tag="" />
					</Panel>
				</Col>
				<Col>
					<VictoryChart
						domain={domain ? domain : this.state.domain}
						theme={VictoryTheme.material}
					>
						<VictoryAxis dependentAxis />
						<VictoryAxis
							label="PDF" tickFormat={(x) => `${x}`} crossAxis={false}
							style={{ axisLabel: { padding: 40 }}}
						/>
						<VictoryArea
							samples={200}
							interpolation="step"
							y={( data ) => {
								if ( data.x > x0 ) {
									return dnorm( data.x, mean, sd );
								}
								return 0.0;
							}}
							style={AREA_STYLE}
						/>
						<VictoryLine
							samples={200}
							y={( data ) =>
								dnorm( data.x, mean, sd )
							}
						/>
					</VictoryChart>
				</Col>
				{!this.props.hideCDF ? <Col>
					<VictoryChart theme={VictoryTheme.material} >
						<VictoryAxis dependentAxis />
						<VictoryAxis
							label="CDF" tickFormat={(x) => `${x}`}
							style={{ axisLabel: { padding: 40 }}}
						/>
						<VictoryLine
							samples={600}
							y={( data ) => {
								return pnorm( data.x, mean, sd );
							}}
							domain={{
								x: [ mean-sd*4, mean+sd*4 ],
								y: [ 0, 1.1 ]
							}}
						/>
						<VictoryLine
							data={[
								{ x: x0, y: 0 },
								{ x: x0, y: pnorm( x0, mean, sd ) }
							]}
							style={LINE_STYLE}
						/>
						<VictoryLine
							data={[
								{ x: x0, y: 1 },
								{ x: x0, y: pnorm( x0, mean, sd ) }
							]}
							style={{
								data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
							}}
						/>
						<VictoryLine
							data={[
								{ x: 0, y: pnorm( x0, mean, sd ) },
								{ x: x0, y: pnorm( x0, mean, sd ) }
							]}
							style={LINE_STYLE}
						/>
					</VictoryChart>
				</Col> : null }
			</Row></Container>
		</Tab> : null;
		const tabRange = contains( tabs, 'range' ) ? <Tab eventKey="range" title={<TeX raw="P( x_0 \le X \le x_1)" />}>
			<Container><Row>
				<Col>
					<Panel bodyClassName="d-grid gap-1" >
						{this.renderInputs( 'range' )}
						{ x1 >= x0 ?
							<TeX raw={`P(${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( pnorm( x1, mean, sd ) - pnorm( x0, mean, sd ), -4 )}`} displayMode tag="" /> :
							<Alert variant="warning">{t('lower-bound-smaller-equal-upper-bound')}</Alert>
						}
					</Panel>
				</Col>
				<Col>
					<VictoryChart
						domain={domain ? domain : this.state.domain}
						theme={VictoryTheme.material}
					>
						<VictoryAxis dependentAxis />
						<VictoryAxis
							label="PDF" tickFormat={(x) => `${x}`} crossAxis={false}
							style={{ axisLabel: { padding: 40 }}}
						/>
						<VictoryArea
							samples={200}
							interpolation="step"
							y={( data ) => {
								if ( data.x > x0 && data.x < x1 ) {
									return dnorm( data.x, mean, sd );
								}
								return 0.0;
							}}
							style={AREA_STYLE}
						/>
						<VictoryLine
							samples={200}
							y={( data ) =>
								dnorm( data.x, mean, sd )
							}
						/>
					</VictoryChart>
				</Col>
				{!this.props.hideCDF ? <Col>
					<VictoryChart theme={VictoryTheme.material} >
						<VictoryAxis dependentAxis />
						<VictoryAxis
							label="CDF" tickFormat={(x) => `${x}`}
							style={{ axisLabel: { padding: 40 }}}
						/>
						<VictoryLine
							samples={600}
							y={( data ) => {
								return pnorm( data.x, mean, sd );
							}}
							domain={{
								x: [ mean-sd*4, mean+sd*4 ],
								y: [ 0, 1.1 ]
							}}
						/>
						<VictoryLine
							data={[
								{ x: x1, y: pnorm( x0, mean, sd ) },
								{ x: x1, y: pnorm( x1, mean, sd ) }
							]}
							style={{
								data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
							}}
						/>
						<VictoryLine
							data={[
								{ x: x0, y: pnorm( x0, mean, sd ) },
								{ x: x1, y: pnorm( x0, mean, sd ) }
							]}
							style={LINE_STYLE}
						/>
					</VictoryChart>
				</Col> : null }
			</Row></Container>
		</Tab> : null;
		return ( <Card style={{ maxWidth: 1200, margin: '10px auto', ...this.props.style }}>
			<Card.Header as="h3">
				{t('normal-distribution')}
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={this.props.tabs[ 0 ]} id="normal-tabs">
					{tabSmaller}
					{tabGreater}
					{tabRange}
				</Tabs>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

NormalProbs.propTypes = {
	domain: PropTypes.object,
	hideCDF: PropTypes.bool,
	minStDev: PropTypes.number,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	tabs: PropTypes.arrayOf( PropTypes.oneOf([ 'smaller', 'greater', 'range' ]) ),
	style: PropTypes.object
};

NormalProbs.defaultProps = {
	domain: null,
	hideCDF: false,
	minStDev: 1,
	step: 0.01,
	tabs: [ 'smaller', 'greater', 'range' ],
	style: {}
};


// EXPORTS //

export default withTranslation( 'learn/distribution' )( NormalProbs );
