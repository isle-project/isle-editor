// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import pdfMake from 'pdfmake/build/pdfmake';
import htmlToPdfMake from 'html-to-pdfmake';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Text from 'components/text';
import DataExplorerHelp from './help/data_explorer.js';
import DataTableHelp from './help/data_table.js';
import STATUSBAR_HELP from './help/statusbar.js';
import QuestionsHelp from './help/questions.js';
import 'pdfmake/build/vfs_fonts.js';


// VARIABLES //

const debug = logger( 'isle:toolbar:help' );


// FUNCTIONS //

function getDataUrl( img ) {
	const canvas = document.createElement( 'canvas' );
	const ctx = canvas.getContext( '2d' );
	canvas.width = img.width * 3;
	canvas.height = img.height * 3;
	ctx.drawImage( img, 0, 0, img.width * 3, img.height * 3 );
	return canvas.toDataURL( 'image/jpeg' );
}


// MAIN //

class HelpPage extends Component {
	constructor( props ) {
		super( props );
		this.hasQuestions = document.getElementsByClassName( 'submit-button' ).length > 0;
		this.hasDataTable = document.getElementsByClassName( 'data-table-wrapper' ).length > 0;
		this.hasDataExplorer = document.getElementsByClassName( 'data-explorer' ).length > 0;
	}

	handlePDFDownload = () => {
		debug( 'Preparing PDF for download...' );
		const imgs = this.tabs.getElementsByTagName( 'img' );
		for ( let i = 0; i < imgs.length; i++ ) {
			imgs[ i ].src = getDataUrl( imgs[ i ] );
		}
		let html = this.tabs.innerHTML;
		html = html.replace( '<h4 style="text-align: center; margin-top: 50%;">Click on an item in the menu to learn more about...</h4>', '' );
		const doc = {
			content: htmlToPdfMake( html ),
			pageMargins: [ 40, 60, 40, 60 ] // left top right bottom
		};
		const session = this.props.session;
		pdfMake.createPdf( doc ).download( `ISLE_${session.lessonName}_Documentation.pdf` );
	}

	render() {
		const session = this.props.session;
		const hasStatusBar = !session.config.hideStatusBar && !session.config.removeStatusBar;
		return (
			<Card body style={{ width: '40%', height: '100vh', position: 'fixed', right: 0, top: 0, zIndex: 1006 }}>
				<Tab.Container id="left-tabs-example" defaultActiveKey="zeroth">
					<h3>Documentation</h3>
					<div className="help-buttons" >
						<Button variant="outline-secondary" size="sm" onClick={this.handlePDFDownload} >Download PDF</Button>
						<button className="help-close-button fa fa-times" onClick={this.props.onClose} />
					</div>
					<Nav variant="pills" style={{ background: '#f8f9fa', padding: 6 }} >
						{ this.hasDataTable ?
							<Nav.Item>
								<Nav.Link eventKey="first">Data Table</Nav.Link>
							</Nav.Item> :
							null
						}
						{ this.hasDataExplorer ?
							<Nav.Item>
								<Nav.Link eventKey="second">Data Explorer</Nav.Link>
							</Nav.Item> :
							null
						}
						{ !session.config.hideStatusBar && !session.config.removeStatusBar ?
							<Nav.Item>
								<Nav.Link eventKey="third">Status Bar</Nav.Link>
							</Nav.Item> :
							null
						}
						{ this.hasQuestions ?
							<Nav.Item>
								<Nav.Link eventKey="fourth">Questions</Nav.Link>
							</Nav.Item> :
							null
						}
					</Nav>
					<Tab.Content ref={( div ) => { this.tabs = div; }} style={{ overflowY: 'scroll', height: '80vh' }}>
						<Tab.Pane eventKey="zeroth">
							<h4 style={{ textAlign: 'center', marginTop: '50%' }}>Click on an item in the menu to learn more about...</h4>
						</Tab.Pane>
						{ this.hasDataTable ? <Tab.Pane eventKey="first">
							<DataTableHelp />
						</Tab.Pane> : null }
						{ this.hasDataExplorer ? <Tab.Pane eventKey="second">
							<DataExplorerHelp />
						</Tab.Pane> : null }
						{ hasStatusBar ? <Tab.Pane eventKey="third">
							<Text raw={STATUSBAR_HELP} />
						</Tab.Pane> : null }
						{ this.hasQuestions ? <Tab.Pane eventKey="fourth">
							<QuestionsHelp />
						</Tab.Pane> : null }
					</Tab.Content>
				</Tab.Container>
			</Card>
		);
	}
}


// PROPERTIES //

HelpPage.propTypes = {
	session: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired
};


// EXPORTS //

export default HelpPage;
