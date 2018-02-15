// MODULES //

import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Modal from 'react-bootstrap/lib/Modal';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import Panel from 'react-bootstrap/lib/Panel';
import Tab from 'react-bootstrap/lib/Tab';
import Well from 'react-bootstrap/lib/Well';
import TurndownService from 'turndown';
import isString from '@stdlib/assert/is-string';
import isArray from '@stdlib/assert/is-array';
import isNumber from '@stdlib/assert/is-number';
import isNumberArray from '@stdlib/assert/is-number-array';
import isObject from '@stdlib/assert/is-object';
import entries from '@stdlib/utils/entries';
import hasProp from '@stdlib/assert/has-property';
import replace from '@stdlib/string/replace';
import copy from '@stdlib/utils/copy';
import scrollTo from 'utils/scroll-to';
import MarkdownEditor from 'components/markdown-editor';
import SelectInput from 'components/input/select';
import ContingencyTable from 'components/data-explorer/contingency-table';
import FrequencyTable from 'components/data-explorer/frequency-table';
import SummaryStatistics from 'components/data-explorer/summary-statistics';
import SimpleLinearRegression from 'components/data-explorer/linear-regression';
import VariableTransformer from 'components/data-explorer/variable-transformer';
import GridLayout from './grid_layout.js';
import Pages from 'components/pages';
import Gate from 'components/gate';
import RealtimeMetrics from 'components/metrics/realtime';
import Plotly from 'components/plotly';
import RPlot from 'components/r/plot';
import Learn from 'components/learn';
import SpreadsheetUpload from 'components/spreadsheet-upload';
<<<<<<< HEAD
import DataTable from 'components/data-table';
=======
import './data_explorer.css';
>>>>>>> 5892e026d2ae6a6428bef2b0fb8ec0c4d708b989


// PLOT COMPONENTS //

import Barchart, { generateBarchartConfig } from 'components/data-explorer/barchart';
import Boxplot, { generateBoxplotConfig } from 'components/data-explorer/boxplot';
import Heatmap, { generateHeatmapCode } from 'components/data-explorer/heatmap';
import Histogram, { generateHistogramConfig } from 'components/data-explorer/histogram';
import MosaicPlot, { generateMosaicPlotCode } from 'components/data-explorer/mosaicplot';
import Piechart, { generatePiechartConfig } from 'components/data-explorer/piechart';
import Scatterplot, { generateScatterplotConfig } from 'components/data-explorer/scatterplot';


// TEST COMPONENTS //

import ZTest from 'components/data-explorer/ztest';
import ZTest2 from 'components/data-explorer/ztest2';
import CorrTest from 'components/data-explorer/corrtest';
import Chi2Test from 'components/data-explorer/chi2';
import PropTest from 'components/data-explorer/proptest';
import PropTest2 from 'components/data-explorer/proptest2';
import Anova from 'components/data-explorer/anova';


// VARIABLES //

const RE_CLEAR_BUTTON = /<button[\s\S]*<\/button>/;
const turndownService = new TurndownService();
const turndownPluginGfm = require( 'turndown-plugin-gfm' );
turndownService.use( turndownPluginGfm.gfm );


// FUNCTIONS //

/**
* Wraps the supplied div element such that it can be dragged.
*/
const makeDraggable = ( div, asMarkdown = true ) => {
	let markup = ReactDOMServer.renderToStaticMarkup( div );
	markup = replace( markup, RE_CLEAR_BUTTON, '' );
	if ( asMarkdown ) {
		markup = turndownService.turndown( markup );
	}
	return ( <div
		draggable="true"
		onDragStart={( ev ) => {
			ev.dataTransfer.setData( 'text/plain', markup );
			ev.dataTransfer.setData( 'text/html', '' );
		}}
	>
		{div}
	</div> );
};

const ClearButton = ( props ) => ( <Button
	bsSize="xs"
	style={{ float: 'right' }}
	onClick={props.onClick}
>
	<span>&times;</span>
</Button> );

