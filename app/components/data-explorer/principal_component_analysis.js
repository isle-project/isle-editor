// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PCA } from 'ml-pca';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import Table from 'react-bootstrap/Table';
import incrspace from '@stdlib/math/utils/incrspace';
import Plotly from 'components/plotly';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import Dashboard from 'components/dashboard';
import { DATA_EXPLORER_PCA } from 'constants/actions.js';
import QuestionButton from './question_button.js';


// FUNCTIONS //

const summaryTable = ( stdev, variance, cumVariance ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th></th>
					<th>Standard Deviation</th>
					<th>Proportion of Variance</th>
					<th>Cumulative Variance Proportion</th>
				</tr>
			</thead>
			<tbody>
				{stdev.map( ( val, id ) => {
					return (
						<tr key={id}>
							<th> {`PC${id+1}`} </th>
							<td> {val.toFixed( 3 )} </td>
							<td> {variance[ id ].toFixed( 3 )} </td>
							<td> {cumVariance[ id ].toFixed( 3 )} </td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};


// VARIABLES //

const DESCRIPTION = '';


// MAIN //

class PrincipalComponentAnalysis extends Component {
	constructor( props ) {
		super( props );
	}

	compute = ( variables, center, scale, noComponents ) => {
		const matrix = [];
		const n = this.props.data[ variables[ 0 ] ].length;
		for ( let i = 0; i < n; i++ ) {
			const row = [];
			for ( let j = 0; j < variables.length; j++ ) {
				row[ j ] = this.props.data[ variables[ j ] ][ i ];
			}
			matrix.push( row );
		}
		const pca = new PCA( matrix, {
			center,
			scale
		});

		const comps = pca.predict( matrix, {
			noComponents
		});

		if ( noComponents > 0 ) {
			const newData = copy( this.props.data, 1 );
			const newQuantitative = this.props.quantitative.slice();
			const suffix = variables.map( x => x[ 0 ] ).join( '' );
			for ( let i = 0; i < noComponents; i++ ) {
				const values = [];
				for ( let j = 0; j < comps.data.length; j++ ) {
					values.push( comps.data[ j ][ i ] );
				}
				const name = `PC${i+1}_${suffix}`;
				newData[ name ] = values;
				if ( !contains( newQuantitative, name ) ) {
					newQuantitative.push( name );
				}
			}
			this.props.onGenerate( newQuantitative, newData );
		}

		this.props.logAction( DATA_EXPLORER_PCA, {
			variables, center, scale
		});
		const stdev = pca.getStandardDeviations();
		const variance = pca.getExplainedVariance();
		const cumVariance = pca.getCumulativeVariance();
		const trace = {
			x: incrspace( 0, variance.length, 1 ),
			y: variance,
			type: 'scatter',
			name: 'Proportion of variance'
		};
		const output = {
			variable: 'PCA Summary',
			type: 'PCA',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >PCA Summary</span>
				{summaryTable( stdev, variance, cumVariance )}
				<Plotly editable data={[ trace ]} layout={{
					xaxis: {
						title: 'Principal Component'
					},
					yaxis: {
						title: 'Explained Proportion'
					}
				}} />
			</div>
		};
		this.props.onCreated( output );
	}

	render() {
		const { quantitative, originalQuantitative } = this.props;
		return (
			<Dashboard
				title={<span>Principal Component Analysis<QuestionButton title="Principal Component Analysis" content={DESCRIPTION} /></span>}
				autoStart={false}
				onGenerate={this.compute}
			>
				<SelectInput
					legend="Variables:" multi
					defaultValue={originalQuantitative}
					options={quantitative}
				/>
				<CheckboxInput
					legend="Center values (= subtract the mean)?"
					defaultValue={true}
				/>
				<CheckboxInput
					legend="Scale values (= divide by standard deviation)?"
					defaultValue={false}
				/>
				<NumberInput
					legend="# of components to add to data table"
					min={0}
					defaultValue={0}
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

PrincipalComponentAnalysis.defaultProps = {
	logAction() {}
};

PrincipalComponentAnalysis.propTypes = {
	quantitative: PropTypes.array.isRequired,
	originalQuantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default PrincipalComponentAnalysis;
