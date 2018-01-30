// MODULES //

import React, { Component } from 'react';
import { VictoryArea, VictoryChart, VictoryScatter } from 'victory';
import runif from '@stdlib/random/base/uniform';
import floor from '@stdlib/math/base/special/floor';


// MAIN //

class CrossValidation extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			points: this.generatePoints(),
			data: []
		};
	}

	componentDidMount() {
		this.setStateInterval = window.setInterval( () => {
			this.setState({
				data: this.getData()
			});
		}, 6000 );
	}

	componentWillUnmount() {
		window.clearInterval( this.setStateInterval );
	}

	generatePoints() {
		let points = new Array( 100 );
		for ( let i = 0; i < points.length; i++ ) {
			points[ i ] = runif( 0.0, 1.0 );
		}
		return points;
	}

	getData() {
		const colors =[
			'#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c',
			'#fdbf6f', '#ff7f00', '#cab2d6', 'black'
		];
		const symbols = [
			'square', 'circle'
		];
		const testSet = floor( runif( 0, 10 ) );
		const lower = 10 * ( testSet - 1 );
		const upper = 10 * ( testSet );
		return this.state.points.map( ( val, i ) => {
			const band = floor( i / 10 );
			let inTest = lower <= i && i <= upper;
			return {
				x: i,
				y: val,
				inTest,
				symbol: inTest ? symbols[ 0 ] : symbols[ 1 ],
				fill: colors[ band ],
				opacity: 0.6
			};
		});
	}

	render() {
		return (
			<div>
				<VictoryChart animate={{ duration: 2000, easing: 'bounce' }}>
					<VictoryScatter
						data={this.state.data}
					/>
					<VictoryArea
						data={this.state.data}
						x="x"
						y={( d ) => d.inTest ? 1.0 : 0.0}
						style={{
							data: { fill: 'tomato', opacity: 0.4 }
						}}
					/>
					<VictoryArea
						data={this.state.data}
						x="x"
						y={( d ) => d.inTest ? 0.0 : 1.0}
						style={{
							data: { fill: 'lightblue', opacity: 0.4 }
						}}
					/>
				</VictoryChart>
			</div>
		);
	}
}


// EXPORTS //

export default CrossValidation;
