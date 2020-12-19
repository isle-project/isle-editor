// MODULES //

import React, { Component, Fragment } from 'react';
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
import poster from './poster.json';
import saving from './saving.json';


// VARIABLES //

const debug = logger( 'isle:text-editor:guides' );


// MAIN //

class Guides extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			selected: 'overview',
			running: false
		};

		this.saving = saving.map( x => {
			const out = { ...x };
			out.target = `#${props.for} ` + out.target;
			return out;
		});
		this.overview = overview.map( x => {
			const out = { ...x };
			out.target = `#${props.for} ` + out.target;
			return out;
		});
		this.poster = poster.map( x => {
			const out = { ...x };
			out.target = `#${props.for} ` + out.target;
			return out;
		});
	}

	clickHide = () => {
		this.props.onHide();
	}

	handleStartClick = () => {
		this.props.onHide();
		this.setState({
			running: !this.state.running
		});
	}

	handleOptionChange = ( event ) => {
		this.setState({
			selected: event.target.value
		});
	}

	renderCancelPanel() {
		const { t } = this.props;
		return (
			<Card body>
				<span className="title">{t('cancel-tour')}</span>
				<p>
					{t('cancel-tour-msg')}
				</p>
				<ButtonToolbar>
					<Button variant="warning" onClick={this.handleStartClick} >{t('cancel')}</Button>
				</ButtonToolbar>
			</Card>
		);
	}

	renderSelectionPanel() {
		const { t } = this.props;
		return (
			<Card body>
				<span className="title">{t('select-tour')}</span>
				<Form>
					<FormGroup>
						<Form.Check
							type="radio"
							label={t('editor-overview')}
							name="overview"
							value="overview"
							onChange={this.handleOptionChange}
							checked={this.state.selected === 'overview'}
						/>
						<Form.Check
							type="radio"
							label={t('saving-progress')}
							name="saving"
							value="saving"
							onChange={this.handleOptionChange}
							checked={this.state.selected === 'saving'}
						/>
						<Form.Check
							type="radio"
							label={t('creating-poster')}
							name="poster"
							value="poster"
							onChange={this.handleOptionChange}
							checked={this.state.selected === 'poster'}
						/>
					</FormGroup>
				</Form>
				<ButtonToolbar>
					<Button variant="success" onClick={this.handleStartClick} >
						{t('start-tour')}
					</Button>
				</ButtonToolbar>
			</Card>
		);
	}

	renderModal() {
		let guidePanel;
		if ( this.state.running ) {
			guidePanel = this.renderCancelPanel();
		} else {
			guidePanel = this.renderSelectionPanel();
		}
		const { t } = this.props;
		const leftColumn = <Col sm={5}>
			<h5>{t('headers')}</h5>
			<Card body style={{ marginBottom: 10 }} >
				<pre>
					# This is a large header<br />
					## Medium header<br />
					### Small header
				</pre>
			</Card>
			<h5>{t('emphasis')}</h5>
			<Card body style={{ marginBottom: 10 }} >
				<pre>
					<i>*{t('this-will-be-italic')}*</i><br />
					<b>**{t('this-will-be-bold')}**</b><br />
					<i>*We <b>**can**</b> combine them*</i><br />
					<u>++Underlined++</u><br />
					<s>~~strikethrough~~</s><br />
				</pre>
			</Card>
			<h5>{t('quotes')}</h5>
			<Card body >
				<pre>
					George Box said:<br />
					&gt; All models are wrong.<br />
					&gt; But some are useful.
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
				onHide={this.clickHide}
				show={this.props.show}
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
					<Button onClick={this.clickHide} >{t('close')}</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	render() {
		let modal = this.renderModal();
		debug( `Selected tutorial ${this.state.selected} is${this.state.running ? ' ' : ' not ' }running` );
		return (
			<Fragment>
				{modal}
				{ this.state.selected === 'saving' ?
					<Joyride
						steps={this.saving}
						showProgress
						disableScrolling
						run={this.state.running}
						callback={( tour ) => {
							const type = tour.type;
							if ( type === EVENTS.TOUR_END ) {
								this.setState({ running: false });
							}
						}}
					/> : null
				}
				{ this.state.selected === 'overview' ?
					<Joyride
						steps={this.overview}
						showProgress
						disableScrolling
						continuous
						run={this.state.running}
						callback={( tour ) => {
							const type = tour.type;
							if ( type === EVENTS.TOUR_END ) {
								this.setState({ running: false });
							}
						}}
					/> : null
				}
				{ this.state.selected === 'poster' ?
					<Joyride
						steps={this.poster}
						showProgress
						disableScrolling
						run={this.state.running}
						callback={( tour ) => {
							const type = tour.type;
							if ( type === EVENTS.TOUR_END ) {
								this.setState({ running: false });
							}
						}}
					/> : null
				}
			</Fragment>
		);
	}
}


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
