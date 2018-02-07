// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import contains from '@stdlib/assert/contains';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isStrictEqual from '@stdlib/assert/is-strict-equal';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Modal from 'react-bootstrap/lib/Modal';
import Well from 'react-bootstrap/lib/Well';
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
			exact: false
		};
	}

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.actions !== this.props.actions ) {
			newState.filtered = nextProps.actions;
		}

		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	searchFilter = ( value ) => {
		if ( isStrictEqual( value, '' ) ) {
			this.setState({
				filtered: this.props.actions,
				searchwords: []
			});
		} else {
			const newFilter = [];
			const expr = new RegExp( '[^\\w]' + value + '[^\\w]' );
			if ( !this.state.exact ) {
				for ( let i = 0; i < this.props.actions.length; i++ ) {
					if ( contains(this.props.actions[i].value, value) ) {
						newFilter.push( this.props.actions[i] );
					}
				}
			} else {
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

	handleBox = (event) => {
		// This is an issue for us negating it
		this.setState({
			exact: !this.state.exact
		});
	}

	renderWordCloud() {
		return (
			<div style={{ height: 0.75 * window.innerHeight }}>
				<WordCloud
					data={this.props.actions.map( x => x.value )}
					height={0.73 * window.innerHeight}
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
			textToHighlight={elem.value}
		/>;
		return ( <ListGroupItem key={key}>
			{ this.props.showExtended ?
				<span style={{ textAlign: 'left' }}>
					<b>{elem.name}:</b> {higlighter}
				</span> :
				higlighter
			}
			{ this.props.showExtended ?
				<Button
					bsSize="xs"
					style={{ float: 'right' }}
					onClick={this.props.deleteFactory( index )}
				>
					<span>&times;</span>
				</Button> :
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
			dialogClassName="fullscreen-modal"
		>
			<Modal.Header style={{ paddingBottom: '5px' }} closeButton >
				<Modal.Title>
					<h3 style={{ float: 'left', margin: '2px 14px 2px 2px' }} >Actions</h3>
					<RangePicker
						style={{ float: 'left' }}
						bsSize="small"
						onChange={this.props.onPeriodChange}
					/>
					<Search
						style={{ float: 'left', width: '30%' }}
						onClick={this.searchFilter}
						onExact={this.handleBox}
					/>
					<span style={{ fontSize: '14x', float: 'left', padding: '4px 4px 4px 20px' }}>
						{'# of displayed actions: '+this.state.filtered.length}
					</span>
					</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ height: 0.75 * window.innerHeight, width: 0.90 * window.innerWidth }} >
				<Grid>
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
								<Well>
									<h2>There is no data matching the selected parameters</h2>
								</Well>
							}
						</Col>
						<Col md={6}>
							{this.renderPlot()}
						</Col>
					</Row>
				</Grid>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={this.props.toggleExtended}>{ this.props.showExtended ? 'Hide Extended' : 'Show Extended' }</Button>
				<Button onClick={this.props.toggleActions}>Close</Button>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTY TYPES //

FullscreenActionDisplay.propTypes = {
	actions: PropTypes.array.isRequired,
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
