/* eslint-disable max-lines */

// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
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
import isObjectArray from '@stdlib/assert/is-object-array';
import isObject from '@stdlib/assert/is-object';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isJSON from '@stdlib/assert/is-json';
import hasProp from '@stdlib/assert/has-property';
import copy from '@stdlib/utils/copy';
import objectKeys from '@stdlib/utils/keys';
import noop from '@stdlib/utils/noop';
import incrspace from '@stdlib/math/utils/incrspace';
import generateUID from 'utils/uid';
import Loadable from 'components/internal/loadable';
import Draggable from 'components/draggable';
import SelectInput from 'components/input/select';
const ContingencyTable = Loadable( () => import( 'components/data-explorer/menu/contingency_table' ) );
const FrequencyTable = Loadable( () => import( 'components/data-explorer/menu/frequency_table' ) );
const SummaryStatistics = Loadable( () => import( 'components/data-explorer/summary_statistics' ) );
const VariableTransformer = Loadable( () => import( 'components/data-explorer/variable-transformer' ) );
const ToolboxTutorialButton = Loadable( () => import( 'components/data-explorer/toolbox-tutorial-button' ) );
const TextEditor = Loadable( () => import( 'components/text-editor' ) );
import GridLayout from './grid_layout.js';
import Pages from 'components/pages';
import Gate from 'components/gate';
import RealtimeMetrics from 'components/metrics/realtime';
import Plotly from 'components/plotly';
import OverlayTrigger from 'components/overlay-trigger';
const SpreadsheetUpload = Loadable( () => import( 'components/spreadsheet-upload' ) );
const RPlot = Loadable( () => import( 'components/r/plot' ) );
const DataTable = Loadable( () => import( 'components/data-table' ) );
import SessionContext from 'session/context.js';
import OutputPanel from './output_panel.js';
import History from './history';
import createOutputElement from './create_output_element.js';
import FilterList from './filter_list.js';
import valuesFromFormula from './variable-transformer/values_from_formula.js';
import retrieveBinnedValues from './variable-transformer/retrieve_binned_values.js';
import recodeCategorical from './variable-transformer/recode_categorical.js';
import { DATA_EXPLORER_BIN_TRANSFORMER, DATA_EXPLORER_CAT_TRANSFORMER,
	DATA_EXPLORER_DELETE_VARIABLE, DATA_EXPLORER_VARIABLE_TRANSFORMER } from 'constants/actions.js';
import { RETRIEVED_CURRENT_USER_ACTIONS } from 'constants/events.js';
import './load_translations.js';
import './data_explorer.css';


// MODEL COMPONENTS //

const DecisionTree = Loadable( () => import( 'components/data-explorer/menu/decision_tree.js' ) );
const LassoRegression = Loadable( () => import( 'components/data-explorer/menu/lasso_regression.js' ) );
const LogisticRegression = Loadable( () => import( 'components/data-explorer/menu/logistic_regression' ) );
const MultipleLinearRegression = Loadable( () => import( 'components/data-explorer/menu/multiple_linear_regression' ) );
const RandomForest = Loadable( () => import( 'components/data-explorer/menu/random_forest.js' ) );
const SimpleLinearRegression = Loadable( () => import( 'components/data-explorer/menu/simple_linear_regression' ) );
const PrincipalComponentAnalysis = Loadable( () => import( 'components/data-explorer/menu/principal_component_analysis' ) );
const HierarchicalClustering = Loadable( () => import( 'components/data-explorer/menu/hierarchical_clustering.js' ) );
const KMeans = Loadable( () => import( 'components/data-explorer/menu/kmeans' ) );
const NaiveBayes = Loadable( () => import( 'components/data-explorer/menu/naive_bayes.js' ) );


// PLOT COMPONENTS //

import Barchart from 'components/data-explorer/menu/barchart';
import { generateBarchartConfig } from 'components/plots/barchart';
import Boxplot from 'components/data-explorer/menu/boxplot';
import { generateBoxplotConfig } from 'components/plots/boxplot';
import Heatmap from 'components/data-explorer/menu/heatmap';
import { generateHeatmapConfig } from 'components/plots/heatmap';
import Histogram from 'components/data-explorer/menu/histogram';
import { generateHistogramConfig } from 'components/plots/histogram';
import Lineplot from 'components/data-explorer/menu/lineplot';
import { generateLineplotConfig } from 'components/plots/lineplot';
import Map from 'components/data-explorer/menu/map';
import { generateMapConfig } from 'components/plots/map';
import MosaicPlot from 'components/data-explorer/menu/mosaicplot';
import { generateMosaicPlotCode } from 'components/plots/mosaicplot';
import Piechart from 'components/data-explorer/menu/piechart';
import { generatePiechartConfig } from 'components/plots/piechart';
import QQPlot from 'components/data-explorer/menu/qqplot';
import { generateQQPlotConfig } from 'components/plots/qqplot';
import Scatterplot from 'components/data-explorer/menu/scatterplot';
import { generateScatterplotConfig } from 'components/plots/scatterplot';
import ScatterplotMatrix from 'components/data-explorer/menu/scatterplot_matrix';
import { generateScatterplotMatrixConfig } from 'components/plots/scatterplot-matrix';
import Violinplot from 'components/data-explorer/menu/violinplot';
import { generateViolinplotConfig } from 'components/plots/violinplot';
import ContourChart from 'components/data-explorer/menu/contourchart.js';
import { generateContourChart } from 'components/plots/contourchart';


// TEST COMPONENTS //

const Anova = Loadable( () => import( 'components/data-explorer/menu/anova' ) );
const Chi2Test = Loadable( () => import( 'components/data-explorer/menu/chi2' ) );
const CorrTest = Loadable( () => import( 'components/data-explorer/menu/corrtest' ) );
const Kruskal = Loadable( () => import( 'components/data-explorer/menu/kruskal' ) );
const MeanTest = Loadable( () => import( 'components/data-explorer/menu/meantest' ) );
const MeanTest2 = Loadable( () => import( 'components/data-explorer/menu/meantest2' ) );
const PropTest = Loadable( () => import( 'components/data-explorer/menu/proptest' ) );
const PropTest2 = Loadable( () => import( 'components/data-explorer/menu/proptest2' ) );


