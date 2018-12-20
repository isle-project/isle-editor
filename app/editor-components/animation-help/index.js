// MODULES //

import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import './animation-help.css';

const commands= [
    {name: 'anim-fade-in', command: 'anim-fade-in 3s'},
    {name: 'slide-in-left', command: 'slide-in-left 1.2s'},
    {name: 'slide-out-right', command: 'slide-out-right 1.2s'},
    {name: 'anim-rotate-in', command: 'anim-rotate-in 3s'},
    {name: 'anim-rotate-out', command: 'anim-rotate-out 3s'},
    {name: 'anim-scale-up', command: 'anim-scale-up 3s'},
    {name: 'anim-scale-down', command: 'anim-scale-down 3s'},
    {name: 'tracking-in', command: 'tracking-in 1s'},
    {name: 'focus-in', command: 'focus-in 3s'},
    {name: 'pop-up-top', command: 'pop-up-top 1.7s'},
    {name: 'bounce-in-top', command: 'bounce-in-top 3s'},
    {name: 'jello-horizontal', command: 'jello-horizontal .7s'},
    {name: 'wobble-top', command: 'wobble-top .7s'},
    {name: 'rotate-in-center', command: 'rotate-in-center 3s'},
    {name: 'rotate-in-hor', command: 'rotate-in-hor 3s'},
    {name: 'rotate-in-ver', command: 'rotate-in-ver 3s'},
    {name: 'swirl-in-fwd', command: 'swirl-in-fwd 3s'},
    {name: 'roll-in-left', command: 'roll-in-left 1.5s'},
    {name: 'roll-in-right', command: 'roll-in-right 1.5s'},
    {name: 'swing-in-top-fwd', command: 'swing-in-top-fwd 1.2s'},
    {name: 'swing-out-top-fwd', command: 'swing-out-top-fwd 1.2s'},
    {name: 'swing-in-right-fwd', command: 'swing-in-right-fwd 1.2s'},
    {name: 'swing-in-bottom-fwd', command: 'swing-in-bottom-fwd 1.2s'},
    {name: 'flip-scale-up-hor', command: 'flip-scale-up-hor 1.2s'},
    {name: 'shake-top', command: 'shake-top 1.2s'},
    {name: 'shake-horizontal', command: 'shake-horizontal 1.2s'},
    {name: 'shake-bottom', command: 'shake-bottom 1.2s'},
    {name: 'flash', command: 'flash .6s'},
    {name: 'pulse', command: 'pulse .4s'},
    {name: 'flip-horizontal-top', command: 'flip-horizontal-top 3s'},
    {name: 'vibrate-1', command: 'vibrate-1 .3s'},
    {name: 'vibrate-2', command: 'vibrate-2 .3s'},
    {name: 'vibrate-3', command: 'vibrate-3 .3s'},
    {name: 'ping', command: 'ping .7s'},
    {name: 'roll-out-right', command: 'roll-out-right 3s'},
    {name: 'minmal-scale-in', command: 'minimal-scale-in 3s'},
    {name: 'minmal-scale-out', command: 'minimal-scale-out 3s'}
];


const textCommands= [
    {name: 'focus-in', command: 'focus-in 3s'},
    {name: 'focus-in-expand', command: 'focus-in-expand 3s'},
    {name: 'focus-in-contract-bck', command: 'focus-in-contract-bck 3s'},
    {name: 'text-blur-out', command: 'text-blur-out 2.5s'},
    {name: 'text-shadow-drop-center', command: 'text-shadow-drop-center 2s'},
    {name: 'text-color-change', command: 'text-color-change 3s'},

];

// MAIN //

/**
* An ISLE component that shows information about applicable animations.
*
*/
class AnimationHelp extends Component {
	constructor( props ) {
        super( props );
		this.state = {
            code: 'the code for the clipboard',
            explanation: 'list'
        };
    }

    show() {
        // alert("Die Show-Funktion");
    }

    passCommand = ( value ) => {
       this.setState({
            code: value
       });
    }

