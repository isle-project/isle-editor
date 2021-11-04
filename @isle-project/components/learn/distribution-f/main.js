/* eslint-disable no-nested-ternary */

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
import roundn from '@stdlib/math/base/special/roundn';
import pf from '@stdlib/stats/base/dists/f/cdf';
import df from '@stdlib/stats/base/dists/f/pdf';
import qf from '@stdlib/stats/base/dists/f/quantile';
import min from '@stdlib/math/base/special/min';
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
const MAX_PROB = 0.99999;


// MAIN //

/**
* A learning component for calculating probabilities of an F distribution.
*
* @property {Object} domain - object of `x` and `y` arrays with the starting and end points for the respective axis
* @property {Array} tabs - which tabs to display (either `smaller`, `greater`, or `range`)
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class FProbs extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			d1: 10,
			d2: 10,
			x0: 0,
			x1: 1
		};
	}

	handleAlphaChange = ( d1 ) => {
		this.setState({ d1 });
	};

	handleBetaChange = ( d2 ) => {
		this.setState({ d2 });
	};

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	};

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	};

	renderInputs( type ) {
		const { d1, d2, x0, x1 } = this.state;
		const xmax = roundn( qf( MAX_PROB, d1, d2 ), -3 );
		return (
			<Fragment>
				<NumberInput
					key={`${type}-d1`}
					legend={`D1 ${this.props.t('degrees-of-freedom')}`}
					defaultValue={d1}
					min={1e-3}
					step={this.props.step}
					onChange={this.handleAlphaChange}
				/>
				<NumberInput
					key={`${type}-d2`}
					legend={`D2 ${this.props.t('degrees-of-freedom')}`}
					defaultValue={d2}
					step={this.props.step}
					min={1e-3}
					onChange={this.handleBetaChange}
				/>
				<SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={x0}
					step={this.props.step}
					min={-0.1}
					max={xmax}
					onChange={this.handleLowerChange}
				/>
				{type === 'range' ?
					<SliderInput
						key={`${type}-x1`}
						legend="x1"
						defaultValue={x1}
						min={-0.1}
						max={xmax}
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
		const { d1, d2, x0, x1 } = this.state;
		const xmax = min( qf( MAX_PROB, d1, d2 ), 150 );
		const tabSmaller = contains( tabs, 'smaller' ) ? <Tab eventKey="smaller" title={<TeX raw="P(X \le x_0)" />}>
			<Container><Row>
				<Col>
					<Panel>
						{this.renderInputs( 'smaller' )}
						<TeX raw={`P(X \\le ${roundn( x0, -4 )}) = ${roundn( pf( x0, d1, d2 ), -4 )}`} displayMode tag="" />
					</Panel>
				</Col>
				<Col>
					<VictoryChart
						domain={domain ? domain : {
							x: [ -0.1, xmax ], y: [ 0, ( d1 >= 999 || d2 >= 999 ) ? 10 : ( d1 >= 99 || d2 >= 99 ? 5.0 : 2.0 ) ]
						}}
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
									return df( data.x, d1, d2 );
								}
								return 0.0;
							}}
							style={AREA_STYLE}
						/>
						<VictoryLine
							samples={200}
							y={( data ) => df( data.x, d1, d2 )}
						/>
					</VictoryChart>
				</Col>
				<Col>
					<VictoryChart theme={VictoryTheme.material} >
						<VictoryAxis dependentAxis />
						<VictoryAxis
							label="CDF" tickFormat={(x) => `${x}`}
							style={{ axisLabel: { padding: 40 }}}
						/>
						<VictoryLine
							samples={600}
							y={( data ) => {
								return pf( data.x, d1, d2 );
							}}
							domain={{
								x: [ -0.1, xmax ],
								y: [ 0, 1.1 ]
							}}
						/>
						<VictoryLine
							data={[
								{ x: x0, y: 0 },
								{ x: x0, y: pf( x0, d1, d2 ) }
							]}
							style={LINE_STYLE}
						/>
						<VictoryLine
							data={[
								{ x: 0, y: pf( x0, d1, d2 ) },
								{ x: x0, y: pf( x0, d1, d2 ) }
							]}
							style={LINE_STYLE}
						/>
					</VictoryChart>
				</Col>
			</Row></Container>
		</Tab> : null;
		const tabGreater = contains( tabs, 'greater' ) ? <Tab eventKey="greater" title={<TeX raw="P(X > x_0)" />}>
			<Container><Row>
				<Col>
					<Panel>
						{this.renderInputs( 'greater' )}
						<TeX raw={`P(X > ${roundn( x0, -4 )}) = ${roundn( 1.0 - pf( x0, d1, d2 ), -4 )}`} displayMode tag="" />
					</Panel>
				</Col>
				<Col>
					<VictoryChart
						domain={domain ? domain : { x: [ -0.1, xmax ], y: [ 0, ( d1 >= 999 || d2 >= 999 ) ? 10 : ( d1 >= 99 || d2 >= 99 ? 5.0 : 2.0 ) ]}}
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
									return df( data.x, d1, d2 );
								}
								return 0.0;
							}}
							style={AREA_STYLE}
						/>
						<VictoryLine
							samples={200}
							y={( data ) =>
								df( data.x, d1, d2 )
							}
						/>
					</VictoryChart>
				</Col>
				<Col>
					<VictoryChart theme={VictoryTheme.material} domain={{
						x: [ -0.1, xmax ],
						y: [ 0, 1.1 ]
					}} >
						<VictoryAxis dependentAxis />
						<VictoryAxis
							label="CDF" tickFormat={(x) => `${x}`}
							style={{ axisLabel: { padding: 40 }}}
						/>
						<VictoryLine
							samples={600}
							y={( data ) => {
								return pf( data.x, d1, d2 );
							}}
						/>
						<VictoryLine
							data={[
								{ x: x0, y: 0 },
								{ x: x0, y: pf( x0, d1, d2 ) }
							]}
							style={LINE_STYLE}
						/>
						<VictoryLine
							data={[
								{ x: x0, y: 1 },
								{ x: x0, y: pf( x0, d1, d2 ) }
							]}
							style={{
								data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
							}}
						/>
						<VictoryLine
							data={[
								{ x: 0, y: pf( x0, d1, d2 ) },
								{ x: x0, y: pf( x0, d1, d2 ) }
							]}
							style={LINE_STYLE}
						/>
					</VictoryChart>
				</Col>
			</Row></Container>
		</Tab> : null;
		const tabRange = contains( tabs, 'range' ) ? <Tab eventKey="range" title={<TeX raw="P( x_0 \le X \le x_1)" />}>
			<Container><Row>
				<Col>
					<Panel>
						{this.renderInputs( 'range' )}
						{ x1 >= x0 ?
							<TeX raw={`P(${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( pf( x1, d1, d2 ) - pf( x0, d1, d2 ), -4 )}`} displayMode tag="" /> :
							<Alert variant="warning">{this.props.t('lower-bound-smaller-equal-upper-bound') }</Alert>
						}
					</Panel>
				</Col>
				<Col>
					<VictoryChart
						domain={domain ? domain : {
							x: [ -0.1, xmax ],
							y: [ 0, ( d1 >= 999 || d2 >= 999 ) ? 10 : ( d1 >= 99 || d2 >= 99 ? 5.0 : 2.0 ) ]
						}}
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
									return df( data.x, d1, d2 );
								}
								return 0.0;
							}}
							style={AREA_STYLE}
						/>
						<VictoryLine
							samples={200}
							y={( data ) =>
								df( data.x, d1, d2 )
							}
						/>
					</VictoryChart>
				</Col>
				<Col>
					<VictoryChart theme={VictoryTheme.material} >
						<VictoryAxis dependentAxis />
						<VictoryAxis
							label="CDF" tickFormat={(x) => `${x}`}
							style={{ axisLabel: { padding: 40 }}}
						/>
						<VictoryLine
							samples={600}
							y={( data ) => {
								return pf( data.x, d1, d2 );
							}}
							domain={{
								x: [ -0.1, xmax ],
								y: [ 0, 1.1 ]
							}}
						/>
						<VictoryLine
							data={[
								{ x: min( x1, 150 ), y: pf( x0, d1, d2 ) },
								{ x: min( x1, 150 ), y: pf( min( x1, 150 ), d1, d2 ) }
							]}
							style={{
								data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
							}}
						/>
						<VictoryLine
							data={[
								{ x: x0, y: pf( x0, d1, d2 ) },
								{ x: min( x1, 150 ), y: pf( x0, d1, d2 ) }
							]}
							style={LINE_STYLE}
						/>
					</VictoryChart>
				</Col>
			</Row></Container>
		</Tab> : null;
		return ( <Card style={{ maxWidth: 1200, margin: '10px auto', ...this.props.style }}>
			<Card.Header as="h3">
				{this.props.t('f-distribution')}
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={this.props.tabs[ 0 ]} id="f-tabs">
					{tabSmaller}
					{tabGreater}
					{tabRange}
				</Tabs>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

FProbs.propTypes = {
	domain: PropTypes.object,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	tabs: PropTypes.arrayOf( PropTypes.oneOf([ 'smaller', 'greater', 'range' ]) ),
	style: PropTypes.object
};

FProbs.defaultProps = {
	domain: null,
	step: 0.01,
	tabs: [ 'smaller', 'greater', 'range' ],
	style: {}
};


// EXPORTS //

export default withTranslation( 'learn/distribution' )( FProbs );
