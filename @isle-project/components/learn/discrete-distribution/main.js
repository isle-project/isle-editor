// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { VictoryAxis, VictoryChart, VictoryBar, VictoryLine, VictoryTheme } from 'victory';
import absdiff from '@stdlib/math/base/utils/absolute-difference';
import round from '@stdlib/math/base/special/round';
import papplyRight from '@stdlib/utils/papply-right';
import NumberInput from '@isle-project/components/input/number';
import TeX from '@isle-project/components/tex';
import Panel from '@isle-project/components/panel';
import min from '@isle-project/utils/statistic/min';
import max from '@isle-project/utils/statistic/max';


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
			upper: props.numValues - 1,
			x: x,
			rangeProb: 1,
			lowerProb: evaluateCDF( x, data ),
			disableTabs: false
		};
	}

	pickNumDistinct = ( size ) => {
		const data = [];
		for ( let i = 0; i < size; i++ ) {
			data[ i ] = {
				x: i,
				y: 1/size
			};
		}
		const x = round( size/2 );
		const lower = 0;
		const upper = size - 1;
		const lowerProb = evaluateCDF( x, data );
		const rangeProb = evaluateProbRange( lower, upper, data );
		this.setState({
			data,
			valid: true,
			lower,
			upper,
			x,
			lowerProb,
			rangeProb
		});
	};

	handlePopover = ( status ) => {
		this.setState({
			disableTabs: status
		});
	};

	renderGrid() {
		const { t } = this.props;
		return (
			<Container fluid={true}>
				<Row>
					<Col md={5}>
						<h3>{t('value')}:</h3>
						{this.state.data.map( ( x, i ) => ( <NumberInput
							key={`value-${i}`}
							defaultValue={this.state.data[ i ].x}
							step="any"
							width={100}
							onChange={( val ) => {
								const newData = this.state.data.slice();
								newData[ i ] = {
									x: val,
									y: this.state.data[ i ].y
								};
								const lowerProb = evaluateCDF( this.state.x, newData );
								const rangeProb = evaluateProbRange( this.state.lower, this.state.upper, newData );
								this.setState({
									data: newData,
									lowerProb,
									rangeProb
								});
							}}
						/> ) )}
					</Col>
					<Col md={5}>
						<h3>{t('prob')}:</h3>
						{this.state.data.map( ( x, i ) => ( <NumberInput
							key={`prob-${i}`}
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
								const lowerProb = evaluateCDF( this.state.x, newData );
								const rangeProb = evaluateProbRange( this.state.lower, this.state.upper, newData );
								this.setState({
									data: newData,
									valid: absdiff( sum, 1.0 ) <= 1.5e-8,
									lowerProb,
									rangeProb
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
			return <Alert variant="danger">{this.props.t('must-add-to-one')}.</Alert>;
		}
		const cdf = papplyRight( evaluateCDF, this.state.data );
		const vals = this.state.data.map( o => o.x );
		const minVal = min( vals );
		const maxVal = max( vals );
		const domain = {
			x: [ minVal, maxVal + 1 ],
			y: [ 0, 1 ]
		};
		return (
			<Tabs defaultActiveKey={1} id="discrete-distribution-tabs">
				<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />} disabled={this.state.disableTabs} >
					<Panel header={this.props.t('probability-plot')} >
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
									tooltip: this.props.t('click-to-change-value')
								}
							}}
							displayMode
							onPopover={this.handlePopover}
						/>
						<Row>
							<Col md={6} >
								<VictoryChart theme={VictoryTheme.material}>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PMF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryBar
										data={this.state.data}
										style={{
											data: {
												fill: val => ( val.datum.x <= this.state.x ) ? 'tomato' : 'steelblue'
											}
										}}
									/>
								</VictoryChart>
							</Col>
							<Col md={6} >
								<VictoryChart theme={VictoryTheme.material}>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="CDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryLine
										samples={600}
										domain={domain}
										y={( data ) => {
											return cdf( data.x );
										}}
									/>
									<VictoryLine
										data={[
											{ x: this.state.x, y: 0 },
											{ x: this.state.x, y: cdf( this.state.x ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: cdf( this.state.x ) },
											{ x: this.state.x, y: cdf( this.state.x ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
								</VictoryChart>
							</Col>
						</Row>
					</Panel>
				</Tab>
				<Tab eventKey={2} title={<TeX raw="P(X < x_0)" />} disabled={this.state.disableTabs} >
					<Panel header="Probability Plot">
						<TeX raw={`P( X < x = ${this.state.x}) = ${cdf( this.state.x - 1 ).toFixed( 3 )}`}
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
									tooltip: this.props.t('click-to-change-value')
								}
							}}
							displayMode
							onPopover={this.handlePopover}
						/>
						<Row>
							<Col md={6} >
								<VictoryChart theme={VictoryTheme.material}>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PMF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryBar
										data={this.state.data}
										style={{
											data: {
												fill: val => ( val.datum.x < this.state.x ) ? 'tomato' : 'steelblue'
											}
										}}
									/>
								</VictoryChart>
							</Col>
							<Col md={6} >
								<VictoryChart theme={VictoryTheme.material}>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="CDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryLine
										samples={600}
										domain={domain}
										y={( data ) => {
											return cdf( data.x );
										}}
									/>
									<VictoryLine
										data={[
											{ x: this.state.x, y: 0 },
											{ x: this.state.x, y: cdf( this.state.x - 1 ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: cdf( this.state.x - 1 ) },
											{ x: this.state.x, y: cdf( this.state.x - 1 ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
								</VictoryChart>
							</Col>
						</Row>
					</Panel>
				</Tab>
				<Tab eventKey={3} title={<TeX raw="P(X > x_0)" />} disabled={this.state.disableTabs} >
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
									tooltip: this.props.t('click-to-change-value')
								}
							}}
							onPopover={this.handlePopover}
							displayMode
						/>
						<Row>
							<Col md={6} >
								<VictoryChart theme={VictoryTheme.material}>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PMF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryBar
										data={this.state.data}
										style={{
											data: {
												fill: val => ( val.datum.x > this.state.x ) ? 'tomato' : 'steelblue'
											}
										}}
									/>
								</VictoryChart>
							</Col>
							<Col md={6} >
								<VictoryChart theme={VictoryTheme.material}>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="CDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryLine
										samples={600}
										domain={domain}
										y={( data ) => {
											return cdf( data.x );
										}}
									/>
									<VictoryLine
										data={[
											{ x: this.state.x, y: 0 },
											{ x: this.state.x, y: cdf( this.state.x ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: cdf( this.state.x ) },
											{ x: this.state.x, y: cdf( this.state.x ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
								</VictoryChart>
							</Col>
						</Row>
					</Panel>
				</Tab>
				<Tab eventKey={4} title={<TeX raw="P( x_0 \le X \le x_1)" />} disabled={this.state.disableTabs} >
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
						}}
							displayMode
							onPopover={this.handlePopover}
						/>
						<Row>
							<Col md={6} >
								<VictoryChart theme={VictoryTheme.material}>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PMF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryBar
										data={this.state.data}
										style={{
											data: {
												fill: val => ( this.state.lower <= val.datum.x && val.datum.x <= this.state.upper ) ? 'tomato' : 'steelblue'
											}
										}}
									/>
								</VictoryChart>
							</Col>
							<Col md={6} >
								<VictoryChart theme={VictoryTheme.material}>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="CDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryLine
										samples={600}
										domain={domain}
										y={( data ) => {
											return cdf( data.x );
										}}
									/>
								</VictoryChart>
							</Col>
						</Row>
					</Panel>
				</Tab>
			</Tabs>
		);
	}

	render() {
		return (
			<Card style={{ maxWidth: 1200, margin: '10px auto' }}>
				<Card.Header as="h2">
					{this.props.t('discrete-distribution-probabilities')}
				</Card.Header>
				<Card.Body>
					<Container>
						<Row>
							<Col md={4} >
								<NumberInput
									legend={this.props.t('number-distinct-values')}
									defaultValue={this.props.numValues}
									step={1}
									max={20}
									min={2}
									onChange={this.pickNumDistinct}
								/>
								{this.renderGrid()}
							</Col>
							<Col md={8} >
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

export default withTranslation( 'learn/distribution' )( DiscreteDistribution );
