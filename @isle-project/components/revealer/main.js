// MODULES //

import React, { useContext, useEffect, useRef, useState, Fragment } from 'react';
import logger from 'debug';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import isNull from '@stdlib/assert/is-null';
import Panel from '@isle-project/components/panel';
import Gate from '@isle-project/components/gate';
import generateUID from '@isle-project/utils/uid';
import stopPropagation from '@isle-project/utils/stop-propagation';
import SessionContext from '@isle-project/session/context.js';
import { REVEAL_CONTENT, HIDE_CONTENT } from '@isle-project/constants/actions.js';
import { MEMBER_ACTION, RETRIEVED_COHORTS, RECEIVED_LESSON_INFO } from '@isle-project/constants/events.js';
import './revealer.css';


// VARIABLES //

const debug = logger( 'isle:revealer' );
const uid = generateUID( 'revealer' );


// MAIN //

/**
* An ISLE component that instructors may use to selectively reveal or hide children content to all students during class.
*
* @property {(string|node)} message - message to be displayed when content is hidden
* @property {boolean} show - controls whether to initially display child elements
*/
const Revealer = ( props ) => {
	const { message, show, children } = props;
	const id = useRef( props.id || uid({ message, show }) );
	const session = useContext( SessionContext );
	const { t } = useTranslation( 'revealer' );

	const [ showChildren, setShowChildren ] = useState( show );
	const [ prevShow, setPrevShow ] = useState( show );
	const [ selectedCohort, setSelectedCohort ] = useState( null );

	if ( show !== prevShow ) {
		setShowChildren( show );
		setPrevShow( show );
	}
	useEffect( () => {
		const readMetadata = () => {
			if (
				session &&
				session.metadata &&
				session.metadata.revealer &&
				session.metadata.revealer[ id.current ]
			) {
				let show = session.metadata.revealer[ id.current ][ session.cohort ];
				if ( show === void 0 ) {
					show = session.metadata.revealer[ id.current ][ 'all' ];
				}
				if ( show === true || show === false ) {
					setShowChildren( show );
				}
			}
		};

		let unsubscribe;
		if ( session ) {
			readMetadata();
			debug( 'Subscribe revealer with ID: '+id );
			unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === RETRIEVED_COHORTS ) {
					setSelectedCohort( null );
				}
				else if ( type === RECEIVED_LESSON_INFO ) {
					readMetadata();
				}
				else if ( type === MEMBER_ACTION ) {
					if ( action.id === id.current ) {
						const cohortName = action.value;
						debug( `Received action for cohort ${cohortName}: ` );
						if (
							!cohortName ||
							( session.cohort && session.cohort === cohortName )
						) {
							if ( action.type === REVEAL_CONTENT ) {
								debug( `Reveal content for ${id.current}...` );
								setShowChildren( true );
							} else if ( action.type === HIDE_CONTENT ) {
								debug( `Hide content for ${id.current}...` );
								setShowChildren( false );
							}
						}
						else if ( selectedCohort === cohortName ) {
							if ( action.type === REVEAL_CONTENT ) {
								debug( `Reveal content of ${id.current} for cohort ${cohortName}...` );
								setShowChildren( true );
							} else if ( action.type === HIDE_CONTENT ) {
								debug( `Hide content of ${id.current} for cohort ${cohortName}...` );
								setShowChildren( false );
							}
						}
					}
				}
			});
		}
		return () => {
			if ( unsubscribe ) {
				unsubscribe();
			}
		};
	}, [ id, selectedCohort, session ] );

	const handleCohortChange = ( event ) => {
		const value = event.target.value;
		if (
			value !== selectedCohort ||
			( value === 'all' && isNull( selectedCohort ) )
		) {
			debug( 'Handle cohort change: '+value );
			setSelectedCohort( value === 'all' ? null : value );
		}
	};
	const toggleContent = () => {
		const newShowChildren = !showChildren;
		setShowChildren( newShowChildren );

		// Send message to other users:
		let status;
		if (
			session &&
			session.metadata &&
			session.metadata.revealer &&
			session.metadata.revealer[ id.current ]
		) {
			status = session.metadata.revealer[ id.current ];
		} else {
			status = {};
		}
		if ( newShowChildren ) {
			session.log({
				id: id.current,
				type: REVEAL_CONTENT,
				value: selectedCohort
			}, 'members' );
			status[ selectedCohort || 'all' ] = true;
			session.updateMetadata( 'revealer', id.current, status );
		} else {
			session.log({
				id: id.current,
				type: HIDE_CONTENT,
				value: selectedCohort
			}, 'members' );
			status[ selectedCohort || 'all' ] = false;
			session.updateMetadata( 'revealer', id.current, status );
		}
	};
	const cohorts = session.cohorts || [];
	const header = <h3 className="center" >{message || t('message')}</h3>;
	debug( 'showChildren: '+showChildren );
	return (<Fragment>
		<Gate owner >
			<Panel className="center revealer-panel" >
				<Button
					className="revealer-button"
					onClick={toggleContent}
				>{showChildren ? t('hide') : t('reveal')}</Button>
				{t('contents-of')}<i>{id.current}</i> {showChildren ? t('from') : t('to')}
				<select
					className="revealer-select"
					onChange={handleCohortChange}
					onBlur={handleCohortChange}
					onClick={stopPropagation}
					value={selectedCohort || 'all'}
				>
					<option value="all">{t('all-students')}</option>
					{cohorts.map( ( v, key ) => {
						return (
							<option
								key={key}
								value={v.title}
							>{v.title}</option>
						);
					})}
				</select>
			</Panel>
		</Gate>
		{!showChildren ? header : null}
		<div className="revealer outer-element" style={{
			display: showChildren ? 'inherit' : 'none'
		}}>{children}</div>
	</Fragment> );
};


// PROPERTIES //

Revealer.defaultProps = {
	message: null,
	show: false
};

Revealer.propTypes = {
	message: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	show: PropTypes.bool
};


// EXPORTS //

export default Revealer;
