// MODULES //

import React, { Component } from 'react';
import os from 'os';
import { dirname } from 'path';
import logger from 'debug';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
const pty = require( 'node-pty' );
import './terminal.css';


// VARIABLES //

const debug = logger( 'isle-editor:terminal' );


// MAIN //

class TerminalWrapper extends Component {
	componentDidMount() {
		this.xterm = new Terminal({
			'theme': {
				background: 'gainsboro',
				foreground: 'darkslategrey'
			}
		});
		this.fitAddon = new FitAddon();
		this.xterm.loadAddon( this.fitAddon );
		this.xterm.open( this.terminal );
		this.fitAddon.fit();
		this.createShell();
		this.xterm.onData( ( data ) => {
			this.ptyProcess.write( data );
		});
	}

	componentDidUpdate( prevProps ) {
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
		this.ptyProcess = pty.spawn( shell, [], {
			name: 'xterm-color',
			cols: 80,
			rows: 30,
			cwd: dir,
			env: process.env // eslint-disable-line no-process-env
		});
		this.ptyProcess.on( 'data', ( data ) => {
			this.xterm.write( data );
		});
	}

	render() {
		return (
			<div className="terminal-wrapper"
				style={{
					pointerEvents: this.props.height < 17 ? 'none' : 'all',
					opacity: this.props.height < 17 ? 0.0 : 1.0
				}}
			>
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
			</div>
		);
	}
}


// EXPORTS //

export default TerminalWrapper;
