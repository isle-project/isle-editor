// MODULES //

import React, { Component, Fragment, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Draggable from 'react-draggable';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tooltip from 'react-bootstrap/Tooltip';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isNumberArray from '@stdlib/assert/is-number-array';
import isObject from '@stdlib/assert/is-object';
import contains from '@stdlib/assert/contains';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import hasProp from '@stdlib/assert/has-property';
import startsWith from '@stdlib/string/starts-with';
import copy from '@stdlib/utils/copy';
import keys from '@stdlib/utils/keys';
import noop from '@stdlib/utils/noop';
import SelectInput from 'components/input/select';
import ContingencyTable from 'components/data-explorer/contingency_table';
import FrequencyTable from 'components/data-explorer/frequency_table';
import SummaryStatistics from 'components/data-explorer/summary_statistics';
import SimpleLinearRegression from 'components/data-explorer/linear_regression';
import VariableTransformer from 'components/data-explorer/variable-transformer';
import MarkdownEditor from 'components/markdown-editor';
import GridLayout from './grid_layout.js';
import Pages from 'components/pages';
import Gate from 'components/gate';
import RealtimeMetrics from 'components/metrics/realtime';
import Plotly from 'components/plotly';
import OverlayTrigger from 'components/overlay-trigger';
import RPlot from 'components/r/plot';
import DataTable from 'components/data-table';
import SessionContext from 'session/context.js';
import OutputPanel from './output_panel.js';
import createOutputElement from './create_output_element.js';
import formatFilters from './format_filters.js';
import './data_explorer.css';
const SpreadsheetUpload = lazy( () => import( 'components/spreadsheet-upload' ) );
const LearnNormalDistribution = lazy( () => import( 'components/learn/distribution-normal' ) );
const LearnExponentialDistribution = lazy( () => import( 'components/learn/distribution-exponential' ) );
const LearnUniformDistribution = lazy( () => import( 'components/learn/distribution-uniform' ) );


// PLOT COMPONENTS //

import Barchart, { generateBarchartConfig } from 'components/data-explorer/barchart';
import Boxplot, { generateBoxplotConfig } from 'components/data-explorer/boxplot';
import Heatmap, { generateHeatmapConfig } from 'components/data-explorer/heatmap';
import Histogram, { generateHistogramConfig } from 'components/data-explorer/histogram';
import Map, { generateMapConfig } from 'components/data-explorer/map';
import MosaicPlot, { generateMosaicPlotCode } from 'components/data-explorer/mosaicplot';
import Piechart, { generatePiechartConfig } from 'components/data-explorer/piechart';
import Scatterplot, { generateScatterplotConfig } from 'components/data-explorer/scatterplot';
import Violinplot, { generateViolinplotConfig } from 'components/data-explorer/violinplot';
import ContourChart, { generateContourChart } from 'components/data-explorer/contour.js';


// TEST COMPONENTS //

import MeanTest from 'components/data-explorer/meantest';
import MeanTest2 from 'components/data-explorer/meantest2';
import CorrTest from 'components/data-explorer/corrtest';
import Chi2Test from 'components/data-explorer/chi2';
import PropTest from 'components/data-explorer/proptest';
import PropTest2 from 'components/data-explorer/proptest2';
import Anova from 'components/data-explorer/anova';


// VARIABLES //

const debug = logger( 'isle:data-explorer' );


// MAIN //

/**
* This component is used by students to briefly summarize data as it is presented and perform various statistical tests.
*
* @property {Array} categorical - array of strings indicating the name of each categorical variable
* @property {Array} continuous - array of strings indicating the name of each continuous variable
* @property {(Object|Array)} data - data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column. If you wish to allow students the ability to import a `.csv` file, set the `data` option to be `false`
* @property {Object} dataInfo - object containing the keys \'name\', whose value is a string, \'info\', whose value is an array of strings in which each element in the array is a new line and \'variables\', an object with keys as variable names and values as variable descriptions
* @property {Array<string>} distributions - array of strings indicating distributions that may be used in calculating probabilities. This functionality exists independently of the dataset provided. Currently limited to normal, uniform and exponential distributions
* @property {Object} editorProps - object to be passed to `MarkdownEditor` indicating properties to be used
* @property {string} editorTitle - string indicating the title of the explorer to be displayed
* @property {boolean} hideDataTable - boolean value indicating whether to hide the data table from view
* @property {boolean} histogramDensities - boolean value indicating whether to display histogram densities
* @property {Array<string>} models - array of strings indicating models that may be fit on the data
* @property {string} opened - page opened at startup
* @property {Array<string>} plots - array of strings indicating which plots to show to the user
* @property {Node} questions - node indicating surrounding text and question components to be displayed in a tabbed window
* @property {boolean} showEditor - boolean indicating whether to show the editor to the user
* @property {boolean} showTestDecisions - boolean indicating whether to show the decisions made for each test based on the calculated p-values
* @property {Array<string>} statistics - array of strings indicating which summary statistics may be calculated
* @property {Array<string>} tables - array of strings indicating which tables may be created from the data
* @property {Array<Object>} tabs - array of objects and keys indicating any custom tabs to add
* @property {Array<string>} tests - array of strings indicating which hypothesis tests to include
* @property {boolean} transformer - boolean indicating whether one wants to display a variable transformer
*/
class DataExplorer extends Component {
	/**
	* Constructor function
	*/
	constructor( props ) {
		super( props );
		let data = props.data;
		let continuous;
		let categorical;
		let groupVars;
		if ( props.data ) {
			continuous = props.continuous;
			categorical = props.categorical;
			groupVars = props.categorical.slice();
		} else {
			continuous = [];
			categorical = [];
			groupVars = [];
		}
		let ready = false;
		if (
			isObject( data ) &&
			continuous.length > 0 &&
			categorical.length > 0
		) {
			ready = true;
		}
		this.state = {
			data: data,
			continuous: continuous,
			categorical: categorical,
			output: [],
			groupVars,
			ready,
			showStudentPlots: false,
			showToolbox: false,
			openedNav: props.opened || ( props.questions ? 'questions' : 'data' ),
			studentPlots: [],
			subsetFilters: null,
			unaltered: {
				data: props.data,
				continuous: props.continuous,
				categorical: props.categorical
			},
			filters: []
		};

		this.logAction = ( type, value ) => {
			if ( this.state.subsetFilters ) {
				value = { ...value, filters: this.state.subsetFilters };
			}
			const session = this.context;
			if ( this.props.id ) {
				session.log({
					id: this.props.id,
					type,
					value
				});
			}
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		const newState = {};
		if ( nextProps.data !== prevState.unaltered.data ) {
			newState.data = nextProps.data;
		}
		if ( nextProps.data ) {
			if ( nextProps.continuous !== prevState.unaltered.continuous ) {
				newState.continuous = nextProps.continuous;
			}
			if ( nextProps.categorical !== prevState.unaltered.categorical ) {
				newState.categorical = nextProps.categorical;
			}
		}
		if ( !isEmptyObject( newState ) ) {
			newState.unaltered = {
				data: nextProps.data,
				continuous: nextProps.continuous,
				categorical: nextProps.categorical
			};
			return newState;
		}
		return null;
	}

	componentDidMount() {
		const session = this.context;
		if ( !this.props.data && this.props.id ) {
			const promiseData = session.store.getItem( this.props.id+'_data' );
			const promiseContinuous = session.store.getItem( this.props.id+'_continuous' );
			const promiseCategorical = session.store.getItem( this.props.id+'_categorical' );
			Promise.all([ promiseData, promiseContinuous, promiseCategorical ])
				.then( ( values ) => {
					const data = values[ 0 ] || null;
					const continuous = values[ 1 ] || [];
					const categorical = values[ 2 ] || [];
					const groupVars = ( categorical || [] ).slice();
					this.setState({
						data, continuous, categorical, groupVars, ready: true
					});
				})
				.catch( ( err ) => {
					debug( err );
				});
		}
	}

	componentDidUpdate( prevProps, prevState ) {
		if ( this.state.output !== prevState.output && this.outputPanel ) {
			this.outputPanel.scrollToBottom();
		}
	}

	resetStorage = () => {
		const session = this.context;
		if ( this.props.id ) {
			session.store.removeItem( this.props.id+'_data' );
			session.store.removeItem( this.props.id+'_continuous' );
			session.store.removeItem( this.props.id+'_categorical' );
		}
		this.setState({
			data: null,
			categorical: [],
			continuous: [],
			ready: false
		});
	}

	/**
	* Display gallery of recently created plots by the students.
	*/
	toggleStudentPlots = () => {
		this.setState({
			showStudentPlots: !this.state.showStudentPlots
		});
	}

	toggleToolbox = () => {
		this.setState({
			showToolbox: !this.state.showToolbox
		});
	}

	/**
	* Remove output element at the specified index.
	*/
	clearOutput = ( idx ) => {
		let newOutputs = this.state.output.slice();
		newOutputs[ idx ] = null;
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
		let value = action.value;
		if ( isString( value ) ) {
			value = JSON.parse( value );
		}
		switch ( action.type ) {
		case 'DATA_EXPLORER_SHARE_BARCHART':
			config = generateBarchartConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_BOXPLOT':
			config = generateBoxplotConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_CONTOURCHART':
			config = generateContourChart({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_HEATMAP':
			config = generateHeatmapConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_HISTOGRAM':
			config = generateHistogramConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_MAP':
			config = generateMapConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_MOSAIC':
			config = generateMosaicPlotCode({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_PIECHART':
			config = generatePiechartConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_SCATTERPLOT':
			config = generateScatterplotConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_VIOLINPLOT':
			config = generateViolinplotConfig({ data: this.state.data, ...value });
		}
		if ( config ) {
			const newStudentPlots = this.state.studentPlots.slice();
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
	* Adds the supplied element to the array of outputs.
	*/
	addToOutputs = ( element ) => {
		const newOutput = this.state.output.slice();
		const onFilters = ( newFilters ) => {
			this.setState({
				filters: newFilters
			}, () => {
				this.onFilterCreate();
			});
		};
		element = createOutputElement( element, newOutput.length, this.clearOutput, this.state.subsetFilters, onFilters );
		newOutput.push( element );
		this.setState({
			output: newOutput
		});
	}

	onGenerateTransformedVariable = ( name, values ) => {
		if ( hasProp( this.props.data, name ) ) {
			const session = this.context;
			return session.addNotification({
				title: 'Variable exists',
				message: 'The original variables of the data set cannot be overwritten.',
				level: 'error',
				position: 'tr'
			});
		}
		let newData = copy( this.state.data );
		newData[ name ] = values;
		let groupVars;
		let previous;
		let newContinuous = this.state.continuous.slice();
		let newCategorical = this.state.categorical.slice();
		if ( isNumberArray( values ) ) {
			if ( !contains( newContinuous, name ) ) {
				newContinuous.push( name );
				previous = newCategorical.indexOf( name );
				if ( previous > 0 ) {
					newCategorical.splice( previous, 1 );
					groupVars = newCategorical.slice();
				}
			}
		} else {
			if ( !contains( newCategorical, name ) ) {
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
		const session = this.context;
		session.addNotification({
			title: 'Variable created',
			message: `The variable with the name ${name} has been successfully ${ previous > 0 ? 'overwritten' : 'created' }`,
			level: 'success',
			position: 'tr'
		});
	}

	deleteVariable = ( variable ) => {
		debug( 'Should remove variable with name '+variable );
		const session = this.context;
		session.addNotification({
			title: 'Variable removed',
			message: `The variable with the name ${variable} has been successfully removed`,
			level: 'success',
			position: 'tr'
		});
		const newData = copy( this.state.data );
		delete newData[ variable ];
		let newContinuous = this.state.continuous.filter( x => x !== variable );
		let newCategorical = this.state.categorical.filter( x => x !== variable );
		let newGroupVars = this.state.groupVars.filter( x => x !== variable );
		this.setState({
			data: newData,
			continuous: newContinuous,
			categorical: newCategorical,
			groupVars: newGroupVars
		});
	}

	onFileUpload = ( err, output ) => {
		const session = this.context;
		if ( !err ) {
			const data = {};
			const columnNames = keys( output[ 0 ] ).filter( x => x !== '' );
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
			}, () => {
				if ( this.props.id ) {
					session.store.setItem( this.props.id+'_data', this.state.data, debug );
				}
			});
		}
	}

	onFilterCreate = () => {
		let indices = new Set();
		for ( let i = 0; i < this.state.filters.length; i++ ) {
			const filter = this.state.filters[ i ];
			const col = this.state.data[ filter.id ];
			if ( contains( this.state.continuous, filter.id ) ) {
				// Case: We have a filter for a continuous variable, which has a min and max value
				for ( let z = 0; z < col.length; z++ ) {
					if ( col[ z ] < filter.value.min || col[ z ] > filter.value.max ) {
						indices.add( z );
					}
				}
			} else {
				// Case: We have a categorical variable
				for ( let z = 0; z < col.length; z++ ) {
					if ( col[ z ] !== filter.value ) {
						indices.add( z );
					}
				}
			}
		}
		const vars = keys( this.state.data );
		const newData = {};
		const nOriginal = this.state.data[ vars[0] ].length;
		for ( let c = 0; c < vars.length; c++ ) {
			const varName = vars[ c ];
			newData[ varName ] = [];
		}
		for ( let j = 0; j < nOriginal; j++ ) {
			if ( !indices.has(j) ) {
				for ( let colInd = 0; colInd < vars.length; colInd++ ) {
					let varName = vars[colInd];
					newData[ varName ].push( this.state.data[ varName ][ j ] );
				}
			}
		}
		this.setState({
			data: newData,
			subsetFilters: this.state.filters
		});
	}

	onRestoreData = () => {
		this.setState({
			data: this.props.data,
			subsetFilters: null,
			filters: []
		});
	}

	on2dSelection = ( names, selected ) => {
		const newFilters = [];
		newFilters.push({
			id: names.x,
			value: {
				min: selected.range.x[ 0 ],
				max: selected.range.x[ 1 ]
			}
		});
		newFilters.push({
			id: names.y,
			value: {
				min: selected.range.y[ 0 ],
				max: selected.range.y[ 1 ]
			}
		});
		this.setState({
			filters: newFilters
		});
	}

	/**
	* React component render method.
	*/
	render() {
		if ( !this.state.data ) {
			return (
				<Suspense fallback={<div>Loading...</div>} >
					<SpreadsheetUpload
						title="Data Explorer"
						onUpload={this.onFileUpload}
					/>
				</Suspense>
			);
		}
		if ( !this.state.ready ) {
			const variableNames = Object.keys( this.state.data );
			return ( <Card>
				<Card.Header as="h3">
					Data Explorer
				</Card.Header>
				<Card.Body>
					<h4>Please select which variables should be treated as numeric and which ones as categorical:</h4>
					<SelectInput
						legend="Continuous:"
						options={variableNames}
						defaultValue={this.state.continuous}
						multi
						onChange={( continuous ) => {
							this.setState({ continuous });
						}}
					/>
					<SelectInput
						legend="Categorical:"
						options={variableNames}
						defaultValue={this.state.categorical}
						multi
						onChange={( categorical ) => {
							this.setState({ categorical });
						}}
					/>
					<Button onClick={() => {
						const groupVars = this.state.categorical.slice();
						const ready = true;
						this.setState({
							groupVars,
							ready
						}, () => {
							if ( this.props.id ) {
								const session = this.context;
								session.store.setItem( this.props.id+'_continuous', this.state.continuous, debug );
								session.store.setItem( this.props.id+'_categorical', this.state.categorical, debug );
							}
						});
					}}>Submit</Button>
					<DataTable data={this.state.data} id={this.props.id ? this.props.id + '_table' : null} />
				</Card.Body>
			</Card> );
		}
		let nStatistics = this.props.statistics.length;
		let defaultActiveKey = '1';
		if ( nStatistics === 0 ) {
			defaultActiveKey = '2';
		}
		const categoricalProps = {
			data: this.state.data,
			variables: this.state.categorical,
			groupingVariables: this.state.groupVars,
			onCreated: this.addToOutputs,
			onPlotDone: this.outputPanel ? this.outputPanel.scrollToBottom : noop
		};
		const continuousProps = {
			data: this.state.data,
			variables: this.state.continuous,
			groupingVariables: this.state.groupVars,
			onCreated: this.addToOutputs,
			onPlotDone: this.outputPanel ? this.outputPanel.scrollToBottom : noop
		};

		const navbar = <Nav variant="tabs">
			{ nStatistics > 0 ?
				<Nav.Item>
					<Nav.Link eventKey="1">Statistics</Nav.Link>
				</Nav.Item> : null
			}
			{ this.props.tables.length > 0 && this.state.categorical.length > 0 ?
				<NavDropdown
					eventKey="2"
					title="Tables"
				>
					{ this.props.tables.map(
						( e, i ) => <DropdownItem key={i} eventKey={`2.${i+1}`}>{e}</DropdownItem>
					) }
				</NavDropdown> : null
			}
			{ this.props.plots.length > 0 ?
				<NavDropdown
					eventKey="3"
					title="Plots"
				>
					{ this.props.plots.map(
						( e, i ) => <DropdownItem key={i} eventKey={`3.${i+1}`}>{e}</DropdownItem>
					) }
				</NavDropdown> : null
			}
			{ this.props.tests.length > 0 ?
				<NavDropdown
					eventKey="4"
					title="Tests"
				>
					{ this.props.tests.map(
						( e, i ) => <DropdownItem key={i} eventKey={`4.${i+1}`}>{e}</DropdownItem>
					) }
				</NavDropdown> : null
			}
			{ this.props.models.length > 0 ?
				<NavDropdown
					eventKey="5"
					title="Models"
				>
					{this.props.models.map( ( e, i ) =>
						<DropdownItem key={i} eventKey={`5.${i+1}`}>{e}</DropdownItem> )}
				</NavDropdown> : null
			}
			{ this.props.transformer ?
				<Nav.Item>
					<Nav.Link eventKey="6">Transform</Nav.Link>
				</Nav.Item> : null
			}
		</Nav>;

		const tabs = <Tab.Content>
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
						session={this.context}
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
						session={this.context}
						onSelected={( name, selected ) => {
							const newFilters = [];
							newFilters.push({
								id: name,
								value: selected.range.x
							});
							this.setState({
								filters: newFilters
							});
						}}
					/>;
					break;
				case 'Box Plot':
					content = <Boxplot
						{...continuousProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Contour Chart':
					content = <ContourChart
						{...continuousProps}
						logAction={this.logAction}
						session={this.context}
						onSelected={this.on2dSelection}
					/>;
					break;
				case 'Heat Map':
					content = <Heatmap
						{...continuousProps}
						logAction={this.logAction}
						session={this.context}
						onSelected={this.on2dSelection}
					/>;
					break;
				case 'Histogram':
					content = <Histogram
						{...continuousProps}
						logAction={this.logAction}
						session={this.context}
						showDensityOption={this.props.histogramDensities}
						onSelected={( name, selected ) => {
							const newFilters = [];
							newFilters.push({
								id: name,
								value: {
									min: selected.range.x[ 0 ],
									max: selected.range.x[ 1 ]
								}
							});
							this.setState({
								filters: newFilters
							});
						}}
					/>;
					break;
				case 'Mosaic Plot':
					content = <MosaicPlot
						{...categoricalProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Pie Chart':
					content = <Piechart
						{...categoricalProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Scatterplot':
					content = <Scatterplot
						{...continuousProps}
						logAction={this.logAction}
						session={this.context}
						onSelected={this.on2dSelection}
					/>;
					break;
				case 'Violin Plot':
					content = <Violinplot
						{...continuousProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Map':
					content = <Map
						{...continuousProps}
						logAction={this.logAction}
						session={this.context}
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
					content = <MeanTest
						onCreated={this.addToOutputs}
						data={this.state.data}
						continuous={this.state.continuous}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'Two-Sample Mean Test':
					content = <MeanTest2
						onCreated={this.addToOutputs}
						data={this.state.data}
						continuous={this.state.continuous}
						categorical={this.state.categorical}
						logAction={this.logAction}
						session={this.context}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'One-Sample Proportion Test':
					content = <PropTest
						onCreated={this.addToOutputs}
						data={this.state.data}
						categorical={this.state.categorical}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'Two-Sample Proportion Test':
					content = <PropTest2
						onCreated={this.addToOutputs}
						data={this.state.data}
						categorical={this.state.categorical}
						logAction={this.logAction}
						session={this.context}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'One-Way ANOVA':
					content = <Anova
						onCreated={this.addToOutputs}
						data={this.state.data}
						continuous={this.state.continuous}
						categorical={this.state.categorical}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'Correlation Test':
					content = <CorrTest
						onCreated={this.addToOutputs}
						data={this.state.data}
						continuous={this.state.continuous}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'Chi-squared Independence Test':
					content = <Chi2Test
						onCreated={this.addToOutputs}
						data={this.state.data}
						categorical={this.state.categorical}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
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
						session={this.context}
					/>;
					break;
				}
				return ( <Tab.Pane key={i} eventKey={`5.${i+1}`}>
					{content}
				</Tab.Pane> );
			})}
			{ this.props.transformer ?
				<Tab.Pane eventKey="6" >
					<VariableTransformer
						data={this.state.data}
						continuous={this.state.continuous}
						categorical={this.state.categorical}
						logAction={this.logAction}
						session={this.context}
						onGenerate={this.onGenerateTransformedVariable}
					/>
				</Tab.Pane> : null
			}
		</Tab.Content>;
		const mainContainer = <Row className="no-gutter data-explorer">
			<Col xs={6} md={6}>
				<Card>
					<Navbar className="data-explorer-navbar" onSelect={( eventKey => this.setState({ openedNav: eventKey }))}>
						<Nav>
							{ this.props.questions ? <Nav.Item className="explorer-data-nav">
								<Nav.Link eventKey="questions" active={this.state.openedNav === 'questions'}>Questions</Nav.Link>
							</Nav.Item> : null }
							{ !this.props.hideDataTable ? <Nav.Item className="explorer-data-nav" >
								<Nav.Link eventKey="data" active={this.state.openedNav === 'data'}>Data</Nav.Link>
							</Nav.Item> : null }
							{ this.props.distributions.length > 0 ?
								<NavDropdown
									eventKey="distributions"
									title="Distributions"
									active={startsWith( this.state.openedNav, 'distributions' )}
								>
									{this.props.distributions.map( ( e, i ) =>
										<NavDropdown.Item key={i} eventKey={`distributions.${i+1}`}>{e}</NavDropdown.Item> )}
								</NavDropdown> : null
							}
							{ this.props.showEditor ?
								<Nav.Item className="explorer-editor-nav">
									<Nav.Link
										active={this.state.openedNav === 'editor'}
										eventKey="editor"
									>{this.props.editorTitle}</Nav.Link>
								</Nav.Item> : null
							}
							{ this.props.tabs.length > 0 ? this.props.tabs.map( ( e, i ) => {
								return (
									<Nav.Item key={i} className="explorer-tabs-nav">
										<Nav.Link
											active={this.state.openedNav === e.title}
											eventKey={e.title}
										>{e.title}</Nav.Link>
									</Nav.Item>
								);
							}) : null }
						</Nav>
						<Button variant="secondary" size="sm" style={{ position: 'absolute', right: '20px' }} onClick={this.toggleToolbox} >{this.state.showToolbox ? 'Hide Toolbox' : 'Show Toolbox' }</Button>
					</Navbar>
					<Card.Body>
						<Pages
							id={this.props.id ? this.props.id + '_questions' : null}
							height={470}
							size="small"
							className="data-explorer-questions"
							style={{
								display: this.state.openedNav !== 'questions' ? 'none' : null
							}}
						>{this.props.questions}</Pages>
						<div
							style={{
								display: this.state.openedNav !== 'data' ? 'none' : null
							}}
						>
								{ !this.props.data ? <Button size="small" onClick={this.resetStorage} style={{ position: 'absolute', top: '70px' }}>Clear Data</Button> : null }
								<DataTable
									data={this.state.data}
									dataInfo={this.props.dataInfo}
									filters={this.state.filters}
									onFilteredChange={(filtered) => {
										this.setState({
											filters: filtered
										}, () => {
											console.log(this.state.filters);
										});
									}}
									onColumnDelete={this.deleteVariable}
									deletable
									id={this.props.id ? this.props.id + '_table' : null}
								/>
								{ this.state.filters.length > 0 ?
									<OverlayTrigger placement="top" overlay={<Tooltip>Create new dataset from currently active filters</Tooltip>} >
										<Button
											onClick={this.onFilterCreate}
											variant="secondary"
											size="xsmall"
										>
											Create filtered dataset
										</Button>
									</OverlayTrigger> : null
								}
								{ this.state.subsetFilters ? <OverlayTrigger placement="top" overlay={<Tooltip>Restore original dataset with all observations</Tooltip>} >
									<Button
										onClick={this.onRestoreData}
										variant="secondary"
										size="xsmall"
									>
										Restore original dataset
									</Button>
								</OverlayTrigger> : null }
								{ this.state.subsetFilters ? <pre className="data-explorer-subset-filter-display">
									{formatFilters( this.state.subsetFilters )}
								</pre> : null }
						</div>
						{this.props.distributions.map( ( e, i ) => {
							let content = null;
							switch ( e ) {
							case 'Normal':
								content = <LearnNormalDistribution step="any" />;
								break;
							case 'Uniform':
								content = <LearnUniformDistribution step="any" />;
								break;
							case 'Exponential':
								content = <LearnExponentialDistribution step="any" />;
								break;
							}
							return ( this.state.openedNav === `distributions.${i+1}` ?
								<Suspense fallback={<div>Loading...</div>} >{content}</Suspense> : null );
						})}
						{ this.props.showEditor ?
						<MarkdownEditor {...this.props.editorProps}
							plots={this.state.output}
							id={this.props.id ? this.props.id + '_editor' : null}
							style={{ display: this.state.openedNav !== 'editor' ? 'none' : null }}
							submitButton /> : null
						}
						{this.props.tabs.map( ( e, i ) => {
							return ( this.state.openedNav === e.title ?
								e.content : null );
						})}
					</Card.Body>
				</Card>
			</Col>
			<Col xs={6} md={6}>
				<div className="card card-default" style={{ minHeight: window.innerHeight*0.9, padding: 0 }}>
					<div className="card-header clearfix">
						<h3 className="data-explorer-output-header">Output</h3>
						<Gate owner>
							<Modal
								show={this.state.showStudentPlots}
								onHide={this.toggleStudentPlots}
								dialogClassName="modal-100w"
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
																/>
														}
														<span>
															<b>Count: </b>{elem.count}
														</span>
													</div>
												);
											})}
										</GridLayout> :
										<Card body className="bg-light">
											No plots have been created yet...
										</Card>
									}
								</Modal.Body>
								<Modal.Footer>
									<Button variant="danger" onClick={this.clearPlots}>Clear Plots</Button>
									<Button onClick={this.toggleStudentPlots}>Close</Button>
								</Modal.Footer>
							</Modal>
							<Button variant="secondary" size="sm" style={{ float: 'right' }} onClick={this.toggleStudentPlots} >Open Shared Plots</Button>
							<RealtimeMetrics returnFullObject for={this.props.id} onDatum={this.onUserAction} />
						</Gate>
					</div>
					<OutputPanel output={this.state.output} ref={( div ) => {
						this.outputPanel = div;
					}} />
					<Button size="sm" variant="outline-danger" block onClick={() => {
						this.setState({ output: []});
					}}>Clear All</Button>
				</div>
			</Col>
		</Row>;

		return (
			<Fragment>
				{mainContainer}
				<Draggable cancel=".input" enableUserSelectHack={false} >
					<Card
						border="secondary"
						className="data-explorer-toolbox"
						style={{ display: this.state.showToolbox ? 'inline' : 'none' }}
					>
						<Card.Header style={{ height: '55px' }}>
							<Card.Title as="h3" style={{ position: 'absolute', left: '20px' }}>Toolbox</Card.Title>
							<Button variant="secondary" size="sm" style={{ position: 'absolute', right: '20px' }}onClick={this.toggleToolbox} >Hide Toolbox</Button>
						</Card.Header>
						<Card.Body style={{ paddingBottom: '0px' }}>
							<Tab.Container defaultActiveKey={defaultActiveKey}>
								{navbar}
								{tabs}
							</Tab.Container>
						</Card.Body>
					</Card>
				</Draggable>
			</Fragment>
		);
	}
}


// PROPERTIES //

DataExplorer.defaultProps = {
	data: {},
	dataInfo: {
		'info': '',
		'name': '',
		'variables': null
	},
	hideDataTable: false,
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
		'Mosaic Plot',
		'Contour Chart'
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
	opened: null,
	categorical: [],
	continuous: [],
	distributions: [ 'Normal', 'Uniform', 'Exponential' ],
	editorProps: null,
	editorTitle: 'Report',
	histogramDensities: true,
	showEditor: false,
	showTestDecisions: true
};

DataExplorer.propTypes = {
	categorical: PropTypes.array,
	continuous: PropTypes.array,
	data: PropTypes.object,
	dataInfo: PropTypes.object,
	distributions: PropTypes.array,
	editorProps: PropTypes.object,
	editorTitle: PropTypes.string,
	hideDataTable: PropTypes.bool,
	histogramDensities: PropTypes.bool,
	models: PropTypes.array,
	opened: PropTypes.oneOf([ 'data', 'toolbox', 'editor' ]),
	plots: PropTypes.array,
	questions: PropTypes.node,
	showEditor: PropTypes.bool,
	showTestDecisions: PropTypes.bool,
	statistics: PropTypes.array,
	tables: PropTypes.array,
	tabs: PropTypes.array,
	tests: PropTypes.array,
	transformer: PropTypes.bool
};

DataExplorer.contextType = SessionContext;


// EXPORTS //

export default DataExplorer;
