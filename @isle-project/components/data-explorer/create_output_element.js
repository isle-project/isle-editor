// MODULES //

import React, { Fragment } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from '@isle-project/components/table';
import logger from 'debug';
import objectKeys from '@stdlib/utils/keys';
import isArray from '@stdlib/assert/is-array';
import entries from '@stdlib/utils/entries';
import replace from '@stdlib/string/replace';
import ContingencyTable from '@isle-project/components/tables/contingency-table';
import FrequencyTable from '@isle-project/components/tables/frequency-table';
import BoxPlot from '@isle-project/components/plots/boxplot';
import BarChart from '@isle-project/components/plots/barchart';
import ContourChart from '@isle-project/components/plots/contourchart';
import HeatMap from '@isle-project/components/plots/heatmap';
import Histogram from '@isle-project/components/plots/histogram';
import LinePlot from '@isle-project/components/plots/lineplot';
import MosaicPlot from '@isle-project/components/plots/mosaicplot';
import PieChart from '@isle-project/components/plots/piechart';
import QQPlot from '@isle-project/components/plots/qqplot';
import ScatterPlotMatrix from '@isle-project/components/plots/scatterplot-matrix';
import ScatterPlot from '@isle-project/components/plots/scatterplot';
import ViolinPlot from '@isle-project/components/plots/violinplot';
import Plotly from '@isle-project/components/plotly';
import Anova from '@isle-project/components/tests/anova';
import Chi2Test from '@isle-project/components/tests/chi2';
import CorrTest from '@isle-project/components/tests/corrtest';
import Kruskal from '@isle-project/components/tests/kruskal';
import MeanTest from '@isle-project/components/tests/meantest';
import MeanTest2 from '@isle-project/components/tests/meantest2';
import PropTest from '@isle-project/components/tests/proptest';
import PropTest2 from '@isle-project/components/tests/proptest2';
import DecisionTree from '@isle-project/components/models/decision-tree';
import LassoRegression from '@isle-project/components/models/lasso-regression';
import LogisticRegression from '@isle-project/components/models/logistic-regression';
import MultipleLinearRegression from '@isle-project/components/models/multiple-linear-regression';
import RandomForest from '@isle-project/components/models/random-forest';
import SimpleLinearRegression from '@isle-project/components/models/simple-linear-regression';
import PrincipalComponentAnalysis from '@isle-project/components/models/principal-component-analysis';
import HierarchicalClustering from '@isle-project/components/models/hierarchical-clustering';
import KMeans from '@isle-project/components/models/kmeans';
import NaiveBayes from '@isle-project/components/models/naive-bayes';
import ClearButton from './clear_button.js';
import FullscreenButton from './fullscreen_button.js';
import DatasetButton from './dataset_button.js';


// VARIABLES //

const debug = logger( 'isle:data-explorer' );
const RE_CLEAR_BUTTON = /<button[\s\S]*<\/button>/;


// FUNCTIONS //

const createButtons = ( header, table, clearOutput, idx, subsetFilters, onFilters, t ) => {
	return ( <ButtonGroup style={{ float: 'right', top: '-4px', zIndex: 2 }}>
		<DatasetButton filters={subsetFilters} onActivateFilters={onFilters} t={t} />
		<FullscreenButton header={header} body={table} t={t} />
		<ClearButton onClick={() => {
			debug( `Clear element with ID ${idx}` );
			clearOutput( idx );
		}} />
	</ButtonGroup> );
};


/**
* Wraps the supplied div element such that it can be dragged.
*/
const makeDraggable = ( div ) => {
	return (
		<Fragment>
			<div
				draggable={true}
				className="data-explorer-draggable-bar"
				onDragStart={( ev ) => {
					const div = ev.target.nextSibling;
					let markup = div.innerHTML;
					markup = replace( markup, RE_CLEAR_BUTTON, '' );
					ev.dataTransfer.setData( 'text/plain', markup );
					ev.dataTransfer.setData( 'text/html', markup );
				}}
			>
				Drag Table
			</div>
			{div}
		</Fragment>
	);
};

