// MODULES //

import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import trim from '@stdlib/string/trim';
import SessionContext from '@isle-project/session/context.js';
import { addResources } from '@isle-project/locales';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './rhelp.css';


// VARIABLES //

addResources( 'R' );


// MAIN //

/**
* Make words pull up R documentation in a modal window when clicked.
*
* @property {Function} func - name of the `R function` for which to open the documentation. If not supplied, the content of the `RHelp` tag is assumed to be equal to the name of the function
* @property {string} library - name of the R package in which the function resides
* @property {boolean} visible - controls whether the help modal window should be opened at startup
*/
const RHelp = ({ children, func, library, visible }) => {
	const { t } = useTranslation( 'R' );
	const session = useContext( SessionContext );
	const [ show, setShow ] = useState( visible );
	const [ body, setBody ] = useState( '' );
	const showModal = useCallback( () => {
		const functionName = trim( func || children );
		if ( body === '' ) {
			session.getRHelp( library, functionName, ( error, response, body ) => {
				if ( !error ) {
					setBody( body );
				}
			});
		}
	}, [ body, children, func, library, session ] );
	const toggleModal = useCallback( () => {
		setShow( !show );
	}, [ show ] );
	useEffect( () => {
		if ( show ) {
			showModal();
		}
	}, [ show, showModal ] );
	return (
		<span
			role="button" tabIndex={0}
			className="RHelp"
			onClick={toggleModal} onKeyPress={toggleModal}
		>
			<Modal
				backdrop={false}
				show={show}
				title={t('r-help')}
				onHide={toggleModal}
				className="r-help-modal"
				enforceFocus={false}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg">{t('r-help')}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="r-help-modal-body" >
					<span dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
						__html: body
					}}></span>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={toggleModal}>{t('close')}</Button>
				</Modal.Footer>
			</Modal>
			<code style={{ cursor: 'pointer' }}>{children || func}</code>
		</span>
	);
};


// PROPERTIES //

RHelp.propTypes = {
	func: PropTypes.string,
	library: PropTypes.string,
	visible: PropTypes.bool
};

RHelp.defaultProps = {
	func: '',
	library: 'base',
	visible: false
};


// EXPORTS //

export default withPropCheck( RHelp );
