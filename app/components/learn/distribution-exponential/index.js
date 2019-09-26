// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import dexp from '@stdlib/stats/base/dists/exponential/pdf';
import pexp from '@stdlib/stats/base/dists/exponential/cdf';
import qexp from '@stdlib/stats/base/dists/exponential/quantile';
import SliderInput from 'components/input/slider';
import Panel from 'components/panel';
import TeX from 'components/tex';


// VARIABLES //

const NEAR_ONE = 0.999999;


// MAIN //

/**
* A learning component for calculating probabilities of a exponential distribution.
*
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class ExponentialProbs extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			rate: 1,
			x0: 0,
			x1: 1
		};
	}

	handleRateChange = ( rate ) => {
		this.setState({ rate });
	}

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	}

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	}

	renderInputs( type ) {
		const { rate, x0, x1 } = this.state;
		return (
			<Fragment>
				<SliderInput
					key={`${type}-rate`}
					legend="Rate"
					defaultValue={1}
					min={1e-12}
					step={this.props.step}
					max={20}
					onChange={this.handleRateChange}
				/>
				<SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={x0}
					min={0}
					max={qexp( NEAR_ONE, rate )}
					step={this.props.step}
					onChange={this.handleLowerChange}
				/>
				{ type === 'range' ?
					<SliderInput
						legend="x1"
						defaultValue={x1}
						min={0}
						max={qexp( NEAR_ONE, rate )}
						step={this.props.step}
						onChange={this.handleUpperChange}
					/> :
				null }
			</Fragment>
		);
	}

	render() {
		const { rate, x0, x1 } = this.state;
		return ( <Card style={{ maxWidth: 600, ...this.props.style }}>
			<Card.Header as="h3">
				Exponential Distribution
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={1} id="exponential-tabs">
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Panel>
							{this.renderInputs( 'smaller' )}
							<TeX raw={`P(X \\le ${roundn( x0, -4 )}) = ${roundn( pexp( x0, rate ), -4 )}`} />
						</Panel>
						<VictoryChart
							domain={{
								x: [ 0, qexp( NEAR_ONE, rate ) + 2 ]
							}}
						>
							<VictoryArea
								samples={200}
								interpolation="step"
								y={( data ) => {
									if ( data.x <= x0 ) {
										return dexp( data.x, rate );
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
								y={( data ) =>
									dexp( data.x, rate )
								}
							/>
						</VictoryChart>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
						<Panel>
							{this.renderInputs( 'greater' )}
							<TeX raw={`P(X > ${roundn( x0, -4 )} ) = ${roundn( 1-pexp( x0, rate ), -4 )}`} />
						</Panel>
						<VictoryChart
							domain={{
								x: [ 0, qexp( NEAR_ONE, rate ) + 2 ]
							}}
						>
							<VictoryArea
								samples={200}
								interpolation="step"
								y={( data ) => {
									if ( data.x > x0 ) {
										return dexp( data.x, rate );
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
								y={( data ) =>
									dexp( data.x, rate )
								}
							/>
						</VictoryChart>
					</Tab>
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
						<Panel>
							{this.renderInputs( 'range' )}
							{ x1 >= x0 ?
								<TeX raw={`P( ${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )} ) = ${roundn( pexp( x1, rate ) - pexp( x0, rate ), -4 )}`} /> :
								<Alert variant="warning">Lower bound must be smaller than or equal to upper bound.</Alert>
							}
						</Panel>
						<VictoryChart
							domain={{
								x: [ 0, qexp( NEAR_ONE, rate ) + 2 ]
							}}
						>
							<VictoryArea
								samples={200}
								interpolation="step"
								y={( data ) => {
									if ( data.x >= x0 && data.x <= x1 ) {
										return dexp( data.x, rate );
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
								y={( data ) =>
									dexp( data.x, rate )
								}
							/>
						</VictoryChart>
					</Tab>
				</Tabs>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

ExponentialProbs.propTypes = {
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object
};

ExponentialProbs.defaultProps = {
	step: 0.01,
	style: {}
};


// EXPORTS //

export default ExponentialProbs;