const renderIQRTable = ( e, idx, clearOutput, subsetFilters, onFilters, t ) => {
	const table = <Table bordered size="sm">
		<thead>
			<tr>
				<th>Variable</th>
				<th>IQR</th>
				<th>Lower</th>
				<th>Upper</th>
				<th>N</th>
			</tr>
		</thead>
		<tbody>
			{entries( e.result ).map( ( res, idx ) => {
				return ( <tr key={idx} >
					<td>{res[ 0 ]}</td>
					{res[ 1 ].value[ 0 ].map( ( e, i ) =>
						<td key={i}>{e.toFixed( 3 )}</td>
					)}
					<td>{res[ 1 ].size}</td>
				</tr> );
			})}
		</tbody>
	</Table>;
	return ( <pre key={idx}>
		{createButtons( 'Interquartile Range', table, clearOutput, idx, subsetFilters, onFilters, t )}
		{makeDraggable( table )}
	</pre> );
};

const renderRangeTable = ( e, idx, clearOutput, subsetFilters, onFilters, t ) => {
	const table = <Table bordered size="sm">
		<thead>
			<tr>
				<th>Variable</th>
				<th>Range</th>
				<th>Min</th>
				<th>Max</th>
				<th>N</th>
			</tr>
		</thead>
		<tbody>
			{entries( e.result ).map( ( res, idx ) => {
				return ( <tr key={idx} >
					<td>{res[ 0 ]}</td>
					{res[ 1 ].value[ 0 ].map( ( e, i ) =>
						<td key={i}>{e.toFixed( 3 )}</td>
					)}
					<td>{res[ 1 ].size}</td>
				</tr> );
			})}
		</tbody>
	</Table>;
	return ( <pre key={idx}>
		{createButtons( 'Range', table, clearOutput, idx, subsetFilters, onFilters, t )}
		{makeDraggable( table )}
	</pre> );
};

const CorrelationTable = ( props ) => {
	const title = props.group ? props.group : 'Correlation Matrix';
	const thead = <thead>
		<tr>
			<th>{title} (N={props.result.size})</th>
			{props.variables.map( ( x, i ) => <th key={i}>{x}</th> )}
		</tr>
	</thead>;
	const tbody = <tbody>
		{props.variables.map( ( x, i ) => {
			return (
				<tr key={i}>
					<th>{x}</th>
					{props.result.value[ i ].map( ( y, j ) => <td key={j}>{y.toFixed( 3 )}</td> )}
				</tr>
			);
		})}
	</tbody>;
	return ( <Table bordered size="sm" {...props} >
		{thead}
		{tbody}
	</Table> );
};

const renderCorrelationMatrix = ( e, idx, clearOutput, subsetFilters, onFilters, t ) => {
	if ( e.group ) {
		const tables = [];
		const keys = objectKeys( e.result );
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const table = <CorrelationTable
				key={key}
				group={key}
				result={e.result[ key ]}
				variables={e.variables}
			/>;
			tables.push( table );
		}
		return ( <pre key={idx}>
			{createButtons( 'Correlation Matrix', tables, clearOutput, idx, subsetFilters, onFilters, t )}
			{makeDraggable( tables )}
		</pre> );
	}
	const table = <CorrelationTable result={e.result} variables={e.variables} />;
	return ( <pre key={idx}>
		{createButtons( 'Correlation Matrix', table, clearOutput, idx, subsetFilters, onFilters, t )}
		{makeDraggable( table )}
	</pre> );
};


// MAIN //

