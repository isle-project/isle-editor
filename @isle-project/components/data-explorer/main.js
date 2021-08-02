/* eslint-disable max-lines */

// MODULES //

import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation, Trans } from 'react-i18next';
import { json } from 'd3';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isNumberArray from '@stdlib/assert/is-number-array';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import isObjectArray from '@stdlib/assert/is-object-array';
import isObject from '@stdlib/assert/is-object';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isNull from '@stdlib/assert/is-null';
import isJSON from '@stdlib/assert/is-json';
import hasProp from '@stdlib/assert/has-property';
import copy from '@stdlib/utils/copy';
import noop from '@stdlib/utils/noop';
import objectKeys from '@stdlib/utils/keys';
import incrspace from '@stdlib/array/incrspace';
import generateUID from '@isle-project/utils/uid';
import SelectInput from '@isle-project/components/input/select';
import TextEditor from '@isle-project/components/text-editor';
import GridLayout from './grid_layout.js';
import Pages from '@isle-project/components/pages';
import Gate from '@isle-project/components/gate';
import RealtimeMetrics from '@isle-project/components/metrics/realtime';
import Plotly from '@isle-project/components/plotly';
import OverlayTrigger from '@isle-project/components/overlay-trigger';
import SpreadsheetUpload from '@isle-project/components/spreadsheet-upload';
import RPlot from '@isle-project/components/r/plot';
import KeyControls from '@isle-project/components/key-controls';
import DataTable from '@isle-project/components/data-table';
const ToolboxButton = lazy( () => import( /* webpackChunkName: "Toolbox" */ './toolbox.js' ) );
import SessionContext from '@isle-project/session/context.js';
import subtract from '@isle-project/utils/subtract';
import OutputPanel from './output_panel.js';
import History from './history';
import recreateOutput from './history/recreate_output.js';
import createOutputElement from './create_output_element.js';
import FilterList from './filter_list.js';
import valuesFromFormula from './variable-transformer/values_from_formula.js';
import retrieveBinnedValues from './variable-transformer/retrieve_binned_values.js';
import recodeCategorical from './variable-transformer/recode_categorical.js';
import { DATA_EXPLORER_BIN_TRANSFORMER, DATA_EXPLORER_CAT_TRANSFORMER,
	DATA_EXPLORER_CLEAR_OUTPUT_PANE, DATA_EXPLORER_DELETE_OUTPUT,
	DATA_EXPLORER_DELETE_VARIABLE, DATA_EXPLORER_VARIABLE_TRANSFORMER } from '@isle-project/constants/actions.js';
import { MEMBER_ACTION, RECEIVED_LESSON_INFO, RETRIEVED_CURRENT_USER_ACTIONS } from '@isle-project/constants/events.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './data_explorer.css';


// PLOT COMPONENTS //

import { generateBarchartConfig } from '@isle-project/components/plots/barchart';
import { generateBoxplotConfig } from '@isle-project/components/plots/boxplot';
import { generateHeatmapConfig } from '@isle-project/components/plots/heatmap';
import { generateHistogramConfig } from '@isle-project/components/plots/histogram';
import { generateLineplotConfig } from '@isle-project/components/plots/lineplot';
import { generateMapConfig } from '@isle-project/components/plots/map';
import { generateMosaicPlotCode } from '@isle-project/components/plots/mosaicplot';
import { generatePiechartConfig } from '@isle-project/components/plots/piechart';
import { generateQQPlotConfig } from '@isle-project/components/plots/qqplot';
import { generateScatterplotConfig } from '@isle-project/components/plots/scatterplot';
import { generateScatterplotMatrixConfig } from '@isle-project/components/plots/scatterplot-matrix';
import { generateViolinplotConfig } from '@isle-project/components/plots/violinplot';
import { generateContourChart } from '@isle-project/components/plots/contourchart';


// VARIABLES //

const debug = logger( 'isle:data-explorer' );
const uid = generateUID( 'data-explorer' );
const KEYS = {
	'questions': '(Shift+Alt+Q)',
	'history': '(Shift+Alt+H)',
	'data': '(Shift+Alt+D)',
	'editor': '(Shift+Alt+R)'
};


// FUNCTIONS //

