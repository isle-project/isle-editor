// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, Tabs, Tab } from 'react-bootstrap';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import linspace from '@stdlib/math/utils/linspace';
import dunif from '@stdlib/math/base/dists/uniform/pdf';
import punif from '@stdlib/math/base/dists/uniform/cdf';
import NumberInput from 'components/input/number';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';


// MAIN //

class UniformProbs extends Component {
	constructor( props ) {
		super( props );
		this.state = {};
	}

	generate1 = ( min, max, x0 ) => {
		let len = 200;
		let x = linspace( min-1.0, x0, len );
		let data = new Array( len );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dunif( x[ i ], min, max )
			};
		}
		this.setState({
			data: data,
			eqn: 'P(X \\le' + roundn( x0, -4 ) + ') = ' + roundn( punif( x0, min, max ), -4 ),
			min: min,
			max: max,
			yheight: dunif( min, min, max )
		});
	}

	generate2 = ( min, max, x0 ) => {
		let len = 200;
		let x = linspace( x0, max+1.0, len );
		let data = new Array( len );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dunif( x[ i ], min, max )
			};
		}
		this.setState({
			data2: data,
			eqn2: 'P(X >' + roundn( x0, -4 ) + ') = ' + roundn( 1-punif( x0, min, max ), -4 ),
			min2: min,
			max2: max,
			yheight2: dunif( min, min, max )
		});
	}

	generate3 = ( min, max, x0, x1 ) => {
		let len = 200;
		let x = linspace( x0, x1, len );
		let data = new Array( len );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dunif( x[ i ], min, max )
			};
		}
		this.setState({
			data3: data,
			eqn3: 'P(' + roundn( x0, -4 ) + '\\le X \\le' + roundn( x1, -4 ) + ') = ' + roundn( punif( x1, min, max )-punif( x0, min, max ), -4 ),
			min3: min,
			max3: max,
			yheight3: dunif( min, min, max ),
			x1: x1
		});
	}

	render() {
		return ( <Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h3">Uniform Distribution</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
				<Tabs defaultActiveKey={1} id="uniform-tabs">
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Dashboard autoUpdate onGenerate={this.generate1}>
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
								min={this.state.min*2.0 - 1.0}
								max={this.state.max*2.0}
								step={this.props.step}
							/>
							<TeX raw={this.state.eqn} />
						</Dashboard>
						<VictoryChart
							domain={{
								x: [ this.state.min - 1.0, this.state.max + 1.0 ],
								y: [ 0, this.state.yheight + 0.1 ]
							}}
						>
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
									[ this.state.min, 0 ],
									[ this.state.min, this.state.yheight ],
									[ this.state.max, this.state.yheight ],
									[ this.state.max, 0 ]
								]}
								x={d => d[ 0 ]}
								y={d => d[ 1 ]}
							/>
						</VictoryChart>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
						<Dashboard autoUpdate onGenerate={this.generate2}>
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
								min={this.state.min*2.0 - 1.0}
								max={this.state.max*2.0}
								step={this.props.step}
							/>
							<TeX raw={this.state.eqn2} />
						</Dashboard>
						<VictoryChart
							domain={{
								x: [ this.state.min2 - 1.0, this.state.max2 + 1.0 ],
								y: [ 0, this.state.yheight2 + 0.1 ]
							}}
						>
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
									[ this.state.min2, this.state.yheight2 ],
									[ this.state.max2, this.state.yheight2 ],
									[ this.state.max2, 0 ]
								]}
								x={d => d[ 0 ]}
								y={d => d[ 1 ]}
							/>
						</VictoryChart>
					</Tab>
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1 )" />} >
						<Dashboard autoUpdate onGenerate={this.generate3}>
							<NumberInput
								legend="Minimum"
								defaultValue={0}
								max={this.state.max3-0.01}
								step={this.props.step}
							/>
							<NumberInput
								legend="Maximum"
								min={this.state.min3+0.01}
								defaultValue={1}
								step={this.props.step}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={this.state.min3*2.0 - 1.0}
								max={this.state.x1}
								step={this.props.step}
							/>
							<SliderInput
								legend="x1"
								defaultValue={0}
								min={this.state.min3*2.0 - 1.0}
								max={this.state.max3*2.0}
								step={this.props.step}
							/>
							<TeX raw={this.state.eqn3} />
						</Dashboard>
						<VictoryChart
							domain={{ x: [ this.state.min3 - 1.0, this.state.max3 + 1.0 ], y: [ 0, this.state.yheight3 + 0.1 ] }}>
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
									[ this.state.min3, 0 ],
									[ this.state.min3, this.state.yheight3 ],
									[ this.state.max3, this.state.yheight3 ],
									[ this.state.max3, 0 ]
								]}
								x={d => d[ 0 ]}
								y={d => d[ 1 ]}
							/>
						</VictoryChart>
					</Tab>
				</Tabs>
			</Panel.Body>
		</Panel> );
	}
}


// PROPERTY TYPES //

UniformProbs.propTypes = {
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	])
};


// DEFAULT PROPERTIES //

UniformProbs.defaultProps = {
	step: 0.01
};


// EXPORTS //

export default UniformProbs;
