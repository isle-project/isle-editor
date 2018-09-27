// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import contains from '@stdlib/assert/contains';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isStrictEqual from '@stdlib/assert/is-strict-equal';
import lowercase from '@stdlib/string/lowercase';
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
import RangePicker from 'components/range-picker';
import Search from 'components/instructor-bar/search';
import Plotly from 'components/plotly';
import WordCloud from 'components/word-cloud';


// MAIN //

class FullscreenActionDisplay extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			filtered: props.actions,
			searchwords: [],
			exact: false,
			actions: props.actions
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

	handleBox = ( event ) => {
		this.setState({
			exact: !this.state.exact
		}, () => {
			this.searchFilter( this.state.searchwords[ 0 ] );
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
							y: this.props.categories,
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
							title: 'Value'
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

	renderListGroupItem = ( index, key ) => {
		const elem = this.state.filtered[ index ];
		const higlighter = <Highlighter
			searchWords={this.state.searchwords}
			autoEscape={true}
			textToHighlight={String( elem.value )}
		/>;
		return ( <ListGroupItem key={key}>
			{ this.props.showExtended ?
				<span style={{ textAlign: 'left' }}>
					<b>{elem.name}:</b> {higlighter}
				</span> :
				higlighter
			}
			{ this.props.showExtended ?
				<span>
					<Button
						variant="outline-danger"
						size="sm"
						style={{ float: 'right', padding: '0rem .4rem' }}
						onClick={this.props.deleteFactory( index )}
					>
						<span>&times;</span>
					</Button>
				</span>:
				null
			}
		</ListGroupItem> );
	}

	renderPlot() {
		let plot;
		if ( this.props.actions.length > 0 ) {
			switch ( this.props.dataType ) {
				case 'text':
				default:
					plot = this.renderWordCloud();
				break;
				case 'factor':
					plot = this.renderBarchart();
				break;
				case 'number':
					plot = this.renderHistogram();
			}
		}
		return plot;
	}

	render() {
		return ( <Modal
			show={this.props.show}
			onHide={this.props.toggleActions}
			dialogClassName="modal-100w"
		>
			<Modal.Header style={{ paddingBottom: '5px' }} closeButton >
				<h4 style={{ float: 'left', margin: '2px 14px 2px 2px' }} >{this.props.actionLabel}</h4>
				<RangePicker
					style={{ float: 'left' }}
					size="sm"
					onChange={this.props.onPeriodChange}
				/>
			</Modal.Header>
			<Modal.Body style={{ height: 0.75 * window.innerHeight, width: 0.90 * window.innerWidth }} >
				<Container>
					<Row>
						<Col md={6}>
							{ this.state.filtered.length > 0 ?
								<div style={{ marginLeft: 0, overflowY: 'scroll', height: 0.73 * window.innerHeight }}>
									<ReactList
										itemRenderer={this.renderListGroupItem}
										length={this.state.filtered.length}
										type="variable"
										pageSize={50}
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
						{'# of displayed actions: '+this.state.filtered.length}
					</Badge>
				</h4>
				<Search
					onClick={this.searchFilter}
					onExact={this.handleBox}
				/>
				<Button variant="secondary" onClick={this.props.toggleExtended}>{ this.props.showExtended ? 'Hide Extended' : 'Show Extended' }</Button>
				<Button onClick={this.props.toggleActions}>Close</Button>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTY TYPES //

FullscreenActionDisplay.propTypes = {
	actions: PropTypes.array.isRequired,
	actionLabel: PropTypes.string.isRequired,
	categories: PropTypes.array.isRequired,
	counts: PropTypes.array.isRequired,
	dataType: PropTypes.string.isRequired,
	deleteFactory: PropTypes.func.isRequired,
	onPeriodChange: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	showExtended: PropTypes.bool.isRequired,
	toggleActions: PropTypes.func.isRequired,
	toggleExtended: PropTypes.func.isRequired
};


// EXPORTS //


export default FullscreenActionDisplay;
