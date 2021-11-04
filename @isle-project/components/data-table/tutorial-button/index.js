// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from '@isle-project/components/overlay-trigger';
import Joyride, { EVENTS } from '@isle-project/components/joyride';
import copy from '@stdlib/utils/copy';
import STEPS from './steps.json';


// MAIN //

class Tutorial extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			running: false
		};
		this.stepsWithId = copy( STEPS, 2 ).map( x => {
			x.target = `#${props.id} ` + x.target;
			return x;
		});
	}

	startTour = () => {
		this.setState({
			running: !this.state.running
		});
	};

	render() {
		return (
			<Fragment>
				<OverlayTrigger
					placement="bottom"
					overlay={<Tooltip>
						{this.props.t( this.state.running ? 'close-tutorial' : 'show-tutorial' )}
					</Tooltip>}
				>
					<Button
						aria-label={this.props.t('show-tutorial')}
						className="help-button"
						variant="light"
						onClick={this.startTour}
					>
						<div className="fa fa-question" />
					</Button>
				</OverlayTrigger>
				<Joyride
					steps={this.stepsWithId}
					disableScrolling
					showProgress
					run={this.state.running}
					callback={( tour ) => {
						const type = tour.type;
						if ( type === EVENTS.TOUR_END ) {
							this.setState({ running: false });
							this.props.onTutorialCompletion();
						}
					}}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

Tutorial.propTypes = {
	onTutorialCompletion: PropTypes.func.isRequired
};


// EXPORTS //

export default Tutorial;
