// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import FreeTextQuestion from 'components/free-text-question';
import MultipleChoiceQuestion from 'components/multiple-choice-question';
import Gate from 'components/gate';
import KeyControls from 'components/key-controls';
import MatchListQuestion from 'components/match-list-question';
import NumberQuestion from 'components/number-question';
import OrderQuestion from 'components/order-question';
import RangeQuestion from 'components/range-question';
import SelectQuestion from 'components/select-question';
import VideoPlayer from 'components/video-player';
import Panel from 'components/panel';
import './video_lecture.css';


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
			waitForAnswer: waitStatuses( props.steps ),
			showInstructorView: false
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
		debug( 'Add one step to '+this.state.active );
		this.setState({
			active: this.state.active + 1
		});
	}

	decrementStep = () => {
		debug( 'Go back one step from '+this.state.active );
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

	toggleInstructorView =() => {
		this.setState({
			showInstructorView: !this.state.showInstructorView
		});
	}

	renderStep( active ) {
		const elem = this.props.steps[ active ];
		if ( !elem ) {
			return (
				<div style={{ height: '98vh', position: 'relative' }} ref={( div ) => {
					this.videoLectureWrapper = div;
				}}>
					<Alert variant="success" style={{ top: '33%' }}>
						<h1>You have reached the end of this video lecture.</h1>
						<Button
							variant="secondary"
							size="lg"
							onClick={this.decrementStep}
							style={{ position: 'absolute', top: 3, right: 3 }}
						>Back</Button>
					</Alert>
				</div>
			);
		}
		if ( isString( elem ) ) {
			return (
				<div style={{ position: 'relative' }} ref={( div ) => {
					this.videoLectureWrapper = div;
				}}>
					<VideoPlayer
						url={elem}
						onEnded={this.incrementStep}
						controls={this.props.controls}
						width="100%" height="98vh"
						playing={this.state.active !== 0}
					/>
					{ this.state.active > 0 ? <div
						onClick={this.decrementStep}
						role="button"
						className="video-lecture-back-button"
						tabIndex={0}
						onKeyPress={this.decrementStep}
					>
						<i className="fas fa-chevron-circle-left video-lecture-arrow"></i>
					</div> : null }
					<div
						onClick={this.incrementStep}
						role="button"
						className="video-lecture-next-button"
						tabIndex={0}
						onKeyPress={this.incrementStep}
					>
						<i className="fas fa-chevron-circle-right video-lecture-arrow"></i>
					</div>
				</div>
			);
		}
		return (
			<div ref={( div ) => {
				this.videoLectureWrapper = div;
			}}>
				<elem.type
					{...elem.props}
					onSubmit={this.markCompleted}
				/>
				{ !this.state.showInstructorView ? <Panel style={{ width: '90%' }}>
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
				</Panel> : null }
			</div>
		);
	}

	render() {
		if ( this.state.showInstructorView ) {
			const elems = [];
			for ( let i = 0; i < this.props.steps.length; i++ ) {
				elems.push( this.renderStep( i ) );
			}
			return ( <Fragment>
				<h1>Instructor View</h1>
				{elems}
				<Button
					variant="secondary" block
					onClick={this.toggleInstructorView}
				>
					Close Instructor View
				</Button>
			</Fragment> );
		}
		return (
			<Fragment>
				{this.renderStep( this.state.active )}
				<KeyControls
					container={this.videoLectureWrapper}
					actions={{
						'ArrowRight': this.incrementStep,
						'ArrowLeft': this.decrementStep
					}}
				/>
				<Gate owner>
					<Button
						variant="secondary"
						onClick={this.toggleInstructorView}
						block
					>
						Open Instructor View
					</Button>
				</Gate>
			</Fragment>
		);
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
