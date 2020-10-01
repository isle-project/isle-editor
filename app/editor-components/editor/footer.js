// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { ContextMenuTrigger, ContextMenu, MenuItem } from 'react-contextmenu';
import objectKeys from '@stdlib/utils/keys';
import Tooltip from 'components/tooltip';
import Loadable from 'components/internal/loadable';
import rendererStore from 'store/electron.js';
import { LANGUAGES } from 'constants/deepl';
const AnimationHelp = Loadable( () => import( 'editor-components/animation-help' ) );
const MarkdownHelp = Loadable( () => import( 'editor-components/markdown-help' ) );
const KeyboardHelp = Loadable( () => import( 'editor-components/keyboard-help' ) );


// VARIABLES //

const LANGUAGE_NAMES = objectKeys( LANGUAGES );
const ISLE_SERVER_TOKEN = rendererStore.get( 'token' );


// MAIN //

class EditorFooter extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showAnimationHelp: false,
			showKeyboardHelp: false,
			showMarkdownHelp: false
		};
	}

	toggleAnimationHelp = () => {
		this.setState({
			showAnimationHelp: !this.state.showAnimationHelp
		});
	}

	toggleKeyboardHelp = () => {
		this.setState({
			showKeyboardHelp: !this.state.showKeyboardHelp
		});
	}

	toggleMarkdownHelp = () => {
		this.setState({
			showMarkdownHelp: !this.state.showMarkdownHelp
		});
	}

	handleTranslateClick = ( _, data ) => {
		this.props.onTranslate( data.language );
	}

	render() {
		return (
			<div className="editor-footer" >
				<Tooltip tooltip="Click to cycle through lint error and spelling error messages" placement="top" >
					<Button
						variant="light" size="sm" className="editor-footer-button" style={{ marginRight: 18 }}
						onClick={() => {
							this.props.editor.focus();
							const evt = document.createEvent( 'KeyboardEvent' );

							// Chromium Hack
							Object.defineProperty(evt, 'keyCode', {
								get() {
									return this.keyCodeVal;
								}
							});
							Object.defineProperty(evt, 'which', {
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
						}}
						disabled={this.props.nErrors === 0}
					>
						Linting and Spelling: <Badge variant="secondary">{this.props.nErrors}</Badge>
					</Button>
				</Tooltip>
				<Tooltip tooltip="Keyboard Shortcuts" placement="top">
					<Button className="editor-footer-button" variant="light" size="sm" onClick={this.toggleKeyboardHelp} >
						<i className="far fa-keyboard"></i>
					</Button>
				</Tooltip>
				<Tooltip tooltip="Markdown Help" placement="top" >
					<Button className="editor-footer-button" variant="light" size="sm" onClick={this.toggleMarkdownHelp} >
						<i className="fab fa-markdown" />
					</Button>
				</Tooltip>
				<Tooltip tooltip="Animation Help" placement="top" >
					<Button className="editor-footer-button" variant="light" size="sm" onClick={this.toggleAnimationHelp} >
						<i className="fas fa-theater-masks" />
					</Button>
				</Tooltip>
				{ ISLE_SERVER_TOKEN ?
					<ContextMenuTrigger
						id="language-menu" holdToDisplay={0}
						renderTag="span"
					>
						<Tooltip tooltip="Translate lesson" placement="left" >
							<Button className="editor-footer-button" variant="light" size="sm" >
								<i className="fas fa-globe-europe" />
							</Button>
						</Tooltip>
					</ContextMenuTrigger> : null }
				<ContextMenu id="language-menu" title="Translate entire lesson to" >
					<span style={{ marginLeft: 6 }}>Translate entire lesson to</span>
					{LANGUAGE_NAMES.map( ( name, idx ) => {
						return (
							<MenuItem
								key={idx} data={{
									language: LANGUAGES[ name ]
								}}
								onClick={this.handleTranslateClick}
								divider={idx === 0}
							>
								{name}
							</MenuItem>
						);
					})}
				</ContextMenu>
				{ this.state.showAnimationHelp ? <AnimationHelp onHide={this.toggleAnimationHelp} /> : null }
				{ this.state.showKeyboardHelp ? <KeyboardHelp onHide={this.toggleKeyboardHelp} /> : null }
				{ this.state.showMarkdownHelp ? <MarkdownHelp onHide={this.toggleMarkdownHelp} /> : null }
			</div>
		);
	}
}


// PROPERTIES //

EditorFooter.propTypes = {
	nErrors: PropTypes.number
};

EditorFooter.defaultProps = {
	nErrors: 0
};


// EXPORTS //

export default EditorFooter;