// VARIABLES //

const debug = logger( 'isle:data-explorer' );
const uid = generateUID( 'data-explorer' );


// FUNCTIONS //

function checkVariables( data, variables ) {
	if ( variables.length === 0 ) {
		return true;
	}
	const keys = objectKeys( data );
	for ( let i = 0; i < variables.length; i++ ) {
		if ( !contains( keys, String( variables[ i ] ) ) ) {
			return false;
		}
	}
	return true;
}


// MAIN //

/**
* This component is used by students to briefly summarize data as it is presented and perform various statistical tests.
*
* @property {Array} categorical - array of strings indicating the name of each categorical variable
* @property {Array} quantitative - array of strings indicating the name of each quantitative variable
* @property {(Object|Array)} data - data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column. If you wish to allow students the ability to import a `.csv` file, set the `data` option to be `false`
* @property {Object} dataInfo - object containing the keys \'name\', whose value is a string, \'info\', whose value is an array of strings in which each element in the array is a new line and \'variables\', an object with keys as variable names and values as variable descriptions
* @property {boolean} editor - boolean indicating whether to show the editor to the user
* @property {Object} editorProps - object of properties to be passed to the `TextEditor` (see documentation for <TextEditor />)
* @property {string} editorTitle - string indicating the title of the explorer to be displayed
* @property {string} reportMode - controls whether to sync editor changes for everyone (`collaborative`), across users in groups (`group`), or not (`individual`)
* @property {boolean} dataTable - boolean value indicating whether to hide the data table from view
* @property {Object} dataTableProps - properties passed to the data table component (see documentation for <DataTable />)
* @property {boolean} history - controls whether to display a history log of carried out actions
* @property {boolean} histogramDensities - boolean value indicating whether to display histogram densities
* @property {Array<string>} models - array of strings indicating models that may be fit on the data
* @property {string} opened - page opened at startup
* @property {Array<string>} plots - array of strings indicating which plots to show to the user
* @property {Array<node>} questions - array of nodes indicating surrounding text and question components to be displayed in a tabbed window
* @property {boolean} showTestDecisions - boolean indicating whether to show the decisions made for each test based on the calculated p-values
* @property {Array<string>} statistics - array of strings indicating which summary statistics may be calculated
* @property {Array<string>} tables - array of strings indicating which tables may be created from the data
* @property {Array<Object>} tabs - array of objects and keys indicating any custom tabs to add
* @property {Array<string>} tests - array of strings indicating which hypothesis tests to include
* @property {boolean} transformer - boolean indicating whether to display variable transformation tools
* @property {Function} onTutorialCompletion - function invoked when user has completed the data explorer tutorial
* @property {Function} onTutorialStart - function invoked when user starts the data explorer tutorial
* @property {Object} style - CSS inline styles for main container
*/
class DataExplorer extends Component {
	/**
	* Constructor function
	*/
	constructor( props ) {
		super( props );
		let data = props.data;
		let quantitative;
		let categorical;
		let groupVars;
		if ( props.data ) {
			quantitative = props.quantitative;
			categorical = props.categorical;
			groupVars = props.categorical.slice();
		} else {
			quantitative = [];
			categorical = [];
			groupVars = [];
		}
		let ready = false;
		let validVariables = true;
		if (
			isObject( data ) &&
			( quantitative.length > 0 || categorical.length > 0 )
		) {
			ready = true;
			validVariables = checkVariables( data, quantitative.concat( categorical ) );
		}
		this.id = props.id || uid( props );
		this.state = {
			data: data,
			quantitative: quantitative,
			categorical: categorical,
			validVariables,
			output: [],
			groupVars,
			ready,
			showStudentPlots: false,
			showToolbox: false,
			disableToolbarDragging: false,
			openedNav: props.opened || ( isArray( props.questions ) && props.questions.length > 0 ? 'questions' : 'data' ),
			studentPlots: [],
			subsetFilters: null,
			unaltered: {
				data: props.data,
				quantitative: props.quantitative,
				categorical: props.categorical
			},
			filters: []
		};

		this.logAction = ( type, value ) => {
			if ( this.state.subsetFilters ) {
				value = { ...value, filters: this.state.subsetFilters };
			}
			const session = this.context;
			session.log({
				id: this.id,
				type,
				value
			});
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		const newState = {};
		if (
			nextProps.data !== prevState.unaltered.data
		) {
			newState.data = nextProps.data;
		}
		if ( nextProps.data ) {
			if ( nextProps.quantitative !== prevState.unaltered.quantitative ) {
				newState.quantitative = nextProps.quantitative;
			}
			if ( nextProps.categorical !== prevState.unaltered.categorical ) {
				newState.categorical = nextProps.categorical;
			}
			newState.validVariables = checkVariables(
				nextProps.data,
				nextProps.quantitative.concat( nextProps.categorical )
			);
		}
		if ( !isEmptyObject( newState ) ) {
			newState.unaltered = {
				data: nextProps.data,
				quantitative: nextProps.quantitative,
				categorical: nextProps.categorical
			};
			return newState;
		}
		return null;
	}

	componentDidMount() {
		const session = this.context;
		if ( !this.props.data ) {
			const promiseData = session.store.getItem( this.id+'_data' );
			const promisequantitative = session.store.getItem( this.id+'_quantitative' );
			const promiseCategorical = session.store.getItem( this.id+'_categorical' );
			Promise.all([ promiseData, promisequantitative, promiseCategorical ])
				.then( ( values ) => {
					const data = values[ 0 ] || null;
					const quantitative = values[ 1 ] || [];
					const categorical = values[ 2 ] || [];
					const groupVars = ( categorical || [] ).slice();
					this.setState({
						data, quantitative, categorical, groupVars, ready: true
					});
				})
				.catch( ( err ) => {
					debug( err );
				});
		}
		if ( session.currentUserActions ) {
			const actions = session.currentUserActions[ this.id ];
			if ( this.props.data && isObjectArray( actions ) ) {
				this.restoreTransformations( actions );
			}
		}
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === RETRIEVED_CURRENT_USER_ACTIONS ) {
				const currentUserActions = value;
				const actions = currentUserActions[ this.id ];
				if ( this.props.data && isObjectArray( actions ) ) {
					this.restoreTransformations( actions );
				}
			}
		});
	}

	componentDidUpdate( prevProps, prevState ) {
		debug( 'Component did update...' );
		if ( this.state.output !== prevState.output && this.outputPanel ) {
			this.outputPanel.scrollToBottom();
		}
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	restoreTransformations = ( actions ) => {
		let state = this.state;
		debug( 'Restoring transformations...' );
		for ( let i = actions.length - 1; i >= 0; i-- ) {
			const action = actions[ i ];
			switch ( action.type ) {
				case DATA_EXPLORER_VARIABLE_TRANSFORMER:
					debug( `Should add transformed variable ${action.value.name}` );
					if ( !hasProp( this.props.data, action.value.name ) ) {
						const values = valuesFromFormula( action.value.code, state.data );
						state = this.transformVariable( action.value.name, values, state );
					}
				break;
				case DATA_EXPLORER_BIN_TRANSFORMER: {
					const { name, variable, breaks, catNames } = action.value;
					debug( `Should add binned variable ${name}` );
					if ( !hasProp( this.props.data, name ) ) {
						const rawData = state.data[ variable ];
						const values = retrieveBinnedValues( rawData, catNames, breaks );
						state = this.transformVariable( name, values, state );
					}
				}
				break;
				case DATA_EXPLORER_CAT_TRANSFORMER: {
					const { name, firstVar, secondVar, nameMappings, castNumeric } = action.value;
					debug( `Should add recoded variable ${name}` );
					if ( !hasProp( this.props.data, name ) ) {
						if ( state.data[ firstVar ]) {
							const values = recodeCategorical( firstVar, secondVar, nameMappings, state.data, castNumeric );
							state = this.transformVariable( name, values, state );
						}
					}
				}
				break;
				case DATA_EXPLORER_DELETE_VARIABLE:
					state = this.deleteVariable( action.value, state );
				break;
			}
		}
		state.data = copy( state.data, 1 );
		this.setState( state );
	}

	resetStorage = () => {
		const session = this.context;
		session.store.removeItem( this.id+'_data' );
		session.store.removeItem( this.id+'_quantitative' );
		session.store.removeItem( this.id+'_categorical' );
		this.setState({
			data: null,
			categorical: [],
			quantitative: [],
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
		if ( isJSON( value ) ) {
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
		case 'DATA_EXPLORER_SHARE_LINEPLOT':
			config = generateLineplotConfig({ data: this.state.data, ...value });
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
		case 'DATA_EXPLORER_SHARE_QQPLOT':
			config = generateQQPlotConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_SCATTERPLOT':
			config = generateScatterplotConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_SPLOM':
			config = generateScatterplotMatrixConfig({ data: this.state.data, ...value });
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

	onFilters = ( newFilters ) => {
		this.setState({
			filters: newFilters
		}, this.onFilterCreate );
	}

	/**
	* Adds the supplied element to the array of outputs.
	*/
	addToOutputs = ( val ) => {
		const newOutput = this.state.output.slice();
		if ( isArray( val ) ) {
			for ( let i = 0; i < val.length; i++ ) {
				const element = createOutputElement( val[ i ], newOutput.length, this.clearOutput, this.state.subsetFilters, this.onFilters );
				newOutput.push( element );
			}
		} else {
			const element = createOutputElement( val, newOutput.length, this.clearOutput, this.state.subsetFilters, this.onFilters );
			newOutput.push( element );
		}
		this.setState({
			output: newOutput
		});
	}

	transformVariable = ( name, values, varState ) => {
		let newQuantitative;
		let newCategorical;
		let groupVars;
		let newData;
		debug( `Attach transformed variable ${name} to data...` );
		if ( !varState ) {
			newData = copy( this.state.data, 1 );
			newQuantitative = this.state.quantitative.slice();
			newCategorical = this.state.categorical.slice();
			groupVars = this.state.groupVars.slice();
		} else {
			newData = copy( varState.data, 1 );
			newQuantitative = varState.quantitative.slice();
			newCategorical = varState.categorical.slice();
			groupVars = varState.groupVars.slice();
		}
		newData[ name ] = values;
		let previous;
		if ( isNumberArray( values ) ) {
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
				previous = newCategorical.indexOf( name );
				if ( previous > 0 ) {
					newCategorical.splice( previous, 1 );
					groupVars = newCategorical.slice();
				}
			}
		} else {
			if ( !contains( newCategorical, name ) ) {
				newCategorical.push( name );
				previous = newQuantitative.indexOf( name );
				if ( previous > 0 ) {
					newQuantitative.splice( previous, 1 );
				}
			}
			groupVars = newCategorical.slice();
		}
		const newVarState = {
			data: newData,
			categorical: newCategorical,
			quantitative: newQuantitative,
			groupVars: groupVars
		};
		return newVarState;
	}

	onGenerateTransformedVariable = ( name, values ) => {
		const session = this.context;
		if ( hasProp( this.props.data, name ) ) {
			return session.addNotification({
				title: this.props.t('variable-exists'),
				message: this.props.t('variable-exists-msg'),
				level: 'error',
				position: 'tr'
			});
		}
		session.addNotification({
			title: this.props.t('variable-created'),
			message: this.props.t('variable-created-msg', {
				name
			}),
			level: 'success',
			position: 'tr'
		});
		this.setState({ ...this.transformVariable( name, values ) });
	}

	onColumnDelete = ( variable ) => {
		debug( 'Should remove variable with name '+variable );
		const session = this.context;
		this.logAction( DATA_EXPLORER_DELETE_VARIABLE, variable );
		session.addNotification({
			title: this.props.t('variable-removed'),
			message: this.props.t('variable-removed-msg', {
				variable
			}),
			level: 'success',
			position: 'tr'
		});
		const varState = this.deleteVariable( variable );
		varState.data = copy( varState.data, 1 );
		this.setState( varState );
	}

	onColumnNameChange = ( oldName, newName ) => {
		const state = this.state;
		const keys = objectKeys( this.state.data );
		const newData = {};
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			if ( key === oldName ) {
				newData[ newName ] = this.state.data[ oldName ];
			} else {
				newData[ key ] = this.state.data[ key ];
			}
		}
		const newQuantitative = state.quantitative.map( x => x === oldName ? newName : x );
		const newCategorical = state.categorical.map( x => x === oldName ? newName : x );
		const newGroupVars = state.groupVars.map( x => x === oldName ? newName : x );
		this.setState({
			data: newData,
			quantitative: newQuantitative,
			categorical: newCategorical,
			groupVars: newGroupVars
		});
	}

	onColumnDrag = ( vars ) => {
		const state = this.state;
		const sorter = ( a, b ) => {
			a = vars.indexOf( String( a ) );
			b = vars.indexOf( String( b ) );
			if ( a === -1 || b === -1 ) {
				return 0;
			}
			if ( a < b ) {
				return -1;
			} else if ( a > b ) {
				return 1;
			}
			return 0;
		};
		const newQuantitative = state.quantitative.slice().sort( sorter );
		const newCategorical = state.categorical.slice().sort( sorter );
		const newGroupVars = state.groupVars.slice().sort( sorter );
		this.setState({
			quantitative: newQuantitative,
			categorical: newCategorical,
			groupVars: newGroupVars
		});
	}

	deleteVariable = ( variable, varState ) => {
		let state = varState || this.state;
		let newData;
		if ( !varState ) {
			newData = copy( this.state.data, 1 );
		} else {
			newData = varState.data;
		}
		delete newData[ variable ];
		let newQuantitative = state.quantitative.filter( x => x !== variable );
		let newCategorical = state.categorical.filter( x => x !== variable );
		let newGroupVars = state.groupVars.filter( x => x !== variable );
		let filters = ( state.filters || [] ).filter( x => x.id !== variable );
		return {
			data: newData,
			quantitative: newQuantitative,
			categorical: newCategorical,
			groupVars: newGroupVars,
			filters
		};
	}

	onFileUpload = ( err, output ) => {
		const session = this.context;
		if ( !err ) {
			const data = {};
			const columnNames = objectKeys( output[ 0 ] ).filter( x => x !== '' );
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
			const quantitativeGuesses = [];
			columnNames.forEach( variable => {
				if ( isNumberArray( data[ variable ]) ) {
					quantitativeGuesses.push( variable );
				} else {
					categoricalGuesses.push( variable );
				}
			});
			this.setState({
				quantitative: quantitativeGuesses,
				categorical: categoricalGuesses,
				data
			}, () => {
				session.store.setItem( this.id+'_data', this.state.data, debug );
			});
		}
	}

	onFilterCreate = () => {
		const newData = this.filterCreate( this.state.data );
		const newState = {
			data: newData,
			oldData: this.state.data,
			subsetFilters: this.state.filters
		};
		this.setState( newState );
	}

	filterCreate = ( data ) => {
		let indices = new Set();
		for ( let i = 0; i < this.state.filters.length; i++ ) {
			const filter = this.state.filters[ i ];
			const col = data[ filter.id ];
			if ( contains( this.state.quantitative, filter.id ) ) {
				// Case: We have a filter for a quantitative variable, which has a min and max value
				for ( let z = 0; z < col.length; z++ ) {
					if ( !( col[ z ] >= filter.value.min && col[ z ] <= filter.value.max ) ) {
						indices.add( z );
					}
				}
			} else {
				// Case: We have a categorical variable
				for ( let z = 0; z < col.length; z++ ) {
					if ( !contains( filter.value, String( col[ z ] ) ) ) {
						indices.add( z );
					}
				}
			}
		}
		const vars = objectKeys( data );
		const newData = {};
		const nOriginal = data[ vars[0] ].length;
		for ( let c = 0; c < vars.length; c++ ) {
			const varName = vars[ c ];
			newData[ varName ] = [];
		}
		const ids = [];
		for ( let j = 0; j < nOriginal; j++ ) {
			if ( !indices.has( j ) ) {
				for ( let colInd = 0; colInd < vars.length; colInd++ ) {
					let varName = vars[ colInd ];
					newData[ varName ].push( data[ varName ][ j ] );
				}
				if ( data[ 'id' ] ) {
					ids.push( data[ 'id' ][ j ] );
				} else {
					ids.push( j+1 );
				}
			}
		}
		newData[ 'id' ] = ids;
		return newData;
	}

	onFilterAdd = () => {
		const data = this.restoreData();
		const newData = this.filterCreate( data );
		const newState = {
			data: newData,
			oldData: data,
			subsetFilters: this.state.filters
		};
		this.setState( newState );
	}

	restoreData = () => {
		const newVars = objectKeys( this.state.data );
		const oldVars = objectKeys( this.state.oldData );
		const data = copy( this.props.data, 1 );
		const originalVariables = [];
		for ( let i = 0; i < this.props.quantitative.length; i++ ) {
			originalVariables.push( String( this.props.quantitative[ i ] ) );
		}
		for ( let i = 0; i < this.props.categorical.length; i++ ) {
			originalVariables.push( String( this.props.categorical[ i ] ) );
		}
		const ids = this.state.data.id;
		const nOriginal = this.props.data[ oldVars[ 0 ] ].length;
		const oldIds = this.state.oldData.id || incrspace( 1, nOriginal+1, 1 );
		for ( let i = 0; i < oldVars.length; i++ ) {
			const name = oldVars[ i ];
			if ( name !== 'id' && !contains( originalVariables, name ) ) {
				data[ name ] = new Array( nOriginal ).fill( null );
				for ( let j = 0; j < oldIds.length; j++ ) {
					const idx = oldIds[ j ] - 1;
					data[ name ][ idx ] = this.state.oldData[ name ][ j ];
				}
			}
		}
		for ( let i = 0; i < newVars.length; i++ ) {
			const name = newVars[ i ];
			if ( name !== 'id' && !contains( originalVariables, name ) ) {
				debug( 'Handle inserted variable: '+name );
				if ( !data[ name ] ) {
					data[ name ] = new Array( nOriginal ).fill( null );
				}
				for ( let j = 0; j < ids.length; j++ ) {
					const idx = ids[ j ] - 1;
					data[ name ][ idx ] = this.state.data[ name ][ j ];
				}
			}
		}
		return data;
	}

	onRestoreData = () => {
		const data = this.restoreData();
		this.setState({
			data,
			subsetFilters: null,
			filters: []
		});
	}

	on2dSelection = ( names, selected ) => {
		const newFilters = this.state.filters.filter(
			x => x.id !== names.x && x.id !== names.y
		);
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

	onBarchartSelection = ( name, selected ) => {
		const newFilters = this.state.filters.filter(
			x => x.id !== name
		);
		newFilters.push({
			id: name,
			value: selected.range.x
		});
		this.setState({
			filters: newFilters
		});
	}

	onHistogramSelection = ( name, selected ) => {
		if ( selected.points && selected.points[ 0 ] ) {
			const first = selected.points[ 0 ];
			const binSize = first.fullData.xbins.size;
			const last = selected.points[ selected.points.length-1 ];
			const newFilters = this.state.filters.filter(
				x => x.id !== name
			);

			newFilters.push({
				id: name,
				value: {
					min: first.x - binSize/2,
					max: last.x + binSize/2
				}
			});
			this.setState({
				filters: newFilters
			});
		}
	}

	/**
	* React component render method.
	*/
	render() {
		debug( 'Render component...' );
		if ( !this.state.data ) {
			return (
				<SpreadsheetUpload
					title={this.props.t('data-explorer')}
					onUpload={this.onFileUpload}
				/>
			);
		}
		if ( !this.state.ready ) {
			const variableNames = objectKeys( this.state.data );
			return ( <Card>
				<Card.Header as="h3">
					{this.props.t('data-explorer')}
				</Card.Header>
				<Card.Body>
					<h4>{this.props.t('select-quantitative-categorical')}:</h4>
					<SelectInput
						legend={`${this.props.t('quantitative')}:`}
						options={variableNames}
						defaultValue={this.state.quantitative}
						multi
						onChange={( quantitative ) => {
							this.setState({ quantitative });
						}}
					/>
					<SelectInput
						legend={`${this.props.t('categorical')}:`}
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
							const session = this.context;
							session.store.setItem( this.id+'_quantitative', this.state.quantitative, debug );
							session.store.setItem( this.id+'_categorical', this.state.categorical, debug );
						});
					}}>{this.props.t('submit')}</Button>
					<DataTable data={this.state.data} id={this.id + '_table'} />
				</Card.Body>
			</Card> );
		}
		if ( isEmptyObject( this.state.data ) ) {
			return <Alert variant="danger">{this.props.t('data-empty')}</Alert>;
		}
		if ( !this.state.validVariables ) {
			return <Alert variant="danger">The <b>quantitative</b> or <b>categorical</b> data arrays contain variable names not present in the <b>data</b> object.</Alert>;
		}
		let nStatistics = this.props.statistics.length;
		let defaultActiveKey = '1';
		if ( nStatistics === 0 ) {
			if ( this.props.tables.length > 0 ) {
				defaultActiveKey = '2.1';
			}
			else {
				defaultActiveKey = '3.1';
			}
		}
		const categoricalProps = {
			data: this.state.data,
			variables: this.state.categorical,
			groupingVariables: this.state.groupVars,
			onCreated: this.addToOutputs,
			onPlotDone: this.outputPanel ? this.outputPanel.scrollToBottom : noop
		};
		const quantitativeProps = {
			data: this.state.data,
			variables: this.state.quantitative,
			groupingVariables: this.state.groupVars,
			onCreated: this.addToOutputs,
			onPlotDone: this.outputPanel ? this.outputPanel.scrollToBottom : noop
		};

		const navbar = <Nav variant="tabs">
			{ nStatistics > 0 ?
				<Nav.Item className="nav-statistics" >
					<Nav.Link eventKey="1">{this.props.t('statistics')}</Nav.Link>
				</Nav.Item> : null
			}
			{ this.props.tables.length > 0 && this.state.categorical.length > 0 ?
				<NavDropdown
					title={this.props.t('tables')}
					className="nav-tables"
				>
					{ this.props.tables.map(
						( e, i ) => ( <DropdownItem key={i} eventKey={`2.${i+1}`} >
							{this.props.t( e )}
						</DropdownItem> )
					) }
				</NavDropdown> : null
			}
			{ this.props.plots.length > 0 ?
				<NavDropdown
					title="Plots"
					className="nav-plots"
				>
					{ this.props.plots.map( ( e, i ) => {
						const item = <DropdownItem key={i} eventKey={`3.${i+1}`}>{this.props.t( e )}</DropdownItem>;
						if (
							e === 'Histogram' && this.props.plots[ i-1 ] === 'Mosaic Plot' ||
							e === 'Line Plot' && this.props.plots[ i-1 ] === 'Box Plot'
						) {
							return ( <Fragment key={i} >
								<NavDropdown.Divider key={`${i}-div`} />
								{item}
							</Fragment> );
						}
						return item;
					})}
				</NavDropdown> : null
			}
			{ this.props.tests.length > 0 ?
				<NavDropdown
					title={this.props.t('tests')}
					className="nav-tests"
				>
					{ this.props.tests.map( ( e, i ) => {
						const item = <DropdownItem key={i} eventKey={`4.${i+1}`}>{this.props.t( e )}</DropdownItem>;
						if (
							e === 'One-Sample Proportion Test' && this.props.tests[ i-1 ] === 'One-Way ANOVA' ||
							e === 'Correlation Test' && this.props.tests[ i-1 ] === 'Two-Sample Proportion Test'
						) {
							return ( <Fragment key={i} >
								<NavDropdown.Divider key={`${i}-div`} />
								{item}
							</Fragment> );
						}
						return item;
					}) }
				</NavDropdown> : null
			}
			{ this.props.models.length > 0 ?
				<NavDropdown
					title={this.props.t('models')}
					className="nav-models"
				>
					{this.props.models.map( ( e, i ) => {
						const item = <DropdownItem key={i} eventKey={`5.${i+1}`}>{this.props.t( e )}</DropdownItem>;
						if (
							e === 'Decision Tree' && this.props.models[ i-1 ] === 'LASSO' ||
							e === 'PCA' && this.props.models[ i-1 ] === 'Naive Bayes'
						) {
							return ( <Fragment key={i} >
								<NavDropdown.Divider key={`${i}-div`} />
								{item}
							</Fragment> );
						}
						return item;
					})}
				</NavDropdown> : null
			}
			{ this.props.transformer ?
				<Nav.Item className="nav-transform" >
					<Nav.Link eventKey="6">{this.props.t('transform')}</Nav.Link>
				</Nav.Item> : null
			}
		</Nav>;

		const tabs = <Tab.Content>
			<Tab.Pane eventKey="1">
				<SummaryStatistics
					{...quantitativeProps}
					statistics={this.props.statistics}
					logAction={this.logAction}
					t={this.props.t}
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
						quantitative={this.state.quantitative}
						logAction={this.logAction}
						session={this.context}
						onSelected={this.onBarchartSelection}
					/>;
					break;
				case 'Box Plot':
					content = <Boxplot
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Contour Chart':
					content = <ContourChart
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
						onSelected={this.on2dSelection}
					/>;
					break;
				case 'Heat Map':
					content = <Heatmap
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
						onSelected={this.on2dSelection}
					/>;
					break;
				case 'Histogram':
					content = <Histogram
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
						showDensityOption={this.props.histogramDensities}
						onSelected={this.onHistogramSelection}
					/>;
					break;
				case 'Line Plot':
					content = <Lineplot
						{...quantitativeProps}
						categorical={this.state.categorical}
						logAction={this.logAction}
						session={this.context}
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
						quantitative={this.state.quantitative}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'QQ Plot':
					content = <QQPlot
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Scatterplot':
					content = <Scatterplot
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
						onSelected={this.on2dSelection}
					/>;
					break;
				case 'Scatterplot Matrix':
					content = <ScatterplotMatrix
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
						onSelected={this.on2dSelection}
					/>;
					break;
				case 'Violin Plot':
					content = <Violinplot
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Map':
					content = <Map
						{...quantitativeProps}
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
						quantitative={this.state.quantitative}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'Two-Sample Mean Test':
					content = <MeanTest2
						onCreated={this.addToOutputs}
						data={this.state.data}
						quantitative={this.state.quantitative}
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
						quantitative={this.state.quantitative}
						categorical={this.state.categorical}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'Correlation Test':
					content = <CorrTest
						onCreated={this.addToOutputs}
						data={this.state.data}
						quantitative={this.state.quantitative}
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
				case 'Kruskal-Wallis Test':
					content = <Kruskal
						onCreated={this.addToOutputs}
						data={this.state.data}
						quantitative={this.state.quantitative}
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
				case 'Multiple Linear Regression':
					content = <MultipleLinearRegression
						categorical={this.state.categorical}
						quantitative={this.state.quantitative}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
						onGenerate={( quantitative, data ) => {
							this.setState({
								quantitative,
								data
							});
						}}
					/>;
				break;
				case 'Decision Tree':
					content = <DecisionTree
						categorical={this.state.categorical}
						quantitative={this.state.quantitative}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
						onGenerate={( quantitative, categorical, data ) => {
							this.setState({
								quantitative,
								categorical,
								groupVars: categorical.slice(),
								data
							});
						}}
					/>;
				break;
				case 'Random Forest':
					content = <RandomForest
						categorical={this.state.categorical}
						quantitative={this.state.quantitative}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
						onGenerate={( quantitative, categorical, data ) => {
							this.setState({
								quantitative,
								categorical,
								groupVars: categorical.slice(),
								data
							});
						}}
					/>;
				break;
				case 'LASSO':
					content = <LassoRegression
						categorical={this.state.categorical}
						quantitative={this.state.quantitative}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
						onGenerate={( quantitative, data ) => {
							this.setState({
								quantitative,
								data
							});
						}}
					/>;
				break;
				case 'Logistic Regression':
					content = <LogisticRegression
						categorical={this.state.categorical}
						quantitative={this.state.quantitative}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
						onGenerate={( quantitative, categorical, data ) => {
							this.setState({
								quantitative,
								categorical,
								groupVars: categorical.slice(),
								data
							});
						}}
					/>;
				break;
				case 'Simple Linear Regression':
					content = <SimpleLinearRegression
						categorical={this.state.categorical}
						quantitative={this.state.quantitative}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
						onGenerate={( quantitative, data ) => {
							this.setState({
								quantitative,
								data
							});
						}}
					/>;
					break;
				case 'PCA':
					content = <PrincipalComponentAnalysis
						quantitative={this.state.quantitative}
						originalQuantitative={this.props.quantitative}
						onCreated={this.addToOutputs}
						onGenerate={( quantitative, data ) => {
							this.setState({
								quantitative,
								data
							});
						}}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Hierarchical Clustering':
					content = <HierarchicalClustering
						quantitative={this.state.quantitative}
						categorical={this.state.categorical}
						originalQuantitative={this.props.quantitative}
						onCreated={this.addToOutputs}
						onGenerate={( categorical, data ) => {
							const groupVars = categorical.slice();
							this.setState({
								categorical,
								groupVars,
								data
							});
						}}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'kmeans':
					content = <KMeans
						quantitative={this.state.quantitative}
						categorical={this.state.categorical}
						originalQuantitative={this.props.quantitative}
						onCreated={this.addToOutputs}
						onGenerate={( categorical, data ) => {
							const groupVars = categorical.slice();
							this.setState({
								categorical,
								groupVars,
								data
							});
						}}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
					case 'Naive Bayes':
						content = <NaiveBayes
							categorical={this.state.categorical}
							quantitative={this.state.quantitative}
							onCreated={this.addToOutputs}
							data={this.state.data}
							logAction={this.logAction}
							session={this.context}
							onGenerate={( quantitative, categorical, data ) => {
								this.setState({
									quantitative,
									categorical,
									groupVars: categorical.slice(),
									data
								});
							}}
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
						quantitative={this.state.quantitative}
						categorical={this.state.categorical}
						logAction={this.logAction}
						session={this.context}
						onGenerate={this.onGenerateTransformedVariable}
						onActive={( active ) => {
							this.setState({
								disableToolbarDragging: active
							});
						}}
						t={this.props.t}
					/>
				</Tab.Pane> : null
			}
		</Tab.Content>;
		const hasQuestions = isArray( this.props.questions ) && this.props.questions.length > 0;
		const pagesHeight = this.props.style.height || ( window.innerHeight*0.9 ) - 165;
		const mainContainer = <Row className="no-gutter data-explorer" style={this.props.style} >
			<Col xs={6} md={6} >
				<Card style={{ height: this.props.style.height, minHeight: this.props.style.height || window.innerHeight*0.9, padding: 0 }} >
					<Navbar className="data-explorer-navbar" onSelect={( eventKey => this.setState({ openedNav: eventKey }))}>
						<Nav>
							{ hasQuestions ? <Nav.Item className="explorer-data-nav">
								<Nav.Link eventKey="questions" active={this.state.openedNav === 'questions'}>
									{this.props.t('questions')}
								</Nav.Link>
							</Nav.Item> : null }
							{ this.props.dataTable ? <Nav.Item className="explorer-data-nav" >
								<Nav.Link eventKey="data" active={this.state.openedNav === 'data'}>
									{this.props.t('data')}
								</Nav.Link>
							</Nav.Item> : null }
							{ this.props.editor ?
								<Nav.Item className="explorer-editor-nav">
									<Nav.Link
										active={this.state.openedNav === 'editor'}
										eventKey="editor"
									>{this.props.editorTitle}</Nav.Link>
								</Nav.Item> : null
							}
							{ this.props.history ?
								<Nav.Item className="explorer-editor-nav">
									<Nav.Link
										active={this.state.openedNav === 'history'}
										eventKey="history"
									>
										History
									</Nav.Link>
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
						<Button
							variant="secondary" size="sm" className="hide-toolbox-button"
							onClick={this.toggleToolbox}
						>{this.props.t( this.state.showToolbox ? 'hide-toolbox' : 'show-toolbox' )}</Button>
					</Navbar>
					<Card.Body style={{ overflowY: 'auto' }}>
						{ hasQuestions ? <Pages
							id={this.id + '_questions'}
							height={pagesHeight}
							size="small"
							className="data-explorer-questions"
							style={{
								display: this.state.openedNav !== 'questions' ? 'none' : null
							}}
						>{this.props.questions}</Pages> : null }
						<div
							style={{
								display: this.state.openedNav !== 'data' ? 'none' : null
							}}
						>
								{ !this.props.data ? <Button
									size="small" onClick={this.resetStorage}
									style={{ position: 'absolute', top: '80px', zIndex: 2 }}
								>{this.props.t('clear-data')}</Button> : null }
								<DataTable
									{...this.props.dataTableProps}
									data={this.state.data}
									dataInfo={this.props.dataInfo}
									undeletableVars={objectKeys( this.props.data )}
									filters={this.state.filters}
									onFilteredChange={( filtered ) => {
										debug( 'Filters have changed...' );
										this.setState({
											filters: filtered
										});
									}}
									onColumnDelete={this.onColumnDelete}
									onColumnNameChange={this.onColumnNameChange}
									onColumnDrag={this.onColumnDrag}
									deletable
									id={this.id + '_table'}
								/>
								<Row>
									<Col md={4} >
										{ this.state.filters.length > 0 && this.state.subsetFilters !== this.state.filters ?
											<OverlayTrigger placement="top" overlay={<Tooltip>{this.props.t('create-filtered-dataset-tooltip')}</Tooltip>} >
												<Button
													onClick={() => {
														if ( this.state.subsetFilters ) {
															// Case: Dataset is already filtered
															this.onFilterAdd();
														} else {
															this.onFilterCreate();
														}
													}}
													variant="secondary"
													size="xsmall"
													style={{ float: 'left' }}
												>
													{this.props.t('create-filtered-dataset')}
												</Button>
											</OverlayTrigger> : null
										}
									</Col>
									<Col md={8} >
										{ this.state.subsetFilters ? <div className="data-explorer-subset-filter-display">
											<p>
												<span style={{ color: 'white', paddingLeft: 2 }} >{this.props.t('filtered')}:</span>
												{ this.state.subsetFilters ? <OverlayTrigger placement="top" overlay={<Tooltip>
													{this.props.t('restore-original-dataset-tooltip')}
												</Tooltip>} >
													<Button
														onClick={this.onRestoreData}
														variant="secondary"
														size="small"
														style={{ float: 'right' }}
													>
														{this.props.t('restore-original-dataset')}
													</Button>
												</OverlayTrigger> : null }
											</p>
											<FilterList
												filters={this.state.subsetFilters}
												removeButtons
												onRemove={( idx ) => {
													debug( 'Removing filter at position '+idx );
													const newSubsetFilters = this.state.subsetFilters.slice();
													newSubsetFilters.splice( idx, 1 );
													if ( newSubsetFilters.length > 0 ) {
														this.setState({
															data: this.state.oldData,
															filters: newSubsetFilters
														}, this.onFilterCreate );
													} else {
														this.onRestoreData();
													}
												}}
											/>
										</div> : null }
									</Col>
								</Row>
						</div>
						{ this.props.history ?
							<History
								actions={this.context.currentUserActions[ this.id ]}
								style={{ display: this.state.openedNav !== 'history' ? 'none' : null }}
								onCreated={this.addToOutputs}
								logAction={this.logAction}
								session={this.context}
								data={this.state.data}
								quantitative={this.state.quantitative}
								categorical={this.state.categorical}
							/> : null
						}
						{ this.props.editor ?
							<TextEditor
								{...this.props.editorProps}
								mode={this.props.reportMode}
								id={this.id + '_editor'}
								style={{ display: this.state.openedNav !== 'editor' ? 'none' : null }}
								submitButton
							/> : null
						}
						{this.props.tabs.map( ( e, i ) => {
							return ( this.state.openedNav === e.title ?
								e.content : null );
						})}
					</Card.Body>
				</Card>
			</Col>
			<Col xs={6} md={6}>
				<div className="card card-default" style={{ height: this.props.style.height, minHeight: this.props.style.height || window.innerHeight*0.9, padding: 0 }} >
					<div className="card-header clearfix">
						<h3 className="data-explorer-output-header">{this.props.t('output')}</h3>
						<Gate owner>
							<Modal
								show={this.state.showStudentPlots}
								onHide={this.toggleStudentPlots}
								dialogClassName="modal-100w"
							>
								<Modal.Header closeButton >
									<Modal.Title>{this.props.t('plots')}</Modal.Title>
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
															<b>{this.props.t('count')}: </b>{elem.count}
														</span>
													</div>
												);
											})}
										</GridLayout> :
										<Card body className="bg-light">
											{this.props.t('no-plots-yet')}
										</Card>
									}
								</Modal.Body>
								<Modal.Footer>
									<Button variant="danger" onClick={this.clearPlots}>
										{this.props.t('clear-plots')}
									</Button>
									<Button onClick={this.toggleStudentPlots}>
										{this.props.t('close')}
									</Button>
								</Modal.Footer>
							</Modal>
							<Button
								variant="secondary" size="sm"
								style={{ float: 'right' }}
								onClick={this.toggleStudentPlots}
							>{this.props.t('open-shared-plots')}</Button>
							<RealtimeMetrics returnFullObject for={[ this.id ]} onDatum={this.onUserAction} />
						</Gate>
					</div>
					<OutputPanel output={this.state.output} ref={( div ) => {
						this.outputPanel = div;
					}} />
					<Button size="sm" variant="outline-danger" block onClick={() => {
						this.setState({ output: []});
					}}>{this.props.t('clear-all')}</Button>
				</div>
			</Col>
		</Row>;

		return (
			<Fragment>
				{mainContainer}
				<Draggable
					cancel=".input" disabled={this.state.disableToolbarDragging}
					style={{
						display: this.state.showToolbox ? 'inline' : 'none'
					}}
				>
					<Card
						border="secondary"
						id={`${this.id}-toolbox`}
						className="data-explorer-toolbox"
						role="button" tabIndex={0}
					>
						<Card.Header className="data-explorer-toolbox-header" >
							<Card.Title
								as="h3" unselectable="on" className="data-explorer-toolbox-title"
							>
								{this.props.t('toolbox')}
							</Card.Title>
							<ToolboxTutorialButton
								onTutorialStart={() => {
									this.setState({
										disableToolbarDragging: true
									});
									this.props.onTutorialStart();
								}}
								onTutorialCompletion={() => {
									this.setState({
										disableToolbarDragging: false
									});
									this.props.onTutorialCompletion();
								}}
								id={`${this.id}-toolbox`}
								t={this.props.t}
							/>
							<Button
								variant="secondary"
								size="sm"
								style={{ position: 'absolute', right: '20px' }}
								onClick={this.toggleToolbox}
							>{this.props.t('hide-toolbox')}</Button>
						</Card.Header>
						<Card.Body style={{ paddingBottom: '0px', overflowY: 'auto', maxHeight: '90vh' }}>
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
		'variables': null,
		'showOnStartup': false
	},
	dataTable: true,
	dataTableProps: {},
	history: false,
	tabs: [],
	questions: [],
	transformer: true,
	statistics: [
		'Mean',
		'Median',
		'Min',
		'Max',
		'Range',
		'Interquartile Range',
		'Standard Deviation',
		'Variance',
		'Correlation',
		'Correlation Matrix',
		'Skewness',
		'Excess Kurtosis',
		'First Quartile',
		'Third Quartile',
		'Quantile'
	],
	plots: [
		'Bar Chart',
		'Pie Chart',
		'Mosaic Plot',
		'Histogram',
		'Box Plot',
		'Line Plot',
		'Scatterplot',
		'Scatterplot Matrix',
		'Heat Map',
		'Contour Chart',
		'QQ Plot'
	],
	tables: [
		'Frequency Table',
		'Contingency Table'
	],
	tests: [
		'One-Sample Mean Test',
		'Two-Sample Mean Test',
		'One-Way ANOVA',
		'One-Sample Proportion Test',
		'Two-Sample Proportion Test',
		'Correlation Test',
		'Chi-squared Independence Test',
		'Kruskal-Wallis Test'
	],
	models: [
		'Simple Linear Regression',
		'Multiple Linear Regression',
		'LASSO',
		'Decision Tree',
		'Random Forest',
		'Logistic Regression',
		'Naive Bayes',
		'PCA',
		'Hierarchical Clustering',
		'kmeans'
	],
	opened: null,
	categorical: [],
	quantitative: [],
	editor: true,
	editorProps: null,
	editorTitle: 'Report',
	reportMode: 'individual',
	histogramDensities: true,
	showTestDecisions: true,
	onTutorialCompletion() {},
	onTutorialStart() {},
	style: {}
};

DataExplorer.propTypes = {
	categorical: PropTypes.array,
	quantitative: PropTypes.array,
	data: PropTypes.object,
	dataInfo: PropTypes.object,
	editor: PropTypes.bool,
	editorProps: PropTypes.object,
	editorTitle: PropTypes.string,
	dataTable: PropTypes.bool,
	dataTableProps: PropTypes.object,
	history: PropTypes.bool,
	reportMode: PropTypes.oneOf([ 'individual', 'group', 'collaborative' ]),
	histogramDensities: PropTypes.bool,
	models: PropTypes.array,
	opened: PropTypes.oneOf([ 'data', 'toolbox', 'editor' ]),
	plots: PropTypes.array,
	questions: PropTypes.array,
	showTestDecisions: PropTypes.bool,
	statistics: PropTypes.array,
	style: PropTypes.object,
	tables: PropTypes.array,
	tabs: PropTypes.array,
	tests: PropTypes.array,
	transformer: PropTypes.bool,
	onTutorialCompletion: PropTypes.func,
	onTutorialStart: PropTypes.func
};

DataExplorer.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'data-explorer' )( DataExplorer );
