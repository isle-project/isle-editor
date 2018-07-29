// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Modal from 'react-bootstrap/lib/Modal';
import Radio from 'react-bootstrap/lib/Radio';
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Joyride, { EVENTS } from 'components/joyride';
import overview from './overview.json';
import poster from './poster.json';
import saving from './saving.json';


// MAIN //

class Guides extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			selected: null,
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
			<Panel><Panel.Body>
				<label>Cancel Tour</label>
				<p>
					You are currently in a tour on the functionality of the editor. You will only be able to start a new tour if you cancel the current one. Do you wish to cancel it?
				</p>
				<ButtonToolbar>
					<Button bsStyle="warning" onClick={this.handleStartClick} >Cancel</Button>
				</ButtonToolbar>
			</Panel.Body></Panel>
		);
	}

	renderSelectionPanel() {
		return (
			<Panel><Panel.Body>
				<label>Select a Tour</label>
				<FormGroup>
					<Radio
						name="overview"
						value="overview"
						onChange={this.handleOptionChange}
						checked={this.state.selected === 'overview'}
					>
						Editor Overview
					</Radio>
					<Radio
						name="saving"
						value="saving"
						onChange={this.handleOptionChange}
						checked={this.state.selected === 'saving'}
					>
						Saving Progress
					</Radio>
					<Radio
						name="poster"
						value="poster"
						onChange={this.handleOptionChange}
						checked={this.state.selected === 'poster'}
					>
						Creating a Poster
					</Radio>
				</FormGroup>
				<ButtonToolbar>
					<Button bsStyle="success" onClick={this.handleStartClick} >Start Tour</Button>
				</ButtonToolbar>
			</Panel.Body></Panel>
		);
	}

	renderModal() {
		let guidePanel;
		if ( this.state.running ) {
			guidePanel = this.renderCancelPanel();
		} else {
			guidePanel = this.renderSelectionPanel();
		}
		return (
			<Modal
				onHide={this.clickHide}
				show={this.props.show}
				bsSize="large"
			>
				<Modal.Header closeButton>
					<Modal.Title>Editor Guide</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col sm={9}>
							<Col sm={5}>
								<label> Markdown Cheatsheet</label>
								<h4>Headers</h4>
								<pre># This is a large header<br />
								## Medium header<br />
								### Small header</pre>
								<h4>Emphasis</h4>
								<pre><i>*This will be italic*</i><br />
								<b>**This will be bold**</b><br />
								<i>*We <b>**can**</b> combine them*</i><br />
								<u>++Underlined++</u><br />
								<s>~~strikethrough~~</s><br />
								</pre>
								<h4>Quotes</h4>
								<pre>
									George Box said:<br />
									&gt; All models are wrong.<br />
									&gt; But some are useful.
								</pre>
							</Col>
							<Col sm={7}>
								<h4>Lists</h4>
								<Col sm={6} >
									<h5>Unordered</h5>
									<pre>
									* Item 1<br />
									* Item 2<br />
									&nbsp; &nbsp; * Item 2a<br />
									&nbsp; &nbsp; * Item 2b<br />
									</pre>
								</Col>
								<Col sm={6} >
									<h5>Ordered</h5>
									<pre>
									1. Item 1<br />
									2. Item 2<br />
									3. Item 3<br />
									&nbsp; &nbsp;3a. Item 3a<br />
									&nbsp; &nbsp;3b. Item 3b<br />
									</pre>
								</Col>
								<h4>Links</h4>
								<pre>[Google](https://google.com)</pre>
								<h4>Tables</h4>
								<pre>
								| Column 1 | Column 2 | Column 3 |<br />
								| -------- | -------- | -------- |<br />
								| Gertrude | Cox      | Female   |<br />
								| Karl     | Pearson  | Male     |
								</pre>
							</Col>
						</Col>
						<Col sm={3}>
							{guidePanel}
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.clickHide} >Close</Button>
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
							const { action, index, type } = tour;
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
							const { action, index, type } = tour;
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
							const { action, index, type } = tour;
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


// TYPES //

Guides.propTypes = {
	onHide: PropTypes.func,
	show: PropTypes.bool.isRequired
};

Guides.defaultProps = {
	onHide() {}
};


// EXPORTS //

export default Guides;
