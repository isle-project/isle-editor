// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import FocusTrap from 'focus-trap-react';
import { withTranslation } from 'react-i18next';
import pdfMake from 'pdfmake/build/pdfmake';
import htmlToPdfMake from 'html-to-pdfmake';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import DataExplorerHelp from './data_explorer.js';
import DataTableHelp from './data_table.js';
import StatusBarHelp from './statusbar.js';
import QuestionsHelp from './questions.js';
import 'pdfmake/build/vfs_fonts.js';
import { OPEN_DOCUMENTATION } from '@isle-project/constants/actions';
import getDataUrl from './get_data_url.js';


// VARIABLES //

const debug = logger( 'isle:toolbar:help' );
const FOCUS_TRAP_OPTIONS = {
	clickOutsideDeactivates: true
};


// MAIN //

/**
* Documentation page accessible from toolbar.
*/
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
		const { t } = this.props;
		let html = this.tabs.innerHTML;
		html = html.replace( '<h4 style="text-align: center; margin-top: 50%;">'+t('click-instruction')+'</h4>', '' );
		const doc = {
			content: htmlToPdfMake( html ),
			pageMargins: [ 40, 60, 40, 60 ] // left top right bottom
		};
		const session = this.props.session;

		// eslint-disable-next-line i18next/no-literal-string
		pdfMake.createPdf( doc ).download( `ISLE_${session.lessonName}_Documentation.pdf` );
	};

	handleTabSelect = ( target ) => {
		const session = this.props.session;
		const action = {
			id: 'documentation',
			type: OPEN_DOCUMENTATION,
			value: target
		};
		session.log( action );
	};

	render() {
		const session = this.props.session;
		const hasStatusBar = !session.config.hideStatusBar && !session.config.removeStatusBar;
		const { t } = this.props;
		return (
			<FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS} >
				<Card body style={{ width: '40%', height: '100vh', position: 'fixed', right: 0, top: 0, zIndex: 1006 }}>
					<Tab.Container id="left-tabs-example" defaultActiveKey="zeroth" onSelect={this.handleTabSelect} >
						<h3>{t('documentation')}</h3>
						<div className="help-buttons" >
							<Button variant="outline-secondary" size="sm" onClick={this.handlePDFDownload} >{t('download-pdf')}</Button>
							<button aria-label={t('close-documentation')} className="help-close-button fa fa-times" onClick={this.props.onClose} />
						</div>
						<Nav variant="pills" style={{ background: '#f8f9fa', padding: 6 }} >
							{ this.hasDataTable ?
								<Nav.Item>
									<Nav.Link eventKey="data-table">{t('data-table-title')}</Nav.Link>
								</Nav.Item> :
								null
							}
							{ this.hasDataExplorer ?
								<Nav.Item>
									<Nav.Link eventKey="data-explorer">{t('data-explorer-title')}</Nav.Link>
								</Nav.Item> :
								null
							}
							{ !session.config.hideStatusBar && !session.config.removeStatusBar ?
								<Nav.Item>
									<Nav.Link eventKey="statusbar">{t('statusbar-title')}</Nav.Link>
								</Nav.Item> :
								null
							}
							{ this.hasQuestions ?
								<Nav.Item>
									<Nav.Link eventKey="questions">{t('questions-title')}</Nav.Link>
								</Nav.Item> :
								null
							}
						</Nav>
						<Tab.Content ref={( div ) => { this.tabs = div; }} style={{ overflowY: 'scroll', height: '80vh' }}>
							<Tab.Pane eventKey="zeroth">
								<h4 style={{ textAlign: 'center', marginTop: '50%' }}>
									{t('click-instruction')}
								</h4>
							</Tab.Pane>
							{ this.hasDataTable ? <Tab.Pane eventKey="data-table">
								<DataTableHelp t={t} />
							</Tab.Pane> : null }
							{ this.hasDataExplorer ? <Tab.Pane eventKey="data-explorer">
								<DataExplorerHelp t={t} />
							</Tab.Pane> : null }
							{ hasStatusBar ? <Tab.Pane eventKey="statusbar">
								<StatusBarHelp t={t} />
							</Tab.Pane> : null }
							{ this.hasQuestions ? <Tab.Pane eventKey="questions">
								<QuestionsHelp t={t} />
							</Tab.Pane> : null }
						</Tab.Content>
					</Tab.Container>
				</Card>
			</FocusTrap>
		);
	}
}


// PROPERTIES //

HelpPage.propTypes = {
	session: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired
};


// EXPORTS //

export default withTranslation( 'internal/toolbar/help' )( HelpPage );
