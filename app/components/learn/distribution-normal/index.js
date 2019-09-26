// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Alert from 'react-bootstrap/Alert';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import contains from '@stdlib/assert/contains';
import roundn from '@stdlib/math/base/special/roundn';
import dnorm from '@stdlib/stats/base/dists/normal/pdf';
import pnorm from '@stdlib/stats/base/dists/normal/cdf';
import NumberInput from 'components/input/number';
import SliderInput from 'components/input/slider';
import Panel from 'components/panel';
import TeX from 'components/tex';


// MAIN //

/**
* A learning component for calculating probabilities of a normal distribution.
*
* @property {Object} domain - object of `x` and `y` arrays with the starting and end points for the respective axis
* @property {Array} tabs - which tabs to display (either `smaller`, `greater`, or `range`)
* @property {number} minStDev - minimum standard deviation
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class NormalProbs extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			mean: 0,
			sd: 1,
			x0: 0,
			x1: 1
		};
	}

	handleMeanChange = ( mean ) => {
		this.setState({ mean });
	}

	handleSDChange = ( sd ) => {
		this.setState({ sd });
	}

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	}

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	}

	renderInputs( type ) {
		const { mean, sd, x0, x1 } = this.state;
		return (
			<Fragment>
				<NumberInput
					legend="Mean"
					defaultValue={0}
					step={this.props.step}
					inline
					onChange={this.handleMeanChange}
				/>
				<NumberInput
					legend="Standard Deviation"
					defaultValue={this.props.minStDev}
					step={this.props.step}
					min={this.props.minStDev}
					inline
					onChange={this.handleSDChange}
				/>
				<SliderInput
					legend="x0"
					defaultValue={x0}
					step={this.props.step}
					min={mean-sd*4}
					max={mean+sd*4}
					onChange={this.handleLowerChange}
				/>
				{type === 'range' ?
					<SliderInput
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
		const tabSmaller = contains( tabs, 'smaller' ) ? <Tab eventKey="smaller" title={<TeX raw="P(X \le x_0)" />}>
			<Panel>
				{this.renderInputs( 'smaller' )}
				<TeX raw={`'P(X \\le ${roundn( x0, -4 )}) = ${roundn( pnorm( x0, mean, sd ), -4 )}`} displayMode tag="" />
			</Panel>
			<VictoryChart
				domain={domain ? domain : {
					x: [ mean-sd*4, mean+sd*4 ], y: [ 0, dnorm( mean, mean, sd ) ]
				}}>
				<VictoryArea
					samples={200}
					interpolation="step"
					y={( data ) => {
						if ( data.x <= x0 ) {
							return dnorm( data.x, mean, sd );
						}
						return 0.0;
					}}
					style={{
						data: {
							opacity: 0.3,
							fill: 'tomato'
						}
					}}
				/>
				<VictoryLine
					samples={200}
					y={( data ) => dnorm( data.x, mean, sd )}
				/>
			</VictoryChart>
		</Tab> : null;
		const tabGreater = contains( tabs, 'greater' ) ? <Tab eventKey="greater" title={<TeX raw="P(X > x_0)" />}>
			<Panel>
				{this.renderInputs( 'greater' )}
				<TeX raw={`P(X > ${roundn( x0, -4 )}) = ${roundn( 1.0 - pnorm( x0, mean, sd ), -4 )}`} displayMode tag="" />
			</Panel>
			<VictoryChart
				domain={domain ? domain : { x: [ mean-sd	*4, mean+sd	*4 ], y: [ 0, dnorm( mean, mean, sd	 ) ]}}>
				<VictoryArea
					samples={200}
					interpolation="step"
					y={( data ) => {
						if ( data.x > x0 ) {
							return dnorm( data.x, mean, sd );
						}
						return 0.0;
					}}
					style={{
						data: {
							opacity: 0.3,
							fill: 'tomato'
						}
					}}
				/>
				<VictoryLine
					samples={200}
					y={( data ) =>
						dnorm( data.x, mean, sd	 )
					}
				/>
			</VictoryChart>
		</Tab> : null;
		const tabRange = contains( tabs, 'range' ) ? <Tab eventKey="range" title={<TeX raw="P( x_0 \le X \le x_1)" />}>
			<Panel>
				{this.renderInputs( 'range' )}
				{ x1 >= x0 ?
					<TeX raw={`P(${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( pnorm( x1, mean, sd ) - pnorm( x0, mean, sd ), -4 )}`} displayMode tag="" /> :
					<Alert variant="warning">Lower bound must be smaller than or equal to upper bound.</Alert>
				}
			</Panel>
			<VictoryChart
				domain={domain ? domain : {
					x: [ mean-sd*4, mean+sd*4 ],
					y: [ 0, dnorm( mean, mean, sd ) ]
				}}>
				<VictoryArea
					samples={200}
					interpolation="step"
					y={( data ) => {
						if ( data.x > x0 && data.x < x1 ) {
							return dnorm( data.x, mean, sd );
						}
						return 0.0;
					}}
					style={{
						data: {
							opacity: 0.3, fill: 'tomato'
						}
					}}
				/>
				<VictoryLine
					samples={200}
					y={( data ) =>
						dnorm( data.x, mean, sd	 )
					}
				/>
			</VictoryChart>
		</Tab> : null;
		return ( <Card style={{ maxWidth: 600, ...this.props.style }}>
			<Card.Header as="h3">
				Normal Distribution
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
	minStDev: 1,
	step: 0.01,
	tabs: [ 'smaller', 'greater', 'range' ],
	style: {}
};


// EXPORTS //

export default NormalProbs;
