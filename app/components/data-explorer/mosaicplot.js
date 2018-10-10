// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import RPlot from 'components/r/plot';
import randomstring from 'utils/randomstring';
import objectValues from '@stdlib/utils/values';
import hasOwnProp from '@stdlib/assert/has-own-property';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'A mosaic plot can be used to visualize two or more categorical variables. The areas of the boxes in the plot are proportional to the cell frequencies of a contingency table of the selected variables.';


// FUNCTIONS //

export function generateMosaicPlotCode({ data, vars, showColors }) {
	const counts = {};
	const nObs = data[ vars[ 0 ] ].length;
	for ( let i = 0; i < nObs; i++ ) {
		let key = '';
		for ( let j = 0; j < vars.length; j++ ) {
			let x = vars[ j ];
			let datum = data[ x ][ i ];
			key += datum;
			if ( j < vars.length-1 ) {
				key += ':';
			}
		}
		if ( hasOwnProp( counts, key ) ) {
			counts[ key ] += 1;
		} else {
			counts[ key ] = 1;
		}
	}
	const varArr = [];
	vars.forEach( () => {
		varArr.push([]);
	});
	const keys = Object.keys( counts );
	for ( let k = 0; k < keys.length; k++ ) {
		let names = keys[ k ].split( ':' );
		for ( let i = 0; i < names.length; i++ ) {
			varArr[ i ].push( `'${names[ i ]}'` );
		}
	}

	let code = `dat = data.frame( counts = c(${objectValues( counts )}), ${varArr.map( ( arr, idx ) => `${vars[ idx ]} = c( ${arr} )` ) })
		xytable = xtabs( counts ~ ., data = dat )
		mosaicplot( xytable, main = "${`Mosaic Plot of ${vars.join( ', ' )}`}",
		cex=1, shade=${ showColors ? 'TRUE' : 'FALSE' } )`;
	return code;
}


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
		const code = generateMosaicPlotCode({ data: this.props.data, vars, showColors });
		const plotId = randomstring( 6 );
		const output ={
			variable: 'Mosaic Plot',
			type: 'Chart',
			value: <RPlot
				code={code}
				id={plotId}
				libraries={[ 'MASS' ]}
				onDone={this.props.onPlotDone}
				width="90%"
				height="auto"
				onShare={() => {
					this.props.session.addNotification({
						title: 'Plot shared.',
						message: 'You have successfully shared your plot.',
						level: 'success',
						position: 'tr'
					});
					this.props.logAction( 'DATA_EXPLORER_SHARE:MOSAIC', {
						vars, showColors, plotId
					});
				}}
			/>
		};
		this.props.logAction( 'DATA_EXPLORER:MOSAIC', {
			vars, showColors, plotId
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title={<span>Mosaic Plot<QuestionButton title="Mosaic Plot" content={DESCRIPTION} /></span>}
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
	logAction() {},
	onPlotDone() {},
	session: {}
};


// PROPERTY TYPES //

MosaicPlot.propTypes = {
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	onPlotDone: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default MosaicPlot;
