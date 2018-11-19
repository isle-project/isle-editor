// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import contains from '@stdlib/assert/contains';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isStrictEqual from '@stdlib/assert/is-strict-equal';
import isArray from '@stdlib/assert/is-array';
import uncapitalize from '@stdlib/string/uncapitalize';
import lowercase from '@stdlib/string/lowercase';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import Badge from 'react-bootstrap/lib/Badge';
import Col from 'react-bootstrap/lib/Col';
import Container from 'react-bootstrap/lib/Container';
import Card from 'react-bootstrap/lib/Card';
import Row from 'react-bootstrap/lib/Row';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Modal from 'react-bootstrap/lib/Modal';
import ReactList from 'react-list';
import Highlighter from 'react-highlight-words';
import Plotly from 'components/plotly';
import WordCloud from 'components/word-cloud';
import Search from './search.js';
import SingleActionModal from './single_action_modal.js';
import FullscreenHeader from './fullscreen_header';
import './response_visualizer.css';


// VARIABLES //

const debug = logger( 'isle:response-visualizer' );
const LINE_HEIGHT = 20;
const TEXT_LINE_HEIGHT = 16;
const RE_NEWLINE = /\r?\n/g;


// MAIN //

class FullscreenActionDisplay extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			filtered: props.actions,
			searchwords: [],
			exact: false,
			actions: props.actions,
			showModal: false,
			modalContent: {}
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		if ( nextProps.actions !== prevState.actions ) {
			newState.filtered = nextProps.actions;
		}
		if ( !isEmptyObject( newState ) ) {
			newState.actions = nextProps.actions;
			return newState;
		}
		return null;
	}

	searchFilter = ( value ) => {
		if ( isStrictEqual( value, '' ) ) {
			this.setState({
				filtered: this.props.actions,
				searchwords: []
			});
		} else {
			const newFilter = [];
			if ( !this.state.exact ) {
				for ( let i = 0; i < this.props.actions.length; i++ ) {
					let actionVal = String( this.props.actions[i].value );
					actionVal = lowercase( actionVal );
					let comparisonValue = String( value );
					comparisonValue = lowercase( comparisonValue );
					if ( contains( actionVal, comparisonValue ) ) {
						newFilter.push( this.props.actions[i] );
					}
				}
			} else {
				const expr = new RegExp( '[^\\w]' + value + '[^\\w]', 'i' );
				for ( let i = 0; i < this.props.actions.length; i++ ) {
					let padded = ' ' + this.props.actions[i].value + ' '; // For padding the string with whitespace
					if ( expr.test( padded ) ) {
						newFilter.push( this.props.actions[i] );
					}
				}
			}
			this.setState({
				filtered: newFilter,
				searchwords: [ value ]
			});
		}
	}

	itemSizeGetter = ( index ) => {
		let lines = 2 * LINE_HEIGHT;
		const action = this.state.actions[ index ];
		const noLines = ( String( action.value ).match( RE_NEWLINE ) || '' ).length + 1;
		lines += noLines * TEXT_LINE_HEIGHT;
		debug( `Element at position ${index} is estimated to have ${lines} lines.` );
		return lines;
	}

	handleBox = ( event ) => {
		this.setState({
			exact: !this.state.exact
		}, () => {
			this.searchFilter( this.state.searchwords[ 0 ] );
		});
	}

	showModalFactory = ( elem ) => {
		return () => {
			debug( 'Show model for prominently displaying a single answer...' );
			this.setState({
				modalContent: elem,
				showModal: true
			});
		};
	}

	hideModal = () => {
		this.setState({
			showModal: false
		});
	}

	renderWordCloud() {
		return (
			<div style={{ height: 0.75 * window.innerHeight }}>
				<WordCloud
					data={this.props.actions.map( x => x.value )}
					height={0.70 * window.innerHeight}
					width={0.5*window.innerWidth}
					rotate={0}
					onClick={( d ) => {
						this.searchFilter( d.text );
					}}
				/>
			</div>
		);
	}

	renderBarchart() {
		return (
			<div style={{ height: 0.75 * window.innerHeight }}>
				<Plotly
					data={[
						{
							y: this.props.data.levels,
							x: this.props.counts,
							type: 'bar',
							orientation: 'h'
						}
					]}
					fit
					layout={{
						xaxis: {
							title: 'Count'
						},
						yaxis: {
							title: 'Value',
							categoryorder: 'array',
							categoryarray: this.props.data.levels
						},
						margin: {
							l: 250
						}
					}}
				/>
			</div>
		);
	}

	renderHistogram() {
		return (
			<div style={{ height: 0.75 * window.innerHeight }}>
				<Plotly
					data={[
						{
							x: this.props.actions.map( x => x.value ),
							type: 'histogram',
							name: 'histogram'
						}
					]}
					fit
					layout={{
						xaxis: {
							title: 'Count'
						},
						yaxis: {
							title: 'Value'
						}
					}}
				/>
			</div>
		);
	}

	renderMatrix() {
		const table = [];
		return (
			<div style={{ height: 0.75 * window.innerHeight }} >
				{this.props.actions}
			</div>
		);
	}

	renderListGroupItem = ( index, key ) => {
		debug( `Rendering item at position ${index}...` );
		const elem = this.state.filtered[ index ];
		let value = elem.value;
		if ( this.props.data.levels ) {
			if ( isArray( value ) ) {
				let str = '';
				value.forEach( ( v, idx ) => {
					if ( v ) {
						if ( str ) {
							str += ', ';
						}
						str += this.props.data.levels[ idx ];
					}
				});
				value = str || 'None';
			} else {
				value = this.props.data.levels[ value ] || 'None';
			}
		}
		const higlighter = <Highlighter
			searchWords={this.state.searchwords}
			autoEscape={true}
			textToHighlight={String( value )}
		/>;
		return ( <ListGroupItem key={key}>
			{ this.props.showExtended ?
				<span style={{ textAlign: 'left' }}>
					<b>{elem.name}:</b> {higlighter}
				</span> :
				higlighter
			}
			<ButtonGroup style={{ float: 'right', padding: '0rem 0rem' }}>
				<Button
					variant="outline-secondary"
					size="sm"
					onClick={this.showModalFactory( elem )}
				>
					<span className="fa fa-search-plus" />
				</Button>
			{ this.props.showExtended ?
					<Button
						variant="outline-danger"
						size="sm"
						onClick={this.props.deleteFactory( index )}
					>
						<span className="fa fa-trash-alt" />
					</Button> :
				null
			}
			</ButtonGroup>
		</ListGroupItem> );
	}

	renderPlot() {
		let plot;
		if ( this.props.actions.length > 0 ) {
			switch ( this.props.data.type ) {
				case 'text':
				default:
					plot = this.renderWordCloud();
					break;
				case 'factor':
					plot = this.renderBarchart();
					break;
				case 'number':
					plot = this.renderHistogram();
					break;
				case 'matrix':
					plot = this.renderMatrix();
					break;
			}
		}
		return plot;
	}

	render() {
		return ( <Fragment>
			<Modal
				show={this.props.show}
				onHide={this.props.toggleActions}
				dialogClassName="modal-100w"
			>
				<FullscreenHeader componentID={this.props.componentID} actionLabel={this.props.actionLabel} onPeriodChange={this.props.onPeriodChange} />
				<Modal.Body style={{ height: 0.75 * window.innerHeight, width: 0.90 * window.innerWidth }} >
					<Container>
						<Row>
							<Col md={6}>
								{ this.state.filtered.length > 0 ?
									<div style={{ marginLeft: 0, overflowY: 'scroll', height: 0.73 * window.innerHeight }}>
										<ReactList
											initialIndex={0}
											itemRenderer={this.renderListGroupItem}
											length={this.state.filtered.length}
											type="variable"
											pageSize={50}
											itemSizeGetter={this.itemSizeGetter}
										/>
									</div> :
									<Card body className="bg-light">
										<h2>There are no data matching the selected parameters.</h2>
									</Card>
								}
							</Col>
							<Col md={6}>
								{this.renderPlot()}
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<h4>
						<Badge variant="secondary">
							{`# of displayed ${uncapitalize( this.props.actionLabel )}: ${this.state.filtered.length}`}
						</Badge>
					</h4>
					<Search
						onClick={this.searchFilter}
						onExact={this.handleBox}
					/>
					<Button variant="secondary" onClick={this.props.toggleExtended}>{ this.props.showExtended ? 'Hide Extended' : 'Show Extended' }</Button>
					<Button onClick={this.props.toggleActions}>Close</Button>
				</Modal.Footer>
			</Modal>
			<SingleActionModal show={this.state.showModal} onHide={this.hideModal} modalContent={this.state.modalContent} actionLabel={this.props.actionLabel} showExtended={this.state.showExtended} />
		</Fragment> );
	}
}


// PROPERTY TYPES //

FullscreenActionDisplay.propTypes = {
	actions: PropTypes.array.isRequired,
	actionLabel: PropTypes.string,
	data: PropTypes.object.isRequired,
	componentID: PropTypes.string.isRequired,
	counts: PropTypes.array.isRequired,
	deleteFactory: PropTypes.func.isRequired,
	onPeriodChange: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	showExtended: PropTypes.bool.isRequired,
	toggleActions: PropTypes.func.isRequired,
	toggleExtended: PropTypes.func.isRequired
};

FullscreenActionDisplay.defaultProps = {
	actionLabel: 'Responses'
};


// EXPORTS //


export default FullscreenActionDisplay;
