// MODULES //

import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Button, Grid, Row, Col, MenuItem, Nav, NavDropdown, NavItem, Panel , Tab } from 'react-bootstrap';
import $ from 'jquery';
import parse from 'csv-parse';
import detect from 'detect-csv';
import isArray from '@stdlib/assert/is-array';
import isNumber from '@stdlib/assert/is-number';
import isNumberArray from '@stdlib/assert/is-number-array';
import isObject from '@stdlib/assert/is-object';
import entries from '@stdlib/utils/entries';
import hasProp from '@stdlib/assert/has-property';
import copy from '@stdlib/utils/copy';
import { generate } from 'randomstring';
import SelectInput from 'components/input/select';
import ContingencyTable from 'components/data-explorer/contingency-table';
import FrequencyTable from 'components/data-explorer/frequency-table';
import SummaryStatistics from 'components/data-explorer/summary-statistics';
import SimpleLinearRegression from 'components/data-explorer/linear-regression';
import VariableTransformer from 'components/data-explorer/variable-transformer';
import Slider from 'components/slider';


// PLOT COMPONENTS //

import Barchart from 'components/data-explorer/barchart';
import Boxplot from 'components/data-explorer/boxplot';
import Heatmap from 'components/data-explorer/heatmap';
import Histogram from 'components/data-explorer/histogram';
import MosaicPlot from 'components/data-explorer/mosaicplot';
import Piechart from 'components/data-explorer/piechart';
import Scatterplot from 'components/data-explorer/scatterplot';


// TEST COMPONENTS //

import ZTest from 'components/data-explorer/ztest';
import ZTest2 from 'components/data-explorer/ztest2';
import CorrTest from 'components/data-explorer/corrtest';
import Chi2Test from 'components/data-explorer/chi2';
import PropTest from 'components/data-explorer/proptest';
import PropTest2 from 'components/data-explorer/proptest2';
import ANOVA from 'components/data-explorer/anova';


// FUNCTIONS //

const generateTransformationCode = ( variable ) => `if ( datum.${variable} > 0 ) {
	return 'Yes'
} else {
	return 'No'
}`;

const makeDraggable = ( div ) => {
	let markup = ReactDOMServer.renderToStaticMarkup( div );
	let plain = `<!-- OUTPUT_${generate( 3 )}  -->`;
	return <div
		draggable="true"
		onDragStart={ ( ev ) => {
			ev.dataTransfer.setData( 'text/html', markup );
			ev.dataTransfer.setData( 'text/plain', plain );
		}}
	>
		{div}
	</div>;
};

