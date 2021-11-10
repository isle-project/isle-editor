// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation, Trans } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import incrspace from '@stdlib/array/incrspace';
import dgeom from '@stdlib/stats/base/dists/geometric/pmf';
import pgeom from '@stdlib/stats/base/dists/geometric/cdf';
import qgeom from '@stdlib/stats/base/dists/geometric/quantile';
import SliderInput from '@isle-project/components/input/slider';
import NumberInput from '@isle-project/components/input/number';
import Panel from '@isle-project/components/panel';
import TeX from '@isle-project/components/tex';


// VARIABLES //

const NEAR_ONE = 0.999;


// MAIN //

/**
* A learning component for calculating probabilities of a geometric distribution.
*
* @property {boolean} countTrials - set to true if instead of counting the number of failures until the first success, a random variable from a geometric distribution should be defined as the number of trials until the first success
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class GeometricDistribution extends Component {
	constructor( props ) {
		super( props );

		const minValue = props.countTrials ? 1 : 0;
		const x0 = 0;
		const x1 = 1;
		const p = 0.5;
		const x = incrspace( minValue, qgeom( NEAR_ONE, p ) + 1, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dgeom( props.countTrials ? x[ i ] - 1 : x[ i ], p )
			};
		}
		this.state = {
			p, x0, x1, data
		};
	}

	handleProbChange = ( p ) => {
		const minValue = this.props.countTrials ? 1 : 0;
		const x = incrspace( minValue, qgeom( NEAR_ONE, p ), 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dgeom( this.props.countTrials ? x[ i ] - 1 : x[ i ], p )
			};
		}
		this.setState({
			data, p
		});
	};

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	};

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	};

	renderInputs( type ) {
		const minValue = this.props.countTrials ? 1 : 0;
		return (
			<Fragment>
				<SliderInput
					key={`${type}-p`}
					legend={this.props.t('success-probability')}
					defaultValue={this.state.p}
					min={0.01}
					step={this.props.step}
					max={1}
					onChange={this.handleProbChange}
				/>
				<SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={minValue}
					min={minValue - 1}
					max={qgeom( NEAR_ONE, this.state.p ) + 1}
					step={this.props.step}
					onChange={this.handleLowerChange}
				/>
				{ type === 'range' ?
					<SliderInput
						legend="x1"
						defaultValue={this.state.x1}
						min={minValue - 1}
						max={qgeom( NEAR_ONE, this.state.p ) + 1}
						step={1}
						onChange={this.handleUpperChange}
					/> : null
				}
			</Fragment>
		);
	}

	render() {
		const { x0, x1, p } = this.state;
		const { countTrials, t } = this.props;
		const minValue = countTrials ? 1 : 0;
		return ( <Card style={{ maxWidth: 1200, margin: '10px auto', ...this.props.style }}>
			<Card.Header as="h3">
				{t('geometric-distribution')}
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={0} id="poisson-tabs">
					<Tab eventKey={0} title={<TeX raw="P(X = x_0)" />}>
						<Container>
							<Row>
								<Col md={5} >
								<Panel title={t('geometric-probabilities')}>
									<p>
										{this.props.countTrials ?
											<Trans i18nKey="number-trials-until-success" ns="LearnDistribution" >
												Let <TeX raw="X" /> be the number of trials until the first success.
											</Trans> :
											<Trans i18nKey="number-failures-until-success" ns="LearnDistribution" >
												Let <TeX raw="X" /> be the number of failures until the first success.
											</Trans>
										}
									</p>
									<span>{t('for-success-probability')}</span>
									<NumberInput
										inline
										legend="p"
										defaultValue={0.5}
										step={0.01}
										max={1}
										min={0.01}
										onChange={this.handleProbChange}
									/>
									<span>{t('we-get')}</span>
									<TeX raw={`P(X=x)= \\Large \\left( 1 - ${p} \\right)^{x-1} ${p}`} displayMode />
									<span>{ t('evaluated-at')} </span><NumberInput
										inline
										legend="x"
										defaultValue={minValue}
										step={1}
										max={qgeom( NEAR_ONE, p ) + 1}
										min={minValue}
										onChange={this.handleLowerChange}
									/> <span>{t('we-get')}</span>
									<TeX raw={`P(X=${x0})= \\Large \\left( 1 - ${p} \\right)^{${x0}${countTrials ? '-1' : ''}} ${p} = ${dgeom( countTrials ? x0 - 1 : x0, p ).toFixed(4)}`} displayMode />
								</Panel>
								</Col>
								<Col md={7} >
									<Panel header={t('probability-plot')}>
										<Row>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material}>
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="PMF" tickFormat={(x) => `${x}`}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryBar
													data={this.state.data}
													style={{
														data: {
															fill: val => ( val.datum.x === x0 ) ? 'tomato' : 'steelblue'
														}
													}}
												/>
												</VictoryChart>
											</Col>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material} >
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="CDF" tickFormat={(x) => `${x}`} crossAxis={false}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryLine
														samples={600}
														y={( data ) => {
															return pgeom( data.x - minValue, p );
														}}
														domain={{
															x: [ 0, qgeom( NEAR_ONE, p )+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: pgeom( x0 - minValue, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pgeom( x0 - minValue, p ) },
															{ x: x0, y: pgeom( x0 - minValue, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
												</VictoryChart>
											</Col>
										</Row>
									</Panel>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Container>
							<Row>
								<Col md={4} >
									<Panel bodyClassName="d-grid gap-1" >
										{this.renderInputs( 'smaller' )}
										<TeX raw={`P(X \\le ${roundn( x0, -4 )}) = ${roundn( pgeom( x0 - minValue, p ), -4 )}`} />
									</Panel>
								</Col>
								<Col md={8} >
									<Container>
										<Row>
											<Col md={6} >
												<VictoryChart
													domain={{
														x: [ 0, qgeom( NEAR_ONE, p ) + 2 ]
													}}
													theme={VictoryTheme.material}
												>
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="PMF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryBar
														data={this.state.data}
														style={{
															data: {
																fill: val => val.datum.x <= x0 ? 'tomato' : 'steelblue'
															}
														}}
													/>
												</VictoryChart>
											</Col>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material} >
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="CDF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryLine
														samples={600}
														y={( data ) => {
															return pgeom( data.x - minValue, p );
														}}
														domain={{
															x: [ 0, qgeom( NEAR_ONE, p )+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: pgeom( x0 - minValue, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pgeom( x0 - minValue, p ) },
															{ x: x0, y: pgeom( x0 - minValue, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
												</VictoryChart>
											</Col>
										</Row>
									</Container>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
						<Container>
							<Row>
								<Col md={4} >
									<Panel bodyClassName="d-grid gap-1" >
										{this.renderInputs( 'greater' )}
										<TeX raw={`P(X > ${roundn( x0, -4 )}) = ${roundn( 1-pgeom( x0 - minValue, p ), -4 )}`} />
									</Panel>
								</Col>
								<Col md={8} >
									<Row>
										<Col md={6} >
											<VictoryChart
												domain={{
													x: [ 0, qgeom( NEAR_ONE, p ) + 2 ]
												}}
												theme={VictoryTheme.material}
											>
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="PMF" tickFormat={(x) => `${x}`}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryBar
													data={this.state.data}
													style={{
														data: {
															fill: val => val.datum.x > x0 ? 'tomato' : 'steelblue'
														}
													}}
												/>
											</VictoryChart>
										</Col>
										<Col md={6} >
											<VictoryChart theme={VictoryTheme.material} >
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="CDF" tickFormat={(x) => `${x}`}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryLine
													samples={600}
													y={( data ) => {
														return pgeom( data.x - minValue, p );
													}}
													domain={{
														x: [ 0, qgeom( NEAR_ONE, p )+1 ],
														y: [ 0, 1.1 ]
													}}
												/>
												<VictoryLine
													data={[
														{ x: x0, y: 0 },
														{ x: x0, y: pgeom( x0 - minValue, p ) }
													]}
													style={{
														data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
													}}
												/>
												<VictoryLine
													data={[
														{ x: 0, y: pgeom( x0 - minValue, p ) },
														{ x: x0, y: pgeom( x0 - minValue, p ) }
													]}
													style={{
														data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
													}}
												/>
											</VictoryChart>
										</Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
						<Container>
							<Row>
								<Col md={4} >
									<Panel bodyClassName="d-grid gap-1" >
										{this.renderInputs( 'range' )}
										<TeX raw={`P( ${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( pgeom( x1 - minValue, p ) - pgeom( x0 - minValue - 1, p ), -4 )}`} />
									</Panel>
								</Col>
								<Col md={8} >
									<Row>
										<Col md={6} >
											<VictoryChart
												domain={{
													x: [ 0, qgeom( NEAR_ONE, p ) + 2 ]
												}}
												theme={VictoryTheme.material}
											>
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="PMF" tickFormat={(x) => `${x}`}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryBar
													data={this.state.data}
													style={{
														data: {
															fill: val => ( x0 <= val.datum.x && val.datum.x <= x1 ) ? 'tomato' : 'steelblue'
														}
													}}
												/>
											</VictoryChart>
										</Col>
										<Col md={6} >
											<VictoryChart theme={VictoryTheme.material} >
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="CDF" tickFormat={(x) => `${x}`}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryLine
													samples={600}
													y={( data ) => {
														return pgeom( data.x - minValue, p );
													}}
													domain={{
														x: [ 0, qgeom( NEAR_ONE, p )+1 ],
														y: [ 0, 1.1 ]
													}}
												/>
											</VictoryChart>
										</Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</Tab>
				</Tabs>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

GeometricDistribution.propTypes = {
	countTrials: PropTypes.bool,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object
};

GeometricDistribution.defaultProps = {
	countTrials: false,
	step: 0.01,
	style: {}
};


// EXPORTS //

export default withTranslation( 'learn/distribution' )( GeometricDistribution );
