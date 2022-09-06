// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { Trans } from 'react-i18next';
import uniq from 'uniq';
import tokenize from '@stdlib/nlp/tokenize';
import contains from '@stdlib/assert/contains';
import isStrictEqual from '@stdlib/assert/is-strict-equal';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isEmptyString from '@stdlib/assert/is-empty-string';
import uncapitalize from '@stdlib/string/uncapitalize';
import lowercase from '@stdlib/string/lowercase';
import removeLast from '@stdlib/string/remove-last';
import ndarray from '@stdlib/ndarray/array';
import objectKeys from '@stdlib/utils/keys';
import tabulate from '@stdlib/utils/tabulate';
import indexOf from '@stdlib/utils/index-of';
import floor from '@stdlib/math/base/special/floor';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import absdiff from '@stdlib/math/base/utils/absolute-difference';
import NINF from '@stdlib/constants/float64/ninf';
import Alert from 'react-bootstrap/Alert';
import Table from '@isle-project/components/table';
import Image from '@isle-project/components/image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Modal from 'react-bootstrap/Modal';
import ReactList from 'react-list';
import innerText from 'react-innertext';
import Highlighter from 'react-highlight-words';
import ChatButton from '@isle-project/components/internal/chat-button';
import VideoChatButton from '@isle-project/components/internal/video-chat-button';
import TextClustering from '@isle-project/components/internal/text-clustering';
import Checkbox from '@isle-project/components/input/checkbox';
import Plotly from '@isle-project/components/plotly';
import Switch from '@isle-project/components/switch';
import WordCloud from '@isle-project/components/word-cloud';
import SessionContext from '@isle-project/session/context.js';
import { CAT20 as COLORS } from '@isle-project/constants/colors';
import Search from './search.js';
import SingleActionModal from './single_action_modal.js';
import FullscreenHeader from './fullscreen_header';
import './fullscreen_action_display.css';


// VARIABLES //

const debug = logger( 'isle:response-visualizer' );
const LINE_HEIGHT = 15;
const TEXT_LINE_HEIGHT = 23;
const RE_NEWLINE = /\r?\n/g;
const UPDATE_THRESHOLD = 5;


// FUNCTIONS //

const wordWrap = ( str ) => {
	const n = floor( ( window.innerWidth * 0.5 ) / ( 16*0.575 ) );
	const RE_LINE_BREAKS = new RegExp(`(?![^\\n]{1,${n}}$)([^\\n]{1,${n}})\\s`, 'g' );
	return str.replace( RE_LINE_BREAKS, '$1\n' );
};

const tabulateValues = ( actions, levels ) => {
	if ( !actions ) {
		return [];
	}
	const table = {};
	for ( let i = 0; i < actions.length; i++ ) {
		const v = actions[ i ];
		if ( isArray( v.value ) ) {
			for ( let j = 0; j < v.value.length; j++ ) {
				const bool = v.value[ j ];
				if ( bool ) {
					const key = levels[ j ];
					if ( !table[ key ] ) {
						table[ key ] = 1;
					} else {
						table[ key ] += 1;
					}
				}
			}
		} else {
			const key = isString( v.value ) ? v.value : levels[ v.value ];
			if ( !table[ key ] ) {
				table[ key ] = 1;
			} else {
				table[ key ] += 1;
			}
		}
	}
	let maxVal = NINF;
	const counts = new Array( levels.length );
	for ( let i = 0; i < levels.length; i++ ) {
		if ( table[ levels[ i ] ] > maxVal ) {
			maxVal = table[ levels[ i ] ];
		}
		counts[ i ] = table[ levels[ i ] ];
	}
	return counts;
};