ClearButton.propTypes = {
	'onClick': PropTypes.func.isRequired
};

const renderIQRTable = ( e, idx, clearOutput ) => {
	const table = <table className="table table-condensed">
		<tbody>
			<tr>
				<th>Variable</th>
				<th>IQR</th>
				<th>Lower</th>
				<th>Upper</th>
				<th>N</th>
			</tr>
			<tr>
				<td>{e.variable}</td>
				{e.result.value.map( ( e, i ) => <td key={i}>{e.toFixed( 3 )}</td> )}
				<td>{e.result.size}</td>
			</tr>
		</tbody>
	</table>;
	return ( <pre key={idx}>
		<ClearButton onClick={() => { clearOutput( idx ); }} />
		{makeDraggable( table )}
	</pre> );
};

const renderRangeTable = ( e, idx, clearOutput ) => {
	const table = <table className="table table-condensed">
		<tbody>
			<tr>
				<th>Variable</th>
				<th>Min</th>
				<th>Max</th>
				<th>N</th>
			</tr>
			<tr>
				<td>{e.variable}</td>
				{e.result.value.map( ( e, i ) => <td key={i}>{e.toFixed( 3 )}</td> )}
				<td>{e.result.size}</td>
			</tr>
		</tbody>
	</table>;
	return ( <pre key={idx}>
		<ClearButton onClick={() => { clearOutput( idx ); }} />
		{makeDraggable( table )}
	</pre> );
};

const generateTransformationCode = ( variable ) => `if ( datum.${variable} > 0 ) {
	return 'Yes'
} else {
	return 'No'
}`;

