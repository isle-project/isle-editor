// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import FormGroup from 'react-bootstrap/FormGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Joyride, { EVENTS } from 'components/joyride';
import overview from './overview.json';
import poster from './poster.json';
import saving from './saving.json';


// MAIN //

class Guides extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			selected: 'overview',
			running: false
		};
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
		return (
			<Card body>
				<span className="title">{this.props.t('cancel-tour')}</span>
				<p>
					{this.props.t('cancel-tour-msg')}
				</p>
				<ButtonToolbar>
					<Button variant="warning" onClick={this.handleStartClick} >{this.props.t('cancel')}</Button>
				</ButtonToolbar>
			</Card>
		);
	}

	renderSelectionPanel() {
		return (
			<Card body>
				<span className="title">{this.props.t('select-tour')}</span>
				<Form>
					<FormGroup>
						<Form.Check
							type="radio"
							label={this.props.t('editor-overview')}
							name="overview"
							value="overview"
							onChange={this.handleOptionChange}
							checked={this.state.selected === 'overview'}
						/>
						<Form.Check
							type="radio"
							label={this.props.t('saving-progress')}
							name="saving"
							value="saving"
							onChange={this.handleOptionChange}
							checked={this.state.selected === 'saving'}
						/>
						<Form.Check
							type="radio"
							label={this.props.t('creating-poster')}
							name="poster"
							value="poster"
							onChange={this.handleOptionChange}
							checked={this.state.selected === 'poster'}
						/>
					</FormGroup>
				</Form>
				<ButtonToolbar>
					<Button variant="success" onClick={this.handleStartClick} >{this.props.t('start-tour')}</Button>
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

		const leftColumn = <Col sm={5}>
			<h5>Headers</h5>
			<Card body style={{ marginBottom: 10 }} >
				<pre>
					# This is a large header<br />
					## Medium header<br />
					### Small header
				</pre>
			</Card>
			<h5>Emphasis</h5>
			<Card body style={{ marginBottom: 10 }} >
				<pre>
					<i>*This will be italic*</i><br />
					<b>**This will be bold**</b><br />
					<i>*We <b>**can**</b> combine them*</i><br />
					<u>++Underlined++</u><br />
					<s>~~strikethrough~~</s><br />
				</pre>
			</Card>
			<h5>Quotes</h5>
			<Card body >
				<pre>
					George Box said:<br />
					&gt; All models are wrong.<br />
					&gt; But some are useful.
				</pre>
			</Card>
		</Col>;

		const rightColumn = <Col sm={7}>
			<h5>Lists</h5>
			<h6>Unordered</h6>
			<Card body style={{ marginBottom: 10 }} >
				<pre>
				* Item 1<br />
				* Item 2<br />
				&nbsp; &nbsp; * Item 2a<br />
				&nbsp; &nbsp; * Item 2b
				</pre>
			</Card>
			<h6>Ordered</h6>
			<Card body>
				<pre>
				1. Item 1<br />
				2. Item 2<br />
				3. Item 3<br />
				&nbsp; &nbsp;3a. Item 3a<br />
				&nbsp; &nbsp;3b. Item 3b
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
					<Modal.Title as="h4">Editor Guide</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<span className="title">Markdown Cheatsheet</span>
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
					<Button onClick={this.clickHide} >{this.props.t('close')}</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	render() {
		let modal = this.renderModal();
		return (
			<Fragment>
				{modal}
				{ this.state.selected === 'saving' ?
					<Joyride
						steps={saving}
						showProgress
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
						steps={overview}
						showProgress
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
						steps={poster}
						showProgress
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