const generateValueLabel = ({ value, type, levels, rows, cols, options }) => {
	if ( type === 'factor' ) {
		if ( isArray( value ) ) {
			let str = '';
			value.forEach( ( v, idx ) => {
				if ( v ) {
					if ( str ) {
						str += ', ';
					}
					str += levels[ idx ];
				}
			});
			value = str || 'None';
		} else if ( isNumber( value ) ) {
			value = levels[ value ] || 'None';
		} else {
			value = value || 'None';
		}
	}
	else if ( type === 'matches' ) {
		let str = '';
		if ( isArray( value ) ) {
			for ( let i = 0; i < value.length; i++ ) {
				str += value[ i ].a + ' - '+value[ i ].b+'; ';
			}
		}
		value = str || 'None';
	}
	else if ( type === 'matrix' ) {
		let str = '';
		for ( let i = 0; i < rows.length; i++ ) {
			for ( let j = 0; j < cols.length; j++ ) {
				if ( value[ i ][ j ] ) {
					str += rows[ i ] + ' - '+cols[ j ]+'; ';
				}
			}
		}
		value = str || 'None';
	}
	else if ( type === 'tensor' ) {
		let str = '';
		for ( let i = 0; i < rows.length; i++ ) {
			for ( let j = 0; j < cols.length; j++ ) {
				const rv = rows[ i ];
				const cv = cols[ j ];
				str += ( isString( rv ) && !isEmptyString( rv ) ) ? rv : i;
				str += '-';
				str += ( isString( cv ) && !isEmptyString( cv ) ) ? cv : j;
				str += ': ';
				const ij = i+':'+j;
				if ( value && isNumber( value[ ij ] ) && isArray( options[ ij ] ) ) {
					str += options[ ij ][ value[ ij ] ];
				} else {
					str += 'NA';
				}
				str += '; ';
			}
		}
		value = str || 'None';
	}
	else if ( type === 'range' ) {
		value = value ? `[${value.map( x => isNumber( x ) ? x : 'NA' ).join( ', ' )}]` : 'None';
	}
	return value;
};


// MAIN //

