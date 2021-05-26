// MODULES //

import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import markdownit from 'markdown-it';
import Tooltip from '@isle-project/components/tooltip';
import generateUID from '@isle-project/utils/uid';
import SessionContext from '@isle-project/session/context.js';
import Gate from '@isle-project/components/gate';
import katex from '@iktakahiro/markdown-it-katex';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { RECEIVED_LESSON_INFO } from '@isle-project/constants/events.js';
import './editable_text.css';


// VARIABLES //

const uid = generateUID( 'editable-text' );
const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
md.use( katex, {
	throwOnError: false,
	errorColor: '#cc0000'
});


// MAIN //

/**
* Editable text component.
*
* @property {string} defaultText - text to render initially
* @property {boolean} inline - controls whether to render the Markdown as inline text
* @property {string} className - class names
* @property {Object} style - CSS inline styles
*/
const EditableText = ( props ) => {
	const id = useRef( props.id || uid( props ) );
	const { defaultText, inline, className, style } = props;
	const session = useContext( SessionContext );
	const divRef = useRef();
	const { t } = useTranslation( 'general' );
	const [ text, setText ] = useState( defaultText );
	const [ editing, setEditing ] = useState( false );
	useEffect( () => {
		setText( defaultText );
	}, [ defaultText ] );
	useEffect( () => {
		const readMetadata = () => {
			if (
				session &&
				session.metadata &&
				session.metadata.store &&
				session.metadata.store[ id.current ]
			) {
				setText( session.metadata.store[ id.current ] );
			}
		};
		let unsubscribe;
		if ( session ) {
			readMetadata();
			unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === RECEIVED_LESSON_INFO ) {
					readMetadata();
				}
			});
		}
		return () => {
			if ( unsubscribe ) {
				unsubscribe();
			}
		};
	}, [ session, id ] );
	const startEditing = useCallback( () => {
		setEditing( true );
	}, [] );
	const cancelChange = useCallback( () => {
		setEditing( false );
		setText( text );
	}, [ text ] );
	const saveText = useCallback( () => {
		const newText = divRef.current.innerHTML;
		session.updateMetadata( 'store', id.current, newText );
		setEditing( false );
		setText( newText );
	}, [ session ] );
	const node = {
		'__html': inline ? md.renderInline( text ) : md.render( text )
	};
	/* eslint-disable react/no-danger */
	return (
		<div className={`editable-text ${className} ${editing ? 'editing': ''}`} style={style} >
			<div key={editing} ref={divRef} dangerouslySetInnerHTML={node} contentEditable={editing} >
			</div>
			<Gate owner >
				<ButtonGroup style={{ position: 'absolute', top: 0, right: 0 }} >
					{ !editing ? <Tooltip tooltip={t('edit-text')} >
						<Button size="sm" variant="secondary" onClick={startEditing} >
							<i className="far fa-edit" />
						</Button>
					</Tooltip> : null }
					{ editing ? <Tooltip tooltip={t('discard-changes')} >
						<Button size="sm" variant="secondary" onClick={cancelChange} >
							<i className="fas fa-trash-restore-alt" />
						</Button>
					</Tooltip>: null }
					{ editing ? <Tooltip tooltip={t('save-changes')} >
						<Button size="sm" variant="secondary" onClick={saveText} >
							<i className="fas fa-share" />
						</Button>
					</Tooltip>: null }
				</ButtonGroup>
			</Gate>
		</div>
	);
};


// PROPERTIES //

EditableText.defaultProps = {
	defaultText: 'Please change this default text...',
	className: '',
	inline: false,
	style: {}
};

EditableText.propTypes = {
	defaultText: PropTypes.string,
	className: PropTypes.string,
	inline: PropTypes.bool,
	style: PropTypes.object
};


// EXPORTS //

export default EditableText;