/**
 * Returns whether the list of variables contains a variable that is not present in the data.
 *
 * @param {Object} data - a data object
 * @param {Array} variables - list of variables
 * @returns {boolean} a boolean indicating whether the list of variables contains a variable not present in the data
 */
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
* @property {Array<node>} questions - array of nodes of text and question components to be displayed in a `questions` tab or an object of properties passed down to an underlying `<Pages />` component
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
			openedNav: props.opened || ( !isNull( props.questions ) ? 'questions' : 'data' ),
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
			const recipients = this.props.reportMode !== 'individual' ? 'members' : 'owners';
			session.log({
				id: this.id,
				type,
				value
			}, recipients );
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( !nextProps.data ) {
			return null;
		}
		const newState = {};
		if (
			nextProps.data !== prevState.unaltered.data
		) {
			newState.data = nextProps.data;
		}
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
			if ( session.metadata.store[ this.id ] ) {
				const meta = session.metadata.store[ this.id ];
				json( meta ).then( res => {
					const groupVars = ( res.categorical || [] ).slice();
					this.setState({
						data: res.data,
						quantitative: res.quantitative,
						categorical: res.categorical,
						groupVars,
						ready: true,
						unaltered: {
							data: res.data,
							quantitative: res.quantitative,
							categorical: res.categorical
						}
					});
				});
			} else {
				session.store.getItem( this.id ).then( ({ quantitative = [], categorical = [], data = null }) => {
					let ready = false;
					if ( isEmptyObject( data ) ) {
						data = null;
					}
					if ( !isNull( data ) ) {
						ready = true;
					}
					const groupVars = ( categorical || [] ).slice();
					this.setState({
						data,
						quantitative,
						categorical,
						groupVars,
						ready,
						unaltered: {
							data,
							quantitative,
							categorical
						}
					});
				})
				.catch( ( err ) => {
					debug( err );
				});
			}
		}
		if ( session.currentUserActions ) {
			const actions = session.currentUserActions[ this.id ];
			if ( this.props.data && isObjectArray( actions ) ) {
				this.restoreTransformations( actions );
			}
		}
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( type === RETRIEVED_CURRENT_USER_ACTIONS ) {
				const currentUserActions = action;
				const actions = currentUserActions[ this.id ];
				if ( this.props.data && isObjectArray( actions ) ) {
					this.restoreTransformations( actions );
				}
			}
			else if ( type === RECEIVED_LESSON_INFO ) {
				if ( session.metadata.store[ this.id ] ) {
					const meta = session.metadata.store[ this.id ];
					json( meta ).then( res => {
						const groupVars = ( res.categorical || [] ).slice();
						this.setState({
							data: res.data,
							quantitative: res.quantitative,
							categorical: res.categorical,
							groupVars,
							ready: true
						});
					});
				}
			}
			else if ( type === MEMBER_ACTION ) {
				if (
					action.id !== this.id ||
					action.email === session.user.email ||
					this.props.reportMode === 'individual'
				) {
					return;
				}
				else if ( this.props.reportMode === 'group' ) {
					if ( !session.group ) {
						return;
					}
					const members = session.group.members;
					let inGroup = false;
					for ( let i = 0; i < members.length; i++ ) {
						if ( members[ i ].email === action.email ) {
							inGroup = true;
							break;
						}
					}
					if ( !inGroup ) {
						return;
					}
				}
				// Case: `collaborative` or `group` mode
				if (
					action.type === DATA_EXPLORER_VARIABLE_TRANSFORMER ||
					action.type === DATA_EXPLORER_BIN_TRANSFORMER ||
					action.type === DATA_EXPLORER_CAT_TRANSFORMER ||
					action.type === DATA_EXPLORER_DELETE_VARIABLE
				) {
					this.restoreTransformations( [ action ] );
				}
				this.context.currentUserActions[ this.id ].unshift( action );
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
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	restoreOutputs = ( actions ) => {
		debug( 'Restore elements in output pane...' );
		const candidates = [];
		const skip = [];
		for ( let i = 0; i < actions.length; i++ ) {
			const action = actions[ i ];
			if ( action.type === DATA_EXPLORER_CLEAR_OUTPUT_PANE ) {
				break;
			}
			else if ( action.type === DATA_EXPLORER_DELETE_OUTPUT ) {
				skip.push( action.value );
			}
			candidates.push( action );
		}
		const output = [];
		const outputProps = {
			logAction: this.logAction,
			session: this.context,
			data: this.state.data,
			quantitative: this.state.quantitative,
			categorical: this.state.categorical
		};
		for ( let i = candidates.length - 1; i >= 0; i-- ) {
			const idx = candidates.length - 1 - i;
			if ( contains( skip, idx ) ) {
				continue;
			}
			const node = recreateOutput( candidates[ i ], outputProps );
			if ( node ) {
				const element = createOutputElement( node, output.length, this.clearOutput, this.state.subsetFilters, this.onFilters, this.props.t );
				output.push( element );
			}
		}
		debug( `Restored ${output.length} elements.` );
		this.setState({ output });
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
					const { name, variable, breaks, categories } = action.value;
					debug( `Should add binned variable ${name}` );
					if ( !hasProp( this.props.data, name ) ) {
						const rawData = state.data[ variable ];
						const values = retrieveBinnedValues( rawData, categories, breaks );
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
		this.setState( state, () => {
			this.restoreOutputs( actions );
		});
	}

	resetStorage = () => {
		const session = this.context;
		session.store.removeItem( this.id );
		this.setState({
			data: null,
			categorical: [],
			quantitative: [],
			ready: false
		});
	}

	shareData = () => {
		const session = this.context;
		if ( session.metadata.store[ this.id ] ) {
			session.updateMetadata( 'store', this.id, null );
			this.forceUpdate();
		} else {
			const internalData = {
				data: this.state.data,
				quantitative: this.state.quantitative,
				categorical: this.state.categorical
			};
			const blob = new Blob([ JSON.stringify( internalData ) ], {
				type: 'application/json'
			});
			const fileToSave = new File( [ blob ], 'data.json' );
			const formData = new FormData();
			formData.append( 'file', fileToSave );
			session.uploadFile({
				formData,
				callback: ( error, res ) => {
					const filename = res.filename;
					const link = session.server + '/' + filename;
					session.updateMetadata( 'store', this.id, link );
					this.forceUpdate();
				},
				showNotification: false
			});
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
		const session = this.context;
		session.log({
			id: this.id,
			type: DATA_EXPLORER_DELETE_OUTPUT,
			value: idx
		}, 'owners' );
		const newOutputs = this.state.output.slice();
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
				const element = createOutputElement( val[ i ], newOutput.length, this.clearOutput, this.state.subsetFilters, this.onFilters, this.props.t );
				newOutput.push( element );
			}
		} else {
			const element = createOutputElement( val, newOutput.length, this.clearOutput, this.state.subsetFilters, this.onFilters, this.props.t );
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
		if ( isArray( name ) ) {
			let newVarState;
			for ( let i = 0; i < name.length; i++ ) {
				newVarState = this.transformVariable( name[ i ], values[ i ], newVarState );
			}
			session.addNotification({
				title: this.props.t( 'variables-created' ),
				message: this.props.t( 'variables-created-msg', {
					name: name.join( ', ' )
				}),
				level: 'success',
				position: 'tr'
			});
			return this.setState( newVarState );
		}
		if ( hasProp( this.props.data, name ) ) {
			return session.addNotification({
				title: this.props.t( 'variable-exists' ),
				message: this.props.t( 'variable-exists-msg' ),
				level: 'error',
				position: 'tr'
			});
		}
		session.addNotification({
			title: this.props.t( 'variable-created' ),
			message: this.props.t( 'variable-created-msg', {
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
				session.store.setItem( this.id, {
					data: this.state.data,
					quantitative: quantitativeGuesses,
					categorical: categoricalGuesses
				});
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
			if (
				hasProp( filter.value, 'min') && hasProp( filter.value, 'max' )
			) {
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
		let originalData;
		let data;
		if ( this.props.data ) {
			originalData = this.props.data;
			data = copy( this.props.data, 1 );
		} else {
			originalData = this.state.unaltered.data;
			data = copy( originalData, 1 );
		}
		const originalVariables = [];
		for ( let i = 0; i < this.props.quantitative.length; i++ ) {
			originalVariables.push( String( this.props.quantitative[ i ] ) );
		}
		for ( let i = 0; i < this.props.categorical.length; i++ ) {
			originalVariables.push( String( this.props.categorical[ i ] ) );
		}
		const ids = this.state.data.id;
		const nOriginal = originalData[ oldVars[ 0 ] ].length;
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

	onPredict = {
		'decision-tree': ( tree, counter ) => {
			const newData = copy( this.state.data, 1 );
			const newCategorical = this.state.categorical.slice();
			const newQuantitative = this.state.quantitative.slice();
			if ( tree.type === 'classification' ) {
				const yhat = tree.predict( newData ).map( x => String( x ) );
				let name = 'pred_tree' + counter;
				newData[ name ] = yhat;
				if ( !contains( newCategorical, name ) ) {
					newCategorical.push( name );
				}
				name = 'correct_tree' + counter;
				const yvalues = newData[ tree.response ];
				newData[ name ] = yhat.map( ( x, i ) => x === String( yvalues[ i ] ) ? 'Yes' : 'No' );
				if ( !contains( newCategorical, name ) ) {
					newCategorical.push( name );
				}
			}
			else {
				const yhat = tree.predict( newData );
				let name = 'pred_tree' + counter;
				newData[ name ] = yhat;
				if ( !contains( newQuantitative, name ) ) {
					newQuantitative.push( name );
				}
				name = 'resid_tree' + counter;
				newData[ name ] = subtract( yhat, newData[ tree.response ] );
				if ( !contains( newQuantitative, name ) ) {
					newQuantitative.push( name );
				}
			}
			this.setState({
				categorical: newCategorical,
				quantitative: newQuantitative,
				data: newData
			});
		},
		'lasso': ( predict, counter ) => {
			const newData = copy( this.state.data, 1 );
			const newQuantitative = this.state.quantitative.slice();
			let name = 'pred_lasso' + counter;
			const { fitted, residuals } = predict( newData );
			newData[ name ] = fitted;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			name = 'resid_lasso' + counter;
			newData[ name ] = residuals;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			this.setState({
				quantitative: newQuantitative,
				data: newData
			});
		},
		'logistic': ( predict, counter ) => {
			const newData = copy( this.state.data, 1 );
			const newQuantitative = this.state.quantitative.slice();
			const newCategorical = this.state.categorical.slice();
			const { yhat, probs, residuals } = predict( newData );
			let name = 'probs_logis' + counter;
			newData[ name ] = probs;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			name = 'pred_logis' + counter;
			newData[ name ] = yhat;
			if ( !contains( newCategorical, name ) ) {
				newCategorical.push( name );
			}
			name = 'resid_logis' + counter;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			newData[ name ] = residuals;
			this.setState({
				categorical: newCategorical,
				quantitative: newQuantitative,
				data: newData
			});
		},
		'multiple-linear-regression': ( predict, counter ) => {
			const newData = copy( this.state.data, 1 );
			const newQuantitative = this.state.quantitative.slice();
			const { fitted, residuals } = predict( newData );
			let name = 'pred_lm'+counter;
			newData[ name ] = fitted;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			name = 'resid_lm'+counter;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			newData[ name ] = residuals;
			this.setState({
				quantitative: newQuantitative,
				data: newData
			});
		},
		'random-forest': ( forest, counter ) => {
			const newData = copy( this.state.data, 1 );
			const newCategorical = this.state.categorical.slice();
			if ( forest.type === 'classification' ) {
				const yhat = forest.predict( newData ).map( x => String( x ) );
				let name = 'pred_forest' + counter;
				newData[ name ] = yhat;
				if ( !contains( newCategorical, name ) ) {
					newCategorical.push( name );
				}
				name = 'correct_forest' + counter;
				const yvalues = this.state.data[ forest.response ];
				newData[ name ] = yhat.map( ( x, i ) => x === String( yvalues[ i ] ) ? 'Yes' : 'No' );
				if ( !contains( newCategorical, name ) ) {
					newCategorical.push( name );
				}
			}
			this.setState({
				categorical: newCategorical,
				data: newData
			});
		},
		'simple-linear-regression': ( predict, counter ) => {
			const newData = copy( this.state.data, 1 );
			const { fitted, residuals } = predict( newData );
			const newQuantitative = this.state.quantitative.slice();
			let name = 'pred_slm'+counter;
			newData[ name ] = fitted;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			name = 'resid_slm'+counter;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			newData[ name ] = residuals;
			this.setState({
				quantitative: newQuantitative,
				data: newData
			});
		},
		'naive-bayes': ( predict, counter ) => {
			const newData = copy( this.state.data, 1 );
			const newQuantitative = this.state.quantitative.slice();
			const { fitted, classProbs } = predict( newData );
			const keys = Object.keys( classProbs );
			for ( let i = 0; i < keys.length; i++ ) {
				const name = keys[ i ];
				newData[ name ] = classProbs[ name ];
				if ( !contains( newQuantitative, name ) ) {
					newQuantitative.push( name );
				}
			}
			const name = 'pred_bayes'+ counter;
			newData[ name ] = fitted;
			const newCategorical = this.state.categorical.slice();
			if ( !contains( newCategorical, name ) ) {
				newCategorical.push( name );
			}
			this.setState({
				categorical: newCategorical,
				quantitative: newQuantitative,
				data: newData
			});
		}
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

	onQQPlotSelection = ( name, selected ) => {
		if ( selected.range && selected.range.y ) {
			const newFilters = this.state.filters.filter(
				x => x.id !== name
			);
			const y = selected.range.y;
			newFilters.push({
				id: name,
				value: {
					min: y[ 0 ],
					max: y[ 1 ]
				}
			});
			this.setState({
				filters: newFilters
			});
		}
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
						legend={this.props.t('quantitative')}
						options={variableNames}
						defaultValue={this.state.quantitative}
						multi
						onChange={( quantitative ) => {
							this.setState({
								quantitative: quantitative || []
							});
						}}
					/>
					<SelectInput
						legend={this.props.t('categorical')}
						options={variableNames}
						defaultValue={this.state.categorical}
						multi
						onChange={( categorical ) => {
							this.setState({
								categorical: categorical || []
							});
						}}
					/>
					<Button disabled={isEmptyArray( this.state.categorical ) && isEmptyArray( this.state.quantitative )} onClick={() => {
						this.setState({
							groupVars: this.state.categorical.slice(),
							ready: true
						}, () => {
							const session = this.context;
							const internalData = {
								data: this.state.data,
								quantitative: this.state.quantitative,
								categorical: this.state.categorical
							};
							session.store.setItem( this.id, internalData );
							this.setState({
								unaltered: internalData
							});
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
			return ( <Alert variant="danger">
				<Trans i18nKey="variables-invalid-alert" ns="DataExplorer" >
					The <b>quantitative</b> or <b>categorical</b> data arrays contain variable names not present in the <b>data</b> object.
				</Trans>
			</Alert> );
		}

		const session = this.context;
		const hasQuestions = !isNull( this.props.questions );
		const questionProps = isArray( this.props.questions ) ?
			{ children: this.props.questions } :
			this.props.questions;
		const pagesHeight = this.props.style.height || ( window.innerHeight*0.9 ) - 165;
		const mainContainer = <Row className="no-gutter data-explorer" style={this.props.style} >
			<Col xs={6} md={6} >
				<Card style={{ height: this.props.style.height, minHeight: this.props.style.height || window.innerHeight*0.9, padding: 0 }} >
					<Navbar className="data-explorer-navbar" value={this.state.openedNav} onSelect={( eventKey => this.setState({ openedNav: eventKey }))}>
						<Nav>
							{ hasQuestions ? <Nav.Item className="explorer-data-nav">
								<Nav.Link title={`${this.props.t('questions')} ${KEYS[ 'questions' ]}`} eventKey="questions" active={this.state.openedNav === 'questions'}>
									{this.props.t('questions')}
								</Nav.Link>
							</Nav.Item> : null }
							{ this.props.dataTable ? <Nav.Item className="explorer-data-nav" >
								<Nav.Link title={`${this.props.t('data')} ${KEYS[ 'data' ]}`} eventKey="data" active={this.state.openedNav === 'data'}>
									{this.props.t('data')}
								</Nav.Link>
							</Nav.Item> : null }
							{ this.props.editor ?
								<Nav.Item className="explorer-editor-nav">
									<Nav.Link
										title={`${this.props.editorTitle ? this.props.editorTitle : this.props.t('report')} ${KEYS[ 'editor' ]}`}
										active={this.state.openedNav === 'editor'}
										eventKey="editor"
									>{this.props.editorTitle ? this.props.editorTitle : this.props.t('report')}</Nav.Link>
								</Nav.Item> : null
							}
							{ this.props.history ?
								<Nav.Item className="explorer-editor-nav">
									<Nav.Link
										title={`${this.props.t('history')} ${KEYS[ 'history' ]}`}
										active={this.state.openedNav === 'history'}
										eventKey="history"
									>
										{this.props.t('history')}
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
						<Suspense fallback={<Button
							variant="secondary" size="sm" className="hide-toolbox-button"
							disabled
						>
							Loading...
						</Button>} >
							<ToolboxButton
								id={`${this.id}-toolbox`}
								models={this.props.models}
								tables={this.props.tables}
								statistics={this.props.statistics}
								plots={this.props.plots}
								tests={this.props.tests}
								quantitative={this.state.quantitative}
								originalQuantitative={this.props.quantitative}
								categorical={this.state.categorical}
								logAction={this.logAction}
								onCreated={this.addToOutputs}
								data={this.state.data}
								showTestDecisions={this.props.showTestDecisions}
								onPlotDone={this.outputPanel ? this.outputPanel.scrollToBottom : noop}
								groupingVariables={this.state.groupVars}
								on2dSelection={this.on2dSelection}
								onQQPlotSelection={this.onQQPlotSelection}
								transformer={this.props.transformer}
								onBarchartSelection={this.onBarchartSelection}
								showHistogramDensityOption={this.props.histogramDensities}
								onGenerateTransformedVariable={this.onGenerateTransformedVariable}
								onHistogramSelection={this.onHistogramSelection}
								onCategoricalGenerate={( categorical, data ) => {
									const groupVars = categorical.slice();
									this.setState({
										categorical,
										groupVars,
										data
									});
								}}
								onQuantitativeGenerate={( quantitative, data ) => {
									this.setState({
										quantitative,
										data
									});
								}}
								onTutorialStart={this.props.onTutorialStart}
								onTutorialCompletion={this.props.onTutorialCompletion}
								onPredict={this.onPredict}
							/>
						</Suspense>
					</Navbar>
					<Card.Body style={{ overflowY: 'auto' }}>
						{ hasQuestions ? <Pages
							id={this.id + '_questions'}
							height={pagesHeight}
							className="data-explorer-questions"
							style={{
								display: this.state.openedNav !== 'questions' ? 'none' : null
							}}
							{...questionProps}
						/> : null }
						<div
							style={{
								display: this.state.openedNav !== 'data' ? 'none' : null
							}}
						>
								{ !this.props.data && !session.metadata.store[ this.id ] ? <Button
									size="small" onClick={this.resetStorage}
									style={{ position: 'absolute', top: '80px', zIndex: 2 }}
								>{this.props.t('clear-data')}</Button> : null }
								{ !this.props.data ? <Gate owner >
									<Button
										size="small" onClick={this.shareData}
										style={{ position: 'absolute', top: '80px', left: '140px', zIndex: 2 }}
									>{!session.metadata.store[ this.id ] ? this.props.t('share') : this.props.t('unshare')}</Button>
								</Gate>: null }
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
						{ this.props.history && this.state.openedNav === 'history' ?
							<History
								explorerID={this.id}
								actions={this.context.currentUserActions[ this.id ]}
								onCreated={this.addToOutputs}
								logAction={this.logAction}
								session={this.context}
								data={this.state.data}
								quantitative={this.state.quantitative}
								categorical={this.state.categorical}
								t={this.props.t}
								reportMode={this.props.reportMode}
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
					<OutputPanel
						output={this.state.output}
						ref={( div ) => {
							this.outputPanel = div;
						}}
						session={this.context}
						header={<Gate owner>
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
						</Gate>}
						clearOutput={() => {
							session.log({
								id: this.id,
								type: DATA_EXPLORER_CLEAR_OUTPUT_PANE,
								value: null
							}, 'owners' );
							this.setState({ output: []});
						}}
						reportMode={this.props.reportMode}
						t={this.props.t}
					/>
					<KeyControls
						actions={{
							'shift+alt+r': () => this.setState({ openedNav: 'editor' }),
							'shift+alt+h': () => this.setState({ openedNav: 'history' }),
							'shift+alt+d': () => this.setState({ openedNav: 'data' }),
							'shift+alt+q': () => this.setState({ openedNav: 'questions' })
						}}
					/>
				</div>
			</Col>
		</Row>;
		return mainContainer;
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
	history: true,
	tabs: [],
	questions: null,
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
		'Quantile',
		'Five-Number Summary'
	],
	plots: [
		'Bar Chart',
		'Pie Chart',
		'Mosaic Plot',
		'Histogram',
		'Interval Plot',
		'Box Plot',
		'Line Plot',
		'Scatterplot',
		'Scatterplot Matrix',
		'Heat Map',
		'Contour Chart',
		'Violin Plot',
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
	editorTitle: null,
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
	questions: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]),
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

export default withTranslation( 'data-explorer' )( withPropCheck( DataExplorer ) );
