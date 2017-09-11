// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Input from 'components/input/base';

import NumberInput from 'components/input/number';

import { VictoryPie } from 'victory';


import isArray from '@stdlib/assert/is-array';

//  absdiff( 0.3, 0.69 ) <= 1.5e-8
// var a= 0.25 + 02. + 0.2 + 0.34999;	
//absdiff(a, 1)  <= 1.5e-8


import absdiff from '@stdlib/math/base/utils/absolute-difference';


// MAIN //

class ProportionInput extends Input {

	constructor( props, context ) {
		super( props );


		this.legends 		= this.checkLegends();
		this.values  		= this.setValues();
		
	

		const { session } = context;
		this.state = {
			values: this.setValues(), 
			visualData: this.pieData( this.values ),
			colors: this.setColors()
		};
	

		this.checkPercentage.bind( this );
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
		var restsum = this.rest( copy, ndx );


		if ( value + restsum > 100 ) {
			var v = 100 - restsum;
			copy[ ndx ] = v;	
			var t = this.total( copy );
			console.log( "Sollte 100 sein " + t );
		}


		this.setState({
			values: copy,
			visualData: this.pieData( copy )
		});
	
		
	}


	getNumber ( ndx ) {
		var style = {
			float: "left",
			width: '100px',
			textAlign: 'center'
		};


		return (
			<div style = { style } >
				<NumberInput 
					key = { ndx } 
					legend = { this.legends[ ndx ] }
					onChange={( event ) => this.checkPercentage( ndx, event )}
					min={0}
					max={100}
					step={ this.props.step }
					defaultValue={ this.state.values[ ndx ].toFixed ( this.props.precision )  }
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
		return (
			<div>
				{ this.renderPie() }
				{ this.renderInputs() }
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
	innerRadius: 75

};


// PROPERTY TYPES //

ProportionInput.propTypes = {
	nElements: PropTypes.number,
	precision: PropTypes.number,
	step: PropTypes.number,
	disabled: PropTypes.bool,

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
