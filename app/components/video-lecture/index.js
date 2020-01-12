// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Gate from 'components/gate';
import KeyControls from 'components/key-controls';
import VideoPlayer from 'components/video-player';
import Panel from 'components/panel';
import SessionContext from 'session/context.js';
import './video_lecture.css';


// VARIABLES //

const debug = logger( 'isle:video-lecture' );


// FUNCTIONS //

const isQuestion = ( elem ) => {
	// Use duck-typing by checking whether a `question` property exists:
	return elem && elem.props && elem.props.question;
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
* @property {boolean} instructorView - controls whether to include instructor view
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

	markCompleted = ( result ) => {
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

	renderStep( page ) {
		const elem = this.props.steps[ page ];
		const isReaction = elem.props.actionID && elem.props.show;
		if ( isReaction ) {
			return ( <div>
				{ this.state.active === page ? elem : null}
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
			</div> );
		}
		if ( isString( elem ) ) {
			if ( this.state.showInstructorView ) {
				return ( <div key={page}>
					<VideoPlayer
						id={elem}
						url={elem}
						controls={this.props.controls}
						light
					/>
					</div> );
			}
			return (
				<div>
					{ this.state.active === page ? <VideoPlayer
						id={elem}
						url={elem}
						key={page}
						onEnded={this.incrementStep}
						controls={this.props.controls}
						width="100%" height="98vh"
						playing={this.state.active !== 0}
					/> : null }
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
			<div className="video-lecture-content">
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

	renderSteps() {
		const out = [];
		for ( let i = 0; i < this.props.steps.length; i++ ) {
			const className = this.state.active !== i && !this.state.showInstructorView ? 'invisible-step' : 'visible-step';
			out.push(
				<div
					className={className}
					key={i}
				>
					{this.renderStep( i )}
				</div>
			);
		}
		return out;
	}

	render() {
		const steps = this.renderSteps();
		const session = this.context;
		return (
			<Fragment>
				<div className="video-lecture-wrapper" ref={( div ) => {
					this.videoLectureWrapper = div;
				}}>
					{ this.state.active >= this.props.steps.length ?
						<Alert variant="success" className="video-lecture-end-alert" >
							<h1>You have reached the end of this video lecture.</h1>
							<ButtonGroup block>
								<Button
									variant="secondary"
									size="lg"
									onClick={this.decrementStep}
								>Go to previous part</Button>
								<a href={session.server}><Button
									variant="secondary"
									size="lg"
								>Close and go to dashboard</Button></a>
							</ButtonGroup>
						</Alert> : null
					}
					{steps}
					{ this.props.instructorView ? <Gate owner>
						<Button
							className="video-lecture-instructor-button"
							variant="secondary"
							onClick={this.toggleInstructorView}
							block
						>
							{this.state.showInstructorView ? 'Close Instructor View' : 'Open Instructor View' }
						</Button>
					</Gate> : null }
				</div>
				<KeyControls
					container={this.videoLectureWrapper}
					actions={{
						'ArrowRight': this.incrementStep,
						'ArrowLeft': this.decrementStep
					}}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

VideoLecture.propTypes = {
	controls: PropTypes.bool,
	instructorView: PropTypes.bool,
	steps: PropTypes.array.isRequired
};

VideoLecture.defaultProps = {
	controls: true,
	instructorView: true
};

VideoLecture.contextType = SessionContext;


// EXPORTS //

export default VideoLecture;
