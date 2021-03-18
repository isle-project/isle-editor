// MODULES //

import React, { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Overlay from 'react-bootstrap/Overlay';
import Draggable from '@isle-project/components/draggable';
import Gate from '@isle-project/components/gate';
import Tooltip from '@isle-project/components/tooltip';
import Sketchpad from '@isle-project/components/sketchpad';
import Panel from '@isle-project/components/panel';
import KeyControls from '@isle-project/components/key-controls';
import isElectron from '@isle-project/utils/is-electron';
import SessionContext from '@isle-project/session/context.js';
import pixelsToNumber from '@isle-project/utils/pixels-to-number';
import useForceUpdate from '@isle-project/utils/hooks/use-force-update';
import { addResources } from '@isle-project/locales';
import { ENGAGEMENT_SURVEY_START, ENGAGEMENT_SURVEY_END, TOGGLE_PRESENTATION_MODE } from '@isle-project/constants/actions.js';
import { MEMBER_ACTION, RECEIVED_QUEUE_QUESTIONS, RECEIVED_LESSON_INFO, RECEIVED_USERS, USER_JOINED } from '@isle-project/constants/events.js';
import EngagementButtons from './engagement_buttons.js';
import HelpPage from './help';
import Calculator from './calculator';
import Engagement from './engagement';
import Ticketing from './ticketing';
import Queue from './queue';
import './toolbar.css';


// VARIABLES //

const F2 = '(F2)';
const DEFAULT_HIDE_STATE = {};
const DEFAULT_CUSTOM_STATE = {};


// MAIN //

/**
* Toolbar of widgets for students to use during the course of a lesson.
*
* @property {Array} elements - array of elements with `name`, `icon` (a font-awesome icon name), and `component` (React node to be rendered) keys
*/
const Toolbar = ({ elements }) => {
	const session = useContext( SessionContext );
	const { t } = useTranslation( 'Toolbar' );
	const forceUpdate = useForceUpdate();
	const [ calculator, setCalculator ] = useState( false );
	const [ help, setHelp ] = useState( false );
	const [ queue, setQueue ] = useState( false );
	const [ sketchpad, setSketchpad ] = useState( false );
	const [ engagementMenu, setEngagementMenu ] = useState( false );
	const [ engagementInProgress, setEngagementInProgress ] = useState( false );
	const [ ticketing, setTicketing ] = useState( false );
	const [ showToolbar, setShowToolbar ] = useState( true );
	const [ sketchpadDims, setSketchpadDims ] = useState({
		width: window.innerWidth * 0.75,
		height: window.innerHeight * 0.6
	});
	const [ hide, setHide ] = useState( DEFAULT_HIDE_STATE );
	const [ showCustom, setShowCustom ] = useState( DEFAULT_CUSTOM_STATE );
	const engagementButtonRef = useRef( null );

	const toggleCalculator = useCallback( () => {
		setCalculator( !calculator );
	}, [ calculator ] );
	const toggleQueue = useCallback( () => {
		setQueue( !queue );
	}, [ queue ] );
	const toggleSketchpad = useCallback( () => {
		setSketchpad( !sketchpad );
	}, [ sketchpad ] );
	const toggleTicketing = useCallback( () => {
		setTicketing( !ticketing );
	}, [ ticketing ] );
	const toggleEngagement = useCallback( () => {
		if ( engagementInProgress ) {
			const action = {
				id: 'engagement',
				type: ENGAGEMENT_SURVEY_END
			};
			return session.log( action, 'members' );
		}
		setEngagementMenu( !engagementMenu );
	}, [ engagementInProgress, engagementMenu, session ] );
	const toggleHelp = useCallback( () => {
		setHelp( !help );
	}, [ help ] );
	const toggleToolbar = useCallback( () => {
		setShowToolbar( !showToolbar );
	}, [ showToolbar ] );
	const renderButton = ( elem, key ) => {
		const toggleElement = () => {
			setShowCustom({
				...showCustom,
				[elem.name]: !showCustom[ elem.name ]
			});
		};
		return (
			<Tooltip key={key} tooltip={`${showCustom[ elem.name ] ? t( 'close' ) : t( 'open' )} ${elem.name}`} placement="right" >
				<Button
					variant="light"
					className="toolbar-button"
					onClick={toggleElement}
					onKeyPress={toggleElement}
				>
					<span className={`fa fa-lg fa-${elem.icon} toolbar-icon`} />
				</Button>
			</Tooltip>
		);
	};
	const handleNewQueueQuestion = useCallback( () => {
		session.addNotification({
			title: t( 'queue' ),
			message: t( 'posted-to-queue' ),
			level: 'success',
			position: 'tr',
			action: {
				label: t( 'open-queue'),
				callback: () => {
					setQueue( true );
				}
			}
		});
	}, [ session, t ] );
	const handleSketchpadResize = useCallback( ( event, direction, ref ) => {
		setSketchpadDims({
			width: pixelsToNumber( ref.style.width ) - 50,
			height: pixelsToNumber( ref.style.height ) - 150
		});
	}, [] );

	useEffect( () => {
		elements.forEach( x => {
			if (
				x.name === 'queue' ||
				x.name === 'calculator' ||
				x.name === 'sketchpad' ||
				x.name === 'help'
			) {
				setHide({
					...hide,
					[x.name]: true
				});
			}
		});
	}, [ elements, hide ] );
	useEffect( () => {
		const unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === TOGGLE_PRESENTATION_MODE ) {
				setShowToolbar( !value );
			}
			if (
				type === RECEIVED_USERS || type === USER_JOINED ||
				type === RECEIVED_LESSON_INFO || type === RECEIVED_QUEUE_QUESTIONS
			) {
				forceUpdate();
			}
			else if ( type === MEMBER_ACTION && value.id === 'engagement' ) {
				const actionType = value.type;
				if ( actionType === ENGAGEMENT_SURVEY_START ) {
					setEngagementInProgress( true );
					setEngagementMenu( false );
				}
				else if ( actionType === ENGAGEMENT_SURVEY_END ) {
					setEngagementInProgress( false );
				}
			}
		});
		return () => {
			if ( unsubscribe ) {
				unsubscribe();
			}
		};
	});
	const close = t( 'close' );
	const open = t( 'open' );
	return (
		<Fragment>
			<Tooltip tooltip={t('show-toolbar')} placement="top" >
				<Button
					variant="warning"
					className="toolbar-buttongroup toolbar-toggle"
					onClick={toggleToolbar}
					onKeyPress={toggleToolbar}
					aria-label={t('show-toolbar')}
					style={{
						display: showToolbar ? 'none' : 'inherit'
					}}
				>
					<i className="fas fa-chevron-right"></i>
				</Button>
			</Tooltip>
			<ButtonGroup className="toolbar-buttongroup" style={{
				display: showToolbar ? 'inherit' : 'none'
			}} >
				<Tooltip tooltip={t('hide-toolbar')} placement="top" >
					<Button
						variant="secondary"
						className="toolbar-toggle"
						onClick={toggleToolbar}
						onKeyPress={toggleToolbar}
						aria-label={t('hide-toolbar')}
					>
						<i className="fas fa-chevron-left"></i>
					</Button>
				</Tooltip>
				{elements.filter( x => !!x.component ).map( ( x, i ) => renderButton( x, i ))}
				<Tooltip
					tooltip={`${calculator ? close : open} ${t( 'calculator' )} ${F2}`}
					placement="top" onToggle={() => {
						addResources( 'Calculator' );
					}}
				>
					<Button
						variant={calculator ? 'success' : 'light'}
						className="toolbar-button toolbar-calculator"
						onClick={toggleCalculator}
						onKeyPress={toggleCalculator}
						style={{
							display: !hide.calculator ? 'inline-block' : 'none'
						}}
						aria-label={`${calculator ? close : open} ${t( 'calculator' )}`}
					>
						<span className="fa fa-lg fa-calculator toolbar-icon" />
					</Button>
				</Tooltip>
				{( session.hasOwner || isElectron ) ?
					<Button
						variant={queue ? 'success' : 'light'}
						className="toolbar-button toolbar-queue"
						onClick={toggleQueue} onKeyPress={toggleQueue}
						onMouseOver={() => {
							addResources( 'Queue' );
						}}
						style={{
							display: !hide.queue ? 'inline-block' : 'none'
						}}
						aria-label={`${queue ? close : open} ${t( 'help-queue' )}`}
					>
						<Tooltip tooltip={`${queue ? close : open} ${t( 'help-queue' )}`} placement="top" >
							<span className="fa fa-lg fa-question-circle toolbar-icon" />
						</Tooltip>
						<Tooltip placement="right" tooltip={t( 'num-open-questions' )} >
							<span className="toolbar-queue-counter" >{`   ${session.questions.length}`}</span>
						</Tooltip>
					</Button> : null
				}
				<Tooltip
					tooltip={`${sketchpad ? close : open} ${t( 'sketchpad' )}`}
					placement="top" onToggle={Sketchpad.preload}
				>
					<Button
						variant={sketchpad ? 'success' : 'light'}
						className="toolbar-button toolbar-sketchpad"
						onClick={toggleSketchpad}
						onKeyPress={toggleSketchpad}
						style={{
							display: !hide.sketchpad ? 'inline-block' : 'none'
						}}
						aria-label={`${sketchpad ? close : open} ${t( 'sketchpad' )}`}
					>
						<span className="fa fa-lg fa-paint-brush toolbar-icon" />
					</Button>
				</Tooltip>
				<Tooltip
					tooltip={`${help ? close : open} ${t( 'documentation' )}`}
					placement="top" onToggle={() => {
						addResources( 'HelpPage' );
					}}
				>
					<Button
						variant={help ? 'success' : 'light'}
						className="toolbar-button toolbar-help"
						onClick={toggleHelp}
						onKeyPress={toggleHelp}
						aria-label={`${help ? close : open} ${t( 'documentation' )}`}
						style={{
							display: !hide.help ? 'inline-block' : 'none'
						}}
					>
						<span className="fa fa-lg fa-book toolbar-icon" />
					</Button>
				</Tooltip>
				<Gate user disabled={!session.enableTicketing} >
					<Tooltip
						tooltip={`${ticketing ? close : open} ${t( 'ticketing' )}`}
						placement="top" onToggle={Ticketing.preload}
					>
						<Button
							variant={ticketing ? 'success' : 'light'}
							className="toolbar-button toolbar-ticketing"
							onClick={toggleTicketing}
							onKeyPress={toggleTicketing}
							aria-label={`${ticketing ? close : open} ${t( 'ticketing' )}`}
						>
							<span className="fa fa-lg fa-medkit toolbar-icon" />
						</Button>
					</Tooltip>
				</Gate>
				<Gate owner inline showOwnerInPresentationMode >
					<Tooltip
						tooltip={engagementInProgress ? t( 'finish-poll' ) : t( 'polls' )}
						placement="right"
					>
						<Button
							variant={engagementInProgress ? 'warning' : ( engagementMenu ? 'success' : 'light' )}
							className="toolbar-button toolbar-engagement"
							onClick={toggleEngagement}
							ref={engagementButtonRef}
							aria-label={engagementInProgress ? t( 'finish-poll' ) : t( 'open-poll-menu' )}
						>
							<span className="fa fa-lg fa-poll-h toolbar-icon" />
						</Button>
					</Tooltip>
					<Overlay
						placement="top"
						show={engagementMenu}
						target={engagementButtonRef.current}
						trigger="click"
					>
						<EngagementButtons />
					</Overlay>
				</Gate>
			</ButtonGroup>
			<Engagement session={session} onHide={toggleEngagement} />
			{sketchpad ?
				<Draggable
					resizable
					onResize={handleSketchpadResize}
					default={{
						width: sketchpadDims.width + 50,
						height: sketchpadDims.height + 150
					}}
					minWidth={510}
					minHeight={300}
					cancel=".textLayer,.btn"
				>
					<Panel
						title={t( 'sketchpad' )}
						style={{ maxWidth: 'none' }}
						header={t( 'sketchpad' )} onHide={toggleSketchpad} minimizable
					>
						<Sketchpad
							id={`${session.namespaceName}-${session.lessonName}-toolbar-sketchpad`}
							canvasWidth={sketchpadDims.width} canvasHeight={sketchpadDims.height}
							dynamicallyHideButtons useHashSign={false}
						/>
					</Panel>
				</Draggable> : null
			}
			{calculator ? <Calculator show={calculator} onHide={toggleCalculator} /> : null}
			<Queue
				id="main_queue"
				show={queue}
				onHide={toggleQueue}
				onNewQuestion={handleNewQueueQuestion}
			/>
			{ticketing ? <Ticketing
				show={ticketing}
				onHide={toggleTicketing}
				t={t}
				session={session}
			/> : null}
			{elements.filter( x => !!x.component ).map( ( x, key ) => {
				const toggleElement = () => {
					setShowCustom({
						...showCustom,
						[x.name]: !showCustom[ x.name ]
					});
				};
				const elem = x.component;
				return showCustom[ x.name ] ?
				<Draggable bounds="#Lesson" cancel=".card-body,.cancel" key={key} >
					<div className="toolbar-outer-element" >
						<div className="toolbar-inner-element" tabIndex={0} role="button" >
							<elem.type {...elem.props} style={{
								position: 'inline-block',
								margin: '0px'
							}} >
								{elem.props.children}
							</elem.type>
						</div>
						<button
							name={elem.props.name}
							className="toolbar-hide-button fa fa-times"
							onClick={toggleElement}
						/>
					</div>
				</Draggable> : null;
			})}
			{help ? <HelpPage session={session} onClose={toggleHelp} /> : null }
			<KeyControls
				actions={{
					'F2': toggleCalculator
				}}
			/>
		</Fragment>
	);
};


// PROPERTIES //

Toolbar.propTypes = {
	elements: PropTypes.array // eslint-disable-line react/no-unused-prop-types
};

Toolbar.defaultProps = {
	elements: []
};


// EXPORTS //

export default Toolbar;
