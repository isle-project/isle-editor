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
import pbeta from '@stdlib/stats/base/dists/beta/cdf';
import dbeta from '@stdlib/stats/base/dists/beta/pdf';
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


// MAIN //

/**
* A learning component for calculating probabilities of a beta distribution.
*
* @property {Object} domain - object of `x` and `y` arrays with the starting and end points for the respective axis
* @property {Array} tabs - which tabs to display (either `smaller`, `greater`, or `range`)
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class BetaProbs extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			alpha: 1,
			beta: 1,
			x0: 0,
			x1: 1
		};
	}

	handleAlphaChange = ( alpha ) => {
		this.setState({ alpha });
	};

	handleBetaChange = ( beta ) => {
		this.setState({ beta });
	};

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	};

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	};

	renderInputs( type ) {
		const { alpha, beta, x0, x1 } = this.state;
		return (
			<Fragment>
				<NumberInput
					key={`${type}-alpha`}
					legend="Alpha"
					defaultValue={alpha}
					min={1e-3}
					step={this.props.step}
					onChange={this.handleAlphaChange}
				/>
				<NumberInput
					key={`${type}-beta`}
					legend="Beta"
					defaultValue={beta}
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
					max={1.1}
					onChange={this.handleLowerChange}
				/>
				{type === 'range' ?
					<SliderInput
						key={`${type}-x1`}
						legend="x1"
						defaultValue={x1}
						min={-0.1}
						max={1.1}
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
		const { alpha, beta, x0, x1 } = this.state;
		const tabSmaller = contains( tabs, 'smaller' ) ? <Tab eventKey="smaller" title={<TeX raw="P(X \le x_0)" />}>
			<Container><Row>
				<Col>
					<Panel bodyClassName="d-grid gap-1" >
						{this.renderInputs( 'smaller' )}
						<TeX raw={`P(X \\le ${roundn( x0, -4 )}) = ${roundn( pbeta( x0, alpha, beta ), -4 )}`} displayMode tag="" />
					</Panel>
				</Col>
				<Col>
					<VictoryChart
						domain={domain ? domain : {
							x: [ -0.1, 1.1 ], y: [ 0, alpha < 0.75 || beta < 0.75 ? 5.0 : 2.5 ]
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
									return dbeta( data.x, alpha, beta );
								}
								return 0.0;
							}}
							style={AREA_STYLE}
						/>
						<VictoryLine
							samples={200}
							y={( data ) => dbeta( data.x, alpha, beta )}
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
								return pbeta( data.x, alpha, beta );
							}}
							domain={{
								x: [ -0.1, 1.1 ],
								y: [ 0, 1.1 ]
							}}
						/>
						<VictoryLine
							data={[
								{ x: x0, y: 0 },
								{ x: x0, y: pbeta( x0, alpha, beta ) }
							]}
							style={LINE_STYLE}
						/>
						<VictoryLine
							data={[
								{ x: 0, y: pbeta( x0, alpha, beta ) },
								{ x: x0, y: pbeta( x0, alpha, beta ) }
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
					<Panel bodyClassName="d-grid gap-1" >
						{this.renderInputs( 'greater' )}
						<TeX raw={`P(X > ${roundn( x0, -4 )}) = ${roundn( 1.0 - pbeta( x0, alpha, beta ), -4 )}`} displayMode tag="" />
					</Panel>
				</Col>
				<Col>
					<VictoryChart
						domain={domain ? domain : { x: [ -0.1, 1.1 ], y: [ 0, alpha < 0.75 || beta < 0.75 ? 5.0 : 2.5 ]}}
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
									return dbeta( data.x, alpha, beta );
								}
								return 0.0;
							}}
							style={AREA_STYLE}
						/>
						<VictoryLine
							samples={200}
							y={( data ) =>
								dbeta( data.x, alpha, beta )
							}
						/>
					</VictoryChart>
				</Col>
				<Col>
					<VictoryChart theme={VictoryTheme.material} domain={{
						x: [ -0.1, 1.1 ],
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
								return pbeta( data.x, alpha, beta );
							}}
						/>
						<VictoryLine
							data={[
								{ x: x0, y: 0 },
								{ x: x0, y: pbeta( x0, alpha, beta ) }
							]}
							style={LINE_STYLE}
						/>
						<VictoryLine
							data={[
								{ x: x0, y: 1 },
								{ x: x0, y: pbeta( x0, alpha, beta ) }
							]}
							style={{
								data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
							}}
						/>
						<VictoryLine
							data={[
								{ x: 0, y: pbeta( x0, alpha, beta ) },
								{ x: x0, y: pbeta( x0, alpha, beta ) }
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
					<Panel bodyClassName="d-grid gap-1" >
						{this.renderInputs( 'range' )}
						{ x1 >= x0 ?
							<TeX raw={`P(${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( pbeta( x1, alpha, beta ) - pbeta( x0, alpha, beta ), -4 )}`} displayMode tag="" /> :
							<Alert variant="warning">{this.props.t('lower-bound-smaller-equal-upper-bound')}</Alert>
						}
					</Panel>
				</Col>
				<Col>
					<VictoryChart
						domain={domain ? domain : {
							x: [ -0.1, 1.1 ],
							y: [ 0, alpha < 0.75 || beta < 0.75 ? 5.0 : 2.5 ]
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
									return dbeta( data.x, alpha, beta );
								}
								return 0.0;
							}}
							style={AREA_STYLE}
						/>
						<VictoryLine
							samples={200}
							y={( data ) =>
								dbeta( data.x, alpha, beta )
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
								return pbeta( data.x, alpha, beta );
							}}
							domain={{
								x: [ -0.1, 1.1 ],
								y: [ 0, 1.1 ]
							}}
						/>
						<VictoryLine
							data={[
								{ x: x1, y: pbeta( x0, alpha, beta ) },
								{ x: x1, y: pbeta( x1, alpha, beta ) }
							]}
							style={{
								data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
							}}
						/>
						<VictoryLine
							data={[
								{ x: x0, y: pbeta( x0, alpha, beta ) },
								{ x: x1, y: pbeta( x0, alpha, beta ) }
							]}
							style={LINE_STYLE}
						/>
					</VictoryChart>
				</Col>
			</Row></Container>
		</Tab> : null;
		return ( <Card style={{ maxWidth: 1200, margin: '10px auto', ...this.props.style }}>
			<Card.Header as="h3">
				{this.props.t('beta-distribution')}
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={this.props.tabs[ 0 ]} id="beta-tabs">
					{tabSmaller}
					{tabGreater}
					{tabRange}
				</Tabs>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

BetaProbs.propTypes = {
	domain: PropTypes.object,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	tabs: PropTypes.arrayOf( PropTypes.oneOf([ 'smaller', 'greater', 'range' ]) ),
	style: PropTypes.object
};

BetaProbs.defaultProps = {
	domain: null,
	step: 0.01,
	tabs: [ 'smaller', 'greater', 'range' ],
	style: {}
};


// EXPORTS //

export default withTranslation( 'learn/distribution' )( BetaProbs );
