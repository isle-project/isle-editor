// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { VictoryAxis, VictoryChart, VictoryBar, VictoryTheme } from 'victory';
import absdiff from '@stdlib/math/base/utils/absolute-difference';
import round from '@stdlib/math/base/special/round';
import NumberInput from 'components/input/number';
import TeX from 'components/tex';
import Panel from 'components/panel';


// FUNCTIONS //

const evaluateCDF = ( x, data ) => {
	let prob = 0;
	for ( let i = 0; i < data.length; i++ ) {
		const val = data[ i ];
		if ( val.x <= x ) {
			prob += val.y;
		}
	}
	return prob;
};

const evaluateProbRange = ( lower, upper, data ) => {
	let prob = 0;
	for ( let i = 0; i < data.length; i++ ) {
		const val = data[ i ];
		if ( lower <= val.x && val.x <= upper ) {
			prob += val.y;
		}
	}
	return prob;
};


// MAIN //

/**
* A learning component for visualizing any discrete distribution and evaluating its CDF.
*
* @param {number} numValues - initial number of distinct values
*/
class DiscreteDistribution extends Component {
	constructor( props ) {
		super( props );

		const data = [];
		for ( let i = 0; i < props.numValues; i++ ) {
			data[ i ] = {
				x: i,
				y: 1/props.numValues
			};
		}
		const x = round( props.numValues / 2 );
		this.state = {
			data,
			valid: true,
			lower: 0,
			upper: 5,
			x: x,
			rangeProb: 1,
			lowerProb: evaluateCDF( x, data )
		};
	}

	chooseNSides = ( sides ) => {
		const data = [];
		for ( let i = 0; i < sides; i++ ) {
			data[ i ] = {
				x: i,
				y: 1/sides
			};
		}
		this.setState({
			data,
			valid: true,
			lower: 0,
			upper: sides-1,
			x: round( sides/2 )
		});
	}

	renderGrid() {
		return (
			<Container fluid={true}>
				<Row>
					<Col md={5}>
						<h3>Values:</h3>
						{this.state.data.map( ( x, i ) => ( <NumberInput
							key={`value-${i}`}
							legend={`${i+1}`}
							defaultValue={i}
							step="any"
							width={100}
							onChange={( val ) => {
								const newData = this.state.data.slice();
								newData[ i ] = {
									x: val,
									y: this.state.data[ i ].y
								};
								this.setState({
									data: newData
								});
							}}
						/> ) )}
					</Col>
					<Col md={5}>
						<h3>Probabilities:</h3>
						{this.state.data.map( ( x, i ) => ( <NumberInput
							key={`prob-${i}`}
							legend={`${i+1}`}
							defaultValue={1/this.state.data.length}
							step="any"
							max={1}
							min={0}
							width={100}
							numbersOnly={false}
							onChange={( val )=>{
								const newData = this.state.data.slice();
								let sum = 0.0;
								newData[ i ] = {
									x: this.state.data[ i ].x,
									y: val
								};
								for ( let i = 0; i < newData.length; i++ ) {
									sum += newData[ i ].y;
								}
								this.setState({
									data: newData,
									valid: absdiff( sum, 1.0 ) <= 1.5e-8
								});
							}}
						/> ) )}
					</Col>
				</Row>
			</Container>
		);
	}

	renderTabs() {
		if ( !this.state.valid ) {
			return <Alert variant="danger"> Probabilities must add up to one.</Alert>;
		}
		return (
			<Tabs defaultActiveKey={1} id="binomial-tabs">
				<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
					<Panel header="Probability Plot">
						<TeX raw={`P( X \\le x = ${this.state.x}) = ${this.state.lowerProb.toFixed( 3 )}`}
							elems={{
								x: {
									variable: 'x',
									onChange: ( x ) => {
										const lowerProb = evaluateCDF( x, this.state.data );
										this.setState({
											lowerProb,
											x
										});
									},
									defaultValue: this.state.x,
									tooltip: 'Click to change value'
								}
							}}
							displayMode
						/>
						<VictoryChart theme={VictoryTheme.material}>
							<VictoryAxis dependentAxis />
							<VictoryAxis tickFormat={(x) => `${x}`} crossAxis={false} />
							<VictoryBar
								data={this.state.data}
								style={{
									data: {
										fill: data => ( data.x <= this.state.x ) ? 'tomato' : 'steelblue'
									}
								}}
							/>
						</VictoryChart>
					</Panel>
				</Tab>
				<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
					<Panel header="Probability Plot">
						<TeX raw={`P( X > x = ${this.state.x}) = ${(1-this.state.lowerProb).toFixed( 3 )}`}
							elems={{
								x: {
									variable: 'x',
									onChange: ( x ) => {
										const lowerProb = evaluateCDF( x, this.state.data );
										this.setState({
											lowerProb,
											x
										});
									},
									defaultValue: this.state.x,
									tooltip: 'Click to change value'
								}
							}}
							displayMode
						/>
						<VictoryChart theme={VictoryTheme.material}>
							<VictoryAxis dependentAxis />
							<VictoryAxis tickFormat={(x) => `${x}`} crossAxis={false} />
							<VictoryBar
								data={this.state.data}
								style={{
									data: {
										fill: data => ( data.x > this.state.x ) ? 'tomato' : 'steelblue'
									}
								}}
							/>
						</VictoryChart>
					</Panel>
				</Tab>
				<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
					<Panel header="Probability Plot">
						<TeX raw={`P( L = ${this.state.lower} \\le X \\le U = ${this.state.upper}) = ${this.state.rangeProb.toFixed( 3 )}`} elems={{
							L: {
								variable: 'L',
								onChange: ( lower ) => {
									const rangeProb = evaluateProbRange( lower, this.state.upper, this.state.data );
									this.setState({
										rangeProb,
										lower
									});
								},
								defaultValue: this.state.lower,
								tooltip: 'Click to change lower value'
							},
							U: {
								variable: 'U',
								onChange: ( upper ) => {
									const rangeProb = evaluateProbRange( this.state.lower, upper, this.state.data );
									this.setState({
										rangeProb,
										upper
									});
								},
								defaultValue: this.state.upper,
								tooltip: 'Click to change upper value'
							}
						}} displayMode />
						<VictoryChart theme={VictoryTheme.material}>
							<VictoryAxis dependentAxis />
							<VictoryAxis tickFormat={(x) => `${x}`} crossAxis={false} />
							<VictoryBar
								data={this.state.data}
								style={{
									data: {
										fill: data => ( this.state.lower <= data.x && data.x <= this.state.upper ) ? 'tomato' : 'steelblue'
									}
								}}
							/>
						</VictoryChart>
					</Panel>
				</Tab>
			</Tabs>
		);
	}

	render() {
		return (
			<Card style={{ maxWidth: 1200, margin: '0 auto' }}>
				<Card.Header as="h4">
					Discrete Distribution Probabilities
				</Card.Header>
				<Card.Body>
					<NumberInput
						legend="Number of distinct values"
						defaultValue={6}
						step={1}
						max={20}
						min={2}
						onChange={this.chooseNSides}
					/>
					<p>Choose custom probabilities for the sides and then throw some dice!</p>
					<Container>
						<Row>
							<Col md={6}>
								{this.renderGrid()}
							</Col>
							<Col md={6}>
								{this.renderTabs()}
							</Col>
						</Row>
					</Container>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

DiscreteDistribution.propTypes = {
	numValues: PropTypes.number
};

DiscreteDistribution.defaultProps = {
	numValues: 4
};


// EXPORTS //

export default DiscreteDistribution;