/**
* Maps over the output array and returns the filled output panel.
*/
const OutputPanel = ( output, clearOutput ) => {
	return (
		<div id="outputPanel" style={{
			height: 520,
			overflowY: 'scroll',
			padding: '5px'
		}}>
			{output.map( ( e, idx ) => {
				if ( e.type === 'Chart' ) {
					return ( <div key={idx} style={{ height: 300, marginBottom: 40 }} >
						<ClearButton onClick={() => { clearOutput( idx ); }} />
						{e.value}
					</div> );
				}
				else if (
					e.type === 'Contingency Table' ||
					e.type === 'Frequency Table' ||
					e.type === 'Grouped Frequency Table' ||
					e.type === 'Test' ||
					e.type === 'Simple Linear Regression'
				) {
					let elem = <pre key={idx} >
						<ClearButton onClick={() => { clearOutput( idx ); }} /><br />
						{makeDraggable( e.value )}
					</pre>;
					return elem;
				}
				else if ( isNumber( e.result.value ) && e.result.size ) {
					const { value, size } = e.result;
					const table = <table className="table table-condensed">
						<tbody>
							<tr>
								<th>Variable</th>
								<th>{e.type}</th>
								<th>N</th>
							</tr>
							<tr>
								<th>{e.variable}</th>
								<td>{value.toFixed( 3 )}</td>
								<td>{size}</td>
							</tr>
						</tbody>
					</table>;
					const elem = <pre key={idx} >
						<ClearButton onClick={() => { clearOutput( idx ); }} />
						{makeDraggable( table )}
					</pre>;
					return elem;
				}
				else if ( isArray( e.result.value ) && e.type === 'Range' ) {
					return renderRangeTable( e, idx, clearOutput );
				} else if ( isArray( e.result.value ) && e.type === 'Interquartile Range' ) {
					return renderIQRTable( e, idx, clearOutput );
				}
				else if ( isObject( e.result ) ) {
					let elem = <pre key={idx} >
						<ClearButton onClick={() => { clearOutput( idx ); }} />
							<table className="table table-condensed">
								<tbody>
									{ e.type === 'Range' ?
										<tr>
											<th>Variable</th>
											<th>{e.group}</th>
											<th>Range</th>
											<th></th>
											<th>N</th>
										</tr>: null
									}
									{ e.type === 'Interquartile Range' ?
										<tr>
											<th>Variable</th>
											<th>{e.group}</th>
											<th>IQR</th>
											<th>Lower</th>
											<th>Upper</th>
											<th>N</th>
										</tr>: null
									}
									{ e.type !== 'Range' && e.type !== 'Interquartile Range' ?
										<tr>
											<th>Variable</th>
											<th>{e.group}</th>
											<th>{e.type}</th>
											<th>N</th>
										</tr>: null
									}
									{entries( e.result ).map( ( arr, i ) => {
										if ( isArray( arr[ 1 ].value ) ) {
											return (
												<tr key={i} >
													{ i === 0 ? <th>{e.variable}</th> : <th></th>}
													<td>{arr[ 0 ]}</td>
													{arr[ 1 ].value.map( ( x, j ) => {
														return <td key={j}>{x.toFixed( 3 )}</td>;
													})}
													<td>{arr[ 1 ].size}</td>
												</tr>
											);
										}
										return (
											<tr key={i} >
												{ i === 0 ? <th>{e.variable}</th> : <th></th>}
												<td>{arr[ 0 ]}</td>
												<td>{arr[ 1 ].value.toFixed( 3 )} </td>
												<td>{arr[ 1 ].size} </td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</pre>;
					return makeDraggable( elem );
				}
				return null;
			})}
		</div>
	);
};


// MAIN //

class DataExplorer extends Component {
	/**
	* Constructor function
	*/
	constructor( props ) {
		super( props );

		let groupVars = props.categorical.slice();
		let ready = false;
		if (
			isObject( props.data ) &&
			props.continuous.length > 0 &&
			props.categorical.length > 0
		) {
			ready = true;
		}
		this.state = {
			data: props.data,
			continuous: props.continuous,
			categorical: props.categorical,
			output: [],
			groupVars,
			ready,
			showStudentPlots: false,
			studentPlots: []
		};

		this.logAction = ( type, value ) => {
			const { session } = this.context;
			if ( this.props.id ) {
				session.log({
					id: this.props.id,
					type,
					value
				});
			}
		};
	}

	componentWillReceiveProps( nextProps ) {
		const newState = {};
		if ( nextProps.data !== this.props.data ) {
			newState.data = nextProps.data;
		}
		if ( nextProps.continuous !== this.props.continuous ) {
			newState.continuous = nextProps.continuous;
		}
		if ( nextProps.continuous !== this.props.continuous ) {
			newState.categorical = nextProps.categorical;
		}
		this.setState( newState );
	}

	componentWillUpdate( nextProps, nextState ){
		if ( nextState.output !== this.state.output ) {
			const outputPanel = document.getElementById( 'outputPanel' );
			scrollTo( outputPanel, outputPanel.scrollHeight, 1000 );
		}
	}

	/**
	* Display gallery of recently created plots by the students.
	*/
	toggleStudentPlots = () => {
		this.setState({
			showStudentPlots: !this.state.showStudentPlots
		});
	}

	/**
	* Remove output element at the specified index.
	*/
	clearOutput = ( idx ) => {
		let newOutputs = copy( this.state.output );
		newOutputs.splice( idx, 1 );
		this.setState({
			output: newOutputs
		});
	}

	/**
	* Remove all currently saved student plots.
	*/
	clearPlots = () => {
		this.setState({
			studentPlots: []
		});
	}

	/**
	* Stores all plot actions in the internal state.
	*/
	onUserAction = ( action ) => {
		let config;
		if ( action.type === 'DATA_EXPLORER_SHARE:HISTOGRAM' ) {
			config = generateHistogramConfig({ data: this.state.data, ...action.value });
		}
		else if ( action.type === 'DATA_EXPLORER_SHARE:BARCHART' ) {
			config = generateBarchartConfig({ data: this.state.data, ...action.value });
		}
		else if ( action.type === 'DATA_EXPLORER_SHARE:BOXPLOT' ) {
			config = generateBoxplotConfig({ data: this.state.data, ...action.value });
		}
		else if ( action.type === 'DATA_EXPLORER_SHARE:PIECHART' ) {
			config = generatePiechartConfig({ data: this.state.data, ...action.value });
		}
		else if ( action.type === 'DATA_EXPLORER_SHARE:SCATTERPLOT' ) {
			config = generateScatterplotConfig({ data: this.state.data, ...action.value });
		}
		else if ( action.type === 'DATA_EXPLORER_SHARE:MOSAIC' ) {
			config = generateMosaicPlotCode({ data: this.state.data, ...action.value });
		}
		else if ( action.type === 'DATA_EXPLORER_SHARE:HEATMAP' ) {
			config = generateHeatmapCode({ data: this.state.data, ...action.value });
		}
		if ( config ) {
			const newStudentPlots = copy( this.state.studentPlots );
			const configString = JSON.stringify( config );
			let found = false;
			for ( let i = 0; i < newStudentPlots.length; i++ ) {
				if ( newStudentPlots[ i ].config === configString ) {
					newStudentPlots[ i ].count += 1;
					found = true;
					break;
				}
			}
			if ( !found ) {
				newStudentPlots.push({
					config: configString,
					count: 1
				});
			}
			this.setState({
				studentPlots: newStudentPlots
			});
		}
	}

	/**
	* Scrolls to the bottom of the output panel after result has been inserted.
	*/
	scrollToBottom() {
		const outputPanel = document.getElementById( 'outputPanel' );
		scrollTo( outputPanel, outputPanel.scrollHeight, 1000 );
	}

	/**
	* Adds the supplied element to the array of outputs.
	*/
	addToOutputs = ( element ) => {
		let newOutput = this.state.output.slice();
		newOutput.push( element );
		this.setState({
			output: newOutput
		});
	}

	onGenerateTransformedVariable = ( name, values ) => {
		let newData = copy( this.state.data );
		if ( !hasProp( this.props.data, name ) ) {
			newData[ name ] = values;
			let groupVars;
			let previous;
			let newContinuous = copy( this.state.continuous );
			let newCategorical = copy( this.state.categorical );
			if ( isNumberArray( values ) ) {
				if ( !( name in newContinuous ) ) {
					newContinuous.push( name );
					previous = newCategorical.indexOf( name );
					if ( previous > 0 ) {
						newCategorical.splice( previous, 1 );
						groupVars = newCategorical.slice();
					}
				}
			} else {
				if ( !( name in newCategorical ) ) {
					newCategorical.push( name );
					previous = newContinuous.indexOf( name );
					if ( previous > 0 ) {
						newContinuous.splice( previous, 1 );
					}
				}
				groupVars = newCategorical.slice();
			}
			let newState = {
				data: newData,
				categorical: newCategorical,
				continuous: newContinuous
			};
			if ( groupVars ) {
				newState[ 'groupVars' ] = groupVars;
			}
			this.setState( newState );
			const { session } = this.context;
			session.addNotification({
				title: 'Variable created',
				message: `The variable with the name ${name} has been successfully ${ previous > 0 ? 'overwritten' : 'created' }`,
				level: 'success',
				position: 'tr'
			});
		} else {
			const { session } = this.context;
			session.addNotification({
				title: 'Variable exists',
				message: 'The original variables of the data set cannot be overwritten.',
				level: 'error',
				position: 'tr'
			});
		}
	}

	onFileUpload = ( err, output ) => {
		if ( !err ) {
			const data = {};
			const columnNames = Object.keys( output[ 0 ]);
			for ( let j = 0; j < columnNames.length; j++ ) {
				let col = columnNames[ j ];
				data[ col ] = new Array( output.length );
			}
			for ( let i = 0; i < output.length; i++ ) {
				for ( let j = 0; j < columnNames.length; j++ ) {
					let col = columnNames[ j ];
					data[ col ][ i ] = output[ i ][ col ];
				}
			}
			const categoricalGuesses = [];
			const continuousGuesses = [];
			columnNames.forEach( variable => {
				if ( isNumberArray( data[ variable ]) ) {
					continuousGuesses.push( variable );
				} else {
					categoricalGuesses.push( variable );
				}
			});
			this.setState({
				continuous: continuousGuesses,
				categorical: categoricalGuesses,
				data
			});
		}
	}

	/**
	* React component render method.
	*/
	render() {
		if ( !this.state.data ) {
			return (
				<SpreadsheetUpload
					title="Data Explorer"
					onUpload={this.onFileUpload}
				/>
			);
		}
		if ( !this.state.ready ) {
			const variableNames = Object.keys( this.state.data );
			return ( <Panel>
				<Panel.Heading>
					<Panel.Title componentClass="h2">Data Explorer</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					<h3>Please select which variables should be treated as numeric and which ones as categorical:</h3>
					<SelectInput
						legend="Continuous:"
						options={variableNames}
						defaultValue={this.state.continuous}
						multi
						onChange={( continuous ) => this.setState({ continuous })}
					/>
					<SelectInput
						legend="Categorical:"
						options={variableNames}
						defaultValue={this.state.categorical}
						multi
						onChange={( categorical ) => this.setState({ categorical })}
					/>
					<Button onClick={() => {
						const groupVars = this.state.categorical.slice();
						const ready = true;
						this.setState({
							groupVars,
							ready
						});
					}}>Submit</Button>
				</Panel.Body>
			</Panel> );
		}
		let colWidth = this.props.questions ? 4 : 6;
		let nStatistics = this.props.statistics.length;
		let defaultActiveKey = 'first';
		if ( nStatistics === 0 ) {
			defaultActiveKey = 'second';
		}
		const categoricalProps = {
			data: this.state.data,
			variables: this.state.categorical,
			groupingVariables: this.state.groupVars,
			onCreated: this.addToOutputs,
			onPlotDone: this.scrollToBottom
		};
		const continuousProps = {
			data: this.state.data,
			variables: this.state.continuous,
			groupingVariables: this.state.groupVars,
			onCreated: this.addToOutputs,
			onPlotDone: this.scrollToBottom
		};

		const navbar = <Nav bsStyle="tabs">
			<NavItem eventKey="0">
			Data
			</NavItem>
			{ nStatistics > 0 ?
				<NavItem eventKey="1">
				Statistics
				</NavItem> : null
			}
			{ this.props.tables.length > 0 && this.state.categorical.length > 0 ?
				<NavDropdown
					eventKey="2"
					title="Tables"
				>
					{ this.props.tables.map(
						( e, i ) => <MenuItem key={i} eventKey={`2.${i+1}`}>{e}</MenuItem>
					) }
				</NavDropdown> : null
			}
			{ this.props.plots.length > 0 ?
				<NavDropdown
					eventKey="3"
					title="Plots"
				>
					{ this.props.plots.map(
						( e, i ) => <MenuItem key={i} eventKey={`3.${i+1}`}>{e}</MenuItem>
					) }
				</NavDropdown> : null
			}
			{ this.props.tests.length > 0 ?
				<NavDropdown
					eventKey="4"
					title="Tests"
				>
					{ this.props.tests.map(
						( e, i ) => <MenuItem key={i} eventKey={`4.${i+1}`}>{e}</MenuItem>
					) }
				</NavDropdown> : null
			}
			{ this.props.models.length > 0 ?
				<NavDropdown
					eventKey="5"
					title="Models"
				>
					{this.props.models.map( ( e, i ) =>
						<MenuItem key={i} eventKey={`5.${i+1}`}>{e}</MenuItem> )}
				</NavDropdown> : null
			}
			{ this.props.transformer ?
				<NavItem
					eventKey="6"
					title="Transform"
				>
					Transform
				</NavItem> : null
			}
			{ this.props.distributions.length > 0 ?
				<NavDropdown
					eventKey="7"
					title="Distributions"
				>
					{this.props.distributions.map( ( e, i ) =>
						<MenuItem key={i} eventKey={`7.${i+1}`}>{e}</MenuItem> )}
				</NavDropdown> : null
			}
			{ this.props.showEditor > 0 ?
				<NavItem
					eventKey="8"
					title={this.props.editorTitle}
				>
					{this.props.editorTitle}
				</NavItem> : null
			}
			{ this.props.tabs.length > 0 ? this.props.tabs.map( ( e, i ) => {
				return ( <NavItem key={i} eventKey={`${9+i}`}>
					{e.title}
				</NavItem> );
			}) : null }
		</Nav>;

		const tabs = <Tab.Content animation>
			<Tab.Pane eventKey="0">
				<DataTable data={this.state.data} descriptions={this.props.descriptions} />
			</Tab.Pane>
			<Tab.Pane eventKey="1">
				<SummaryStatistics
					{...continuousProps}
					statistics={this.props.statistics}
					logAction={this.logAction}
				/>
			</Tab.Pane>
			{this.props.tables.map( ( e, i ) => {
				let content = null;
				switch ( e ) {
				case 'Frequency Table':
					content = <FrequencyTable
						{...categoricalProps}
						logAction={this.logAction}
					/>;
					break;
				case 'Contingency Table':
					content = <ContingencyTable
						{...categoricalProps}
						logAction={this.logAction}
						session={this.context.session}
					/>;
					break;
				}
				return ( <Tab.Pane key={i} eventKey={`2.${i+1}`}>
					{content}
				</Tab.Pane> );
			})}
			{this.props.plots.map( ( e, i ) => {
				let content = null;
				switch ( e ) {
				case 'Bar Chart':
					content = <Barchart
						{...categoricalProps}
						logAction={this.logAction}
						session={this.context.session}
					/>;
					break;
				case 'Pie Chart':
					content = <Piechart
						{...categoricalProps}
						logAction={this.logAction}
						session={this.context.session}
					/>;
					break;
				case 'Histogram':
					content = <Histogram
						{...continuousProps}
						logAction={this.logAction}
						session={this.context.session}
						showDensityOption={this.props.histogramDensities}
					/>;
					break;
				case 'Box Plot':
					content = <Boxplot
						{...continuousProps}
						logAction={this.logAction}
						session={this.context.session}
					/>;
					break;
				case 'Scatterplot':
					content = <Scatterplot
						{...continuousProps}
						logAction={this.logAction}
						session={this.context.session}
					/>;
					break;
				case 'Heat Map':
					content = <Heatmap
						{...continuousProps}
						logAction={this.logAction}
						session={this.context.session}
					/>;
					break;
				case 'Mosaic Plot':
					content = <MosaicPlot
						{...categoricalProps}
						logAction={this.logAction}
						session={this.context.session}
					/>;
					break;
				}
				return ( <Tab.Pane key={i} eventKey={`3.${i+1}`}>
					{content}
				</Tab.Pane> );
			})}
			{this.props.tests.map( ( e, i ) => {
				let content = null;
				switch ( e ) {
				case 'One-Sample Mean Test':
					content = <ZTest
						onCreated={this.addToOutputs}
						data={this.state.data}
						continuous={this.state.continuous}
						logAction={this.logAction}
					/>;
					break;
				case 'Two-Sample Mean Test':
					content = <ZTest2
						onCreated={this.addToOutputs}
						data={this.state.data}
						continuous={this.state.continuous}
						categorical={this.state.categorical}
						logAction={this.logAction}
						session={this.context.session}
					/>;
					break;
				case 'One-Sample Proportion Test':
					content = <PropTest
						onCreated={this.addToOutputs}
						data={this.state.data}
						categorical={this.state.categorical}
						logAction={this.logAction}
					/>;
					break;
				case 'Two-Sample Proportion Test':
					content = <PropTest2
						onCreated={this.addToOutputs}
						data={this.state.data}
						categorical={this.state.categorical}
						logAction={this.logAction}
						session={this.context.session}
					/>;
					break;
				case 'One-Way ANOVA':
					content = <Anova
						onCreated={this.addToOutputs}
						data={this.state.data}
						continuous={this.state.continuous}
						categorical={this.state.categorical}
						logAction={this.logAction}
					/>;
					break;
				case 'Correlation Test':
					content = <CorrTest
						onCreated={this.addToOutputs}
						data={this.state.data}
						continuous={this.state.continuous}
						logAction={this.logAction}
					/>;
					break;
				case 'Chi-squared Independence Test':
					content = <Chi2Test
						onCreated={this.addToOutputs}
						data={this.state.data}
						categorical={this.state.categorical}
						logAction={this.logAction}
					/>;
					break;
				}
				return ( <Tab.Pane key={i} eventKey={`4.${i+1}`}>
					{content}
				</Tab.Pane> );
			})}
			{this.props.models.map( ( e, i ) => {
				let content = null;
				switch ( e ) {
				case 'Simple Linear Regression':
					content = <SimpleLinearRegression
						categorical={this.state.categorical}
						continuous={this.state.continuous}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context.session}
					/>;
					break;
				}
				return ( <Tab.Pane key={i} eventKey={`5.${i+1}`}>
					{content}
				</Tab.Pane> );
			})}
			{ this.props.transformer ? <Tab.Pane eventKey="6">
				<VariableTransformer
					data={this.state.data}
					logAction={this.logAction}
					session={this.context.session}
					defaultCode={generateTransformationCode( this.state.continuous[ 0 ])}
					onGenerate={this.onGenerateTransformedVariable}
				/>
			</Tab.Pane> : null }
			{this.props.distributions.map( ( e, i ) => {
				let content = null;
				switch ( e ) {
				case 'Normal':
					content = <Learn.NormalDistribution step="any" />;
					break;
				case 'Uniform':
					content = <Learn.UniformDistribution step="any" />;
					break;
				case 'Exponential':
					content = <Learn.ExponentialDistribution step="any" />;
					break;
				}
				return ( <Tab.Pane key={i} eventKey={`7.${i+1}`}>
					{content}
				</Tab.Pane> );
			})}
			{ this.props.showEditor ? <Tab.Pane eventKey="8">
				<MarkdownEditor id={this.props.id ? this.props.id + '_editor' : null} submitButton />
			</Tab.Pane> : null }
			{this.props.tabs.map( ( e, i ) => {
				return ( <Tab.Pane key={i} eventKey={`${9+i}`}>
					{e.content}
				</Tab.Pane> );
			})}
		</Tab.Content>;

		return (
			<Row className="no-gutter data-explorer" style={{
				height: window.innerHeight * 0.95
			}}>
				{ this.props.questions ? <Col md={colWidth}><Pages
					title="Questions"
					height={470}
					bsSize="small"
					className="data-explorer-questions"
				>{this.props.questions}</Pages></Col> : null }
				<Col md={colWidth}>
					<Panel
						style={{ minHeight: window.innerHeight }}
					>
						<Panel.Heading>
							<Panel.Title componentClass="h3">Toolbox</Panel.Title>
						</Panel.Heading>
						<Panel.Body>
							<Tab.Container id="options-menu" defaultActiveKey={defaultActiveKey}>
								<Row className="clearfix">
									<Col sm={12}>
										{navbar}
									</Col>
									<Col sm={12}>
										{tabs}
									</Col>
								</Row>
							</Tab.Container>
						</Panel.Body>
					</Panel>
					<Gate owner>
						<Modal
							show={this.state.showStudentPlots}
							onHide={this.toggleStudentPlots}
							dialogClassName="fullscreen-modal"
						>
							<Modal.Header closeButton>
								<Modal.Title>Plots</Modal.Title>
							</Modal.Header>
							<Modal.Body style={{ height: 0.80 * window.innerHeight, overflowY: 'scroll' }}>
								{ this.state.studentPlots.length > 0 ?
									<GridLayout>
										{this.state.studentPlots.map( ( elem, idx ) => {
											const config = JSON.parse( elem.config );
											return (
												<div key={idx} style={{ height: '450px' }}>
													{
														isString( config ) ?
															<RPlot
																code={config}
																libraries={[ 'MASS' ]}
															/>:
															<Plotly
																data={config.data}
																layout={config.layout}
																removeButtons
																fit
															/>
													}
													<span>
														<b>Count: </b>{elem.count}
													</span>
												</div>
											);
										})}
									</GridLayout> :
									<Well>
										No plots have been created yet...
									</Well>
								}
							</Modal.Body>
							<Modal.Footer>
								<Button onClick={this.clearPlots}>Clear Plots</Button>
								<Button onClick={this.toggleStudentPlots}>Close</Button>
							</Modal.Footer>
						</Modal>
						<ButtonGroup bsSize="small" >
							<Button onClick={this.toggleStudentPlots} >Open Plots</Button>
						</ButtonGroup>
						<RealtimeMetrics returnFullObject for={this.props.id} onDatum={this.onUserAction} />
					</Gate>
				</Col>
				<Col md={colWidth}>
					<div className="panel panel-default" style={{ minHeight: window.innerHeight, padding: 0 }}>
						<div className="panel-heading">
							<h3 className="panel-title">Output</h3>
						</div>
						{OutputPanel( this.state.output, this.clearOutput )}
						<Button bsSize="small" block onClick={() => {
							this.setState({ output: []});
						}}>Clear All</Button>
					</div>
				</Col>
			</Row>
		);
	}
}


// DEFAULT PROPERTIES //

DataExplorer.defaultProps = {
	data: {},
	onSelect() {},
	tabs: [],
	questions: null,
	transformer: false,
	statistics: [
		'Mean',
		'Median',
		'Min',
		'Max',
		'Range',
		'Interquartile Range',
		'Standard Deviation',
		'Variance',
		'Correlation'
	],
	plots: [
		'Bar Chart',
		'Pie Chart',
		'Histogram',
		'Box Plot',
		'Scatterplot',
		'Heat Map',
		'Mosaic Plot'
	],
	tables: [
		'Frequency Table',
		'Contingency Table'
	],
	tests: [
		'One-Sample Mean Test',
		'One-Sample Proportion Test',
		'Two-Sample Mean Test',
		'Two-Sample Proportion Test',
		'Correlation Test',
		'Chi-squared Independence Test',
		'One-Way ANOVA'
	],
	models: [
		'Simple Linear Regression'
	],
	categorical: [],
	continuous: [],
	distributions: [ 'Normal', 'Uniform', 'Exponential' ],
	editorTitle: 'Report',
	histogramDensities: true,
	showEditor: false
};


// TYPES //

DataExplorer.propTypes = {
	categorical: PropTypes.array,
	continuous: PropTypes.array,
	data: PropTypes.object,
	distributions: PropTypes.array,
	editorTitle: PropTypes.string,
	histogramDensities: PropTypes.bool,
	models: PropTypes.array,
	onSelect: PropTypes.func,
	plots: PropTypes.array,
	questions: PropTypes.node,
	showEditor: PropTypes.bool,
	statistics: PropTypes.array,
	tables: PropTypes.array,
	tabs: PropTypes.array,
	tests: PropTypes.array,
	transformer: PropTypes.bool
};

DataExplorer.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default DataExplorer;

