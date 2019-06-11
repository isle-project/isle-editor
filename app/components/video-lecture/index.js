// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import FreeTextQuestion from 'components/free-text-question';
import MultipleChoiceQuestion from 'components/multiple-choice-question';
import MatchListQuestion from 'components/match-list-question';
import NumberQuestion from 'components/number-question';
import OrderQuestion from 'components/order-question';
import RangeQuestion from 'components/range-question';
import SelectQuestion from 'components/select-question';
import VideoPlayer from 'components/video-player';
import Panel from 'components/panel';


// VARIABLES //

const debug = logger( 'isle:video-lecture' );


// FUNCTIONS //

const isQuestion = ( elem ) => {
	return (
		elem.type === FreeTextQuestion ||
		elem.type === MultipleChoiceQuestion ||
		elem.type === MatchListQuestion ||
		elem.type === NumberQuestion ||
		elem.type === OrderQuestion ||
		elem.type === RangeQuestion ||
		elem.type === SelectQuestion
	);
};

const waitStatuses = ( steps ) => {
	const out = new Array( steps.length );
	for ( let i = 0; i < out.length; i++ ) {
		out[ i ] = isQuestion( steps[ i ] );
	}
	return out;
};


// MAIN //

/**
* A video lecture component that displays videos interspersed with interactive elements.
*
* @property {Array} steps - array of video URLs and components to be displayed in-between
* @property {boolean} controls - indicates whether to display control elements of the video players
*/
class VideoLecture extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			active: 0,
			waitForAnswer: waitStatuses( props.steps )
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.steps.length !== prevState.waitForAnswer.length ) {
			const newState = {
				waitForAnswer: waitStatuses( nextProps.steps )
			};
			return newState;
		}
		return null;
	}

	incrementStep = () => {
		this.setState({
			active: this.state.active + 1
		});
	}

	decrementStep = () => {
		this.setState({
			active: this.state.active - 1
		});
	}

	markCompleted = () => {
		debug( 'Handle question submission...' );
		const waitForAnswer = this.state.waitForAnswer.slice();
		waitForAnswer[ this.state.active ] = false;
		this.setState({
			waitForAnswer
		});
	}

	renderStep() {
		const elem = this.props.steps[ this.state.active ];
		if ( !elem ) {
			return ( <Alert variant="success">
				<h1 className="centered" >You have reached the end of this video lecture.</h1>
			</Alert> );
		}
		if ( isString( elem ) ) {
			return ( <VideoPlayer
				url={elem}
				onEnded={this.incrementStep}
				controls={this.props.controls}
				width="100%" height="98vh"
				playing={this.state.active !== 0}
			/> );
		}
		return (
			<div>
				<elem.type
					{...elem.props}
					onSubmit={this.markCompleted}
				/>
				<Panel style={{ width: '90%' }}>
					{ this.state.active > 0 ? <Button
						variant="warning"
						size="lg"
						onClick={this.decrementStep}
						style={{ float: 'left' }}
					>Back</Button> : null }
					<Button
						variant="success"
						size="lg"
						onClick={this.incrementStep}
						style={{ float: 'right' }}
						disabled={this.state.waitForAnswer[ this.state.active ]}
					>Next</Button>
				</Panel>
			</div>
		);
	}

	render() {
		return this.renderStep();
	}
}


// PROPERTIES //

VideoLecture.propTypes = {
	controls: PropTypes.bool,
	steps: PropTypes.array.isRequired
};

VideoLecture.defaultProps = {
	controls: true
};


// EXPORTS //

export default VideoLecture;