const OutputPanel = ( output ) => {
	return (
		<div id="outputPanel" style={{ height: 500, overflowY: 'scroll' }} >
			{output.map( ( e, idx ) => {
				if ( e.type === 'Chart' ) {
					return e.value;
				}
				else if (
					e.type === 'Contingency Table' ||
					e.type === 'Frequency Table' ||
					e.type === 'Grouped Frequency Table' ||
					e.type === 'Test' ||
					e.type === 'Simple Linear Regression'
				) {
					return makeDraggable( e.value );
				}
				else if ( isNumber( e.value ) ) {
					let elem = <div key={idx} >
						<label>{e.variable}: </label>
						<pre>{e.type}: {e.value.toFixed( 3 )}</pre>
					</div>;
					return makeDraggable( elem );
				}
				else if ( isObject( e.value ) ) {
					let elem = <div key={idx} >
						<label>{e.variable}: </label>
						<pre>
							<table>
								<tbody>
									<tr>
										<th>{e.group}</th>
										<th>{e.type}</th>
									</tr>
									{entries( e.value ).map( ( arr, i ) => {
										if ( isArray( arr[ 1 ]) ) {
											return (
												<tr key={i} >
													<td>{arr[ 0 ]}</td>
													{arr[ 1 ].map( x => <td>{x}</td> ).join( ', ' )}
												</tr>
											);
										}
										return (
											<tr key={i} >
												<td>{arr[ 0 ]} </td>
												<td>{arr[ 1 ].toFixed( 3 )} </td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</pre>
					</div>;
					return makeDraggable( elem );
				} else if ( isArray( e.value ) && e.type === 'Range' ) {
					let elem = <div key={idx}>
						<label>{e.variable}: </label>
						<pre>
							<table>
								<tbody>
									<tr>
										<th>Min</th>
										<th>Max</th>
									</tr>
									<tr>
										{e.value.map( e => <td>{e}</td> )}
									</tr>
								</tbody>
							</table>
						</pre>
					</div>;
					return makeDraggable( elem );
				 } else if ( isArray( e.value ) && e.type === 'Interquartile Range' ) {
					let elem = <div key={idx}>
						<label>{e.variable}: </label>
						<pre>
							<table>
								<tbody>
									<tr>
										<th>IQR</th>
										<th>Lower</th>
										<th>Upper</th>
									</tr>
									<tr>
										{e.value.map( e => <td>{e}</td> )}
									</tr>
								</tbody>
							</table>
						</pre>
					</div>;
					return makeDraggable( elem );
				}
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
			ready
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
	scrollToBottom() {
		const $outputPanel = $( '#outputPanel' );
		$outputPanel.animate({
			scrollTop: $outputPanel.prop( 'scrollHeight' )
		}, 1000 );
	}
	componentWillUpdate( nextProps, nextState ){
		if ( nextState.output !== this.state.output ) {
			const $outputPanel = $( '#outputPanel' );
			$outputPanel.animate({
				scrollTop: $outputPanel.prop( 'scrollHeight' )
			}, 1000 );
		}
	}
	addToOutputs = ( element ) => {
		let newOutput = this.state.output.slice();
		newOutput.push( element );
		console.log( newOutput );
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
					newCategorical.push( name );																								previous = newContinuous.indexOf( name );
					if ( previous > 0 ) {
						newContinuous.splice( previous, 1 );
					}
				}
				groupVars = newCategorical.slice();
			}
			let newState = {
				data: newData,
				categorical: newCategorical,
				continuous: newContinuous,
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
				message: `The original variables of the data set cannot be overwritten.`,
				level: 'error',
				position: 'tr'
			});
		}
	}
	onFileRead = ( event ) => {
		const text = event.target.result;
		const csv = detect( text );
		parse( text, { delimiter: csv.delimiter, columns: true, auto_parse: true }, ( err, output ) => {
			if ( err ) {
				const { session } = this.context;
				return session.addNotification({
					title: 'Could not read file.',
					message: `The following error was encountered while trying to read the file:${err.message}`,
					level: 'error',
					position: 'tr'
				});
			}
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
		});
	}
	handleFileUpload = () => {
		const reader = new FileReader();
		const selectedFile = this.fileUpload.files[ 0 ];
		reader.addEventListener( 'load', this.onFileRead, false );
		reader.readAsText( selectedFile, 'utf-8' );
	}
	ignoreDrag = ( evt ) => {
		evt.stopPropagation();
		evt.preventDefault();
	}
	onFileDrop = ( evt ) => {
		evt.stopPropagation();
		evt.preventDefault();
		const dt = evt.dataTransfer;
		const reader = new FileReader();
		let file = null;
		if ( dt.items ) {
			if ( dt.items[ 0 ].kind == 'file' ) {
				file = dt.items[ 0 ].getAsFile();
			}
		} else {
			file = dt.files[ 0 ];
		}
		if ( file ) {
			const mimeType = file.type;
			if ( mimeType !== 'text/csv' ) {
				const { session } = this.context;
				return session.addNotification({
					title: 'No CSV file.',
					message: 'The supplied file is not a CSV file.',
					level: 'error',
					position: 'tr'
				});
			}
			reader.addEventListener( 'load', this.onFileRead, false );
			reader.readAsText( file, 'utf-8' );
		}
	}
	/**
	* React component render method
	*/
	render() {

		if ( !this.state.data ) {
			return ( <Panel style={{ textAlign: 'center' }} >
				<h1>Data Explorer</h1>
				<label>Please upload a data set (CSV format):</label>
				<input
					type="file"
					accept=".csv"
					onChange={this.handleFileUpload}
					ref={ fileUpload => this.fileUpload = fileUpload }
					style={{ margin: 'auto' }}
				/>
				<p>or</p>
				<div
					onDrop={this.onFileDrop}
					onDragOver={this.ignoreDrag}
					onDragEnd={this.ignoreDrag}
					style={{
						minHeight: '150px',
						width: '250px',
						border: '1px solid blue',
						margin: 'auto',
						padding: '10px'
					}}
				>
					<span>Drop file here</span>
				</div>
			</Panel> );
		}
		if ( !this.state.ready ) {
			const variableNames = Object.keys( this.state.data );
			return ( <Panel>
				<h1>Data Explorer</h1>
				<h3>Please select which variables should be treated as numeric and which ones as categorical:</h3>
				<SelectInput
					legend="Continuous:"
					options={variableNames}
					defaultValue={this.state.continuous}
					multi
					onChange={ ( continuous ) => this.setState({ continuous }) }
				/>
				<SelectInput
					legend="Categorical:"
					options={variableNames}
					defaultValue={this.state.categorical}
					multi
					onChange={ ( categorical ) => this.setState({ categorical }) }
				/>
				<Button onClick={ () => {
					const groupVars = this.state.categorical.slice();
					const ready = true;
					this.setState({
						groupVars,
						ready
					});
				}}>Submit</Button>
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
			{ this.props.tabs.length > 0 ? this.props.tabs.map( ( e, i ) => {
				return ( <NavItem eventKey={`${6+i}`}>
					{e.title}
				</NavItem> );
			}) : null }
		</Nav>;

		const tabs = <Tab.Content animation>
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
					/>;
					break;
				}
				return <Tab.Pane key={i} eventKey={`2.${i+1}`}>
					{content}
				</Tab.Pane>;
			})}
			{this.props.plots.map( ( e, i ) => {
				let content = null;
				switch ( e ) {
				case 'Bar Chart':
					content = <Barchart
						{...categoricalProps}
						logAction={this.logAction}
					/>;
					break;
				case 'Pie Chart':
					content = <Piechart
						{...categoricalProps}
						logAction={this.logAction}
					/>;
					break;
				case 'Histogram':
					content = <Histogram
						{...continuousProps}
						logAction={this.logAction}
					/>;
					break;
				case 'Box Plot':
					content = <Boxplot
						{...continuousProps}
						logAction={this.logAction}
					/>;
					break;
				case 'Scatterplot':
					content = <Scatterplot
						{...continuousProps}
						logAction={this.logAction}
					/>;
					break;
				case 'Heat Map':
					content = <Heatmap
						{...continuousProps}
						logAction={this.logAction}
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
				return <Tab.Pane key={i} eventKey={`3.${i+1}`}>
					{content}
				</Tab.Pane>;
			})}
			{this.props.tests.map( ( e, i ) => {
				let content = null;
				switch ( e ) {
				case 'One-Sample Z-Test':
					content = <ZTest
						onCreated={this.addToOutputs}
						data={this.state.data}
						continuous={this.state.continuous}
						logAction={this.logAction}
					/>;
					break;
				case 'Two-Sample Z-Test':
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
					content = <ANOVA
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
				return <Tab.Pane key={i} eventKey={`4.${i+1}`}>
					{content}
				</Tab.Pane>;
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
				return <Tab.Pane key={i} eventKey={`5.${i+1}`}>
					{content}
				</Tab.Pane>;
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
			{this.props.tabs.map( ( e, i ) => {
				return ( <Tab.Pane key={i} eventKey={`${6+i}`}>
					{e.content}
				</Tab.Pane> );
			})}
		</Tab.Content>;

		return (
			<Grid>
				<Row>
					{ this.props.questions ? <Col md={colWidth}><Slider
						title="Questions"
						draggable={false}
						dots={false}
						style={{ height: 600 }}
					>{this.props.questions}</Slider></Col> : null }
					<Col md={colWidth}>
						<Panel
							header={<h3>Toolbox</h3>}
							style={{ minHeight: 600 }}
						>
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
						</Panel>
					</Col>
					<Col md={colWidth}>
						<Panel header={<h3>Output</h3>} style={{ minHeight: 600 }}>
							{OutputPanel( this.state.output )}
							<Button bsSize="small" block onClick={ () => {
								this.setState({ output: []});
							}}>Clear</Button>
						</Panel>
					</Col>
				</Row>
			</Grid>
		);
	}
}


// DEFAULT PROPERTIES //

DataExplorer.defaultProps = {
	onSelect(){},
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
		'Correlation',
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
		'One-Sample Z-Test',
		'One-Sample Proportion Test',
		'Two-Sample Z-Test',
		'Two-Sample Proportion Test',
		'Correlation Test',
		'Chi-squared Independence Test',
		'One-Way ANOVA'
	],
	models: [
		'Simple Linear Regression'
	],
	categorical: [],
	continuous: []
};


// TYPES //

DataExplorer.propTypes = {
	data: PropTypes.object,
	statistics: PropTypes.array,
	plots: PropTypes.array,
	tables: PropTypes.array,
	tests: PropTypes.array,
	models: PropTypes.array,
	onSelect: PropTypes.func,
	transformer: PropTypes.bool
};

DataExplorer.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default DataExplorer;

