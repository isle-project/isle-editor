// MODULES //

import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'components/overlay-trigger';
import Joyride, { EVENTS } from 'components/joyride';
import steps from './steps.json';


// MAIN //

class Tutorial extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			running: false
		};
	}

	startTour = () => {
		this.setState({
			running: !this.state.running
		});
	}

	render() {
		return (
			<Fragment>
				<OverlayTrigger
					placement="left"
					overlay={<Tooltip>{this.state.running ? 'Close Tutorial' : 'Show Tutorial' }</Tooltip>}
				>
					<Button
						className="help-button"
						variant="light"
						onClick={this.startTour}
					>
						<div className="fa fa-question" />
					</Button>
				</OverlayTrigger>
				<Joyride
					steps={steps}
					showProgress
					run={this.state.running}
					callback={( tour ) => {
						const type = tour.type;
						if ( type === EVENTS.TOUR_END ) {
							this.setState({ running: false });
						}
					}}
				/>
			</Fragment>
		);
	}
}


// EXPORTS //

export default Tutorial;
