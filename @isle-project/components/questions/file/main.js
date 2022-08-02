// MODULES //

import React, { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import generateUID from '@isle-project/utils/uid';
import SessionContext from '@isle-project/session/context.js';
import Spinner from '@isle-project/components/internal/spinner';
import TimedButton from '@isle-project/components/timed-button';
import HintButton from '@isle-project/components/hint-button';
import ChatButton from '@isle-project/components/internal/chat-button';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import FeedbackButtons from '@isle-project/components/feedback';
import GradeFeedbackRenderer from '@isle-project/components/internal/grade-feedback-renderer';
import stopDefaultAndPropagation from '@isle-project/utils/stop-default-and-propagation';
import getLastAction from '@isle-project/utils/get-last-action';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { FILE_QUESTION_SUBMISSION, OPEN_HINT, SUBMIT } from '@isle-project/constants/actions.js';
import { RETRIEVED_CURRENT_USER_ACTIONS } from '@isle-project/constants/events.js';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import './file_question.css';


// VARIABLES //

const uid = generateUID( 'file-question' );
const debug = logger( 'isle:file-upload' );


// MAIN //

/**
* A question that asks the user to upload a file.
*
* @property {(string|Node)} question - the question displayed at the top of the file question component
* @property {Array<string>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {string} accept - comma-separated list of [unique file identifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) that are accepted by the component (e.g., 'image/*', '.pdf' or 'audio/*')
* @property {Date} until - time until students should be allowed to submit answers
* @property {number} points - maximum number of points awarded in grading
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback to invoke upon receiving a file
*/
const FileQuestion = ( props ) => {
	const { t } = useTranslation( 'questions/file' );
	const { accept, until, onChange } = props;
	const id = useRef( props.id || uid( props ) );
	const session = useContext( SessionContext );
	const fileUpload = useRef( null );
	const { logAction } = useActionLogger( 'FILE_QUESTION', id.current );
	const [ file, setFile ] = useState( null );
	const [ fileLink, setFileLink ] = useState( null );
	const [ isProcessing, setIsProcessing ] = useState( false );
	const [ submitted, setSubmitted ] = useState( false );

	const setToLastAction = useCallback( () => {
		debug( `Set submission to last action for question ${id.current} if available...` );
		const actions = session.currentUserActions;
		const value = getLastAction( actions, id.current, FILE_QUESTION_SUBMISSION );
		if ( value && value !== fileLink ) {
			setFileLink( value );
			setSubmitted( true );
		}
	}, [ session, fileLink ] );

	const { hints } = props;
	const nHints = hints.length;
	const logHint = useCallback( ( idx ) => {
		debug( 'Logging hint...' );
		logAction( OPEN_HINT, idx );
	}, [ logAction ] );

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

	const handleSubmit = useCallback( () => {
		const formData = new FormData();
		formData.append( 'file', file );
		setIsProcessing( true );
		session.uploadFile({
			formData,
			callback: ( error, res ) => {
				if ( error ) {
					debug( error );
					setIsProcessing( false );
					setFile( null );
					fileUpload.current.value = '';
					return;
				}
				const filename = res.filename;
				const link = session.server + '/' + filename;
				logAction( SUBMIT, link );
				setFileLink( link );
				setIsProcessing( false );
				setSubmitted( true );
			},
			showNotification: true
		});
	}, [ file, logAction, session ] );

	/**
	* Creates FileReader and attaches event listener for when the file is ready.
	*/
	const handleFileInput = () => {
		const selectedFile = fileUpload.current.files[ 0 ];
		onChange( selectedFile );
		setFile( selectedFile );
	};

	/**
	* Event handler invoked when user drags file onto the upload area.
	*/
	const onDrop = ( evt ) => {
		evt.stopPropagation();
		evt.preventDefault();
		const dt = evt.dataTransfer;
		let file = null;
		if ( dt.items && dt.items.length > 0 ) {
			const item = dt.items[ 0 ];
			if ( item.kind === 'file' ) {
				file = item.getAsFile();
			}
		}
		else if ( dt.files && dt.files.length > 0 ) {
			file = dt.files[ 0 ];
		}
		if ( file ) {
			onChange( file );
			setFile( file );
		}
	};

	const renderSubmitButton = () => {
		if ( until && session.startTime > until ) {
			return <span className="title" style={{ marginLeft: 4 }} >{t('question-closed')}</span>;
		}
		return (
			<TimedButton
				className="submit-button"
				variant="primary" size="sm"
				onClick={handleSubmit}
				disabled={!file || isProcessing}
			>
				{ submitted ? t('resubmit') : t('submit') }
			</TimedButton>
		);
	};

	let content;
	if ( !isProcessing ) {
		content = <Fragment>
			{fileLink ?
				<div className="center" style={{ maxWidth: 600 }}>
					<p>
						{t('submitted-file-link')}: <a href={fileLink} target="_blank" rel="noopener noreferrer" >
							{fileLink}
						</a>
					</p>
				</div> : null
			}
			<div
				className="file-question-dropzone"
				onDrop={onDrop}
				onDragOver={stopDefaultAndPropagation}
				onDragEnd={stopDefaultAndPropagation}
			>
				<span>{t('drop-file')}</span>
			</div>
			<p className="center">{t('or')}</p>
			<input
				id={id+'-upload'}
				className="file-question-input center"
				type="file"
				accept={accept}
				onChange={handleFileInput}
				ref={fileUpload}
			/>
		</Fragment>;
	}
	return (
		<Card id={id.current} className={`file-question ${props.className}`} style={props.style} >
			<Card.Body className="d-grid gap-2" style={{ width: props.feedback ? 'calc(100%-60px)' : '100%', display: 'inline-block' }} >
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
					info={FILE_QUESTION_SUBMISSION}
					data={{
						question: props.question,
						type: 'file'
					}}
					points={props.points}
				/>
				<div className="file-question-toolbar">
					{ nHints > 0 ?
						<HintButton
							onClick={logHint}
							hints={props.hints}
							placement={props.hintPlacement}
						/> :
						null
					}
					{renderSubmitButton()}
					{ props.chat ? <ChatButton for={id.current} /> : null }
				</div>
				<GradeFeedbackRenderer for={id.current} points={props.points} />
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

FileQuestion.defaultProps = {
	question: '',
	hints: [],
	hintPlacement: 'bottom',
	feedback: true,
	chat: false,
	accept: '*/*',
	until: null,
	points: 10,
	className: '',
	style: {},
	onChange() {}
};

FileQuestion.propTypes = {
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
	accept: PropTypes.string,
	until: PropTypes.instanceOf( Date ),
	points: PropTypes.number,
	className: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func
};


// EXPORTS //

export default withPropCheck( FileQuestion );
