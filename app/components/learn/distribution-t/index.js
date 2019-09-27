// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import dt from '@stdlib/stats/base/dists/t/pdf';
import pt from '@stdlib/stats/base/dists/t/cdf';
import SliderInput from 'components/input/slider';
import Panel from 'components/panel';
import TeX from 'components/tex';


// MAIN //

/**
* A learning component for calculating probabilities of a Student's t distribution.
*
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class TProbs extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			df: 1,
			x0: -1,
			x1: 1
		};
	}

	handleDFChange = ( df ) => {
		this.setState({ df });
	}

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	}

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	}

	renderInputs( type ) {
		const { df, x0, x1 } = this.state;
		return (
			<Fragment>
				<SliderInput
					key={`${type}-df`}
					legend="Degrees of Freedom"
					defaultValue={df}
					min={1e-3}
					step={this.props.step}
					max={25}
					onChange={this.handleDFChange}
				/>
				<SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={x0}
					min={-4}
					max={4}
					step={this.props.step}
					onChange={this.handleLowerChange}
				/>
				{ type === 'range' ?
					<SliderInput
						legend="x1"
						defaultValue={x1}
						min={-4}
						max={4}
						step={this.props.step}
						onChange={this.handleUpperChange}
					/> :
				null }
			</Fragment>
		);
	}

	render() {
		const { df, x0, x1 } = this.state;
		return ( <Card style={{ maxWidth: 1200, margin: '10px auto', ...this.props.style }}>
			<Card.Header as="h3">
				Student's T Distribution
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={1} id="student-tabs">
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Container><Row>
							<Col>
								<Panel>
									{this.renderInputs( 'smaller' )}
									<TeX raw={`P(X \\le ${roundn( x0, -4 )}) = ${roundn( pt( x0, df ), -4 )}`} displayMode tag="" />
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ -4, 4 ],
										y: [ 0, dt( 0, df ) ]
									}}
									theme={VictoryTheme.material}
								>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryArea
										samples={100}
										interpolation="step"
										y={( data ) => {
											if ( data.x <= x0 ) {
												return dt( data.x, df );
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
										animate={{ duration: 500, easing: 'linear' }}
										samples={200}
										y={( data ) =>
											dt( data.x, df )
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
										samples={100}
										y={( data ) => {
											return pt( data.x, df );
										}}
										domain={{
											x: [ -4, 4 ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 0 },
											{ x: x0, y: pt( x0, df ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: pt( x0, df ) },
											{ x: x0, y: pt( x0, df ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
								</VictoryChart>
							</Col>
						</Row></Container>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
						<Container><Row>
							<Col>
								<Panel>
									{this.renderInputs( 'greater' )}
									<TeX raw={`P(X > ${roundn( x0, -4 )}) = ${roundn( 1.0 - pt( x0, df ), -4 )}`} displayMode tag="" />
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ -4, 4 ],
										y: [ 0, dt( 0, df ) ]
									}}
									theme={VictoryTheme.material}
								>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryArea
										samples={100}
										interpolation="step"
										y={( data ) => {
											if ( data.x > x0 ) {
												return dt( data.x, df );
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
										animate={{ duration: 500, easing: 'linear' }}
										samples={200}
										y={( data ) =>
											dt( data.x, df )
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
										samples={100}
										y={( data ) => {
											return pt( data.x, df );
										}}
										domain={{
											x: [ -4, 4 ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 0 },
											{ x: x0, y: pt( x0, df ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 1 },
											{ x: x0, y: pt( x0, df ) }
										]}
										style={{
											data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: pt( x0, df ) },
											{ x: x0, y: pt( x0, df ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
								</VictoryChart>
							</Col>
						</Row></Container>
					</Tab>
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
						<Container><Row>
							<Col>
								<Panel>
									{this.renderInputs( 'range' )}
									{ x1 >= x0 ?
										<TeX raw={`P( ${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( pt( x1, df ) - pt( x0, df ), -4 )}`} displayMode tag="" /> :
										<Alert variant="warning">Lower bound must be smaller than or equal to upper bound.</Alert>
									}
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ -4, 4 ],
										y: [ 0, dt( 0.0, df ) ]
									}}
									theme={VictoryTheme.material}
								>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryArea
										samples={100}
										interpolation="step"
										y={( data ) => {
											if ( data.x >= x0 && data.x <= x1 ) {
												return dt( data.x, df );
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
										animate={{ duration: 500, easing: 'linear' }}
										y={( data ) =>
											dt( data.x, df )
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
										samples={200}
										y={( data ) => {
											return pt( data.x, df );
										}}
										domain={{
											x: [ -4, 4 ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x1, y: pt( x0, df ) },
											{ x: x1, y: pt( x1, df ) }
										]}
										style={{
											data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: pt( x0, df ) },
											{ x: x1, y: pt( x0, df ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
								</VictoryChart>
							</Col>
						</Row></Container>
					</Tab>
				</Tabs>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

TProbs.propTypes = {
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object
};

TProbs.defaultProps = {
	step: 0.01,
	style: {}
};


// EXPORTS //

export default TProbs;
