// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Calculator from 'components/calculator';
import ReactDraggable from 'components/draggable';
import Queue from 'components/queue';
import Tooltip from 'components/tooltip';
import KeyControls from 'components/key-controls';
import isElectron from 'utils/is-electron';
import SessionContext from 'session/context.js';
import './toolbar.css';


// MAIN //

class Toolbar extends Component {
	constructor( props ) {
		super( props );


		const state = {
			calculator: false,
			queue: false,
			queueSize: 0
		};

		props.elements.forEach( x => {
			state[ x.name ] = false;
		});

		this.state = state;
	}

	toggleCalculator = () => {
		this.setState({
			calculator: !this.state.calculator
		});
	}

	toggleQueue = () => {
		this.setState({
			queue: !this.state.queue
		});
	}

	renderButton( elem ) {
		const toggleElement = () => {
			this.setState({ [elem.name]: !this.state[ elem.name ] });
		};
		return (
			<Tooltip tooltip={`${this.state[ elem.name ] ? 'Close' : 'Open'} ${elem.name}`} placement="right" >
				<Button
					variant="light"
					onClick={toggleElement}
					onKeyPress={toggleElement}
					style={{
						display: 'inherit'
					}}
				>
					<span className={`fa fa-lg fa-${elem.icon} toolbar-icon`} />
				</Button>
			</Tooltip>
		);
	}

	render() {
		const session = this.context;
		return (
			<Fragment>
				<ButtonGroup vertical className="toolbar-buttongroup" >
					{this.props.elements.map( x => this.renderButton( x ))}
					<Tooltip tooltip={`${this.state.calculator ? 'Close' : 'Open'} calculator (F2)`} placement="right" >
						<Button
							variant="light"
							onClick={this.toggleCalculator}
							onKeyPress={this.toggleCalculator}
							style={{
								display: !session.config.hideCalculator ? 'inherit' : 'none'
							}}
						>
							<span className="fa fa-lg fa-calculator toolbar-icon" />
						</Button>
					</Tooltip>
					{( session.hasOwner || isElectron ) ?
						<Button
							variant="light"
							onClick={this.toggleQueue} onKeyPress={this.toggleQueue}
							style={{
								display: !session.config.hideQueue ? 'inherit' : 'none'
							}}
						>
							<Tooltip tooltip={`${this.state.queue ? 'Close' : 'Open'} help queue`} placement="right" >
								<span className="fa fa-lg fa-question-circle toolbar-icon" />
							</Tooltip>
							<Tooltip placement="right" tooltip="# of open questions" >
								<span className="statusbar-queue-counter" >{`   ${this.state.queueSize}`}</span>
							</Tooltip>
						</Button> : null }
				</ButtonGroup>
				<Calculator show={this.state.calculator} onHide={this.toggleCalculator} />
				<Queue
					id="main_queue"
					show={this.state.queue}
					onHide={this.toggleQueue}
					onQueueSize={( queueSize ) => {
						this.setState({
							queueSize
						});
					}}
					onNewQuestion={() => {
						session.addNotification({
							title: 'Queue',
							message: 'Someone posted a question on the queue',
							level: 'success',
							position: 'tr',
							action: {
								label: 'Open queue',
								callback: () => {
									this.setState({
										queue: true
									});
								}
							}
						});
					}}
				/>
				{this.props.elements.map( x => {
					const toggleElement = () => {
						this.setState({ [x.name]: !this.state[ x.name ] });
					};
					return this.state[ x.name ] ?
					<ReactDraggable bounds="#Lesson" cancel=".card-body">
						<div className="toolbar-outer-element" >
							<div tabIndex={0} role="button">{x.component}</div>
							<button className="toolbar-hide-button fa fa-times" onClick={toggleElement} />
						</div>
					</ReactDraggable> : null;
				})}
				<KeyControls
					actions={{
						'F2': this.toggleCalculator
					}}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

Toolbar.propTypes = {
	elements: PropTypes.array
};

Toolbar.defaultProps = {
	elements: []
};

Toolbar.contextType = SessionContext;


// EXPORTS //

export default Toolbar;
