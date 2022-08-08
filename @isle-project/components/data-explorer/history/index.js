// MODULES //

import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactList from 'react-list';
import Highlighter from 'react-highlight-words';
import Alert from 'react-bootstrap/Alert';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import PopoverHeader from 'react-bootstrap/PopoverHeader';
import PopoverBody from 'react-bootstrap/PopoverBody';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isStrictEqual from '@stdlib/assert/is-strict-equal';
import isPrimitive from '@stdlib/assert/is-primitive';
import {
	CLEAR_OUTPUT_PANE, DELETE_OUTPUT, DELETE_VARIABLE,
	VARIABLE_TRANSFORMER, CAT_TRANSFORMER, BIN_TRANSFORMER,
	RANDOM_TRANSFORMER
} from '@isle-project/constants/actions.js';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';
import useForceUpdate from '@isle-project/utils/hooks/use-force-update';
import SessionContext from '@isle-project/session/context.js';
import recreateOutput from './recreate_output.js';
import TextSelect from './text_select.js';
import SearchBar from './search.js';


// VARIABLES //

const RE_COMPONENT_TYPE = /^DATA_EXPLORER_/;


// MAIN //

const HistoryPanel = ( props ) => {
	const [ searchWords, setSearchWords ] = useState( [] );
	const [ includes, setIncludes ] = useState( [ 'own', 'others' ] );
	const [ notes, setNotes ] = useState( {} );
	const session = useContext( SessionContext );
	const forceUpdate = useForceUpdate();

	useEffect( () => {
		let unsubscribe;
		if ( session ) {
			unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === MEMBER_ACTION && action.id === props.explorerID ) {
					forceUpdate();
				}
			});
		}
		return () => {
			if ( unsubscribe ) {
				unsubscribe();
			}
		};
	});
	const filtered = [];
	const expr = new RegExp( searchWords[ 0 ], 'i' );
	if ( includes.length !== 0 ) {
		for ( let i = 0; i < props.actions.length; i++ ) {
			const action = { ...props.actions[ i ] };
			action.type = action.type.replace( RE_COMPONENT_TYPE, '' );
			if (
				action.type === CLEAR_OUTPUT_PANE ||
				action.type === DELETE_OUTPUT ||
				action.type === DELETE_VARIABLE
			) {
				continue;
			}
			let keep = false;
			if ( action.type.search( expr ) > -1 ) {
				keep = true;
			}
			else if ( action.email.search( expr ) > -1 ) {
				keep = true;
			}
			else {
				for ( let key in action.value ) {
					if (
						key.search( expr ) > -1 ||
						String( action.value[ key ] ).search( expr ) > -1
					) {
						keep = true;
						break;
					}
				}
			}
			if ( includes.length !== 2 ) {
				if ( includes[ 0 ] === 'own' ) {
					if ( action.email !== session.user.email ) {
						keep = false;
					}
				} else if ( action.email === session.user.email ) {
					// Case: includes[ 0 ]  === 'others'
					keep = false;
				}
			}
			if ( keep ) {
				filtered.push( action );
			}
		}
	}
	const handleRecreationFactory = ( idx ) => {
		const elem = filtered[ idx ];
		if (
			elem.type === VARIABLE_TRANSFORMER ||
			elem.type === CAT_TRANSFORMER ||
			elem.type === BIN_TRANSFORMER ||
			elem.type === DELETE_VARIABLE ||
			elem.type === RANDOM_TRANSFORMER
		) {
			return () => {
				props.onTransformation( elem );
				props.logAction( elem.type, elem.value );
			};
		}
		return () => {
			const output = recreateOutput( elem, props );
			props.onCreated( output );
			props.logAction( elem.type, elem.value );
		};
	};
	const handleSearch = ( value ) => {
		if ( isStrictEqual( value, '' ) ) {
			setSearchWords( [] );
		} else {
			setSearchWords( [ value ] );
		}
	};
	const renderListGroupItem = ( index, key ) => {
		const elem = filtered[ index ];
		const date = new Date( elem.absoluteTime );
		let printout = '';
		const value = elem.value;
		const title = `${elem.type} | Time: ${date.toLocaleTimeString()} - ${date.toLocaleDateString()} | ${elem.email}`; // eslint-disable-line i18next/no-literal-string
		for ( let key in value ) {
			if ( hasOwnProp( value, key ) && key !== 'showDecision' ) {
				const val = value[ key ];
				if ( !isUndefinedOrNull( val ) && key !== 'plotId' ) {
					printout += `${key}: ${!isPrimitive( val ) ? JSON.stringify( val ) : val}`;
					printout += '\t';
				}
			}
		}
		const popover = <Popover id={`history-note-popover-${index}`} style={{ width: 250 }} >
			<PopoverHeader>{props.t('leave-note')}</PopoverHeader>
			<PopoverBody>
				<TextSelect options={[
					'Did you consider any confounding variables?',
					'You should check model diagnostics'
				]} onSubmit={({ value }) => {
					const newNotes = { ...notes };
					if ( newNotes[ index ] ) {
						newNotes[ index] += `\n${value}`;
					} else {
						newNotes[ index ] = value;
					}
					setNotes( newNotes );
				}} t={props.t} />
			</PopoverBody>
		</Popover>;
		return ( <ListGroupItem>
			<div className="actionNote">
				<span className="title">
					<Highlighter
						searchWords={searchWords}
						autoEscape={true}
						textToHighlight={title}
					/>
				</span>
			</div>
			<div className="actionNote">
				<Highlighter
					searchWords={searchWords}
					autoEscape={true}
					textToHighlight={printout}
				/>
			</div>
			{ notes[ index ] ?
				<Alert variant="warning" >
					{notes[ index ]}
				</Alert> :
				null
			}
			{ props.instructorFeedback ?
				<OverlayTrigger trigger="click" placement="left" rootClose overlay={popover} >
					<Button
						aria-label={props.t('leave-feedback')}
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
				aria-label={props.t('repeat')}
				variant="success"
				size="sm"
				onClick={handleRecreationFactory( index )}
				style={{ position: 'absolute', top: 5, right: 5 }}
			>
				<i className="fas fa-redo"></i>
			</Button>
		</ListGroupItem> );
	};
	return (
		<div style={props.style} >
			<SearchBar
				onClick={handleSearch}
			/>
			<div style={{
				marginLeft: 0,
				overflowY: 'scroll',
				height: 0.75 * window.innerHeight,
				border: 'solid 1px rgba(0,0,0,0.125)'
			}} >
				<ReactList
					initialIndex={0}
					itemRenderer={renderListGroupItem}
					length={filtered.length}
					type="simple"
					pageSize={50}
					minSize={10}
				/>
			</div>
			<div style={{ float: 'right', marginRight: 20 }} >
				{props.reportMode !== 'individual' ? <ToggleButtonGroup
					name="options"
					onChange={setIncludes}
					type="checkbox"
					size="small"
					value={includes}
					style={{ padding: 6 }}
				>
					<ToggleButton
						id="data-explorer-action-toggle-own"
						variant="outline-secondary"
						value="own"
					>
						{props.t('own-actions')}
					</ToggleButton>
					<ToggleButton
						id="data-explorer-action-toggle-others"
						variant="outline-secondary"
						value="others"
					>
						{props.t('others-actions')}
					</ToggleButton>
				</ToggleButtonGroup> : null}
				<span className="title" >
					{filtered.length} {props.t('actions')}
				</span>
			</div>
		</div>
	);
};


// PROPERTIES //

HistoryPanel.propTypes = {
	actions: PropTypes.array,
	instructorFeedback: PropTypes.bool,
	onTransformation: PropTypes.func
};

HistoryPanel.defaultProps = {
	actions: [],
	instructorFeedback: false,
	onTransformation() {}
};


// EXPORTS //

export default HistoryPanel;
