// MODULES //

import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { dirname } from 'path';
import logger from 'debug';
import os from 'os';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { SearchAddon } from 'xterm-addon-search';
import { ContextMenuTrigger, ContextMenu, MenuItem } from '@isle-project/components/internal/contextmenu';
import IS_WINDOWS from '@stdlib/assert/is-windows';
import './terminal.css';


// VARIABLES //

const debug = logger( 'isle-editor:terminal' );


// MAIN //

class TerminalWrapper extends Component {
	constructor( props ) {
		super( props );
		this.searchAddon = new SearchAddon();
		this.linksAddon = new WebLinksAddon();
		this.fitAddon = new FitAddon();
	}

	componentDidMount() {
		this.xterm = new Terminal({
			fontSize: this.props.fontSize,
			lineHeight: 1,
			scrollback: 500,
			cursorStyle: 'block',
			windowsMode: IS_WINDOWS,
			theme: {
				background: 'white',
				foreground: 'darkslategrey',
				black: '#000000',
				blue: '#0a2fc4',
				brightBlack: '#686868',
				brightBlue: '#6a76fb',
				brightCoral: '#f08080',
				brightCyan: '#68fdfe',
				brightGreen: '#5acc60',
				brightMagenta: '#Fd7cfc',
				brightRed: '#fd6f6b',
				brightWhite: '#ffffff',
				brightYellow: '#fffa72',
				cursor: '#ca5800',
				cyan: '#20c5c6',
				green: '#169e19',
				magenta: '#c839c5',
				red: '#c51e14',
				white: '#c7c7c7',
				yellow: '#c7c329'
			}
		});
		this.xterm.loadAddon( this.fitAddon );
		this.xterm.loadAddon( this.linksAddon );
		this.xterm.open( this.terminal );
		this.fitAddon.fit();
		this.createShell();
		this.xterm.onData( ( data ) => {
			this.ptyProcess.write( data );
		});
		this.xterm.onResize(({ cols, rows }) => {
			this.ptyProcess.resize(
				cols,
				rows
			);
		});
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.fontSize !== prevProps.fontSize ) {
			this.xterm.setOption( 'fontSize', this.props.fontSize );
		}
		if (
			this.props.width !== prevProps.width ||
			this.props.height !== prevProps.height ||
			this.props.fontSize !== prevProps.fontSize
		) {
			this.fitAddon.fit();
		}
		if ( this.props.height !== prevProps.height ) {
			this.fitAddon.fit();
		}
		if ( this.props.filePath !== prevProps.filePath ) {
			this.createShell();
		}
	}

	createShell() {
		const shell = process.env[ os.platform() === 'win32' ? 'COMSPEC' : 'SHELL']; // eslint-disable-line no-process-env
		let dir;
		if ( this.props.filePath ) {
			dir = dirname( this.props.filePath );
		} else {
			dir = os.homedir();
		}
		debug( `Open ${dir} directory in shell...` );
		const pty = require( 'node-pty' );
		this.ptyProcess = pty.spawn( shell, [], {
			name: 'xterm-color',
			cols: this.xterm.cols,
			rows: this.xterm.rows,
			cwd: dir,
			env: process.env // eslint-disable-line no-process-env
		});
		this.ptyProcess.on( 'data', ( data ) => {
			this.xterm.write( data );
		});
	}

	render() {
		const { t } = this.props;
		return (
			<div className="terminal-wrapper"
				style={{
					pointerEvents: this.props.height < 17 ? 'none' : 'all',
					opacity: this.props.height < 17 ? 0.0 : 1.0
				}}
			>
				<ContextMenuTrigger id={`${this.props.id}-trigger`} >
					<div
						className="terminal"
						style={{
							height: this.props.height,
							width: '100%'
						}}
						ref={( div ) => {
							this.terminal = div;
						}}
					></div>
				</ContextMenuTrigger>
				<ContextMenu id={`${this.props.id}-trigger`} >
					<MenuItem onClick={() => {
						if ( this.xterm ) {
							this.xterm.clear();
						}
					}} >
						{t('clear-terminal')}
					</MenuItem>
					<MenuItem onClick={() => {
						this.props.onSplit( this.props.id );
					}} >
						{t('split-terminal')}
					</MenuItem>
					{ !this.props.id.endsWith( '-0' ) ? <MenuItem onClick={() => {
						this.props.onDelete( this.props.id );
					}} >
						{t('kill-terminal')}
					</MenuItem> : null }
				</ContextMenu>
			</div>
		);
	}
}


// PROPERTIES //

TerminalWrapper.propTypes = {
	fontSize: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	filePath: PropTypes.string,
	onDelete: PropTypes.func,
	onSplit: PropTypes.func
};

TerminalWrapper.defaultProps = {
	filePath: null,
	onDelete() {},
	onSplit() {}
};


// EXPORTS //

export default withTranslation( 'Editor' )( TerminalWrapper );