    getCommand(ndx) {
        const item = commands[ndx];
        const infinite = item.command + ' infinite';
        const style = {
            animation: infinite
        };

		return (
            <div onMouseOver={()=>this.passCommand(item.command)} style={{ width: '100%'}}>
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
            <div onMouseOver={()=>this.passCommand(item.command)} style={{ width: '100%'}}>
                <h4>{item.name}</h4>
                    <div style={style} className="textCommand">Text Command</div>
                    <div className="codeBlock"><code>animation: {item.command}</code></div>
                    <CopyToClipboard text={this.state.code}>
                    <span title="copy to clipboard" className="copy"></span>
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


    renderShorthand() {
        return (
            <div>
                <p>Setting 8 parameters is a cumbersome task that may me overcome by the shorthand property.</p>
                <div className="sample">
                <code>animation: <span className="green">crazy 4s ease-in-out 0.5s 12 backwards</span></code>
                </div>
                <br />
                <p>In this sample the animation with the name <span className="green">crazy</span> is evoked</p>
                <p>The value <span className="green">4s</span> specifies a duration of 4 seconds</p>
                <p><span className="green">ease-in-out</span> specifies the animation curve</p>
                <p><span className="green">0.5s</span> specifies the delay</p>
                <p>The value <span className="green">12</span> specifies the number of iterations</p>
                <p>The following <span className="green">backwards</span> specifies the fill mode</p>

                <div>The sequence of the various items does not matter. The only thing you have to keep in mind is that the first time-value always represents the duration, the latter the delay of the animation</div>
            </div>
        );
    }

    renderPrinciples() {
        return (
            <div>
                <h4>Animation Principles</h4>
                <p>
                    There animation parameters you can specify in the style are the following
                </p>

                <li>animationName: <span className="param">'anim-rotate-in'</span></li>
                <li>animationDelay:  <span className="param">'.5s'</span></li>
                <li>animationDuration:  <span className="param">'3s'</span></li>
                <li>animationDirection:  <span className="param">'alternate'</span></li>
                <li>animationIterationCount:  <span className="param">3</span></li>
                <li>animationTimingFunction:  <span className="param">'ease'</span></li>
                <li>animationFillMode:  <span className="param">'forwards'</span></li>
                <li>animationPlayState:  <span className="param">'paused'</span></li>
                <br />

                <p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-name.asp">animation-name</a> CSS property specifies a name for the @keyframes animation.</p>
                <p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-delay.asp" target="_blank">animation-delay</a> CSS property specifies a delay for the start of an animation.</p>
                <p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-direction.asp" target="_blank">animation-diretion</a> CSS property defines whether an animation should be played forwards, backwards or in alternate cycles.</p>
                <p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-duration.asp" target="_blank">animation-duration</a> CSS property defines how long an animation should take to complete one cycle.</p>
                <p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-iteration-count.asp" target="_blank">animation-iteration-count</a> CSS property  specifies the number of times an animation should be played.</p>
                <p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.asp" target="_blank">animation-fill-mode</a> CSS property sets how a CSS animation applies styles to its target before and after its execution.</p>
                <p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-play-state.asp" target="_blank">animation-play-state</a> CSS property specifies whether the animation is running or paused.</p>
                <p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp" target="_blank">animation-timing-function</a> CSS property specifies the speed curve of an animation .</p>
            </div>


        );
    }


    renderContent() {
        if (this.state.explanation === 'list') {
            return this.renderCommands();
        }

        if (this.state.explanation === 'shorthand') {
            return this.renderShorthand();
        }

        if (this.state.explanation === 'principles') {
            return this.renderPrinciples();
        }

        if (this.state.explanation === 'text') {
            return this.renderTextAnimations();
        }
    }

    setPage = (value) => {
        let page = 'list';
        if (value === 2) page = 'shorthand';
        if (value === 3) page = 'principles';
        if (value === 4) page = 'text';

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
        const style= {
            position: 'fixed',
            padding: '10px',
            boxShadow: '0 0 4px black',
            background: 'white',
            width: '40%',
            height: '84%',
            left: '58%',
            top: '14%'

        };


		return (
            <div className="animation-helper" style={style}>
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
