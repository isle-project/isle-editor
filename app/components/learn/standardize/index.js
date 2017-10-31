// MODULES //

import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { VictoryChart, VictoryLine } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import dnorm from '@stdlib/math/base/dists/normal/pdf';
import linspace from '@stdlib/math/utils/linspace';
import TeX from 'components/tex';
import NumberInput from 'components/input/number';
import Dashboard from 'components/dashboard';


// VARIABLES //

const colors = [
	'#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33'
];
const X = linspace( -30, 30, 200 );


// MAIN

class Standardize extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			mean: 4,
			sd: 3
		};
	}

	componentDidMount() {
		this.generateState( this.state.mean, this.state.sd );
	}

	onStandardize = ( x ) => {
		let newMarked = this.state.marked.slice();
		newMarked.push( x );

		let eqn2 = '';
		let current = newMarked[ newMarked.length-1 ];
		let res = roundn( ( current - this.state.mean ) / this.state.sd, -4 );
		eqn2 = `z = \\frac{${current}-${roundn( this.state.mean, -2 )}}{${roundn( this.state.sd, -2 )}} = ${res}`;

		let unstandardizedLines = newMarked.map( ( x, id ) => {
			return <VictoryLine
				data={[ {x: x, y: 0 }, { x: x, y : 0.5 } ]}
				x={d => d.x}
				y={d => d.y}
				style={{ data: { stroke: colors[ id%colors.length ]}}}
			/>;
		});
		let standardizedLines = newMarked.map( ( x, id ) => {
			return <VictoryLine
				data={ [ {x: ( x-this.state.mean )/this.state.sd, y: 0 }, { x:  ( x-this.state.mean )/this.state.sd, y : 0.5 } ] }
				x={ d => d.x }
				y={ d => d.y }
				style={{ data: { stroke: colors[ id%colors.length ]}}}
			/>;
		});

		this.setState({
			marked: newMarked,
			eqn2: eqn2,
			unstandardizedLines,
			standardizedLines
		});
	}

	generateState( mean, sd ) {
		const eqn = `Z = \\frac{X-${roundn( mean,-2 )}}{${roundn( this.state.sd,-2 )}}`;
		const data = X.map( x => {
			return {
				x: x,
				y: dnorm( x, mean, sd )
			};
		});
		this.setState({
			data: data,
			mean: mean,
			sd: sd,
			eqn: eqn,
			marked: [],
			eqn2: '',
			unstandardizedLines: [],
			standardizedLines: []
		});
	}

	render() {

		const standardized = <Panel header="Standardized">
			<VictoryChart domain={{ x: [ -5, 5 ], y: [ 0, 0.4 ] }}>
				<VictoryLine
					samples={200}
					y={( data ) => {
						return dnorm( data.x, 0.0, 1.0 );
					}}
				/>
				{this.state.standardizedLines}
			</VictoryChart>
		</Panel>;

		return (
			<Grid>
				<Row>
					<Col md={12}>
						<Panel header="From Normal to Standard Normal">
							<NumberInput
								legend="Mean"
								defaultValue={4}
								step={1}
								min={-25}
								max={25}
								onChange={ mean => {
									this.generateState( mean, this.state.sd );
								}}
							/>
							<NumberInput
								legend="Standard Deviation"
								defaultValue={3}
								step={1}
								min={1}
								max={10}
								onChange={ sd => {
									this.generateState( this.state.mean, sd );
								}}
							/>
						</Panel>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<Panel header="Unstandardized">
							<VictoryChart domain={{
								x: [ -30, 30 ],
								y: [ 0, 0.4 ]
							}} >
								<VictoryLine
									data={this.state.data}
								/>
								{this.state.unstandardizedLines}
							</VictoryChart>
						</Panel>
					</Col>
					<Col md={4}>
						<TeX raw={this.state.eqn} displayMode tag=""/>
						<Dashboard autoStart={false} title="Standardize values" label="Compute" onGenerate={this.onStandardize}>
							<NumberInput
								legend="X value"
								defaultValue={0}
								step={1}
								min={-30}
								max={30}
							/>
						</Dashboard>
						<TeX raw={this.state.eqn2} displayMode tag=""/>
					</Col>
					<Col md={4}>
						{standardized}
					</Col>
				</Row>
			</Grid>
		);
	}
}


// EXPORTS //

export default Standardize;
