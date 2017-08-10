// MODULES //

import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import { roundn } from '@stdlib/math/base/special';
import linspace from '@stdlib/math/utils/linspace';
import dunif from '@stdlib/math/base/dist/uniform/pdf';
import punif from '@stdlib/math/base/dist/uniform/cdf';
import NumberInput from 'components/input/number';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';


// MAIN //

class UniformProbs extends Component {

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
						<Dashboard title={<TeX raw="P(X \le x_0)"/>} onGenerate={( min, max, x0 ) => {
							let len = 200;
							let x = linspace( min-1.0, x0, len );
							let data = new Array( len );
							for ( let i = 0; i < x.length; i++ ) {
								data[ i ] = {
									x: x[ i ],
									y: dunif( x[ i ], min, max ),
								};
							}
							this.setState({
								data: data,
								eqn: "P(X \\le" + x0 + ") = " + roundn( punif( x0, min, max ), -4 ),
								umin: min,
								max: max,
								yheight: dunif( min, min, max )
							});
						}}>
							<NumberInput
								legend="Minimum"
								defaultValue={0}
								max={this.state.max-0.01}
								step={0.1}
							/>
							<NumberInput
								legend="Maximum"
								defaultValue={1}
								step={0.1}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								umin={this.state.umin*2.0 - 1.0}
								max={this.state.max*2.0}
								step={0.01}
							/>
							<TeX raw={this.state.eqn} />
						</Dashboard>
					</Col>
					<Col md={7}>
						<VictoryChart
							domain={{ x: [ this.state.min - 1.0, this.state.max + 1.0 ], y: [ 0, this.state.yheight + 0.1 ] }}>
							<VictoryArea
								data={this.state.data}
								style={{
									data: {
										opacity: 0.3, fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								data={[
									[ this.state.umin, 0 ],
									[ this.state.umin, this.state.yheight ],
									[ this.state.max, this.state.yheight ],
									[ this.state.max, 0 ]
								]}
								x={ d => d[ 0 ]}
								y={ d => d[ 1 ]}
							/>
						</VictoryChart>
					</Col>
				</Row>
				<Row>
					<Col md={5}>
						<Dashboard title={<TeX raw="P(X > x_0)"/>} onGenerate={( min, max, x0 ) => {
							let len = 200;
							let x = linspace( x0, max+1.0, len );
							let data = new Array( len );
							for ( let i = 0; i < x.length; i++ ) {
								data[ i ] = {
									x: x[ i ],
									y: dunif( x[ i ], min, max ),
								};
							}
							this.setState({
								data2: data,
								eqn2: "P(X >" + x0 + ") = " + roundn( 1-punif( x0, min, max ), -4 ),
								min2: min,
								max2: max,
								yheight2: dunif( min, min, max )
							});
						}}>
							<NumberInput
								legend="Minimum"
								defaultValue={0}
								max={this.state.max-0.01}
								step={0.1}
							/>
							<NumberInput
								legend="Maximum"
								defaultValue={1}
								step={0.1}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								umin={this.state.umin*2.0 - 1.0}
								max={this.state.max*2.0}
								step={0.01}
							/>
							<TeX raw={this.state.eqn2} />
						</Dashboard>
					</Col>
					<Col md={7}>
						<VictoryChart
							domain={{ x: [ this.state.min2 - 1.0, this.state.max2 + 1.0 ], y: [ 0, this.state.yheight2 + 0.1 ] }}>
							<VictoryArea
								data={this.state.data2}
								style={{
									data: {
										opacity: 0.3, fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								data={[
									[ this.state.min2, 0 ],
									[ this.state.min2,this.state.yheight2 ],
									[ this.state.max2,this.state.yheight2 ],
									[ this.state.max2, 0 ]
								]}
								x={ d => d[ 0 ]}
								y={ d => d[ 1 ]}
							/>
						</VictoryChart>
					</Col>
				</Row>
				<Row>
					<Col md={5}>
						<Dashboard title={<TeX raw="P( x_0 \le X \le x_1 )"/>} onGenerate={( umin, max, x0, x1 ) => {
							let len = 200;
							let x = linspace( x0, x1, len );
							let data = new Array( len );
							for ( let i = 0; i < x.length; i++ ) {
								data[ i ] = {
									x: x[ i ],
									y: dunif( x[ i ], umin, max ),
								};
							}
							this.setState({
								data3: data,
								eqn3: "P(" + x0 + "\\le X \\le" + x1 + ") = " + roundn( punif( x1, umin, max )-punif( x0, umin, max ), -4 ),
								umin3: umin,
								max3: max,
								yheight3: dunif( umin, umin, max ),
								x1: x1
							});
						}}>
							<NumberInput
								legend="Minimum"
								defaultValue={0}
								max={this.state.max3-0.01}
								step={0.01}
							/>
							<NumberInput
								legend="Maximum"
								umin={this.state.umin3+0.01}
								defaultValue={1}
								step={0.01}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								umin={this.state.umin3*2.0 - 1.0}
								max={this.state.x1}
								step={0.01}
							/>
							<SliderInput
								legend="x1"
								defaultValue={0}
								umin={this.state.umin3*2.0 - 1.0}
								max={this.state.max3*2.0}
								step={0.01}
							/>
							<TeX raw={this.state.eqn3} />
						</Dashboard>
					</Col>
					<Col md={7}>
						<VictoryChart
							domain={{ x: [ this.state.umin3 - 1.0, this.state.max3 + 1.0 ], y: [ 0, this.state.yheight3 + 0.1 ] }}>
							<VictoryArea
								data={this.state.data3}
								style={{
									data: {
										opacity: 0.3, fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								data={[
									[ this.state.umin3, 0 ],
									[ this.state.umin3,this.state.yheight3 ],
									[ this.state.max3,this.state.yheight3 ],
									[ this.state.max3, 0 ]
								]}
								x={ d => d[ 0 ]}
								y={ d => d[ 1 ]}
							/>
						</VictoryChart>
					</Col>
				</Row>
			</Grid>
		</Panel> );
	}
}


// EXPORTS //

export default UniformProbs;
