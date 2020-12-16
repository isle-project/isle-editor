// MODULES //

import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import Terminal from 'editor-components/terminal';
import SplitPane from 'react-split-pane';
import './terminal_grid.css';


// MAIN //

class TerminalGrid extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			nTerminals: 1,
			splitPoints: []
		};
	}

	addTerminal = ( id ) => {
		const idx = Number( id.substring( id.indexOf( '-' ) + 1 ) );

		const splitPoints = this.state.splitPoints.slice();
		const nTerminals = this.state.nTerminals + 1;
		let width = this.props.width;
		for ( let i = splitPoints.length - 1; i >= idx; i-- ) {
			width -= splitPoints[ i ];
		}
		splitPoints.splice( idx, 0, 0.5 * width );
		this.setState({
			nTerminals,
			splitPoints
		});
	}

	killTerminal = ( id ) => {
		const idx = Number( id.substring( id.indexOf( '-' ) + 1 ) );

		const splitPoints = this.state.splitPoints.slice();
		const nTerminals = this.state.nTerminals - 1;
		splitPoints.splice( idx, 1 );
		this.setState({
			nTerminals,
			splitPoints
		});
	}

	handleVerticalSplitFactory = ( idx ) => {
		return ( size ) => {
			const splitPoints = this.state.splitPoints.slice();
			splitPoints[ idx ] = size;
			this.setState({
				splitPoints
			});
		};
	}

	renderPanes = ( terminals, idx ) => {
		const term = terminals.shift();
		if ( terminals.length === 0 ) {
			return term;
		}
		return (
			<SplitPane
				key={`pane-${idx}`}
				split="vertical"
				onChange={this.handleVerticalSplitFactory( idx )}
				defaultSize={this.state.splitPoints[ idx ]}
			>
				{term}
				{this.renderPanes( terminals, idx + 1 )}
			</SplitPane>
		);
	}

	calculateTermWidths() {
		const splitPoints = this.state.splitPoints;
		const widths = [];
		if ( splitPoints.length === 0 ) {
			widths.push( this.props.width );
			return widths;
		}
		widths.push( splitPoints[ 0 ] );
		let sum = widths[ 0 ];
		for ( let i = 1; i < splitPoints.length; i++ ) {
			let width = splitPoints[ i ];
			widths.push( sum + width );
			sum += width;
		}
		widths.push( this.props.width - sum );
		return widths;
	}

	renderTerminals() {
		const out = [];
		const widths = this.calculateTermWidths();
		for ( let i = 0; i < this.state.nTerminals; i++ ) {
			out[ i ] = <Terminal
				id={`terminal-${i}`}
				key={i}
				height={this.props.height}
				width={widths[ i ]}
				filePath={this.props.filePath}
				fontSize={this.props.fontSize}
				onDelete={this.killTerminal}
				onSplit={this.addTerminal}
			/>;
		}
		return this.renderPanes( out, 0 );
	}

	render() {
		if ( this.props.height <= 18 ) {
			return null;
		}
		return (
			<Fragment>
				<div className="terminal-grid-header" >
					<span>{this.props.t('terminals')}</span>
				</div>
				{this.renderTerminals()}
			</Fragment>
		);
	}
}


// EXPORTS //

export default withTranslation( 'Editor' )( TerminalGrid );
