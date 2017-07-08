// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import RPlot from 'components/r/plot';
import objectValues from '@stdlib/utils/values';


// MAIN //

class MosaicPlot extends Component {

	constructor( props ) {
		super( props );
	}

	generateMosaicPlot( vars, showColors ) {
		if ( !vars || vars.length < 2 ) {
			return this.props.session.addNotification({
				title: 'Select Variables',
				message: 'You need to select at least two variables for the mosaic plot',
				level: 'warning',
				position: 'tr'
			});
		}
		const counts = {};

		const nObs = this.props.data[ vars[ 0 ] ].length;

		for ( let i = 0; i < nObs; i++ ) {
			let key = '';
			for ( let j = 0; j < vars.length; j++ ) {
				let x = vars[ j ];
				let datum = this.props.data[ x ][ i ];
				key += datum;
				if ( j < vars.length-1 ) {
					key += ':';
				}
			}
			if ( counts.hasOwnProperty( key ) ) {
				counts[ key ] += 1;
			} else {
				counts[ key ] = 1;
			}
		}

		const varArr = [];
		vars.forEach( () => { varArr.push([]); });
		const keys = Object.keys( counts );
		for ( let k = 0; k < keys.length; k++ ) {
			let names = keys[ k ].split( ':' );
			for ( let i = 0; i < names.length; i++ ) {
				varArr[ i ].push( `'${names[ i ]}'` );
			}
		}

		let code = `dat = data.frame( counts = c(${objectValues( counts )}), ${varArr.map( ( arr, idx ) => `${vars[ idx ]} = c( ${arr} )` ) })
			xytable = xtabs( counts ~ ., data = dat )
			mosaicplot( xytable, main = "${`Mosaic Plot of ${vars}`}",
			cex=2, color=${ showColors ? 'TRUE' : 'FALSE' } )`;

		console.log( code );

		let output ={
			variable: `Mosaic Plot`,
			type: 'Chart',
			value: <div>
				<label>{`Mosaic Plot of ${vars}`}: </label>
				<RPlot
					code={code}
					libraries={[ 'MASS' ]}
					onDone={this.props.onPlotDone}
				/>
			</div>
		};
		this.props.logAction( 'DATA_EXPLORER:MOSAIC', {
			vars, showColors
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title="Mosaic Plot"
				onGenerate={this.generateMosaicPlot.bind( this )}
			>
				<SelectInput
					legend="Variables"
					options={variables}
					multi
				/>
				<CheckboxInput
					legend="Show Colors"
					defaultValue={false}
				/>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

MosaicPlot.defaultProps = {
	onPlotDone() {}
};


// PROPERTY TYPES //

MosaicPlot.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default MosaicPlot;
