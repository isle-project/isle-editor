// MODULES //

import React, { Fragment, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { changeRenderInterval, changeFontSize, changePreambleTemplate,
	updateDownloading, toggleQuickSuggestions, toggleMiniMap } from 'actions';
import { withTranslation } from 'react-i18next';
import Collapse from '@isle-project/components/collapse';
import NumberInput from '@isle-project/components/input/number';
import CheckboxInput from '@isle-project/components/input/checkbox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import Card from 'react-bootstrap/Card';
import HeaderUpperBar from 'editor-components/header-upper-bar';
import SettingsLogin from 'editor-components/settings-login';
import LanguageSwitcher from './language-switcher';
import './settings.css';


// MAIN //

const Settings = ({
	changeFontSize, changeRenderInterval, changePreambleTemplate, t,
	updateStatus, updateInfo, updateDownloading, updateDownloadPercent,
	fontSize, renderInterval, preambleTemplate, showMiniMap, showQuickSuggestions,
	toggleQuickSuggestions, toggleMiniMap
}) => {
	const [ showSettings, setShowSettings ] = useState( false );
	const handleFontSizeChange = useCallback( ( number ) => {
		changeFontSize( number );
	}, [ changeFontSize ] );
	const handleRenderIntervalChange = useCallback( ( number ) => {
		changeRenderInterval( number * 1000 );
	}, [ changeRenderInterval ] );
	const handlePreambleTemplateChange = useCallback( ( event ) => {
		changePreambleTemplate( event.target.value );
	}, [ changePreambleTemplate ] );
	return (
		<Fragment>
			<HeaderUpperBar
				backToEditor
				title={t('settings')}
				updateStatus={updateStatus}
				updateInfo={updateInfo}
				updateDownloading={updateDownloading}
				updateDownloadPercent={updateDownloadPercent}
			/>
			<div className="settings-wrapper" >
				<SettingsLogin />
				<Collapse
					header={<Fragment>
						<span style={{ marginRight: 8 }} >{t('settings')}</span>
						{showSettings ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
					</Fragment>}
					className="settings-card" style={{ maxWidth: '100%' }}
					onClick={( visible ) => {
						setShowSettings( visible );
					}}
				>
					<Card.Body>
						<Container><Row>
							<Col md={5} className="d-grid gap-1" >
								<NumberInput
									description={t('font-size-description')}
									legend={t('font-size')}
									onChange={handleFontSizeChange}
									min={8}
									max={56}
									step={1}
									defaultValue={fontSize}
								/>
								<NumberInput
									description={t('rendering-interval-description')}
									legend={t('rendering-interval')}
									onChange={handleRenderIntervalChange}
									min={1}
									max={100}
									step={1}
									defaultValue={parseInt( renderInterval / 1000, 10 )}
								/>
								<CheckboxInput
									legend={t('show-minimap')}
									defaultValue={showMiniMap}
									onChange={toggleMiniMap}
								/>
								<CheckboxInput
									legend={t('show-quick-suggestions')}
									defaultValue={showQuickSuggestions}
									onChange={toggleQuickSuggestions}
								/>
							</Col>
							<Col md={7}>
								<LanguageSwitcher />
								<FormGroup className="settings-preamble-form-group">
									<Card.Subtitle className="mb-2" >
										<FormLabel className="title" >{t('preamble-template')}:</FormLabel>
									</Card.Subtitle>
									<FormControl
										as="textarea"
										onChange={handlePreambleTemplateChange}
										rows={7}
										defaultValue={preambleTemplate}
									/>
								</FormGroup>
							</Col>
						</Row></Container>
					</Card.Body>
				</Collapse>
			</div>
		</Fragment>
	);
};


// EXPORTS //

export default connect( mapStateToProps, {
	changeFontSize,
	changePreambleTemplate,
	changeRenderInterval,
	updateDownloading,
	toggleQuickSuggestions,
	toggleMiniMap
})( withTranslation( 'Editor' )( Settings ) );

function mapStateToProps({ editor, preview, updater }) {
	return {
		...editor,
		...preview,
		...updater
	};
}
