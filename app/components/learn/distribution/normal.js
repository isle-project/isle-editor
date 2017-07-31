// MODULES //

import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import { roundn } from '@stdlib/math/base/special';
import linspace from '@stdlib/math/utils/linspace';
import dnorm from '@stdlib/math/base/dist/normal/pdf';
import pnorm from '@stdlib/math/base/dist/normal/cdf';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';


// MAIN //

class NormalProbs extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			mean1: 0,
			sd1: 1,
			mean2: 0,
			sd2: 1,
			mean3: 0,
			sd3: 1
		};
	}

	render() {
		return ( <Panel header={<h3>Evaluating Probabilities</h3>}>
			<Grid>
				<Row>
					<Col md={6}>
						<Dashboard autoUpdate title={<TeX raw="P(X \le x_0)"/>} onGenerate={( mean, sd, x0 ) => {
							let len = 200;
							let x = linspace( mean-3*sd, x0, len );
							let data = new Array( len );
							for ( let i = 0; i < x.length; i++ ) {
								data[ i ] = {
									x: x[ i ],
									y: dnorm( x[ i ], mean, sd ),
								};
							}
							this.setState({
								data7: data,
								eqn7: "P(X \\le" + x0 + ") = " + roundn( pnorm( x0, mean, sd ), -4 ),
								sd1: sd,
								mean1: mean
							});
						}}>
							<SliderInput
								legend="Mean"
								defaultValue={0}
								step={1}
								min={-10}
								max={10}
							/>
							<SliderInput
								legend="Standard Deviation"
								defaultValue={1}
								step={0.01}
								min={1}
								max={10}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={-30}
								max={30}
								step={0.01}
							/>
							<TeX raw={this.state.eqn7} />
						</Dashboard>
					</Col>
					<Col md={6}>
						<VictoryChart
							domain={{ x: [ -30, 30 ], y: [ 0, dnorm( this.state.mean1, this.state.mean1, this.state.sd1 ) ] }}>
							<VictoryArea
								animate={{ duration: 500 }}
								data={this.state.data7}
								style={{
									data: {
										opacity: 0.3,
										fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								animate={{ duration: 500, easing: "linear" }}
								samples={200}
								y={ ( data ) =>
									dnorm( data.x, this.state.mean1, this.state.sd1 )
								}
							/>
						</VictoryChart>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<Dashboard autoUpdate title={<TeX raw="P(X > x_0)"/>} onGenerate={( mean, sd, x0 ) => {
							let len = 200;
							let x = linspace( x0, mean+4*sd, len );
							let data = new Array( len );
							for ( let i = 0; i < x.length; i++ ) {
								data[ i ] = {
									x: x[ i ],
									y: dnorm( x[ i ], mean, sd ),
								};
							}
							this.setState({
								data8: data,
								eqn8: "P(X >" + x0 + ") = " + roundn( 1.0 - pnorm( x0, mean, sd ), -4 ),
								sd2: sd,
								mean2: mean
							});
						}}>
							<SliderInput
								legend="Mean"
								defaultValue={0}
								step={1}
								min={-10}
								max={10}
							/>
							<SliderInput
								legend="Standard Deviation"
								defaultValue={1}
								step={0.01}
								min={1}
								max={10}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={-30}
								max={30}
								step={0.01}
							/>
							<TeX raw={this.state.eqn8} />
						</Dashboard>
					</Col>
					<Col md={6}>
						<VictoryChart
							domain={{ x: [ -30, 30 ], y: [ 0, dnorm( this.state.mean2, this.state.mean2, this.state.sd2 ) ] }}>
							<VictoryArea
								animate={{ duration: 500 }}
								data={this.state.data8}
								style={{
									data: {
										opacity: 0.3,
										fill: 'tomato'
									 }
								}}
							/>
							<VictoryLine
								animate={{ duration: 500, easing: "linear" }}
								samples={200}
								y={ ( data ) =>
									dnorm( data.x, this.state.mean2, this.state.sd2 )
								}
							/>
						</VictoryChart>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<Dashboard autoUpdate title={<TeX raw="P( x_0 \le X \le x_1)"/>} onGenerate={( mean, sd, x0, x1 ) => {
							let len = 200;
							let x = linspace( x0, x1, len );
							let data = new Array( len );
							for ( let i = 0; i < x.length; i++ ) {
								data[ i ] = {
									x: x[ i ],
									y: dnorm( x[ i ], mean, sd ),
								};
							}
							this.setState({
								data9: data,
								eqn9: "P(" + x0 + "\\le X \\le" + x1 + ") = " + roundn( pnorm( x1, mean, sd ) - pnorm( x0, mean, sd ), -4 ),
								sd3: sd,
								mean3: mean
							});
						}}>
							<SliderInput
								legend="Mean"
								defaultValue={0}
								step={1}
								min={-10}
								max={10}
							/>
							<SliderInput
								legend="Standard Deviation"
								defaultValue={1}
								step={0.01}
								min={1}
								max={10}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={this.state.mean3-this.state.sd3*4}
								max={this.state.mean3+this.state.sd3*4}
								step={0.01}
							/>
							<SliderInput
								legend="x1"
								defaultValue={1}
								min={this.state.mean3-this.state.sd3*4}
								max={this.state.mean3+this.state.sd3*4}
								step={0.01}
							/>
							<TeX raw={this.state.eqn9} />
						</Dashboard>
					</Col>
					<Col md={6}>
						<VictoryChart
							domain={{ x: [ -30, 30 ], y: [ 0, dnorm( this.state.mean3, this.state.mean3, this.state.sd3 ) ] }}>
							<VictoryArea
								animate={{ duration: 500 }}
								data={this.state.data9}
								style={{
									data: {
										opacity: 0.3, fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								samples={200}
								animate={{ duration: 500, easing: "linear" }}
								y={ ( data ) =>
									dnorm( data.x, this.state.mean3, this.state.sd3 )
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

export default NormalProbs;
