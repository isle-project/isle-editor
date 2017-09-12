// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import RPlot from 'components/r/plot';


// MAIN //

class Scatterplot extends Component {

	constructor( props ) {
		super( props );
	}

	generateScatterplot( xval, yval, color, type, size, regressionLine, lineBy ) {
		let aes = 'aes( x = xval, y = yval';
		if ( color ) {
			aes += ', color = color';
		}
		if ( type ) {
			aes += ', shape = type';
		}
		if ( size ) {
			aes += ', size = size';
		}
		aes += ' )';

		let labs = `labs( x = "${xval}", y="${yval}"`;
		if ( color ) {
			labs += `, color = "${color}"`;
		}
		if ( type ) {
			labs += `, shape = "${type}"`;
		}
		if ( size ) {
			labs += `, size = "${size}"`;
		}
		if ( lineBy ) {
			labs += `, linetype = "${lineBy}"`;
		}
		labs += ' )';

		let sizeData = this.props.data[ size ];
		if ( size ) {
			// Make size variable categorical in case it is binary:
			let sizeIsBinary = true;
			for ( let i = 0; i < sizeData.length; i++ ) {
				if ( sizeData[ i ] !== 0 && sizeData[ i ] !== 1 ) {
					sizeIsBinary = false;
					break;
				}
			}
			if ( sizeIsBinary ) {
				sizeData = sizeData.map( e => `"${e}"` );
			}
		}

		let code = `dat = data.frame(
			xval = c(${this.props.data[ xval ]}),
			yval = c(${this.props.data[ yval ]})
			${ color ? `, color = c(${this.props.data[ color ].map( e => `"${e}"` )})` : '' }
			${ type ? `, type = c(${this.props.data[ type ].map( e => `"${e}"` )})` : '' }
			${ size ? `, size = c( ${sizeData} )` : '' }
			${ lineBy ? `, lineBy = c(${this.props.data[ lineBy ].map( e => `"${e}"` )})` : '' }
		)
		ggplot( data = dat ) +
		geom_point( ${ !size ? 'size = 2,' : '' } ${aes} ) + ${labs}`;

		if ( regressionLine ) {
			code += `+ geom_smooth( method="lm", se=FALSE, aes( x = xval, y = yval ${lineBy ? ', linetype = lineBy' : '' } ) )`;
		}

		const output = {
			variable: `${xval} against ${yval}`,
			type: 'Chart',
			value: <div>
				<label>{`${xval} against ${yval}`}: </label>
				<RPlot
					code={code}
					prependCode={[ 'theme_set(theme_bw(base_size = 20))' ]}
					libraries={[ 'ggplot2' ]}
					onDone={this.props.onPlotDone}
				/>
			</div>
		};
		this.props.logAction( 'DATA_EXPLORER:SCATTERPLOT', {
			xval, yval, color, type, size
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultX, defaultY, groupingVariables } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title="Scatterplot"
				onGenerate={this.generateScatterplot.bind( this )}
			>
				<SelectInput
					legend="Variable on x-axis:"
					defaultValue={defaultX || variables[ 0 ]}
					options={variables}
				/>
				<SelectInput
					legend="Variable on y-axis:"
					defaultValue={defaultY || variables[ 1 ]}
					options={variables}
				/>
				<div style={{ width: '100%' }}>
					<SelectInput
						legend="Color:"
						options={groupingVariables}
						clearable={true}
						style={{ float: 'left', paddingRight: 10, width: "33.3%" }}
					/>
					<SelectInput
						legend="Type:"
						options={groupingVariables}
						clearable={true}
						style={{ float: 'left', paddingLeft: 10, paddingRight: 10, width: "33.3%" }}
					/>
					<SelectInput
						legend="Size:"
						options={variables}
						clearable={true}
						style={{ float: 'left', paddingLeft: 10, width: "33.3%" }}
					/>
				</div>
				<div style={{ clear: 'both' }}></div>
				<div style={{ width: '100%' }}>
					<CheckboxInput
						inline
						legend="Overlay Regression Line"
						defaultValue={false}
						style={{ float: 'right', paddingLeft: 10, width: "50%" }}
					/>
					<SelectInput
						legend="Split By:"
						options={groupingVariables}
						clearable={true}
						style={{ float: 'right', paddingLeft: 10, width: "50%" }}
					/>
				</div>
				<div style={{ clear: 'both' }}></div>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

Scatterplot.defaultProps = {
	defaultX: null,
	defaultY: null,
	onPlotDone() {}
};


// PROPERTY TYPES //

Scatterplot.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default Scatterplot;
