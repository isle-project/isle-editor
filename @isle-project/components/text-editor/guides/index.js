// MODULES //

import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import FormGroup from 'react-bootstrap/FormGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Joyride, { EVENTS } from '@isle-project/components/joyride';
import overview from './overview.json';
import saving from './saving.json';


// VARIABLES //

const debug = logger( 'isle:text-editor:guides' );


// MAIN //

const Guides = ({ target, show, onHide, t }) => {
	debug( `Rendering guides modal for "${target}" text editor` );
	const [ selected, setSelected ] = useState( 'overview' );
	const [ running, setRunning ] = useState( false );
	const editorNode = useRef( document.getElementById( target ) );
	const createSteps = useCallback( () => {
		return {
			saving: saving.map( ( x, idx ) => {
				const out = { ...x };
				out.content = t( `saving-${idx}` );
				out.target = `#${target} ` + out.target;
				return out;
			}),
			overview: overview.map( ( x, idx ) => {
				const out = { ...x };
				out.content = t( `overview-${idx}` );
				out.target = `#${target} ` + out.target;
				return out;
			})
		};
	}, [ target, t ] );
	const [ steps, setSteps ] = useState( createSteps() );
	useEffect( () => {
		editorNode.current = document.getElementById( target );
		setSteps( createSteps() );
	}, [ createSteps, target, t ] );
	const handleStartClick = useCallback( () => {
		debug( `${running ? 'Stopping' : 'Starting'} the selected tour...` );
		onHide();
		setRunning( !running );
	}, [ onHide, running ] );
	const handleOptionChange = useCallback( ( event ) => {
		setSelected( event.target.value );
	}, [] );
	const renderModal = useCallback( () => {
		/* eslint-disable i18next/no-literal-string */
		let guidePanel;
		if ( running ) {
			guidePanel = <Card body>
				<span className="title">{t('cancel-tour')}</span>
				<p>
					{t('cancel-tour-msg')}
				</p>
				<ButtonToolbar>
					<Button variant="warning" onClick={handleStartClick} >{t('cancel')}</Button>
				</ButtonToolbar>
			</Card>;
		} else {
			guidePanel = <Card body>
				<span className="title">{t('select-tour')}</span>
				<Form>
					<FormGroup>
						<Form.Check
							type="radio"
							label={t('editor-overview')}
							name="overview"
							value="overview"
							onChange={handleOptionChange}
							checked={selected === 'overview'}
						/>
						<Form.Check
							type="radio"
							label={t('saving-progress')}
							name="saving"
							value="saving"
							onChange={handleOptionChange}
							checked={selected === 'saving'}
						/>
					</FormGroup>
				</Form>
				<ButtonToolbar>
					<Button variant="success" onClick={handleStartClick} >
						{t('start-tour')}
					</Button>
				</ButtonToolbar>
			</Card>;
		}
		const leftColumn = <Col sm={5}>
			<h5>{t('headers')}</h5>
			<Card body style={{ marginBottom: 10 }} >
				<pre>
					# {t('large-header')}<br />
					## {t('medium-header')}<br />
					### {t('small-header')}
				</pre>
			</Card>
			<h5>{t('emphasis')}</h5>
			<Card body style={{ marginBottom: 10 }} >
				<pre>
					<i>*{t('markup-italic')}*</i><br />
					<b>**{t('markup-bold')}**</b><br />
					<i>*We <b>**can**</b> combine them*</i><br />
					<u>++{t('markup-underlined')}++</u><br />
					<s>~~{t('markup-strikethrough')}~~</s><br />
				</pre>
			</Card>
			<h5>{t('quotes')}</h5>
			<Card body >
				<pre>
					{t('george-box')}<br />
					&gt; {t('models-wrong')}<br />
					&gt; {t('models-useful')}
				</pre>
			</Card>
		</Col>;

		const rightColumn = <Col sm={7}>
			<h5>{t('lists')}</h5>
			<h6>{t('unordered')}</h6>
			<Card body style={{ marginBottom: 10 }} >
				<pre>
				* {t('item')} 1<br />
				* {t('item')} 2<br />
				&nbsp; &nbsp; * {t('item')} 2a<br />
				&nbsp; &nbsp; * {t('item')} 2b
				</pre>
			</Card>
			<h6>{t('ordered')}</h6>
			<Card body>
				<pre>
				1. {t('item')} 1<br />
				2. {t('item')} 2<br />
				3. {t('item')} 3<br />
				&nbsp; &nbsp;3a. {t('item')} 3a<br />
				&nbsp; &nbsp;3b. {t('item')} 3b
				</pre>
			</Card>
		</Col>;
		return (
			<Modal
				onHide={onHide}
				show={show}
				dialogClassName="modal-90w"
			>
				<Modal.Header closeButton>
					<Modal.Title as="h4">
						{t('editor-guide')}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<span className="title">{t('markdown-cheatsheet')}</span>
						<Row>
							<Col sm={9}>
								<Row>
									{leftColumn}
									{rightColumn}
								</Row>
							</Col>
							<Col sm={3}>
								{guidePanel}
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={onHide} >{t('close')}</Button>
				</Modal.Footer>
			</Modal>
		);
		/* eslint-enable i18next/no-literal-string */
	}, [ handleOptionChange, onHide, running, selected, handleStartClick, show, t ] );

	debug( `Selected tutorial ${selected} is${running ? ' ' : ' not ' }running` );
	return (
		<Fragment>
			{renderModal()}
			{ selected === 'saving' ?
				<Joyride
					steps={steps.saving}
					showProgress
					disableScrolling
					run={running}
					parentNode={editorNode.current}
					callback={( tour ) => {
						const type = tour.type;
						if ( type === EVENTS.TOUR_END ) {
							setRunning( false );
						}
					}}
				/> : null
			}
			{ selected === 'overview' ?
				<Joyride
					steps={steps.overview}
					showProgress
					disableScrolling
					continuous
					run={running}
					parentNode={editorNode.current}
					callback={( tour ) => {
						const type = tour.type;
						if ( type === EVENTS.TOUR_END ) {
							setRunning( false );
						}
					}}
				/> : null
			}
		</Fragment>
	);
};


// PROPERTIES //

Guides.propTypes = {
	onHide: PropTypes.func,
	show: PropTypes.bool.isRequired
};

Guides.defaultProps = {
	onHide() {}
};


// EXPORTS //

export default Guides;
