// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/input/base';
import NumberInput from 'components/input/number';
import { VictoryPie } from 'victory';
import isArray from '@stdlib/assert/is-array';
const debug = require( 'debug' )( 'isle-editor' );


// MAIN //

class ProportionInput extends Input {

	constructor( props, context ) {
		super( props );


		this.legends 		= this.checkLegends();
		let values 			= null;

		if ( this.props.values ) values = this.props.values;
		else					 values = this.setValues();


		const { session } = context;
		this.state = {
			values: values,
			visualData: this.pieData( values ),
			colors: this.setColors()
		};


		this.checkPercentage.bind( this );
	}



	componentWillReceiveProps( nextProps ) {
		if ( nextProps.values !== this.props.values ) {
		
			this.setState({
				values: nextProps.values,
				visualData: this.pieData( nextProps.values )
			});

		}
	}


	setValues() {
		var no = this.props.nElements;
		var values 	= new Array( no );
		var initial	= 100 / no;

		for ( var i = 0; i < no; i++ ) {
			values[ i ] = initial;
			//

		}

		return values;

	}


	setColors() {
		var no = this.props.nElements;
		var c = this.props.colors.slice( 0, no );
		c.push( 'transparent' );
		return c;
	}



	// <ProportionInput id = "Firmen" legends = {["Anton", "Bert", "Conny", "Dorian"]} nElements = { 4 } />

	checkLegends() {
		var list = [];
		var no = this.props.nElements;

		if (  isArray( this.props.legends ) === true  ) return this.props.legends;
		else {

			for ( var i = 0; i < no; i++ ) {

				list.push( "EL " + i );
			}

		}
		return list;
	}


	componentDidUpdate() {
	}



	total ( arr ) {
		var sum = 0;
		for ( var n = 0; n < arr.length; n++ ) {
			sum += arr[ n ];
		}
		return sum;
	}


	rest ( arr, ndx ) {
		var sum = 0;

		for ( var i = 0; i< arr.length; i++ ) {
			if ( i !== ndx ) sum += arr[ i ];
		}

		return sum;
	}

	checkPercentage ( ndx, value ) {
		var copy = this.state.values.slice();
		copy [ ndx ] = value;

		this.props.onChange( copy );


		this.setState({
			values: copy,
			visualData: this.pieData( copy )
		});
	}

	getNumber ( ndx ) {
		var style = {
			float: "left",
			width: '120px',
			textAlign: 'center'
		};

		const free = 100.0 - this.total( this.state.values );
		let maxValue = this.state.values[ ndx ] + free;
		maxValue = maxValue.toFixed( this.props.precision );
		return (
			<div style = { style } >
				<NumberInput
					key = { ndx }
					legend = { this.legends[ ndx ] }
					onChange={( event ) => this.checkPercentage( ndx, event )}
					min={0}
					max={maxValue}
					step={ this.props.step }
					disabled= { this.props.disabled }
					defaultValue={ this.state.values[ ndx ]}
				/>
			</div>
		);
	}




	renderInputs() {
		var list = [];

   		let n = this.props.nElements;
		for ( var i = 0; i < n; i++ ) {
			list.push ( this.getNumber ( i ) );
		}

		return list;
	}



	renderPie() {
		return (
			<VictoryPie
				// colorScale={[ "tomato", "orange", "gold", "darkcyan", "transparent" ]}
				colorScale={ this.state.colors }
				data={ this.state.visualData }
				height={ this.props.height }
				innerRadius= { this.props.innerRadius }
			/>
		);

	}




	pieData( arr ) {
		var list = [];
		var total = this.total( arr );
		var no = this.props.nElements + 1;


		for ( var i = 0; i < no; i++ ) {

			if ( i < no -1 ) {
				var o = {
					x: this.props.legends[ i ],
					y: arr[ i ]
				};

				list.push( o );

			}
			else {
				var o = {
					x: " ",
					y: 100 - this.total( arr )
				};

				if ( total !== 100 ) list.push( o );
			}

		}
		return list;
	}


	//

	render() {

		var pos = {
			marginLeft: this.props.margin
		};

		return (
			<div>
				{ this.renderPie() }
				<div style = { pos }>
					{ this.renderInputs() }
				</div>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

ProportionInput.defaultProps = {
	nElements: 6,
	legends: "Legend",
	precision: 1,
	step: 0.1,
	disabled: false,
	colors: [ "tomato", "orange", "gold", "darkcyan", "salmon", "lightgreen", "gainsboro", "lightpurple", "darkkhaki", "darkseagreen" ],
	height: 200,
	innerRadius: 75,

	onChange(){}

};


// PROPERTY TYPES //

ProportionInput.propTypes = {
	nElements: PropTypes.number,
	precision: PropTypes.number,
	step: PropTypes.number,
	disabled: PropTypes.bool,
	margin: PropTypes.string,

	legends: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),


};


// CONTEXT TYPES //

ProportionInput.contextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool,
	session: PropTypes.object
};


// EXPORTS //

export default ProportionInput;
