// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { VictoryAxis, VictoryChart, VictoryBar, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import incrspace from '@stdlib/array/incrspace';
import dbinom from '@stdlib/stats/base/dists/binomial/pmf';
import pbinom from '@stdlib/stats/base/dists/binomial/cdf';
import capitalize from '@stdlib/string/capitalize';
import FeedbackButtons from '@isle-project/components/feedback';
import NumberInput from '@isle-project/components/input/number';
import SliderInput from '@isle-project/components/input/slider';
import Panel from '@isle-project/components/panel';
import TeX from '@isle-project/components/tex';


// MAIN //

/**
* A learning component for calculating probabilities of a binomial distribution.
*
* @property {boolean} hideCDF - controls whether to hide the CDF display
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class BinomialProps extends Component {
	constructor( props ) {
		super( props );

		const n = 10;
		const p = 0.5;
		const x = incrspace( 0, n+1, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dbinom( x[ i ], n, p )
			};
		}
		this.state = {
			n,
			p,
			x0: 0,
			x1: 1,
			data
		};
	}

	handleTrialsChange = ( n ) => {
		const x = incrspace( 0, n+1, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dbinom( x[ i ], n, this.state.p )
			};
		}
		this.setState({ data, n });
	};

	handlePropChange = ( p ) => {
		const x = incrspace( 0, this.state.n+1, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dbinom( x[ i ], this.state.n, this.state.p )
			};
		}
		this.setState({ data, p });
	};

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	};

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	};

	renderInputs( type ) {
		const { t } = this.props;
		return (
			<Fragment>
				<NumberInput
					key={`${type}-n`}
					legend={`${t('number-of-trials')} (n)`}
					defaultValue={this.state.n}
					min={1}
					step={1}
					onChange={this.handleTrialsChange}
				/>
				<NumberInput
					key={`${type}-p`}
					legend={`${t('success-probability')} (p)`}
					defaultValue={this.state.p}
					step={this.props.step}
					onChange={this.handlePropChange}
					min={0}
					max={1}
				/>
				<SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={this.state.x0}
					step={1}
					min={0}
					max={this.state.n}
					onChange={this.handleLowerChange}
				/>
				{ type === 'range' ?
					<SliderInput
						legend="x1"
						defaultValue={this.state.x1}
						min={0}
						max={this.state.n}
						step={1}
						onChange={this.handleUpperChange}
					/> : null
				}
			</Fragment>
		);
	}

	render() {
		const { x0, x1, n, p } = this.state;
		const { t } = this.props;
		return ( <Card style={{ maxWidth: 1200, margin: '10px auto', ...this.props.style }}>
			<Card.Header as="h3">
				{t('binomial-distribution')}
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={0} id="binomial-tabs">
					<Tab eventKey={0} title={<TeX raw="P(X = x)" />}>
						<Container>
							<Row>
								<Col md={5} >
								<Panel title={t('binomial-probabilities')}>
									<span>{capitalize( t('for') )}</span><NumberInput
										inline
										legend="n"
										defaultValue={n}
										step={1}
										min={0}
										max={999}
										onChange={this.handleTrialsChange}
									/><span>{t('trials-and-success-probability')}</span>
									<NumberInput
										inline
										legend="p"
										defaultValue={p}
										step={0.01}
										max={1}
										min={0}
										onChange={this.handlePropChange}
									/>
									<span>{t('we-get')}</span>
									<TeX raw={`P(X=x)= \\Large \\tbinom{${n}}{x} ${p}^x ${roundn(1-p, -4)}^{${n}-x}`} displayMode />
									<span>{t('evaluated-at')} </span><NumberInput
										inline
										legend="x"
										defaultValue={0}
										step={1}
										max={n}
										min={0}
										onChange={this.handleLowerChange}
									/> <span>{t('we-get')}</span>
									<TeX raw={`P(X=${x0})= \\Large \\tbinom{${n}}{${x0}} ${p}^{${x0}} ${roundn(1-p, -4 )}^{${n}-${x0}} \\approx ${dbinom(x0, this.state.n, p).toFixed(4)}`} displayMode />
								</Panel>
								</Col>
								<Col md={7} >
									<Panel header={t('probability-plot')}>
										<Row>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material}>
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="PMF" tickFormat={(x) => roundn(x, -2)}
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
											{ !this.props.hideCDF ? <Col md={6} >
												<VictoryChart theme={VictoryTheme.material} >
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="CDF" tickFormat={(x) => `${x}`} crossAxis={false}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryLine
														samples={600}
														y={( data ) => {
															return pbinom( data.x, n, p );
														}}
														domain={{
															x: [ 0, n+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: pbinom( x0, n, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pbinom( x0, n, p ) },
															{ x: x0, y: pbinom( x0, n, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
												</VictoryChart>
											</Col> : null }
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
										<TeX raw={`P(X \\le${roundn( x0, -4 )}) = ${roundn( pbinom( x0, n, p ), -4 )}`} displayMode tag="" />
									</Panel>
								</Col>
								<Col md={8} >
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
																fill: val => ( val.datum.x <= x0 ) ? 'tomato' : 'steelblue'
															}
														}}
													/>
												</VictoryChart>
											</Col>
											{ !this.props.hideCDF ? <Col md={6} >
												<VictoryChart theme={VictoryTheme.material} >
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="CDF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryLine
														samples={600}
														y={( data ) => {
															return pbinom( data.x, n, p );
														}}
														domain={{
															x: [ 0, n+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: pbinom( x0, n, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pbinom( x0, n, p ) },
															{ x: x0, y: pbinom( x0, n, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
												</VictoryChart>
											</Col> : null }
										</Row>
									</Panel>
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
										<TeX raw={`P(X >${roundn( x0, -4 )}) = ${roundn( 1.0 - pbinom( x0, n, p ), -4 )}`} displayMode tag="" />
									</Panel>
								</Col>
								<Col md={8} >
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
																fill: val => ( val.datum.x > this.state.x0 ) ? 'tomato' : 'steelblue'
															}
														}}
													/>
												</VictoryChart>
											</Col>
											{ !this.props.hideCDF ? <Col md={6} >
												<VictoryChart theme={VictoryTheme.material} >
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="CDF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryLine
														samples={600}
														y={( data ) => {
															return pbinom( data.x, n, p );
														}}
														domain={{
															x: [ 0, n+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: pbinom( x0, n, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pbinom( x0, n, p ) },
															{ x: x0, y: pbinom( x0, n, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
												</VictoryChart>
											</Col> : null }
										</Row>
									</Panel>
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
										{ x1 >= x0 ?
											<TeX raw={`P(${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( pbinom( x1, n, p ) - pbinom( x0 - 1, n, p ), -4 )}`} displayMode tag="" /> :
											<Alert variant="warning">{t('lower-bound-smaller-equal-upper-bound')}</Alert>
										}
									</Panel>
								</Col>
								<Col md={8} >
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
																fill: val => ( this.state.x0 <= val.datum.x && val.datum.x <= this.state.x1 ) ? 'tomato' : 'steelblue'
															}
														}}
													/>
												</VictoryChart>
											</Col>
											{ !this.props.hideCDF ? <Col md={6} >
												<VictoryChart theme={VictoryTheme.material} >
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="CDF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryLine
														samples={600}
														y={( data ) => {
															return pbinom( data.x, n, p );
														}}
														domain={{
															x: [ 0, n+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
												</VictoryChart>
											</Col> : null }
										</Row>
									</Panel>
								</Col>
							</Row>
						</Container>
					</Tab>
				</Tabs>
				<FeedbackButtons
					id="binomial_distribution"
				/>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

BinomialProps.propTypes = {
	hideCDF: PropTypes.bool,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object
};

BinomialProps.defaultProps = {
	hideCDF: false,
	step: 0.01,
	style: {}
};


// EXPORTS //

export default withTranslation( 'learn/distribution' )( BinomialProps );
