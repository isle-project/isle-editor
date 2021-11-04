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
			x.target = `#${props.for} ` + x.target;
			return x;
		});
	}

	toggleTour = () => {
		this.setState({
			running: !this.state.running
		}, () => {
			if ( this.state.running ) {
				this.props.onTutorialStart();
			} else {
				this.props.onTutorialCompletion();
			}
		});
	};

	render() {
		const tooltip = this.props.t( this.state.running ? 'close-tutorial' : 'show-tutorial' );
		return (
			<Fragment>
				<OverlayTrigger
					placement="left"
					overlay={<Tooltip>
						{tooltip}
					</Tooltip>}
				>
					<Button
						aria-label={tooltip}
						variant="secondary" size="sm"
						onClick={this.toggleTour}
						style={{
							marginRight: 110,
							float: 'right'
						}}
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
					styles={{
						options: {
							zIndex: 1010
						}
					}}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

Tutorial.propTypes = {
	for: PropTypes.string.isRequired,
	onTutorialCompletion: PropTypes.func.isRequired,
	onTutorialStart: PropTypes.func.isRequired
};


// EXPORTS //

export default Tutorial;
