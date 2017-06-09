// MODULES //

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Button } from 'react-bootstrap';
import $ from 'jquery';


// VARIABLES //

const LOGGED_IN_COLOR = 'rgb(130, 224, 160)';
const LOGGED_OUT_COLOR = 'rgb(209, 107, 71)';


// MAIN //

class StatusBar extends Component {

	constructor( props ) {
		super( props );

		this.hidden = true;
	}

	componentDidMount() {
	}

	toggleBar() {
		const div = findDOMNode( this );
		if ( this.hidden ) {
			$( div ).animate({ top: 0, opacity: 1.0 }, 300 );
			this.hidden = false;
		} else {
			$( div ).animate({ top: -32, opacity: 0.7 }, 300 );
			this.hidden = true;
		}
	}

	onMouseOver() {
		if ( this.hidden ) {
			const div = findDOMNode( this );
			$( div ).css( 'opacity', 1.0 );
		}
	}

	onMouseOut() {
		if ( this.hidden ) {
			const div = findDOMNode( this );
			$( div ).css( 'opacity', 0.7 );
		}
	}

	render() {
		return (
			<div
				className="statusbar"
				onClick={this.toggleBar.bind( this )}
				onMouseOver={this.onMouseOver.bind( this )}
				onMouseOut={this.onMouseOut.bind( this )}
			>
				<div className="statusLeft" style={{
					position: 'absolute',
					left: 0,
					width: '20%',
					height: '100%',
					backgroundColor: 'rgb(232, 232, 232)',
					transform: 'skewX(45deg)',
					borderLeft: 'solid 1px darkgrey',
					borderBottom: 'solid 1px darkgrey'
				}}>
				</div>
				<div className="statusMiddle" style={{
					position: 'absolute',
					left: '10%',
					width: '80%',
					height: '100%',
					backgroundColor: 'rgb(232, 232, 232)',
					borderBottom: 'solid 1px darkgrey'
				}}>
					<div className="presence" style={{
						width: '10px',
						left: '-6%',
						height: '10px',
						bottom: '4px',
						backgroundColor: this.props.session.anonymous ? LOGGED_OUT_COLOR : LOGGED_IN_COLOR,
						position: 'absolute',
						borderRadius: '50%',
						boxShadow: '1px 1px 2px grey'
					}}>
					</div>
					<div className="username" style={{
						bottom: '-1px',
						height: 'auto',
						position: 'absolute',
						fontSize: '12px',
						fontFamily: 'monospace'
					}}>
						{ this.props.session.anonymous ? 'Anonymous' : this.props.session.user.name }
					</div>
					<div style={{
						bottom: '-1px',
						height: 'auto',
						position: 'absolute',
						right: '20px',
						fontSize: '12px',
						fontFamily: 'monospace'
					}}>
						Login
					</div>
				</div>
				<div className="statusRight" style={{
					position: 'absolute',
					left: '80%',
					width: '20%',
					height: '100%',
					backgroundColor: 'rgb(232, 232, 232)',
					transform: 'skewX(-45deg)',
					borderBottom: 'solid 1px darkgrey',
					borderRight: 'solid 1px darkgrey'
				 }}>
				</div>
			</div>
		);
	}
}


// EXPORTS //

export default StatusBar;
