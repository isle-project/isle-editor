// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { ContextMenuTrigger, ContextMenu, MenuItem } from 'react-contextmenu';
import objectKeys from '@stdlib/utils/keys';
import Tooltip from '@isle-project/components/tooltip';
import Loadable from '@isle-project/components/internal/loadable';
import electronStore from 'store/electron.js';
import { LANGUAGES } from '@isle-project/constants/deepl';
const AnimationHelp = Loadable( () => import( 'editor-components/animation-help' ) );
const MarkdownHelp = Loadable( () => import( 'editor-components/markdown-help' ) );
const KeyboardHelp = Loadable( () => import( 'editor-components/keyboard-help' ) );


// VARIABLES //

const LANGUAGE_NAMES = objectKeys( LANGUAGES );
const ISLE_SERVER_TOKEN = electronStore.get( 'token' );


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
		const { t } = this.props;
		return (
			<div className="editor-footer" >
				<Tooltip tooltip={t('linting-tooltip')} placement="top" >
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
						{t('linting-and-spelling')}: <Badge variant="secondary">{this.props.nErrors}</Badge>
					</Button>
				</Tooltip>
				<Tooltip tooltip={t('keyboard-shortcuts')} placement="top">
					<Button className="editor-footer-button" variant="light" size="sm" onClick={this.toggleKeyboardHelp} >
						<i className="far fa-keyboard"></i>
					</Button>
				</Tooltip>
				<Tooltip tooltip={t('markdown-help')} placement="top" >
					<Button className="editor-footer-button" variant="light" size="sm" onClick={this.toggleMarkdownHelp} >
						<i className="fab fa-markdown" />
					</Button>
				</Tooltip>
				<Tooltip tooltip={t('animation-help')} placement="top" >
					<Button className="editor-footer-button" variant="light" size="sm" onClick={this.toggleAnimationHelp} >
						<i className="fas fa-theater-masks" />
					</Button>
				</Tooltip>
				{ ISLE_SERVER_TOKEN ?
					<ContextMenuTrigger
						id="language-menu" holdToDisplay={0}
						renderTag="span"
					>
						<Tooltip tooltip={t('translate-lesson')} placement="left" >
							<Button className="editor-footer-button" variant="light" size="sm" >
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
								key={idx} data={{
									language: LANGUAGES[ name ]
								}}
								onClick={this.handleTranslateClick}
							>
								{t(name)}
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

export default React.memo( EditorFooter );