class FullscreenActionDisplay extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			filtered: props.actions.slice( 0 ),
			searchwords: [],
			actions: props.actions.slice( 0 ),
			showModal: false,
			modalContent: {},
			clusters: [],
			handleMultipleResponses: 'first',
			removeQuestionWords: true
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		const newState = {};
		const diff = absdiff( nextProps.actions.length, prevState.actions.length );
		if ( diff >= UPDATE_THRESHOLD || nextProps.actions.length === prevState.actions.length - 1 ) {
			newState.filtered = nextProps.actions.slice();
			newState.actions = nextProps.actions.slice();
			newState.clusters = [];
			return newState;
		}
		return null;
	}

	searchFilter = ( value, caseSensitive, exact ) => {
		const { actions } = this.props;
		if ( isStrictEqual( value, '' ) ) {
			this.setState({
				filtered: this.props.actions,
				searchwords: [],
				clusters: []
			});
		} else {
			const newFilter = [];
			if ( !exact ) {
				for ( let i = 0; i < actions.length; i++ ) {
					const action = actions[ i ];
					const flags = caseSensitive ? '' : 'i';
					const expr = new RegExp( value, flags );
					const actionValue = generateValueLabel({ value: action.value, ...this.props.data });
					if (
						this.props.showExtended &&
						(
							String( actionValue ).search( expr ) !== -1 ||
							String( action.email ).search( expr ) !== -1 ||
							String( action.name ).search( expr ) !== -1
						)
					) {
						newFilter.push( this.props.actions[ i ] );
					} else if ( String( actionValue ).search( expr ) !== -1 ) {
						newFilter.push( this.props.actions[ i ] );
					}
				}
			} else {
				const flags = caseSensitive ? '' : 'i';
				const expr = new RegExp( '(?:^|[^\\w])' + value + '(?:$|[^\\w])', flags );
				for ( let i = 0; i < actions.length; i++ ) {
					const action = actions[ i ];
					const actionValue = generateValueLabel({ value: action.value, ...this.props.data });
					if (
						this.props.showExtended &&
						(
							expr.test( actionValue ) ||
							expr.test( action.email ) ||
							expr.test( action.name )
						)
					) {
						newFilter.push( action );
					} else if ( expr.test( actionValue ) ) {
						newFilter.push( action );
					}
				}
			}
			this.setState({
				filtered: newFilter,
				searchwords: [ value ],
				clusters: []
			});
		}
	};

	itemSizeGetter = ( index ) => {
		index = this.state.filtered.length - index - 1;
		let lines = 2.0 * LINE_HEIGHT;
		const action = this.state.filtered[ index ];
		if ( !action ) {
			return 0;
		}
		const value = wordWrap( String( action.value ) );
		let noLines = ( value.match( RE_NEWLINE ) || '' ).length + 1;
		if ( this.props.showExtended ) {
			const { type } = this.props.data;
			const smallCol = type === 'number' || type === 'factor';
			if ( smallCol ) {
				noLines += 2;
			} else {
				noLines += 1;
			}
		}
		lines += noLines * TEXT_LINE_HEIGHT;
		debug( `Element at position ${index} is estimated to have ${noLines} lines.` );
		return lines;
	};

	showModalFactory = ( elem ) => {
		return () => {
			debug( 'Show model for prominently displaying a single answer...' );
			this.setState({
				modalContent: elem,
				showModal: true
			});
		};
	};

	hideModal = () => {
		this.setState({
			showModal: false
		});
	};

	getActions = () => {
		let actions;
		const seenEmails = new Set();
		if ( this.state.handleMultipleResponses === 'last' ) {
			actions = this.props.actions.slice();
			actions.sort( ( a, b ) => b.absoluteTime - a.absoluteTime );
			actions = actions.filter( x => {
				if ( !seenEmails.has( x.email ) ) {
					seenEmails.add( x.email );
					return true;
				}
				return false;
			});
		}
		else if ( this.state.handleMultipleResponses === 'first' ) {
			actions = this.props.actions.slice();
			actions.sort( ( a, b ) => a.absoluteTime - b.absoluteTime );
			actions = actions.filter( x => {
				if ( !seenEmails.has( x.email ) ) {
					seenEmails.add( x.email );
					return true;
				}
				return false;
			});
		}
		else {
			actions = this.props.actions;
		}
		return actions;
	};

	renderWordCloud() {
		debug( 'Rendering word cloud...' );
		const actions = this.getActions();
		const texts = actions.map( x => x.value );
		let stopwords = [];
		if (
			this.state.removeQuestionWords &&
			isString( this.props.data.question )
		) {
			stopwords = tokenize( this.props.data.question );
		}
		return (
			<Fragment>
				<WordCloud
					data={texts}
					height={0.65 * window.innerHeight}
					width={0.45*window.innerWidth}
					rotate={0}
					triggerRender={true}
					onClick={( d ) => {
						if ( contains( this.state.searchwords, d.text ) ) {
							this.searchFilter( '' );
						} else {
							this.searchFilter( d.text );
						}
					}}
					style={{
						marginTop: 20
					}}
					stopwords={stopwords}
				/>
				<TextClustering
					texts={this.state.filtered.map( x => x.value )}
					actionLabel={this.props.actionLabel || this.props.t('action-label')}
					onClusters={( data ) => {
						debug( 'Received clusters...' );
						this.setState({
							clusters: data
						});
					}}
					t={this.props.t}
				/>
				<Checkbox
					tooltip={this.props.t('remove-question-words-tooltip')}
					tooltipPlacement="top"
					size="small" inline legend={this.props.t('remove-question-words')}
					defaultValue={this.state.removeQuestionWords}
					onChange={( value ) => {
						this.setState({ removeQuestionWords: value });
					}}
					style={{
						bottom: '85px',
						position: 'absolute'
					}}
				/>
			</Fragment>
		);
	}

	renderBarchart() {
		const actions = this.getActions();
		let maxLength = 0;
		let levels;
		if ( this.props.data.levels ) {
			levels = this.props.data.levels.map( ( x, i ) => {
				let out = isString( x ) ? x : innerText( x );
				if ( !out ) {
					out = `${this.props.t('choice')} ${i+1}`;
				}
				if ( out.length > maxLength ) {
					maxLength = out.length;
				}
				return out;
			});
		} else {
			levels = uniq( actions.map( x => x.value ) );
		}
		const leftMargin = max( 200, min( maxLength * 7.5, 600 ) );
		let counts = tabulateValues( actions, levels );
		if ( levels.length > 7 ) {
			// Drop empty labels in case of many levels for readability of plot:
			levels = levels.filter( ( _, idx ) => counts[ idx ] > 0 );
			counts = counts.filter( val => val > 0 );
		}
		const traces = [
			{
				y: levels,
				x: counts,
				type: 'bar',
				orientation: 'h'
			}
		];
		const layout = {
			xaxis: {
				title: this.props.t('count')
			},
			yaxis: {
				title: this.props.t('value'),
				type: 'category',
				categoryorder: 'array',
				categoryarray: levels.slice().reverse()
			},
			margin: {
				l: leftMargin
			}
		};
		return (
			<div style={{ height: 0.75 * window.innerHeight }}>
				<Plotly
					data={traces}
					fit editable
					layout={layout}
				/>
			</div>
		);
	}

	renderSankeyDiagram() {
		const { left, right } = this.props.data;
		const labels = left.concat( right );
		const actions = this.getActions();
		const paths = {};
		for ( let i = 0; i < actions.length; i++ ) {
			const arr = actions[ i ].value;
			if ( isArray( arr ) ) {
				for ( let j = 0; j < arr.length; j++ ) {
					const { a, b } = arr[ j ];
					if ( paths[ a+'-'+b ] ) {
						paths[ a+'-'+b ] += 1;
					} else {
						paths[ a+'-'+b ] = 1;
					}
				}
			}
		}
		const keys = objectKeys( paths );
		const source = new Array( keys.length );
		const target = new Array( keys.length );
		const value = new Array( keys.length );
		for ( let i = 0; i < keys.length; i++ ) {
			const elems = keys[ i ].split( '-' );
			source[ i ] = indexOf( left, elems[ 0 ] );
			target[ i ] = left.length + indexOf( right, elems[ 1 ] );
			value[ i ] = paths[ keys[ i ] ];
		}
		return (
			<div style={{ height: 0.75 * window.innerHeight }}>
				<Plotly
					data={[{
						type: 'sankey',
						orientation: 'h',
						node: {
							pad: 15,
							thickness: 30,
							line: {
								color: 'black',
								width: 0.5
							},
							label: labels,
							color: 'blue'
						},
						link: {
							source,
							target,
							value
						}
					}]}
					fit editable
					layout={{
						fontSize: 10
					}}
				/>
			</div>
		);
	}

	renderHistogram() {
		const actions = this.getActions();
		const values = actions.map( x => x.value );
		let freqs = tabulate( values );
		freqs = freqs.sort( ( a, b ) => {
			return b[ 2 ] - a[ 2 ];
		});
		return (
			<div>
				<div className="scrollable-table" style={{ height: 0.3 * window.innerHeight }} >
					<Table>
						<thead>
							<tr>
								<th>{this.props.t('value')}</th>
								<th>{this.props.t('absolute')}</th>
								<th>{this.props.t('relative')}</th>
							</tr>
						</thead>
						<tbody >
							{freqs.map( ( val, idx ) => {
								return ( <tr key={idx} >
									<td>{val[ 0 ]}</td>
									<td>{val[ 1 ]}</td>
									<td>{val[ 2 ].toFixed( 3 )}</td>
								</tr> );
							})}
						</tbody>
					</Table>
				</div>
				<div style={{ height: 0.4 * window.innerHeight }}>
					<Plotly
						data={[
							{
								x: values,
								type: 'histogram',
								name: 'histogram'
							}
						]}
						fit editable
						layout={{
							xaxis: {
								title: this.props.t('value')
							},
							yaxis: {
								title: this.props.t('count')
							}
						}}
					/>
				</div>
			</div>
		);
	}

	renderTable() {
		const nRows = this.props.data.rows.length;
		const nCols = this.props.data.cols.length;
		const counts = ndarray({
			'shape': [ nRows, nCols ],
			'dtype': 'int32'
		});
		const actions = this.getActions();
		for ( let i = 0; i < actions.length; i++ ) {
			const elem = actions[ i ].value;
			for ( let j = 0; j < nRows; j++ ) {
				for ( let k = 0; k < nCols; k++ ) {
					if ( elem[ j ][ k ] === true ) {
						counts.set( j, k, Number( counts.get( j, k ) ) + 1 );
					}
				}
			}
		}
		const table = <table className="table table-bordered" >
			<thead>
				<th></th>
				{this.props.data.cols.map( ( c, i ) => <th key={i} >{c}</th> )}
			</thead>
			<tbody>
				{this.props.data.rows.map( ( r, idx ) => {
					const row = new Array( nCols+1 );
					row[ 0 ] = <th>{r}</th>;
					for ( let i = 0; i < nCols; i++ ) {
						row.push( <td>{counts.get( idx, i )}</td> );
					}
					return <tr key={idx}>{row}</tr>;
				})}
			</tbody>
		</table>;
		return (
			<div style={{ height: 0.75 * window.innerHeight }} >
				{table}
			</div>
		);
	}

	/* eslint-disable-next-line class-methods-use-this */
	renderNestedTable = () => {
		return null;
	};

	chatInviteFactory = ( chatName, email ) => {
		const session = this.context;
		return ( _, opened ) => {
			debug( 'Invite '+email+' to personal chat...' );
			if ( opened ) {
				session.inviteToChat({
					name: chatName,
					canLeave: false
				}, email );
			} else {
				session.closeChatForAll( chatName );
			}
		};
	};

	videoChatInviteFactory = ( data, email ) => {
		const session = this.context;
		return ( _, opened ) => {
			debug( 'Invite '+email+' to video chat...' );
			if ( opened ) {
				session.inviteToVideo( data, email );
			}
		};
	};

	renderListGroupItem = ( index, key ) => {
		debug( `Rendering item at position ${index}...` );
		const { filtered, clusters, searchwords } = this.state;
		index = filtered.length - index - 1;
		const elem = filtered[ index ];
		const value = generateValueLabel({ value: elem.value, ...this.props.data });
		let highlighter;
		if ( this.props.data.type === 'image' ) {
			highlighter = <Image src={value} width="auto" height="250px" />;
		} else if ( this.props.data.type === 'file' ) {
			highlighter = <a href={value} target="_blank" >{value}</a>;
		} else {
			highlighter = isString( value ) ? <Highlighter
				className="response-visualizer-text"
				searchWords={searchwords}
				autoEscape={true}
				textToHighlight={wordWrap( String( value ) )}
			/> : value;
		}
		const name = elem.name;
		const style = {
			padding: '0.75rem'
		};
		if ( clusters.length > 0 ) {
			const opacity = 0.1;
			const col = COLORS[ clusters[ index ] % COLORS.length ] || '#D3D3D3';
			let rgba = 'rgba(' + parseInt( col.substring( 1, 3 ), 16 ) + ','+ parseInt( col.substring( 3, 5 ), 16 );
			rgba += ',' + parseInt( col.substring( 5, 7 ), 16 ) + ',' + opacity + ')';
			style.background = rgba;
			style.border = '1px solid '+col;
		}
		const session = this.context;
		const date = new Date( elem.absoluteTime );

		/* eslint-disable i18next/no-literal-string */
		return ( <ListGroupItem key={key} style={style}>
			{ this.props.showExtended ?
				<span style={{ textAlign: 'left' }}>
					<b style={{ marginBottom: 4 }}>{name} ({elem.email}) ({date.toLocaleTimeString() + ' ' + date.toLocaleDateString()}):</b>
					<br />
					{highlighter}
				</span> :
				highlighter
			}
			{ this.props.showExtended && session.userProgress[ elem.email ] ? <ButtonGroup className="chat-button-group" >
				<VideoChatButton
					for={`${session.user.name}-${name}`}
					subject={this.props.t( 'video-chat-with', { name })}
					style={{ float: 'right' }}
					onClick={this.videoChatInviteFactory({
						name: `${session.user.name}-${name}`,
						subject: this.props.t( 'video-chat-with', { name })
					}, elem.email )}
					buttonVariant="outline-secondary"
					buttonLabel={<i className="fa fa-xs fa-video"></i>}
					tooltipPlacement="bottom"
					tooltip={this.props.t( 'video-chat' )}
				/>
				<ChatButton
					for={this.props.t( 'chat-with', { name })}
					onClick={this.chatInviteFactory( this.props.t( 'chat-with', { name }), elem.email )}
					buttonVariant="outline-secondary"
					buttonLabel={<i className="fas fa-comments"></i>}
					tooltipPlacement="bottom"
					tooltip={this.props.t( 'text-chat' )}
					style={{ float: 'right' }}
				/>
			</ButtonGroup> : null }
			<ButtonGroup className="action-display-button-group">
			{ this.props.data.type !== 'image' ?
				<Button
					variant="outline-secondary"
					size="sm"
					onClick={this.showModalFactory({ ...elem, value: value })}
					aria-label={this.props.t('fullscreen-view')}
				>
					<span className="fa fa-search-plus" />
				</Button> :
				null
			}
			{ this.props.showExtended ?
					<Button
						variant="outline-danger"
						size="sm"
						onClick={this.props.deleteFactory( elem )}
						aria-label={this.props.t('delete')}
					>
						<span className="fa fa-trash" />
					</Button> :
				null
			}
			</ButtonGroup>
		</ListGroupItem> );
	};

	renderRangePlot = () => {
		const halfWidth = [];
		const values = [];
		const midpoints = [];
		const indices = [];
		const actions = this.getActions();
		for ( let i = 0; i < actions.length; i++ ) {
			const x = actions[ i ].value;
			values.push( isString( x ) ? JSON.parse( x ) : x );
			midpoints.push( 0.5 * ( values[ i ][ 0 ] + values[ i ][ 1 ] ) );
			halfWidth.push( 0.5 * ( values[ i ][ 1 ] - values[ i ][ 0 ] ) );
			indices.push( i );
		}
		return ( <div style={{ height: 0.75 * window.innerHeight }}>
			<Plotly
				data={[
					{
						y: midpoints,
						x: indices,
						text: indices.map( i => {
							return `[${values[ i ][ 0 ]}, ${values[ i ][ 1 ]}]`;
						}),
						error_y: {
							type: 'data',
							array: halfWidth,
							visible: true
						},
						type: 'scatter',
						mode: 'markers',
						orientation: 'h'
					}
				]}
				fit editable
				layout={{
					xaxis: {
						showticklabels: false,
						showline: false
					},
					yaxis: {
						title: this.props.t('value')
					}
				}}
			/>
		</div> );
	};

	renderPlot() {
		let plot;
		if ( this.props.actions.length === 0 ) {
			return <Alert variant="warning" >{this.props.t('no-data-available')}</Alert>;
		}
		switch ( this.props.data.type ) {
			case 'image':
			case 'file':
				plot = null;
				break;
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
				plot = this.renderTable();
				break;
			case 'tensor':
				plot = this.renderNestedTable();
				break;
			case 'matches':
				plot = this.renderSankeyDiagram();
				break;
			case 'range':
				plot = this.renderRangePlot();
				break;
		}
		if ( !plot ) {
			return null;
		}
		const label = removeLast( lowercase( this.props.actionLabel ) );
		return ( <div>
			{plot}
			<Switch style={{ zIndex: 2000 }} onChange={( idx ) => {
				let type;
				switch ( idx ) {
					case 0:
						type = 'first';
						break;
					case 1:
						type = 'all';
						break;
					case 2:
						type = 'last';
						break;
				}
				this.setState({ handleMultipleResponses: type });
			}}>
				<i>
					<Trans i18nKey="include-first" ns="ResponseVisualizer" values={{ label }} >
						<b>Only</b> include first {{ label }} for any student.
					</Trans>
				</i>
				<i>
					<Trans i18nKey="include-all" ns="ResponseVisualizer" values={{ label }} >
						Include <b>all</b> {{ label }}s for any student.
					</Trans>
				</i>
				<i>
					<Trans i18nKey="include-latest" ns="ResponseVisualizer" values={{ label }} >
						<b>Only</b> include latest {{ label }} for any student.
					</Trans>
				</i>
			</Switch>
		</div> );
	}

	render() {
		const { type } = this.props.data;
		const leftColWidth = ( type === 'number' || type === 'factor' ) ? 3 : 6;
		const rightColWidth = 12 - leftColWidth;
		return ( <Fragment>
			<Modal
				show={true}
				onHide={this.props.toggleActions}
				dialogClassName="modal-100w"
			>
				<FullscreenHeader
					componentID={this.props.componentID}
					actionLabel={this.props.actionLabel}
					onPeriodChange={this.props.onPeriodChange}
					cohorts={this.context.cohorts}
					selectedCohort={this.props.selectedCohort}
					onCohortChange={this.props.onCohortChange}
					actions={this.props.actions}
					t={this.props.t}
				/>
				<Modal.Body style={{ minHeight: 0.75 * window.innerHeight, padding: 0 }} >
					<Row>
						<Col md={leftColWidth}>
							{ this.state.filtered.length > 0 ?
								<div style={{ marginLeft: 0, overflowY: 'scroll', height: 0.75 * window.innerHeight }}>
									<ReactList
										key={`${this.props.componentID}-list-${this.state.filtered.length}`}
										initialIndex={0}
										itemRenderer={this.renderListGroupItem}
										length={this.state.filtered.length}
										type={this.props.data.type === 'image' ? 'uniform' : 'variable'}
										pageSize={50}
										minSize={10}
										threshold={100}
										itemSizeGetter={this.props.data.type === 'image' ? null : this.itemSizeGetter}
									/>
								</div> :
								<Card body className="bg-light">
									<h2>{this.props.t('no-matching-data')}</h2>
								</Card>
							}
						</Col>
						<Col md={rightColWidth} style={{ overflowY: 'auto' }}>
							{this.renderPlot()}
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<h4>
						<Badge bg="secondary">
							{this.props.t( 'num-actions', { label: uncapitalize( this.props.actionLabel ), n: this.state.filtered.length })}
						</Badge>
					</h4>
					<Search
						onClick={this.searchFilter}
						extended={this.props.showExtended}
						t={this.props.t}
					/>
					<Button variant="secondary" onClick={this.props.toggleExtended}>{ this.props.showExtended ? this.props.t('hide-extended') : this.props.t('show-extended') }</Button>
					<Button onClick={this.props.toggleActions}>{this.props.t('close')}</Button>
				</Modal.Footer>
			</Modal>
			<SingleActionModal
				show={this.state.showModal} onHide={this.hideModal}
				modalContent={this.state.modalContent}
				actionLabel={this.props.actionLabel}
				dataType={this.props.data.type}
				showExtended={this.state.showExtended}
				t={this.props.t}
			/>
		</Fragment> );
	}
}


// PROPERTIES //

FullscreenActionDisplay.propTypes = {
	actions: PropTypes.array.isRequired,
	actionLabel: PropTypes.string,
	data: PropTypes.object.isRequired,
	componentID: PropTypes.string.isRequired,
	deleteFactory: PropTypes.func.isRequired,
	onPeriodChange: PropTypes.func.isRequired,
	showExtended: PropTypes.bool.isRequired,
	toggleActions: PropTypes.func.isRequired,
	toggleExtended: PropTypes.func.isRequired
};

FullscreenActionDisplay.defaultProps = {
	actionLabel: null
};

FullscreenActionDisplay.contextType = SessionContext;


// EXPORTS //


export default FullscreenActionDisplay;
