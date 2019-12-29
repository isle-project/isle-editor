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
import DataExplorerHelp from './data_explorer_help.js';
import STATUSBAR_HELP from './statusbar_help.js';


// VARIABLES //

const debug = logger( 'isle:toolbar:help' );


// FUNCTIONS //

function loadFonts() {
	import( /* webpackChunkName: "fonts" */ './../../constants/fonts.js' )
		.then( fonts => {
			debug( 'Successfully loaded fonts...' );
			pdfMake.vfs = fonts.default;
		})
		.catch( err => {
			debug( 'Encountered an error while loading fonts: '+err.message );
		});
}

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
		loadFonts();
		this.hasDataExplorer = document.getElementsByClassName( 'data-explorer' ).length > 0;
	}

	handlePDFDownload = () => {
		const imgs = this.tabs.getElementsByTagName( 'img' );
		for ( let i = 0; i < imgs.length; i++ ) {
			imgs[ i ].src = getDataUrl( imgs[ i ] );
		}
		const html = this.tabs.innerHTML;
		const doc = {
			content: htmlToPdfMake( html ),
			pageMargins: [ 40, 60, 40, 60 ] // left top right bottom
		};
		const session = this.props.session;
		pdfMake.createPdf( doc ).download( `ISLE_${session.lessonName}_Documentation.pdf` );
	}

	render() {
		const session = this.props.session;
		return (
			<Card body style={{ width: '40%', height: '100vh', position: 'fixed', right: 0, top: 0, zIndex: 1005 }}>
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<h3>Documentation</h3>
					<div className="help-buttons" >
						<Button variant="outline-secondary" size="sm" onClick={this.handlePDFDownload} >Download PDF</Button>
						<button className="help-close-button fa fa-times" onClick={this.props.onClose} />
					</div>
					<Nav variant="pills" style={{ background: '#f8f9fa', padding: 6 }} >
						{ this.hasDataExplorer ?
							<Nav.Item>
								<Nav.Link eventKey="first">Data Explorers</Nav.Link>
							</Nav.Item> :
							null
						}
						{ !session.config.hideStatusBar && !session.config.removeStatusBar ?
							<Nav.Item>
								<Nav.Link eventKey="second">Status Bar</Nav.Link>
							</Nav.Item> :
							null
						}
					</Nav>
					<Tab.Content ref={( div ) => { this.tabs = div; }} style={{ overflowY: 'scroll', height: '80vh' }}>
						<Tab.Pane eventKey="first">
							<DataExplorerHelp />
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<Text raw={STATUSBAR_HELP} />
						</Tab.Pane>
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
