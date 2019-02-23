// MODULES //

import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
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
				<Button
					className="help-button"
					variant="light"
					onClick={this.startTour}
				>
					<div className="fa fa-question" />
				</Button>
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
