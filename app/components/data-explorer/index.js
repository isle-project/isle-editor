// MODULES //

import React, { Component, PropTypes } from 'react';
import { Button, Grid, Row, Col, MenuItem, Nav, NavDropdown, NavItem, Panel , Tab } from 'react-bootstrap';
import $ from 'jquery';
import ContingencyTable from 'components/data-explorer/contingency-table';
import FrequencyTable from 'components/data-explorer/frequency-table';
import SummaryStatistics from 'components/data-explorer/summary-statistics';
import Barchart from 'components/data-explorer/barchart';
import Boxplot from 'components/data-explorer/boxplot';
import Heatmap from 'components/data-explorer/heatmap';
import Histogram from 'components/data-explorer/histogram';
import Piechart from 'components/data-explorer/piechart';
import Scatterplot from 'components/data-explorer/scatterplot';
import isArray from '@stdlib/utils/is-array';
import isNumber from '@stdlib/utils/is-number';
import isObject from '@stdlib/utils/is-object';
import entries from '@stdlib/utils/object-entries';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import { generate } from 'randomstring';


// FUNCTIONS //

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
					e.type === 'Grouped Frequency Table'
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
													<td>{arr[ 1 ][ 0 ].toFixed( 3 )},{arr[ 1 ][ 1 ].toFixed( 3 )}</td>
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
				} else if ( isArray( e.value ) ) {
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
		groupVars.unshift( 'None' );

		this.state = {
			output: [],
			groupVars
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
		this.setState({
			output: newOutput
		});
	}
	/**
	* React component render method
	*/
	render() {
		let colWidth = this.props.questions ? 4 : 6;
		let nStatistics = this.props.statistics.length;
		let defaultActiveKey = 'first';
		if ( nStatistics === 0 ) {
			defaultActiveKey = 'second';
		}
		const categoricalProps = {
			data: this.props.data,
			variables: this.props.categorical,
			groupingVariables: this.state.groupVars,
			onCreated: this.addToOutputs,
			onPlotDone: this.scrollToBottom
		};
		const continuousProps = {
			data: this.props.data,
			variables: this.props.continuous,
			groupingVariables: this.state.groupVars,
			onCreated: this.addToOutputs,
			onPlotDone: this.scrollToBottom
		};
		return (
			<Grid>
				<Row>
					{ this.props.questions ? <Col md={colWidth}><Panel
						header={<h3>Questions</h3>}
						style={{ height: 600 }}
					>{this.props.questions}</Panel></Col> : null }
					<Col md={colWidth}>
						<Panel
							header={<h3>Toolbox</h3>}
							style={{ minHeight: 600 }}
						>
							<Tab.Container id="options-menu" defaultActiveKey={defaultActiveKey}>
								<Row className="clearfix">
									<Col sm={12}>
										<Nav bsStyle="tabs">
											{ nStatistics > 0 ?
												<NavItem eventKey="1">
												Statistics
												</NavItem> : null
											}
											{ this.props.tables.length > 0 ? <NavDropdown
												eventKey="2"
												title="Tables"
												id="nav-dropdown-tables"
											>
												{this.props.tables.map( ( e, i ) =>
													<MenuItem eventKey={`2.${i+1}`}>{e}</MenuItem> )}
											</NavDropdown> : null
											}
											{ this.props.plots.length > 0 ? <NavDropdown
												eventKey="3"
												title="Plots"
												id="nav-dropdown-plots"
											>
												{this.props.plots.map( ( e, i ) =>
													<MenuItem eventKey={`3.${i+1}`}>{e}</MenuItem> )}
											</NavDropdown> : null
											}
											{ this.props.tabs.length > 0 ? this.props.tabs.map( ( e, i ) => {
												return ( <NavItem eventKey={`${4+i}`}>
													{e.title}
												</NavItem> );
											}) : null }
										</Nav>
									</Col>
									<Col sm={12}>
										<Tab.Content animation>
											<Tab.Pane eventKey="1">
												<SummaryStatistics {...continuousProps} />
											</Tab.Pane>
											{this.props.tables.map( ( e, i ) => {
												let content = null;
												switch ( e ) {
												case 'Frequency Table':
													content = <FrequencyTable
														{...categoricalProps}
													/>;
													break;
												case 'Contingency Table':
													content = <ContingencyTable
														{...categoricalProps}
													/>;
													break;
												}
												return <Tab.Pane eventKey={`2.${i+1}`}>
													{content}
												</Tab.Pane>;
											})}
											{this.props.plots.map( ( e, i ) => {
												let content = null;
												switch ( e ) {
												case 'Bar Chart':
													content = <Barchart
														{...categoricalProps}
													/>;
													break;
												case 'Pie Chart':
													content = <Piechart
														{...categoricalProps}
													/>;
													break;
												case 'Histogram':
													content = <Histogram
														{...continuousProps}
													/>;
													break;
												case 'Box Plot':
													content = <Boxplot
														{...continuousProps}
													/>;
													break;
												case 'Scatterplot':
													content = <Scatterplot
														{...continuousProps}
													/>;
													break;
												case 'Heat Map':
													content = <Heatmap
														{...continuousProps}
													/>;
													break;
												}
												return <Tab.Pane eventKey={`3.${i+1}`}>
													{content}
												</Tab.Pane>;
											})}
											{this.props.tabs.map( ( e, i ) => {
												return ( <Tab.Pane eventKey={`${4+i}`}>
													{e.content}
												</Tab.Pane> );
											})}
										</Tab.Content>
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
		'Heat Map'
	],
	tables: [
		'Frequency Table',
		'Contingency Table'
	]
};


// PROPERTY TYPES //

DataExplorer.propTypes = {
	data: PropTypes.object.isRequired,
	statistics: PropTypes.array,
	plots: PropTypes.array,
	tables: PropTypes.array,
	onSelect: PropTypes.func
};


// EXPORTS //

export default DataExplorer;

