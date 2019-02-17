// MODULES //

import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import Principles from './principles.js';
import Shorthand from './shorthand.js';
import './animation-help.css';


// VARIABLES //

const commands= [
	{ name: 'anim-fade-in', command: 'anim-fade-in 3s' },
	{ name: 'slide-in-left', command: 'slide-in-left 1.2s' },
	{ name: 'slide-out-right', command: 'slide-out-right 1.2s' },
	{ name: 'anim-rotate-in', command: 'anim-rotate-in 3s' },
	{ name: 'anim-rotate-out', command: 'anim-rotate-out 3s' },
	{ name: 'anim-scale-up', command: 'anim-scale-up 3s' },
	{ name: 'anim-scale-down', command: 'anim-scale-down 3s' },
	{ name: 'tracking-in', command: 'tracking-in 1s' },
	{ name: 'focus-in', command: 'focus-in 3s' },
	{ name: 'pop-up-top', command: 'pop-up-top 1.7s' },
	{ name: 'bounce-in-top', command: 'bounce-in-top 3s' },
	{ name: 'jello-horizontal', command: 'jello-horizontal .7s' },
	{ name: 'wobble-top', command: 'wobble-top .7s' },
	{ name: 'rotate-in-center', command: 'rotate-in-center 3s' },
	{ name: 'rotate-in-hor', command: 'rotate-in-hor 3s' },
	{ name: 'rotate-in-ver', command: 'rotate-in-ver 3s' },
	{ name: 'swirl-in-fwd', command: 'swirl-in-fwd 3s' },
	{ name: 'roll-in-left', command: 'roll-in-left 1.5s' },
	{ name: 'roll-in-right', command: 'roll-in-right 1.5s' },
	{ name: 'swing-in-top-fwd', command: 'swing-in-top-fwd 1.2s' },
	{ name: 'swing-out-top-fwd', command: 'swing-out-top-fwd 1.2s' },
	{ name: 'swing-in-right-fwd', command: 'swing-in-right-fwd 1.2s' },
	{ name: 'swing-in-bottom-fwd', command: 'swing-in-bottom-fwd 1.2s' },
	{ name: 'flip-scale-up-hor', command: 'flip-scale-up-hor 1.2s' },
	{ name: 'shake-top', command: 'shake-top 1.2s' },
	{ name: 'shake-horizontal', command: 'shake-horizontal 1.2s' },
	{ name: 'shake-bottom', command: 'shake-bottom 1.2s' },
	{ name: 'flash', command: 'flash .6s' },
	{ name: 'pulse', command: 'pulse .4s' },
	{ name: 'flip-horizontal-top', command: 'flip-horizontal-top 3s' },
	{ name: 'vibrate-1', command: 'vibrate-1 .3s' },
	{ name: 'vibrate-2', command: 'vibrate-2 .3s' },
	{ name: 'vibrate-3', command: 'vibrate-3 .3s' },
	{ name: 'ping', command: 'ping .7s' },
	{ name: 'roll-out-right', command: 'roll-out-right 3s' },
	{ name: 'minmal-scale-in', command: 'minimal-scale-in 3s' },
	{ name: 'minmal-scale-out', command: 'minimal-scale-out 3s' }
];

const textCommands= [
	{ name: 'focus-in', command: 'focus-in 3s' },
	{ name: 'focus-in-expand', command: 'focus-in-expand 3s' },
	{ name: 'focus-in-contract-bck', command: 'focus-in-contract-bck 3s' },
	{ name: 'text-blur-out', command: 'text-blur-out 2.5s' },
	{ name: 'text-shadow-drop-center', command: 'text-shadow-drop-center 2s' },
	{ name: 'text-color-change', command: 'text-color-change 3s' }
];


// MAIN //

/**
* An ISLE component that shows information about applicable animations.
*/
class AnimationHelp extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			code: 'the code for the clipboard',
			explanation: 'list'
		};
	}

	passCommand = ( value ) => {
		this.setState({
			code: value
		});
	}

	getCommand( ndx ) {
		const item = commands[ndx];
		const infinite = item.command + ' infinite';
		const style = {
			animation: infinite
		};
		return (
			<div onMouseOver={() => this.passCommand(item.command)} style={{ width: '100%' }}>
				<h4>{item.name}</h4>
				<div style={style} className="cube"></div>
				<div className="codeBlock"><code>animation: {item.command}</code></div>
				<CopyToClipboard text={this.state.code}>
				<span title="copy to clipboard" className="copy"></span>
				</CopyToClipboard>
				<br />
			</div>
		);
	}

	renderCommands() {
		const list = [];
		for ( let i = 0; i < commands.length; i++ ) {
			list.push( this.getCommand( i ) );
		}
		return list;
	}

	getTextCommand(ndx) {
		const item = textCommands[ndx];
		const infinite = item.command + ' infinite';
		const style = {
			animation: infinite
		};
		return (
			<div onMouseOver={()=>this.passCommand(item.command)} style={{ width: '100%' }}>
				<h4>{item.name}</h4>
				<div style={style} className="textCommand">Text Command</div>
				<div className="codeBlock">
					<code>animation: {item.command}</code>
				</div>
				<CopyToClipboard text={this.state.code}>
					<span title="copy to clipboard" className="copy" />
				</CopyToClipboard>
				<br />
			</div>
		);
	}

	renderTextAnimations() {
		const list = [];
		for ( let i = 0; i < textCommands.length; i++ ) {
			list.push( this.getTextCommand( i ) );
		}
		return list;
	}

	renderContent() {
		if ( this.state.explanation === 'list' ) {
			return this.renderCommands();
		}
		if ( this.state.explanation === 'shorthand' ) {
			return <Shorthand />;
		}
		if ( this.state.explanation === 'principles' ) {
			return <Principles />;
		}
		if ( this.state.explanation === 'text' ) {
			return this.renderTextAnimations();
		}
	}

	setPage = ( value ) => {
		let page;
		switch ( value ) {
		case 2:
			page = 'shorthand';
			break;
		case 3:
			page = 'principles';
			break;
		case 4:
			page = 'text';
			break;
		default:
			page = 'list';
		}
		this.setState({
			explanation: page
		});
	}

	renderMenu() {
		return (
			<div className="menu">
				<div onClick={()=>this.setPage(1)} className="menu-item">ANIMATIONS</div>
				<div onClick={()=>this.setPage(4)} className="menu-item">TEXT ANIMATIONS</div>
				<div onClick={()=>this.setPage(2)} className="menu-item">SHORTHAND</div>
				<div onClick={()=>this.setPage(3)} className="menu-item">PRINCIPLES</div>
			</div>
		);
	}

	render() {
		return (
			<div className="animation-helper" >
				<div onClick={this.props.onHide} className="exit">x</div>
				<h1>AnimationHelp</h1>
				<hr />
				{ this.renderMenu() }
				<hr />
				<div className="animation-help">
				{ this.renderContent() }
				</div>
			</div>
		);
	}
}


// PROPERTIES //

AnimationHelp.propTypes = {
	onHide: PropTypes.func.isRequired
};

AnimationHelp.defaultProps = {

};


// EXPORTS //

export default AnimationHelp;
