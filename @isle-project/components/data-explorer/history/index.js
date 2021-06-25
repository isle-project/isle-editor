// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactList from 'react-list';
import Highlighter from 'react-highlight-words';
import Alert from 'react-bootstrap/Alert';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import PopoverContent from 'react-bootstrap/PopoverContent';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isStrictEqual from '@stdlib/assert/is-strict-equal';
import isPlainObject from '@stdlib/assert/is-plain-object';
import recreateOutput from './recreate_output.js';
import TextSelect from './text_select.js';
import SearchBar from './search.js';


// FUNCTIONS //

function filterForWords( actions, word ) {
	const expr = new RegExp( word, 'i' );
	const out = [];
	for ( let i = 0; i < actions.length; i++ ) {
		const elem = actions[ i ];
		let keep = false;
		if ( elem.type.search( expr ) > -1 ) {
			keep = true;
		}
		else {
			for ( let key in elem.value ) {
				if (
					key.search( expr ) > -1 ||
					String( elem.value[ key ] ).search( expr ) > -1
				) {
					keep = true;
					break;
				}
			}
		}
		if ( keep ) {
			out.push( elem );
		}
	}
	return out;
}


// MAIN //

class HistoryPanel extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			filtered: props.actions,
			searchWords: [],
			nActions: props.actions.length,
			notes: {}
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.actions.length > prevState.nActions ) {
			return {
				filtered: nextProps.actions,
				nActions: nextProps.actions.length
			};
		}
		return null;
	}

	handleSearch = ( value ) => {
		if ( isStrictEqual( value, '' ) ) {
			this.setState({
				filtered: this.props.actions,
				searchWords: []
			});
		} else {
			this.setState({
				filtered: filterForWords( this.props.actions, value ),
				searchWords: [ value ]
			});
		}
	}

	renderListGroupItem = ( index, key ) => {
		const n = this.state.filtered.length - 1;
		const elem = this.state.filtered[ n - index ];
		const date = new Date( elem.absoluteTime );
		let printout = '';
		const value = elem.value;
		const title = `${elem.type} | Time: ${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`; // eslint-disable-line i18next/no-literal-string
		for ( let key in value ) {
			if ( hasOwnProp( value, key ) && key !== 'showDecision' ) {
				const val = value[ key ];
				if ( !isUndefinedOrNull( val ) && key !== 'plotId' ) {
					printout += `${key}: ${isPlainObject( val ) ? JSON.stringify( val ) : val}`;
					printout += '\t';
				}
			}
		}
		const popover = <Popover id={`history-note-popover-${index}`} style={{ width: 250 }} >
			<PopoverTitle>{this.props.t('leave-note')}</PopoverTitle>
			<PopoverContent>
				<TextSelect options={[
					'Did you consider any confounding variables?',
					'You should check model diagnostics'
				]} onSubmit={({ value }) => {
					const notes = { ...this.state.notes };
					if ( notes[ index ] ) {
						notes[ index] += `\n${value}`;
					} else {
						notes[ index ] = value;
					}
					this.setState({
						notes
					});
				}} t={this.props.t} />
			</PopoverContent>
		</Popover>;
		return ( <ListGroupItem>
			<div className="actionNote">
				<span className="title">
					<Highlighter
						searchWords={this.state.searchWords}
						autoEscape={true}
						textToHighlight={title}
					/>
				</span>
			</div>
			<div className="actionNote">
				<Highlighter
					searchWords={this.state.searchWords}
					autoEscape={true}
					textToHighlight={printout}
				/>
			</div>
			{ this.state.notes[ index ] ?
				<Alert variant="warning" >
					{this.state.notes[ index ]}
				</Alert> :
				null
			}
			{ this.props.instructorFeedback ?
				<OverlayTrigger trigger="click" placement="left" rootClose overlay={popover} >
					<Button
						aria-label={this.props.t('leave-feedback')}
						variant="info"
						size="sm"
						style={{ position: 'absolute', top: 5, right: 45 }}
					>
						<i className="fas fa-sticky-note"></i>
					</Button>
				</OverlayTrigger> :
				null
			}
			<Button
				aria-label={this.props.t('repeat')}
				variant="success"
				size="sm"
				onClick={this.handleRecreationFactory( index )}
				style={{ position: 'absolute', top: 5, right: 5 }}
			>
				<i className="fas fa-redo"></i>
			</Button>
		</ListGroupItem> );
	}

	handleRecreationFactory = ( idx ) => {
		const n = this.state.filtered.length - 1;
		const elem = this.state.filtered[ n - idx ];
		return () => {
			const output = recreateOutput( elem, this.props );
			this.props.onCreated( output );
			this.props.logAction( elem.type, elem.value );
		};
	}

	render() {
		if ( !this.state.filtered ) {
			return null;
		}
		return (
			<div style={this.props.style} >
				<SearchBar
					onClick={this.handleSearch}
				/>
				<div style={{
					marginLeft: 0,
					overflowY: 'scroll',
					height: 0.75 * window.innerHeight,
					border: 'solid 1px rgba(0,0,0,0.125)'
				}} >
					<ReactList
						initialIndex={0}
						itemRenderer={this.renderListGroupItem}
						length={this.state.filtered.length}
						type="simple"
						pageSize={50}
						minSize={10}
					/>
				</div>
				<span className="title" style={{ float: 'right', marginRight: 20 }} >
					{this.state.filtered.length} {this.props.t('actions')}
				</span>
			</div>
		);
	}
}


// PROPERTIES //

HistoryPanel.propTypes = {
	actions: PropTypes.array,
	instructorFeedback: PropTypes.bool
};

HistoryPanel.defaultProps = {
	actions: [],
	instructorFeedback: false
};


// EXPORTS //

export default HistoryPanel;
