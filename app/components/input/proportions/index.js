// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/input/base';
import NumberInput from 'components/input/number';
import { VictoryPie } from 'victory';
import isArray from '@stdlib/assert/is-array';


// MAIN //

/**
* A proportions input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {number} nElements - number of elements
* @property {Array} legends - group labels
* @property {boolean} disabled - controls whether the input field is deactivated
* @property {number} precision - displayed precision of proportion values
* @property {number} step - the step of the arrows seen when hovering the cursor above the input box
* @property {Array} colors - array of colors for the pie chart components. If not defined, a custom color scale will be used
* @property {number} height - proportions input height (in px)
* @property {number} innerRadius - inner radius of proportions pie chart (in px)
* @property {number} margin - proportion input margin (in px)
* @property {Function} onChange - callback function to be invoked when a choice is made
*/
class ProportionInput extends Input {
	constructor( props ) {
		super( props );

		this.legends = this.checkLegends();
		let values = null;

		if ( this.props.values ) {
			values = this.props.values;
		}
		else {
			values = this.setValues();
		}
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
		if ( nextProps.legends !== this.props.legends ) {
			this.legends = this.checkLegends();
		}
	}

	setValues() {
		var no = this.props.nElements;
		var values 	= new Array( no );
		var initial	= 100 / no;

		for ( var i = 0; i < no; i++ ) {
			values[ i ] = initial;
		}
		return values;
	}

	setColors() {
		var no = this.props.nElements;
		var c = this.props.colors.slice( 0, no );
		c.push( 'transparent' );
		return c;
	}

	checkLegends() {
		const list = [];
		const no = this.props.nElements;
		if ( isArray( this.props.legends ) ) {
			return this.props.legends;
		}
		for ( let i = 0; i < no; i++ ) {
			list.push( 'EL ' + i );
		}
		return list;
	}

	total( arr ) {
		let sum = 0;
		for ( let n = 0; n < arr.length; n++ ) {
			sum += arr[ n ];
		}
		return sum;
	}

	rest( arr, ndx ) {
		let sum = 0;
		for ( let i = 0; i < arr.length; i++ ) {
			if ( i !== ndx ) {
				sum += arr[ i ];
			}
		}
		return sum;
	}

	checkPercentage( ndx, value ) {
		const copy = this.state.values.slice();
		copy[ ndx ] = value;

		this.props.onChange( copy );
		this.setState({
			values: copy,
			visualData: this.pieData( copy )
		});
	}

	getNumber( ndx ) {
		const style = {
			float: 'left',
			width: '120px',
			textAlign: 'center'
		};
		const free = 100.0 - this.total( this.state.values );
		let maxValue = this.state.values[ ndx ] + free;
		maxValue = Number( maxValue.toFixed( this.props.precision ) );
		return (
			<div style={style} key={ndx} >
				<NumberInput
					key={ndx}
					legend={this.legends[ ndx ]}
					onChange={( event ) => this.checkPercentage( ndx, event )}
					min={0}
					max={maxValue}
					step={this.props.step}
					disabled={this.props.disabled}
					defaultValue={this.state.values[ ndx ]}
				/>
			</div>
		);
	}

	renderInputs() {
		var list = [];
		let n = this.props.nElements;
		for ( var i = 0; i < n; i++ ) {
			list.push( this.getNumber( i ) );
		}
		return list;
	}

	renderPie() {
		return (
			<VictoryPie
				colorScale={this.state.colors}
				data={this.state.visualData}
				height={this.props.height}
				innerRadius={this.props.innerRadius}
			/>
		);
	}

	pieData( arr ) {
		var list = [];
		var total = this.total( arr );
		var no = this.props.nElements + 1;
		for ( let i = 0; i < no; i++ ) {
			if ( i < no -1 ) {
				let o = {
					x: this.props.legends[ i ],
					y: arr[ i ]
				};
				list.push( o );
			}
			else {
				let o = {
					x: ' ',
					y: 100 - this.total( arr )
				};
				if ( total !== 100 ) {
					list.push( o );
				}
			}
		}
		return list;
	}

	render() {
		var pos = {
			marginLeft: this.props.margin
		};
		return (
			<div>
				{ this.renderPie() }
				<div style={pos}>
					{ this.renderInputs() }
				</div>
			</div>
		);
	}
}


// PROPERTIES //

ProportionInput.defaultProps = {
	nElements: 6,
	legends: null,
	precision: 1,
	step: 0.1,
	disabled: false,
	colors: [ 'tomato', 'orange', 'gold', 'darkcyan', 'salmon', 'lightgreen', 'gainsboro', 'lightpurple', 'darkkhaki', 'darkseagreen' ],
	height: 200,
	innerRadius: 75,
	onChange(){}
};

ProportionInput.propTypes = {
	disabled: PropTypes.bool,
	height: PropTypes.number,
	innerRadius: PropTypes.number,
	legends: PropTypes.array,
	margin: PropTypes.string,
	nElements: PropTypes.number,
	onChange: PropTypes.func,
	precision: PropTypes.number,
	step: PropTypes.number
};

ProportionInput.contextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool,
	session: PropTypes.object
};


// EXPORTS //

export default ProportionInput;
