// MODULES //

import React, { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import { toJpeg } from 'html-to-image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import contains from '@stdlib/assert/contains';
import generateUID from '@isle-project/utils/uid';
import Image from '@isle-project/components/image';
import Spinner from '@isle-project/components/internal/spinner';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import SolutionButton from '@isle-project/components/solution-button';
import TimedButton from '@isle-project/components/timed-button';
import HintButton from '@isle-project/components/hint-button';
import ChatButton from '@isle-project/components/internal/chat-button';
import Sketchpad from '@isle-project/components/sketchpad';
import FeedbackButtons from '@isle-project/components/feedback';
import GradeFeedbackRenderer from '@isle-project/components/internal/grade-feedback-renderer';
import SessionContext from '@isle-project/session/context.js';
import blobToBase64 from '@isle-project/utils/blob-to-base64';
import stopDefaultAndPropagation from '@isle-project/utils/stop-default-and-propagation';
import getLastAction from '@isle-project/utils/get-last-action';
import { IMAGE_QUESTION_SUBMISSION, IMAGE_QUESTION_OPEN_HINT } from '@isle-project/constants/actions.js';
import { RETRIEVED_CURRENT_USER_ACTIONS } from '@isle-project/constants/events.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './image_question.css';


// VARIABLES //

const uid = generateUID( 'image-question' );
const debug = logger( 'isle:image-question' );
const RE_IMAGE_SRC = /src="([^"]*)"/;


// MAIN //

