// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/lib/Card';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import linspace from '@stdlib/math/utils/linspace';
import dt from '@stdlib/stats/base/dists/t/pdf';
import pt from '@stdlib/stats/base/dists/t/cdf';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';


// MAIN //

class TProbs extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			df1: 1,
			df2: 1,
			df3: 1
		};
	}

	onGenerateSmaller = ( df, x0 ) => {
		if ( df === 0 ) {
			df = 1e-6;
		}
		let len = 200;
		let x = linspace( -4.0, x0, len );
		let data = new Array( len );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dt( x[ i ], df )
			};
		}
		this.setState({
			data1: data,
			eqn1: 'P(X \\le' + roundn( x0, -4 ) + ') = ' + roundn( pt( x0, df ), -4 ),
			df1: df
		});
	}

	onGenerateGreater = ( df, x0 ) => {
		if ( df === 0 ) {
			df = 1e-6;
		}
		let len = 200;
		let x = linspace( x0, 4.0, len );
		let data = new Array( len );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dt( x[ i ], df )
			};
		}
		this.setState({
			data2: data,
			eqn2: 'P(X >' + roundn( x0, -4 ) + ') = ' + roundn( 1.0 - pt( x0, df ), -4 ),
			df2: df
		});
	}

	onGenerateRange = ( df, x0, x1 ) => {
		if ( df === 0 ) {
			df = 1e-6;
		}
		if ( x0 > x1 ) {
			let tmp = x0;
			x0 = x1;
			x1 = tmp;
		}
		let len = 200;
		let x = linspace( x0, x1, len );
		let data = new Array( len );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dt( x[ i ], df )
			};
		}
		this.setState({
			data3: data,
			eqn3: 'P(' + roundn( x0, -4 ) + '\\le X \\le' + roundn( x1, -4 ) + ') = ' + roundn( pt( x1, df ) - pt( x0, df ), -4 ),
			df3: df
		});
	}

	render() {
		return ( <Card style={{ maxWidth: 600, ...this.props.style }}>
			<Card.Header as="h3">
				T Distribution
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={1} id="student-tabs">
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Dashboard autoUpdate onGenerate={this.onGenerateSmaller}>
							<SliderInput
								legend="Degrees of Freedom"
								defaultValue={1}
								step="any"
								min={0}
								max={10}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={-4}
								max={4}
								step={this.props.step}
							/>
							<TeX raw={this.state.eqn1} displayMode tag="" />
						</Dashboard>
						<VictoryChart
							domain={{
								x: [ -4, 4 ],
								y: [ 0, dt( 0, this.state.df1 ) ]
							}}
						>
							<VictoryArea
								animate={{ duration: 500 }}
								data={this.state.data1}
								style={{
									data: {
										opacity: 0.3,
										fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								animate={{ duration: 500, easing: 'linear' }}
								samples={200}
								y={( data ) =>
									dt( data.x, this.state.df1 )
								}
							/>
						</VictoryChart>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
						<Dashboard autoUpdate onGenerate={this.onGenerateGreater}>
							<SliderInput
								legend="Degrees of Freedom"
								defaultValue={1}
								step="any"
								min={0}
								max={10}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={-4}
								max={4}
								step={this.props.step}
							/>
							<TeX raw={this.state.eqn2} displayMode tag="" />
						</Dashboard>
						<VictoryChart
							domain={{
								x: [ -4, 4 ],
								y: [ 0, dt( 0, this.state.df2 ) ]
							}}
						>
							<VictoryArea
								animate={{ duration: 500 }}
								data={this.state.data2}
								style={{
									data: {
										opacity: 0.3,
										fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								animate={{ duration: 500, easing: 'linear' }}
								samples={200}
								y={( data ) =>
									dt( data.x, this.state.df2 )
								}
							/>
						</VictoryChart>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
						<Dashboard autoUpdate onGenerate={this.onGenerateRange}>
							<SliderInput
								legend="Degrees of Freedom"
								defaultValue={1}
								step="any"
								min={0}
								max={10}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={-4}
								max={4}
								step={this.props.step}
							/>
							<SliderInput
								legend="x1"
								defaultValue={1}
								min={-4}
								max={4}
								step={this.props.step}
							/>
							<TeX raw={this.state.eqn3} displayMode tag="" />
						</Dashboard>
						<VictoryChart
							domain={{
								x: [ -4, 4 ],
								y: [ 0, dt( 0.0, this.state.df3 ) ]
							}}
						>
							<VictoryArea
								animate={{ duration: 500 }}
								data={this.state.data3}
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
									dt( data.x, this.state.df3 )
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
