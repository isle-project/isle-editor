// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import dchisq from '@stdlib/stats/base/dists/chisquare/pdf';
import pchisq from '@stdlib/stats/base/dists/chisquare/cdf';
import qchisq from '@stdlib/stats/base/dists/chisquare/quantile';
import SliderInput from '@isle-project/components/input/slider';
import Panel from '@isle-project/components/panel';
import TeX from '@isle-project/components/tex';


// VARIABLES //

const NEAR_ONE = 0.99999;


// MAIN //

/**
* A learning component for calculating probabilities of a chi-squared distribution.
*
* @property {number} step - step size of the scroll input
* @property {number} maxDF - maximum degrees of freedom that can be chosen in input field
* @property {number} minDF - minimum degrees of freedom that can be chosen in input field
* @property {Object} style - CSS inline styles
*/
class ChisquareProbs extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			df: 1,
			x0: 0,
			x1: 1
		};
	}

	handleDFChange = ( df ) => {
		this.setState({ df });
	};

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	};

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	};

	renderInputs( type ) {
		const { df, x0, x1 } = this.state;
		return (
			<Fragment>
				<SliderInput
					key={`${type}-df`}
					legend={this.props.t('degrees-of-freedom')}
					defaultValue={df}
					min={this.props.minDF}
					step={this.props.step}
					max={this.props.maxDF}
					onChange={this.handleDFChange}
				/>
				<SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={x0}
					min={0}
					max={qchisq( NEAR_ONE, df )}
					step={this.props.step}
					onChange={this.handleLowerChange}
				/>
				{ type === 'range' ?
					<SliderInput
						legend="x1"
						defaultValue={x1}
						min={0}
						max={qchisq( NEAR_ONE, df )}
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
				{this.props.t('chi-squared-distribution')}
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={1} id="chisquared-tabs">
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Container><Row>
							<Col>
								<Panel>
									{this.renderInputs( 'smaller' )}
									<TeX raw={`P(X \\le ${roundn( x0, -4 )}) = ${roundn( pchisq( x0, df ), -4 )}`} displayMode />
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ 1e-3, qchisq( NEAR_ONE, df ) ],
										y: [ 0, 0.25 ]
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
												return dchisq( data.x, df );
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
										samples={150}
										y={( data ) =>
											dchisq( data.x, df )
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
											return pchisq( data.x, df );
										}}
										domain={{
											x: [ 0, qchisq( NEAR_ONE, df ) ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 0 },
											{ x: x0, y: pchisq( x0, df ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: pchisq( x0, df ) },
											{ x: x0, y: pchisq( x0, df ) }
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
									<TeX raw={`P(X > ${roundn( x0, -4 )} ) = ${roundn( 1-pchisq( x0, df ), -4 )}`} displayMode />
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ 1e-3, qchisq( NEAR_ONE, df ) ],
										y: [ 0, 0.25 ]
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
												return dchisq( data.x, df );
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
											dchisq( data.x, df )
										}
										samples={150}
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
											return pchisq( data.x, df );
										}}
										domain={{
											x: [ 0, qchisq( NEAR_ONE, df ) ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 0 },
											{ x: x0, y: pchisq( x0, df ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 1 },
											{ x: x0, y: pchisq( x0, df ) }
										]}
										style={{
											data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: pchisq( x0, df ) },
											{ x: x0, y: pchisq( x0, df ) }
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
										<TeX raw={`P( ${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )} ) = ${roundn( pchisq( x1, df ) - pchisq( x0, df ), -4 )}`} displayMode /> :
										<Alert variant="warning">{this.props.t('lower-bound-smaller-equal-upper-bound')}</Alert>
									}
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ 1e-3, qchisq( NEAR_ONE, df ) ],
										y: [ 0, 0.25 ]
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
												return dchisq( data.x, df );
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
										samples={150}
										y={( data ) =>
											dchisq( data.x, df )
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
											return pchisq( data.x, df );
										}}
										domain={{
											x: [ 0, qchisq( NEAR_ONE, df ) ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x1, y: pchisq( x0, df ) },
											{ x: x1, y: pchisq( x1, df ) }
										]}
										style={{
											data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: pchisq( x0, df ) },
											{ x: x1, y: pchisq( x0, df ) }
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

ChisquareProbs.propTypes = {
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	maxDF: PropTypes.number,
	minDF: PropTypes.number,
	style: PropTypes.object
};

ChisquareProbs.defaultProps = {
	maxDF: 50,
	minDF: 1,
	step: 0.01,
	style: {}
};


// EXPORTS //

export default withTranslation( 'learn/distribution' )( ChisquareProbs );
