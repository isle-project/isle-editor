// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Calculator from 'components/calculator';
import Queue from 'components/queue';
import Tooltip from 'components/tooltip';
import isElectron from 'utils/is-electron';
import SessionContext from 'session/context.js';
import './toolbar.css';


// MAIN //

class Toolbar extends Component {
	constructor( props ) {
		super( props );


		this.state = {
			calculator: false,
			queue: false,
			queueSize: 0
		};
	}

	toggleCalculator = ( event ) => {
		if ( event ) {
			event.stopPropagation();
		}
		this.setState({
			calculator: !this.state.calculator
		});
	}

	toggleQueue = ( event ) => {
		if ( event ) {
			event.stopPropagation();
		}
		this.setState({
			queue: !this.state.queue
		});
	}

	render() {
		const session = this.context;
		return (
			<Fragment>
				<ButtonGroup vertical className="toolbar-buttongroup" >
					<Tooltip tooltip={`${this.state.calculator ? 'Close' : 'Open'} calculator (F2)`} placement="right" >
						<Button
							variant="light"
							onClick={this.toggleCalculator}
							onKeyPress={this.toggleCalculator}
							style={{
								display: !session.config.hideCalculator ? 'inherit' : 'none'
							}}
						>
								<span className="fa fa-lg fa-calculator statusbar-calc-icon" />
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
								<span className="fa fa-lg fa-question-circle statusbar-calc-icon" />
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
			</Fragment>
		);
	}
}


// PROPERTIES //

Toolbar.propTypes = {};

Toolbar.contextType = SessionContext;


// EXPORTS //

export default Toolbar;
