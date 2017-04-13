// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import RPlot from 'components/r/plot';


// MAIN //

class Scatterplot extends Component {

	constructor( props ) {
		super( props );
	}

	generateScatterplot( xval, yval, color, type ) {
		let aes = 'aes( x = xval, y = yval';
		if ( color !== 'None' ) {
			aes += ', color = color';
		}
		if ( type !== 'None' ) {
			aes += ', shape = type';
		}
		aes += ' )';

		let labs = `labs( x = "${xval}", y="${yval}"`;
		if ( color !== 'None' ) {
			labs += `, color = "${color}"`;
		}
		if ( type !== 'None' ) {
			labs += `, shape = "${type}"`;
		}
		labs += ' )';

		let code = `dat = data.frame(
			xval = c(${this.props.data[ xval ]}),
			yval = c(${this.props.data[ yval ]})
			${ color !== 'None' ? `, color = c(${this.props.data[ color ].map(
				e => `"${e}"`
			)})` : '' }
			${ type !== 'None' ? `, type = c(${this.props.data[ type ].map(
				e => `"${e}"`
			)})` : '' }
		)
		ggplot( data = dat, ${aes}) +
		geom_point( size = 1.5 ) + ${labs}`;

		const output = {
			variable: `${xval} against ${yval}`,
			type: 'Chart',
			value: <div>
				<label>{`${xval} against ${yval}`}: </label>
				<RPlot
					code={code}
					prependCode={[ 'theme_set(theme_gray(base_size = 18))' ]}
					libraries={[ 'ggplot2' ]}
					onDone={this.props.onPlotDone}
				/>
			</div>
		};
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
				<SelectInput
					legend="Color By:"
					defaultValue={groupingVariables[ 0 ]}
					options={groupingVariables}
				/>
				<SelectInput
					legend="Point Type By:"
					defaultValue={groupingVariables[ 0 ]}
					options={groupingVariables}
				/>
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