/**
* A question that asks the user to upload an image.
*
* @property {(string|node)} question - text for the question
* @property {Array} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {Object} sketchpad - properties to be passed to <Sketchpad /> component; to render the sketchpad, pass in at least an empty object `{}`
* @property {string} solution - image URL of model solution
* @property {Date} until - time until students should be allowed to submit answers
* @property {boolean} disableSubmitNotification - controls whether a notification should be displayed after submitting an image
* @property {number} points - maximum number of points awarded in grading
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onSubmit - callback invoked when answer is submitted; has as a sole parameter a `boolean` indicating whether the elements were placed in the correct order
*/
const ImageQuestion = ( props ) => {
	const id = useRef( props.id || uid( props ) );
	const session = useContext( SessionContext );
	const { t } = useTranslation( 'questions/image' );
	const fileUpload = useRef( null );

	const [ submitted, setSubmitted ] = useState( false );
	const currentUserActions = session.currentUserActions;
	const lastSrc = getLastAction( currentUserActions, id.current, IMAGE_QUESTION_SUBMISSION );
	const [ src, setSrc ] = useState( lastSrc );
	const [ exhaustedHints, setExhaustedHints ] = useState( props.hints.length === 0 );
	const [ displaySolution, setDisplaySolution ] = useState( false );
	const [ isProcessing, setIsProcessing ] = useState( false );

	const setToLastAction = useCallback( () => {
		debug( `Set submission to last action for question ${id.current} if available...` );
		const actions = session.currentUserActions;
		const value = getLastAction( actions, id.current, IMAGE_QUESTION_SUBMISSION );
		if ( value && value !== src ) {
			setSrc( value );
			setSubmitted( true );
		}
	}, [ session, src ] );

	useEffect( () => {
		const unsubscribe = session.subscribe( ( type ) => {
			if ( type === RETRIEVED_CURRENT_USER_ACTIONS ) {
				setToLastAction();
			}
		});
		return () => {
			unsubscribe();
		};
	}, [ session, setToLastAction ] );

	const onFileRead = useCallback( ( event ) => {
		setSrc( event.target.result );
	}, [] );
	const handleSolutionClick = useCallback( () => {
		setDisplaySolution( !displaySolution );
	}, [ displaySolution ] );
	const { hints } = props;
	const nHints = hints.length;
	const solutionButton = <SolutionButton
		disabled={!submitted || !exhaustedHints}
		onClick={handleSolutionClick}
		hasHints={hints.length > 0}
	/>;
	const logHint = useCallback( ( idx ) => {
		debug( 'Logging hint...' );
		session.log({
			id: id.current,
			type: IMAGE_QUESTION_OPEN_HINT,
			value: idx
		});
	}, [ session ] );
	const sendSubmitNotification = useCallback( () => {
		session.addNotification({
			title: t('submitted'),
			message: t('answer-submitted'),
			level: 'info'
		});
	}, [ session, t ] );

	const handleReset = useCallback( () => {
		setSrc( null );
	}, [] );
	const onHintsFinished = useCallback( () => {
		setExhaustedHints( true );
	}, [] );

	/**
	* Creates FileReader and attaches event listener for when the file is ready.
	*/
	const handleFileUpload = () => {
		const reader = new FileReader();
		const selectedFile = fileUpload.current.files[ 0 ];
		reader.addEventListener( 'load', onFileRead, false );
		reader.readAsDataURL( selectedFile );
	};
	const handleSubmit = () => {
		if ( !props.disableSubmitNotification ) {
			sendSubmitNotification();
		}
		props.onSubmit();
		setSubmitted( true );
		if ( src ) {
			session.log({
				id: id.current,
				type: IMAGE_QUESTION_SUBMISSION,
				value: src
			});
		} else {
			const canvas = document.getElementById( id.current+'-canvas' );
			canvas.toBlob( ( blob ) => {
				blobToBase64( blob ).then( newSrc => {
					session.log({
						id: id.current,
						type: IMAGE_QUESTION_SUBMISSION,
						value: newSrc
					});
					setSrc( newSrc );
				});
			});
		}
	};

	/**
	* Event handler invoked when user drags file onto the upload area.
	*/
	const onDrop = ( evt ) => {
		evt.stopPropagation();
		evt.preventDefault();
		setIsProcessing( true );
		const dt = evt.dataTransfer;
		const reader = new FileReader();
		let file = null;
		if ( dt.items && dt.items.length > 0 ) {
			const item = dt.items[ 0 ];
			if ( item.kind === 'file' ) {
				file = item.getAsFile();
			}
			else if ( item.kind === 'string' ) {
				item.getAsString( ( str ) => {
					if ( contains( str, '<img' ) ) {
						const match = str.match( RE_IMAGE_SRC );
						if ( match ) {
							setSrc( match[ 1 ] );
							setIsProcessing( false );
						}
					} else if ( contains( str, '<thead' ) ) {
						const node = document.createElement( 'table' );
						node.innerHTML = str;
						document.body.appendChild( node );
						toJpeg( node, {
							backgroundColor: 'white',
							style: {
								fontSize: 12
							},
							width: 600
						}).then( data => {
							setSrc( data );
							setIsProcessing( false );
							node.remove();
						});
					} else {
						const node = document.createElement( 'pre' );
						node.innerHTML = str;
						document.body.appendChild( node );
						toJpeg( node, {
							backgroundColor: 'white',
							style: {
								fontSize: 14
							}
						}).then( data => {
							setSrc( data );
							setIsProcessing( false );
							node.remove();
						});
					}
				});
			}
		}
		else if ( dt.files && dt.files.length > 0 ) {
			file = dt.files[ 0 ];
		}
		if ( file ) {
			if ( file ) {
				reader.addEventListener( 'load', onFileRead, false );
				reader.readAsDataURL( file );
			}
		}
	};
	const renderSubmitButton = () => {
		if ( props.until && session.startTime > props.until ) {
			return <span className="title" style={{ marginLeft: 4 }} >{t('question-closed')}</span>;
		}
		return (
			<TimedButton
				className="submit-button"
				variant="primary" size="sm"
				onClick={handleSubmit}
				disabled={!src || isProcessing}
			>
				{ submitted ? t('resubmit') : t('submit') }
			</TimedButton>
		);
	};
	let content;
	if ( !isProcessing ) {
		content = src ?
		<div className="center" style={{ maxWidth: 600 }}>
			{displaySolution ?
				<Image
					alt={t('model-solution')}
					src={props.solution}
					width="50%" height="auto"
					style={{
						border: 'solid 1px gold'
					}}
				/> : <Image
					alt={t('upload')}
					src={src}
					width="50%" height="auto"
				/>
			}
		</div> :
		<Fragment>
			<div
				className="image-question-dropzone"
				onDrop={onDrop}
				onDragOver={stopDefaultAndPropagation}
				onDragEnd={stopDefaultAndPropagation}
			>
				<span>{t('drop-image')}</span>
			</div>
			<p className="center">{t('or')}</p>
			<input
				id={id.current+'-upload'}
				className="image-question-upload center"
				type="file"
				accept="image/*"
				onChange={handleFileUpload}
				ref={fileUpload}
			/>
			{props.sketchpad ?
			<Fragment>
				<p className="center">{t('or')}</p>
				<Sketchpad
					id={id.current}
					hideNavigationButtons hideSaveButtons hideTransmitButtons
					canvasWidth={900}
					canvasHeight={600}
					{...props.sketchpad}
				/>
			</Fragment> : null}
		</Fragment>;
	}
	return (
		<Card id={id.current} className={`image-question ${props.className}`} style={props.style} >
			<Card.Body style={{ width: props.feedback ? 'calc(100%-60px)' : '100%', display: 'inline-block' }} >
				<label>{props.question}</label>
				<Spinner running={isProcessing} width={256} height={128} />
				{content}
				{ props.feedback ? <FeedbackButtons vertical
					id={id.current+'_feedback'}
					style={{
						position: 'absolute',
						right: '4px',
						top: '4px'
					}}
				/> : null }
				<ResponseVisualizer
					buttonLabel="Answers" id={id.current}
					info={IMAGE_QUESTION_SUBMISSION}
					data={{
						question: props.question,
						type: 'image'
					}}
					points={props.points}
				/>
				<div className="image-question-toolbar">
					{ nHints > 0 ?
						<HintButton
							onClick={logHint}
							hints={props.hints}
							placement={props.hintPlacement}
							onFinished={onHintsFinished}
						/> :
						null
					}
					{ src ? <Button size="sm" variant="warning" onClick={handleReset}>{t('reset')}</Button> : null }
					{renderSubmitButton()}
					{ props.solution ? solutionButton : null }
					{ props.chat ? <ChatButton for={id.current} /> : null }
				</div>
				<GradeFeedbackRenderer for={id.current} points={props.points} />
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

ImageQuestion.defaultProps = {
	question: '',
	hints: [],
	hintPlacement: 'bottom',
	feedback: true,
	chat: false,
	disableSubmitNotification: false,
	className: '',
	sketchpad: null,
	solution: null,
	until: null,
	points: 10,
	style: {},
	onSubmit() {}
};

ImageQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	feedback: PropTypes.bool,
	chat: PropTypes.bool,
	disableSubmitNotification: PropTypes.bool,
	className: PropTypes.string,
	sketchpad: PropTypes.object,
	solution: PropTypes.string,
	until: PropTypes.instanceOf( Date ),
	points: PropTypes.number,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};


// EXPORTS //

export default withPropCheck( ImageQuestion );
