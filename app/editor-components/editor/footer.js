// MODULES //

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import capitalize from '@stdlib/string/capitalize';
import { ContextMenuTrigger, ContextMenu, MenuItem } from '@isle-project/components/internal/contextmenu';
import Tooltip from '@isle-project/components/tooltip';
import Loadable from '@isle-project/components/internal/loadable';
import electronStore from 'store/electron.js';
import { LANGUAGES } from '@isle-project/constants/languages';
import { addResources } from '@isle-project/locales/editor';
const AnimationHelp = Loadable( () => import( 'editor-components/animation-help' ) );
const MarkdownHelp = Loadable( () => import( 'editor-components/markdown-help' ) );
const KeyboardHelp = Loadable( () => import( 'editor-components/keyboard-help' ) );
const EditorTutorial = Loadable( () => import( 'editor-components/tutorial' ) );


// VARIABLES //

const LANGUAGE_NAMES = LANGUAGES.map( x => capitalize( x.label ) );
const ISLE_SERVER_TOKEN = electronStore.get( 'token' );
const LANGUAGE_OBJECTS = LANGUAGE_NAMES.map( ( x, idx ) => {
	return {
		language: LANGUAGES[ idx ].value
	};
});


// MAIN //

const EditorFooter = ( props ) => {
	const [ showAnimationHelp, setShowAnimationHelp ] = useState( false );
	const [ showKeyboardHelp, setShowKeyboardHelp ] = useState( false );
	const [ showMarkdownHelp, setShowMarkdownHelp ] = useState( false );
	const [ showTutorial, setShowTutorial ] = useState( electronStore.get( 'show-editor-tutorial' ) || false );

	const toggleAnimationHelp = useCallback( () => {
		setShowAnimationHelp( !showAnimationHelp );
	}, [ showAnimationHelp ] );
	const toggleKeyboardHelp = useCallback( () => {
		setShowKeyboardHelp( !showKeyboardHelp );
	}, [ showKeyboardHelp ] );
	const toggleMarkdownHelp = useCallback( () => {
		setShowMarkdownHelp( !showMarkdownHelp );
	}, [ showMarkdownHelp ] );
	const toggleTutorial = useCallback( () => {
		addResources( 'Tutorial' );
		setShowTutorial( !showTutorial );
		electronStore.set( 'show-editor-tutorial', !showTutorial );
	}, [ showTutorial ] );
	const { editor, t, onTranslate } = props;
	const handleLinting = useCallback( () => {
		editor.focus();
		const evt = document.createEvent( 'KeyboardEvent' );

		// Chromium Hack
		Object.defineProperty( evt, 'keyCode', {
			get() {
				return this.keyCodeVal;
			}
		});
		Object.defineProperty( evt, 'which', {
			get() {
				return this.keyCodeVal;
			}
		});
		if ( evt.initKeyboardEvent ) {
			evt.initKeyboardEvent( 'keydown', true, true, document.defaultView, 119, 119, '', '', false, '' );
		} else {
			evt.initKeyEvent( 'keydown', true, true, document.defaultView, false, false, false, false, 119, 0 );
		}
		evt.keyCodeVal = 119;
		const div = document.getElementsByClassName( 'monaco-mouse-cursor-text' )[ 0 ];
		div.dispatchEvent( evt );
	}, [ editor ] );
	const handleTutorialFinish = useCallback( () => {
		setShowTutorial( false );
		electronStore.set( 'show-editor-tutorial', false );
	}, [] );
	const handleTranslateClick = useCallback( ( _, data ) => {
		onTranslate( data.language );
	}, [ onTranslate] );
	return (
		<div className="editor-footer" >
			<Tooltip tooltip={t('linting-tooltip')} placement="top" >
				<Button
					id="linting-and-spelling"
					variant="light" size="sm" className="editor-footer-button"
					onClick={handleLinting}
					disabled={props.nErrors === 0}
				>
					{t('linting-and-spelling')}: <Badge variant="secondary">{props.nErrors}</Badge>
				</Button>
			</Tooltip>
			<Tooltip tooltip={t('tutorial')} placement="top" >
				<Button className="editor-footer-button" variant="light" size="sm" onClick={toggleTutorial} >
					<i className="fas fa-info-circle"></i>
				</Button>
			</Tooltip>
			<Tooltip tooltip={t('keyboard-shortcuts')} placement="top">
				<Button id="keyboard-shortcuts" className="editor-footer-button" variant="light" size="sm" onClick={toggleKeyboardHelp} >
					<i className="far fa-keyboard"></i>
				</Button>
			</Tooltip>
			<Tooltip tooltip={t('markdown-help')} placement="top" >
				<Button id="markdown-help" className="editor-footer-button" variant="light" size="sm" onClick={toggleMarkdownHelp} >
					<i className="fab fa-markdown" />
				</Button>
			</Tooltip>
			<Tooltip tooltip={t('animation-help')} placement="top" >
				<Button id="animation-help" className="editor-footer-button" variant="light" size="sm" onClick={toggleAnimationHelp} >
					<i className="fas fa-theater-masks" />
				</Button>
			</Tooltip>
			{ ISLE_SERVER_TOKEN ?
				<ContextMenuTrigger
					id="language-menu" holdToDisplay={0}
					renderTag="span"
				>
					<Tooltip tooltip={t('translate-lesson')} placement="left" >
						<Button id="translate-lesson" className="editor-footer-button" variant="light" size="sm" >
							<i className="fas fa-globe-europe" />
						</Button>
					</Tooltip>
				</ContextMenuTrigger> : null }
			<ContextMenu id="language-menu" title={t('translate-entire-lesson')} >
				<span style={{ marginLeft: 6 }}>{t('translate-entire-lesson')}</span>
				<div className="react-contextmenu-item react-contextmenu-item--divider"></div>
				{LANGUAGE_NAMES.map( ( name, idx ) => {
					return (
						<MenuItem
							key={idx} data={LANGUAGE_OBJECTS[ name ]}
							onClick={handleTranslateClick}
						>
							{t(name)}
						</MenuItem>
					);
				})}
			</ContextMenu>
			{ showAnimationHelp ? <AnimationHelp onHide={toggleAnimationHelp} /> : null }
			{ showKeyboardHelp ? <KeyboardHelp onHide={toggleKeyboardHelp} /> : null }
			{ showMarkdownHelp ? <MarkdownHelp onHide={toggleMarkdownHelp} /> : null }
			{ showTutorial ? <EditorTutorial
				onFinish={handleTutorialFinish}
			/> : null }
		</div>
	);
};


// PROPERTIES //

EditorFooter.propTypes = {
	nErrors: PropTypes.number
};

EditorFooter.defaultProps = {
	nErrors: 0
};


// EXPORTS //

export default React.memo( EditorFooter );