function createOutputElement( e, idx, clearOutput, subsetFilters, onFilters, t ) {
	if (
		e.type === BoxPlot ||
		e.type === BarChart ||
		e.type === ContourChart ||
		e.type === HeatMap ||
		e.type === Histogram ||
		e.type === LinePlot ||
		e.type === MosaicPlot ||
		e.type === PieChart ||
		e.type === QQPlot ||
		e.type === ScatterPlot ||
		e.type === ScatterPlotMatrix ||
		e.type === ViolinPlot ||
		e.type === Plotly
	) {
		const props = e.props;
		if ( props.meta && !props.meta.filters ) {
			props.meta.filters = subsetFilters;
		}
		return ( <div key={idx}>
			<ButtonGroup style={{ float: 'right', padding: '0.1rem 0.3rem', zIndex: 2 }}>
				<DatasetButton filters={subsetFilters} onActivateFilters={onFilters} t={t} />
				<ClearButton
					onClick={() => { clearOutput( idx ); }}
				/>
			</ButtonGroup>
			<div style={{
				position: 'relative',
				height: ( props.layout && props.layout.height ) ? props.layout.height : 300,
				marginTop: 0,
				marginBottom: 40,
				marginRight: 25
			}} >
				{e}
			</div>
		</div> );
	}
	else if (
		e.type === Anova ||
		e.type === CorrTest ||
		e.type === Chi2Test ||
		e.type === Kruskal ||
		e.type === MeanTest ||
		e.type === MeanTest2 ||
		e.type === PropTest ||
		e.type === PropTest2
	) {
		const elem = <pre key={idx} >
			{createButtons( 'Test Output', e, clearOutput, idx, subsetFilters, onFilters, t )}
			{e}
		</pre>;
		return elem;
	}
	else if (
		e.type === ContingencyTable ||
		e.type === FrequencyTable
	) {
		const elem = <pre key={idx} >
			{createButtons( 'Table Output', e, clearOutput, idx, subsetFilters, onFilters, t )}
			{makeDraggable( e )}
		</pre>;
		return elem;
	}
	else if (
		e.type === SimpleLinearRegression ||
		e.type === MultipleLinearRegression ||
		e.type === LassoRegression ||
		e.type === LogisticRegression ||
		e.type === PrincipalComponentAnalysis ||
		e.type === KMeans ||
		e.type === NaiveBayes ||
		e.type === RandomForest
	) {
		const elem = <pre key={idx} >
			{createButtons( 'Model Output', e, clearOutput, idx, subsetFilters, onFilters, t )}
			{makeDraggable( e )}
		</pre>;
		return elem;
	}
	else if (
		e.type === DecisionTree ||
		e.type === HierarchicalClustering
	) {
		const elem = <pre key={idx}>
			<ButtonGroup style={{ float: 'right', padding: '0.1rem 0.3rem', top: '-1px', zIndex: 2 }} >
				<DatasetButton
					filters={subsetFilters} onActivateFilters={onFilters}
					style={{
						right: 55, position: 'absolute'
					}}
					t={t}
				/>
				<ClearButton
					onClick={() => { clearOutput( idx ); }}
					style={{
						right: -5, position: 'absolute'
					}}
				/>
			</ButtonGroup>
			<div style={{ marginTop: 25 }}>{e}</div>
		</pre>;
		return elem;
	}
	else if ( e.type === 'Statistics' ) {
		if ( e.group ) {
			if ( e.statistics.length === 1 && e.statistics[0] === 'Correlation Matrix' ) {
				return renderCorrelationMatrix( e, idx, clearOutput, subsetFilters, onFilters );
			}
			const variables = entries( e.result );
			let header;
			if ( e.statistics.length === 1 && e.statistics[0] === 'Range' ) {
				header = <tr>
					<th className="not-sortable" >Variable</th>
					{e.group.map( ( x, i ) => <th key={i} >{x}</th> )}
					<th>Range</th>
					<th>Min</th>
					<th>Max</th>
					<th>N</th>
				</tr>;
			} else if ( e.statistics.length === 1 && e.statistics[0] === 'Interquartile Range' ) {
				header = <tr>
					<th className="not-sortable" >Variable</th>
					{e.group.map( ( x, i ) => <th key={i} >{x}</th> )}
					<th>IQR</th>
					<th>Lower</th>
					<th>Upper</th>
					<th>N</th>
				</tr>;
			} else {
				header = <tr>
					<th className="not-sortable" >{variables.length > 1 ? 'Variable' : variables[ 0 ][ 0 ]}</th>
					{e.group.map( ( x, i ) => <th key={i} >{x}</th> )}
					{e.statistics.map( ( name, i ) => {
						return <th key={i}>{name}</th>;
					})}
					<th>N</th>
				</tr>;
			}
			const table = <Table bordered size="sm" >
				<thead>
					{header}
				</thead>
				<tbody>
					{variables.map( ( res ) => {
						let grouped = entries( res[ 1 ] );
						grouped = grouped.map( ( arr, groupIndex ) => {
							let cats;
							if ( e.group.length > 1 ) {
								cats = arr[ 0 ].split( ':' ).map( ( x, i ) => {
									return <td key={i} >{x}</td>;
								});
							} else {
								cats = <td>{arr[ 0 ]}</td>;
							}
							return (
								<tr key={groupIndex} >
									<td>{variables.length > 1 ? res[ 0 ] : ''}</td>
									{cats}
									{arr[ 1 ].value.map( ( v, groupIndex ) => {
										if ( isArray( v ) ) {
											if ( e.statistics.length === 1 ) {
												// eslint-disable-next-line max-nested-callbacks
												return v.map( ( elem, i ) => {
													return <td key={i} >{elem.toFixed( 3 )}</td>;
												});
											}
											return <td key={groupIndex} >{v[ 0 ].toFixed( 3 )}</td>;
										}
										return <td key={groupIndex} >{v.toFixed( 3 )}</td>;
									})}
									<td>{arr[ 1 ].size} </td>
								</tr>
							);
						});
						return grouped;
					})}
				</tbody>
			</Table>;
			const elem = <pre key={idx} >
				{createButtons( e.type, table, clearOutput, idx, subsetFilters, onFilters, t )}
				{makeDraggable( table )}
			</pre>;
			return elem;
		}
		if ( e.statistics.length === 1 ) {
			if ( e.statistics[0] === 'Range' ) {
				return renderRangeTable( e, idx, clearOutput, subsetFilters, onFilters, t );
			}
			if ( e.statistics[0] === 'Interquartile Range' ) {
				return renderIQRTable( e, idx, clearOutput, subsetFilters, onFilters, t );
			}
			if ( e.statistics[0] === 'Correlation Matrix' ) {
				return renderCorrelationMatrix( e, idx, clearOutput, subsetFilters, onFilters, t );
			}
		}
		const table = <Table bordered size="sm">
			<thead>
				<tr>
					<th className="not-sortable" >Variable</th>
					{e.statistics.map( ( name, i ) => {
						return <th key={i}>{name}</th>;
					})}
					<th>N</th>
				</tr>
			</thead>
			<tbody>
				{entries( e.result ).map( ( res ) => {
					return (
						<tr key={res[ 0 ]} >
							<td>{res[ 0 ]}</td>
							{res[ 1 ].value.map( ( v, i ) => {
								if ( isArray( v ) ) {
									// Case: Range or IQR, use first element:
									return <td key={i} >{v[ 0 ].toFixed( 3 )}</td>;
								}
								return <td key={i} >{v.toFixed( 3 )}</td>;
							})}
							<td>{res[ 1 ].size}</td>
						</tr>
					);
				})}

			</tbody>
		</Table>;
		const elem = <pre key={idx} >
			{createButtons( e.type, table, clearOutput, idx, subsetFilters, onFilters, t )}
			{makeDraggable( table )}
		</pre>;
		return elem;
	}
	return null;
}


// EXPORTS //

export default createOutputElement;
