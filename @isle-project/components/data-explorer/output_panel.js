// MODULES //

import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import scrollTo from '@isle-project/utils/scroll-to';


// MAIN //

/**
* Returns the filled output panel.
*/
class OutputPanel extends Component {
	constructor( props ) {
		super( props );
	}

	/**
	* Scrolls to the bottom of the output panel after result has been inserted.
	*/
	scrollToBottom() {
		if ( this.outputPanel ) {
			scrollTo( this.outputPanel, this.outputPanel.scrollHeight, 1000 );
		}
	}

	render() {
		const { t, header, output } = this.props;
		return (
			<Fragment>
				<div className="card-header clearfix">
					<h3 className="data-explorer-output-header">
						{t('output')}
					</h3>
					{header}
				</div>
				<div
					className="data-explorer-output-panel"
					style={{
						height: ( window.innerHeight*0.9 ) - 80
					}}
					ref={( div ) => {
						this.outputPanel = div;
					}}
				>
					{output}
				</div>
				<div className="d-grid" >
					<Button size="sm" variant="outline-danger" onClick={this.props.clearOutput}>
						{t('clear-all')}
					</Button>
				</div>
			</Fragment>
		);
	}
}


// EXPORTS //

export default OutputPanel;
