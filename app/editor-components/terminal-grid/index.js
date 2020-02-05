// MODULES //

import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Terminal from 'editor-components/terminal';
import Tooltip from 'components/tooltip';
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

	addTerminal = () => {
		const splitPoints = this.state.splitPoints.slice();
		const nTerminals = this.state.nTerminals + 1;
		let width = this.props.width;
		for ( let i = 0; i < splitPoints.length; i++ ) {
			width -= splitPoints[ i ];
		}
		splitPoints.push( 0.5 * width );
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
				key={`terminal-${i}`}
				height={this.props.height}
				width={widths[ i ]}
				filePath={this.props.filePath}
				fontSize={this.props.fontSize}
			/>;
		}
		return this.renderPanes( out, 0 );
	}

	renderHeader() {
		return ( <div className="terminal-grid-header" >
			<span>Terminals</span>
			<ButtonGroup style={{ marginLeft: 12 }} >
				<Tooltip tooltip="Split terminal">
					<Button variant="secondary-outline" onClick={this.addTerminal}>
						<i className="fas fa-columns"></i>
					</Button>
				</Tooltip>
			</ButtonGroup>
		</div> );
	}

	render() {
		return (
			<Fragment>
				{ this.props.height > 18 ? this.renderHeader() : null }
				{this.renderTerminals()}
			</Fragment>
		);
	}
}


// EXPORTS //

export default TerminalGrid;
