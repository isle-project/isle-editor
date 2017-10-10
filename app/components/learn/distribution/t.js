// MODULES //

import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import { roundn } from '@stdlib/math/base/special';
import linspace from '@stdlib/math/utils/linspace';
import dt from '@stdlib/math/base/dists/t/pdf';
import pt from '@stdlib/math/base/dists/t/cdf';
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

	render() {
		return ( <Panel header={<h3>T Distribution</h3>}>
			<Grid>
				<Row>
					<Col md={6}>
						<Dashboard autoUpdate title={<TeX raw="P(X \le x_0)"/>} onGenerate={( df, x0 ) => {
							if ( df === 0 ) {
								df = 1e-6;
							}
							let len = 200;
							let x = linspace( -4.0, x0, len );
							let data = new Array( len );
							for ( let i = 0; i < x.length; i++ ) {
								data[ i ] = {
									x: x[ i ],
									y: dt( x[ i ], df ),
								};
							}
							this.setState({
								data1: data,
								eqn1: "P(X \\le" + x0 + ") = " + roundn( pt( x0, df ), -4 ),
								df1: df
							});
						}}>
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
								step={0.01}
							/>
							<TeX raw={this.state.eqn1} displayMode tag="" />
						</Dashboard>
					</Col>
					<Col md={6}>
						<VictoryChart
							domain={{ x: [ -4, 4 ], y: [ 0, dt( 0, this.state.df1 ) ] }}>
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
								animate={{ duration: 500, easing: "linear" }}
								samples={200}
								y={ ( data ) =>
									dt( data.x, this.state.df1 )
								}
							/>
						</VictoryChart>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<Dashboard autoUpdate title={<TeX raw="P(X > x_0)"/>} onGenerate={( df, x0 ) => {
							if ( df === 0 ) {
								df = 1e-6;
							}
							let len = 200;
							let x = linspace( x0, 4.0, len );
							let data = new Array( len );
							for ( let i = 0; i < x.length; i++ ) {
								data[ i ] = {
									x: x[ i ],
									y: dt( x[ i ], df ),
								};
							}
							this.setState({
								data2: data,
								eqn2: "P(X >" + x0 + ") = " + roundn( 1.0 - pt( x0, df ), -4 ),
								df2: df
							});
						}}>
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
								step={0.01}
							/>
							<TeX raw={this.state.eqn2} displayMode tag="" />
						</Dashboard>
					</Col>
					<Col md={6}>
						<VictoryChart
							domain={{ x: [ -4, 4 ], y: [ 0, dt( 0, this.state.df2 ) ] }}>
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
								animate={{ duration: 500, easing: "linear" }}
								samples={200}
								y={ ( data ) =>
									dt( data.x, this.state.df2 )
								}
							/>
						</VictoryChart>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<Dashboard autoUpdate title={<TeX raw="P( x_0 \le X \le x_1)"/>} onGenerate={( df, x0, x1 ) => {
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
									y: dt( x[ i ], df ),
								};
							}
							this.setState({
								data3: data,
								eqn3: "P(" + x0 + "\\le X \\le" + x1 + ") = " + roundn( pt( x1, df ) - pt( x0, df ), -4 ),
								df3: df
							});
						}}>
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
								step={0.01}
							/>
							<SliderInput
								legend="x1"
								defaultValue={1}
								min={-4}
								max={4}
								step={0.01}
							/>
							<TeX raw={this.state.eqn3} displayMode tag="" />
						</Dashboard>
					</Col>
					<Col md={6}>
						<VictoryChart
							domain={{ x: [ -4, 4 ], y: [ 0, dt( 0.0, this.state.df3 ) ] }}>
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
								animate={{ duration: 500, easing: "linear" }}
								y={ ( data ) =>
									dt( data.x, this.state.df3 )
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

export default TProbs;
