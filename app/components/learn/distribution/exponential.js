// MODULES //

import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import { roundn } from '@stdlib/math/base/special';
import linspace from '@stdlib/math/utils/linspace';
import dexp from '@stdlib/math/base/dist/exponential/pdf';
import pexp from '@stdlib/math/base/dist/exponential/cdf';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';


// MAIN //

class ExponentialProbs extends Component {

	constructor( props ) {
		super( props );

		this.state = {

		};
	}

	render() {
		return ( <Panel header={<h3>Evaluating Probabilities</h3>}>
			<Grid>
				<Row>
					<Col md={5}>
						<Dashboard title={<TeX raw="P(X \le x_0)"/>} onGenerate={( rate, x0 ) => {
							let len = 200;
							let x = linspace( 0, x0, len );
							let data = new Array( len );
							let xmax = 100;
							for ( let i = 0; i < x.length; i++ ) {
								data[ i ] = {
									x: x[ i ],
									y: dexp( x[ i ], rate ),
								}
								if ( data[ i ].y < 1e-6 ) {
									if ( data[ i ].x < xmax ) {
										xmax = data[ i ].x;
									}
								}
							}
							this.setState({
								data4: data,
								eqn4: "P(X \\le" + x0 + ") = " + roundn( pexp( x0, rate ), -4 ),
								rate1: rate,
								xmax
							});
						}}>
							<SliderInput
								legend="Rate"
								defaultValue={1}
								min={0.01}
								max={5}
								step={0.01}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={0}
								max={10}
								step={0.01}
							/>
							<TeX raw={this.state.eqn4} />
						</Dashboard>
					</Col>
					<Col md={7}>
						<VictoryChart
							domain={{ x: [ 0, 10 ] }}>
							<VictoryArea
								data={this.state.data4}
								style={{
									data: {
										opacity: 0.3,
										fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								y={ ( data ) =>
									dexp( data.x, this.state.rate1 )
								}
							/>
						</VictoryChart>
					</Col>
				</Row>
				<Row>
					<Col md={5}>
						<Dashboard title={<TeX raw="P(X > x_0)"/>} onGenerate={( rate, x0 ) => {
							let len = 200;
							let x = linspace( x0, 10, len );
							let data = new Array( len );
							for ( let i = 0; i < x.length; i++ ) {
								data[ i ] = {
									x: x[ i ],
									y: dexp( x[ i ], rate ),
								};
							}
							this.setState({
								data5: data,
								eqn5: "P(X >" + x0 + ") = " + roundn( 1-pexp( x0, rate ), -4 ),
								rate2: rate,
								yheight2: dexp( x0, rate )
							});
						}}>
							<SliderInput
								legend="Rate"
								defaultValue={1}
								min={0.01}
								max={5}
								step={0.01}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={0}
								max={10}
								step={0.01}
							/>
							<TeX raw={this.state.eqn5} />
						</Dashboard>
					</Col>
					<Col md={7}>
						<VictoryChart
							domain={{ x: [ 0, 10 ] }}>
							<VictoryArea
								data={this.state.data5}
								style={{
									data: {
										opacity: 0.3, fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								y={ ( data ) =>
									dexp( data.x, this.state.rate2 )
								}
							/>
						</VictoryChart>
					</Col>
				</Row>
				<Row>
					<Col md={5}>
						<Dashboard title={<TeX raw="P( x_0 \le X \le x_1)"/>} onGenerate={( rate, x0, x1 ) => {
							let len = 500;
							let x = linspace( x0, x1, len );
							let data = new Array( len );
							for ( let i = 0; i < x.length; i++ ) {
								data[ i ] = {
									x: x[ i ],
									y: dexp( x[ i ], rate ),
								};
							}
							this.setState({
								data6: data,
								eqn6: "P(" + x0 + "\\le X \\le " + x1 + ") = " + roundn( pexp( x1, rate ) - pexp( x0, rate ), -4 ),
								rate3: rate
							});
						}}>
							<SliderInput
								legend="Rate"
								defaultValue={1}
								min={0.01}
								max={5}
								step={0.01}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={0}
								max={10}
								step={0.01}
							/>
							<SliderInput
								legend="x1"
								defaultValue={0}
								min={0}
								max={10}
								step={0.01}
							/>
							<TeX raw={this.state.eqn6} />
						</Dashboard>
					</Col>
					<Col md={7}>
						<VictoryChart
							domain={{ x: [ 0, 10 ] }}>
							<VictoryArea
								data={this.state.data6}
								style={{
									data: {
										opacity: 0.3, fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								y={ ( data ) =>
									dexp( data.x, this.state.rate3 )
								}
							/>
						</VictoryChart>
					</Col>
				</Row>
			</Grid>
		</Panel> );
	}
}


// EXPORTS //

export default ExponentialProbs;
