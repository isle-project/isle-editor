// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Select, { components } from 'react-select';
import innerText from 'react-innertext';
import stringify from 'csv-stringify';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Overlay from 'react-bootstrap/Overlay';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import round from '@stdlib/math/base/special/round';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import Tooltip from '@isle-project/components/tooltip';
import Switch from '@isle-project/components/switch';
import selectStyles from '@isle-project/components/input/select/styles.js';
import saveAs from '@isle-project/utils/file-saver';
import isHidden from '@isle-project/utils/is-hidden';
import renderTime from '@isle-project/utils/render-time';
import { SELECTED_COHORT, UPDATED_VISUALIZER } from '@isle-project/constants/events.js';
import './student_responses.css';


// VARIABLES //

const debug = logger( 'isle:statusbar:student-responses' );


// FUNCTIONS //

const isJSONArray = ( str ) => {
	return isString( str ) && str.startsWith( '[' ) && str.endsWith( ']' );
};

/**
 * Returns the intersection of two sets
 *
 * @private
 * @param {Set} a - first set
 * @param {Set} b - second set
 * @returns {Set} intersection
 */
function intersection( a, b ) {
	const c = new Set();
	for ( const x of a ) {
		if ( b.has( x ) ) {
			c.add( x );
		}
	}
	return c;
}

/**
 * Removes glow effect from previously highlighted elements.
 *
 * @private
 */
function removeGlowElements() {
	const focused = document.getElementsByClassName( 'focus-glow' );
	while ( focused.length ) {
		focused[0].classList.remove( 'focus-glow' );
	}
	const element = document.getElementById( 'duplicated-container' );
	if ( element ) {
		element.parentNode.removeChild( element );
	}
}

function formatAnswer( value, visualizer ) {
	const dataType = visualizer.ref.props.data.type;
	let out;
	if ( isUndefinedOrNull( value ) ) {
		return '';
	}
	switch ( dataType ) {
		case 'factor': {
				const levels = visualizer.ref.props.data.levels;
				if ( isJSONArray( value ) ) {
					value = JSON.parse( value );
				}
				if ( isArray( value ) ) {
					if ( isNumber( value[ 0 ] ) ) {
						// Case: Solution, value is an array of answer indices (e.g., [0, 1, 2]):
						out = value.map( x => isNumber( x ) ? levels[ x ] : x ).join( ', ' );
					} else {
						// Case: User answer, array has `true` for some values and `false` / `null` for others (e.g., [true, false, null, true]):
						out = value
							.map( ( v, i ) => {
								if ( v === true ) {
									return levels[ i ];
								}
								return '';
							})
							.filter( v => v !== '' )
							.join( ', ' );
					}
				} else {
					// Handle both the case where value is a single answer index (e.g., 0) or a string equal to a single answer (e.g., 'Yes'):
					out = levels[ value ] ? levels[ value ] : value;
				}
			}
			break;
		case 'range':
			if ( isJSONArray( value ) ) {
				value = JSON.parse( value );
			}
			out = `lower: ${value[ 0 ]}, upper: ${value[ 1 ]}`; // eslint-disable-line i18next/no-literal-string
			break;
		case 'number':
			out = String( value );
			break;
		case 'image':
			break;
		case 'matrix':
		case 'tensor':
		case 'matches':
			out = JSON.stringify( value, null, 2 );
			break;
		default:
			out = String( value );
	}
	return out;
}

/**
 * Formats a time stamp (milliseconds) into a human-readable format.
 *
 * @private
 * @param {number} time - time stamp (milliseconds)
 * @returns {string} human-readable time stamp
 */
function formatTime( time ) {
	const out = new Date( time );
	return `${out.toLocaleDateString()} ${out.toLocaleTimeString()}`;
}

function generateGrade( action, viz ) {
	const solution = viz.ref.props.data.solution;
	const dataType = viz.ref.props.data.type;
	const maxPoints = viz.ref.props.points;
	if ( !maxPoints ) {
		return null;
	}
	if ( !action ) {
		return 0;
	}
	if ( isUndefinedOrNull( solution ) ) {
		return maxPoints;
	}
	let value = action.value;
	switch ( dataType ) {
		case 'factor':
			if ( isArray( solution ) ) {
				// Case: "Choose all that apply"
				if ( isJSONArray( value ) ) {
					value = JSON.parse( value );
				}
				/*
					-   Partition answers into set of correct and incorrect answers.
					-   Calculate the size of the intersection of the user's answers with the correct ones
					-   Subtract the size of the intersection with the incorrect answer choices
					-   Add the number of elements in the incorrect answer set
					-   The resulting score is between 0 and the number of answer choices
					-   The awarded points are obtained by dividing the score by the number of answer choices times the maximum number of points awarded for the question (default: 10)
				*/
				const correct = new Set( solution );
				const incorrect = new Set();
				const levels = viz.ref.props.data.levels;
				for ( let i = 0; i < levels.length; i++ ) {
					if ( !correct.has( i ) ) {
						incorrect.add( i );
					}
				}
				const userAnswers = new Set();
				for ( let i = 0; i < value.length; i++ ) {
					if ( value[ i ] === true ) {
						userAnswers.add( i );
					}
				}
				const correctAnswers = intersection( userAnswers, correct );
				const incorrectAnswers = intersection( userAnswers, incorrect );
				const score = correctAnswers.size - incorrectAnswers.size + incorrect.size;

				// Scale score to max points:
				const points = round( score / ( correct.size + incorrect.size ) * maxPoints );
				return points;
			}
			// Case: "Choose one"
			return ( value === solution ) ? maxPoints : 0;
		case 'range':
			if ( isJSONArray( value ) ) {
				value = JSON.parse( value );
			}
			if ( value[ 0 ] === solution[ 0 ] && value[ 1 ] === solution[ 1 ] ) {
				return maxPoints;
			}
			if ( value[ 0 ] === solution[ 0 ] || value[ 1 ] === solution[ 1 ] ) {
				return round( maxPoints / 2 );
			}
			return 0;
		case 'number':
			return value === solution ? maxPoints : 0;
		case 'image':
		case 'matrix':
		case 'tensor':
		case 'matches':
		default:
			return maxPoints;
	}
}


// MAIN //

class StudentResponses extends Component {
	constructor( props ) {
		super( props );

		debug( 'Initializing state in constructor...' );
		this.state = {
			selected: null,
			leftUser: null,
			rightUser: null,
			anonymized: false,
			grades: {},
			showFeedbackEditor: false,
			feedbackID: null,
			feedbackText: ''
		};
	}

	componentDidMount() {
		const session = this.props.session;
		session.getLessonGrades();
		session.getLessonGradeMessages();
		this.users = this.assembleUserList();
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if (
				type === UPDATED_VISUALIZER ||
				type === SELECTED_COHORT
			) {
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		removeGlowElements();
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	highlightFactory = ( id ) => {
		return () => {
			removeGlowElements();
			if ( this.state.selected === id ) {
				return this.setState({
					selected: null
				});
			}
			const elem = document.getElementById( id );
			if ( elem ) {
				debug( 'Found element, should add glow effect...' );
				if ( isHidden( elem ) ) {
					const clone = elem.cloneNode( true );
					clone.addEventListener( 'click', ( event ) => {
						debug( `Clicked on element with ID ${event.target.id}` );

						// Returns original element with the given ID since it was first inserted into the DOM:
						const button = document.getElementById( event.target.id );
						button.click();
					});
					const newDiv = document.createElement( 'div' );
					newDiv.id = 'duplicated-container';
					clone.id = 'duplicated-elem';
					clone.classList.add( 'focus-glow' );
					newDiv.append( clone );
					document.body.appendChild( newDiv );
				} else {
					elem.classList.add( 'focus-glow' );
					elem.scrollIntoView();
				}
			}
			this.setState({
				selected: id
			});
		};
	};

	handleRadioChange = async () => {
		const session = this.props.session;
		if ( !this.userHash ) {
			this.userHash = await session.getFakeUsers();
		}
		this.setState({
			anonymized: !this.state.anonymized
		});
	};

	prepareQuestionsForExport = () => {
		let out = [];
		const session = this.props.session;
		const ids = session.responseVisualizerIds;
		const visualizers = session.responseVisualizers;
		for ( let i = 0; i < ids.length; i++ ) {
			const viz = visualizers[ ids[ i ] ];
			const question = viz.ref.props.data.question;
			const solution = viz.ref.props.data.solution;
			let actions = viz.ref.state.actions;
			const arr = [];
			for ( let j = 0; j < actions.length; j++ ) {
				const x = actions[ j ];
				arr.push({
					id: x.id,
					type: x.type,
					value: x.value,
					absoluteTime: formatTime( x.absoluteTime ),
					time: x.time,
					email: this.state.anonymized ? this.userHash.email[ x.email ] : x.email,
					name: this.state.anonymized ? this.userHash.name[ x.name ] : x.name,
					question: React.isValidElement( question ) ? innerText( question ) : String( question ),
					solution: React.isValidElement( solution ) ? innerText( solution ) : solution,
					maximumPoints: viz.ref.props.points,
					awardedPoints: session.lessonGrades[ x.email ] ? session.lessonGrades[ x.email ][ x.id ] : null
				});
			}
			out = out.concat( arr );
		}
		return out;
	};

	saveJSON = () => {
		const session = this.props.session;
		const questions = this.prepareQuestionsForExport();
		const blob = new Blob([ JSON.stringify( questions ) ], {
			type: 'application/json'
		});
		const name = `questions_${session.namespaceName}_${session.lessonName}.json`; // eslint-disable-line i18next/no-literal-string
		saveAs( blob, name );
	};

	saveCSV = () => {
		const session = this.props.session;
		const questions = this.prepareQuestionsForExport();
		stringify( questions, {
			header: true
		}, ( err, output ) => {
			if ( err ) {
				return session.addNotification({
					title: this.props.t( 'error-encountered' ),
					message: this.props.t( 'error-csv' )+err.message,
					level: 'error',
					position: 'tl'
				});
			}
			const blob = new Blob([ output ], {
				type: 'text/csv;charset=utf-8;'
			});
			const name = `questions_${session.namespaceName}_${session.lessonName}.csv`; // eslint-disable-line i18next/no-literal-string
			saveAs( blob, name );
		});
	};

	assembleUserList = () => {
		const session = this.props.session;
		const users = [];
		if ( this.state.anonymized ) {
			const h = this.userHash;
			const name = x => h.name[ x.name ] || x.name;
			const email = x => h.email[ x.email ] || x.email;
			if ( session.cohorts ) {
				if ( !session.selectedCohort ) {
					for ( let i = 0; i < session.cohorts.length; i++ ) {
						const cohort = session.cohorts[ i ];
						for ( let j = 0; j < cohort.members.length; j++ ) {
							const member = cohort.members[ j ];
							users.push({
								value: cohort.members[ j ],
								label: `${name( member )} (${email( member )})`
							});
						}
					}
				} else {
					const cohort = session.selectedCohort;
					for ( let j = 0; j < cohort.members.length; j++ ) {
						const member = cohort.members[ j ];
						users.push({
							value: cohort.members[ j ],
							label: `${name( member )} (${email( member )})`
						});
					}
				}
			}
			return users;
		}
		if ( session.cohorts ) {
			if ( !session.selectedCohort ) {
				for ( let i = 0; i < session.cohorts.length; i++ ) {
					const cohort = session.cohorts[ i ];
					for ( let j = 0; j < cohort.members.length; j++ ) {
						const member = cohort.members[ j ];
						users.push({
							value: cohort.members[ j ],
							label: `${member.name} (${member.email})`
						});
					}
				}
			} else {
				const cohort = session.selectedCohort;
				for ( let j = 0; j < cohort.members.length; j++ ) {
					const member = cohort.members[ j ];
					users.push({
						value: cohort.members[ j ],
						label: `${member.name} (${member.email})`
					});
				}
			}
		}
		return users;
	};

	assembleGrades = ( option ) => {
		const session = this.props.session;
		const grades = session.lessonGrades[ option.value.email ] || {};
		const visualizers = session.responseVisualizers;
		const ids = session.responseVisualizerIds;
		for ( let i = 0; i < ids.length; i++ ) {
			const id = ids[ i ];
			const viz = visualizers[ id ];
			const actions = viz.ref.state.actions;
			const actionsLeft = actions.filter( x => x.email === option.value.email );
			let numPoints;
			if ( grades && isNumber( grades[ id ] ) ) {
				numPoints = grades[ id ];
				grades[ id ] = numPoints;
			} else {
				numPoints = generateGrade( actionsLeft[ 0 ], viz );
				if ( isNumber( numPoints ) ) {
					grades[ id ] = numPoints;
				}
			}
		}
		return grades;
	};

	handleFeedbackFactory = ( id ) => {
		return () => {
			let showFeedbackEditor;
			if ( id === this.state.feedbackID ) {
				showFeedbackEditor = !this.state.showFeedbackEditor;
			} else {
				showFeedbackEditor = true;
			}
			this.setState({
				showFeedbackEditor,
				feedbackID: id,
				feedbackText: ''
			});
		};
	};

	handleFeedbackSubmission = () => {
		const session = this.props.session;
		session.appendGradeMessage( this.state.leftUser.email, this.state.feedbackID, this.state.feedbackText );
		this.setState({
			feedbackText: ''
		});
	};

	renderFeedbackMessages = () => {
		const session = this.props.session;
		const lessonGradeMessages = session.lessonGradeMessages;
		if (
			lessonGradeMessages[ this.state.leftUser.email ] &&
			lessonGradeMessages[ this.state.leftUser.email ][ this.state.feedbackID ]
		) {
			const messages = lessonGradeMessages[ this.state.leftUser.email ][ this.state.feedbackID ];
			return (
				<div className="student-responses-feedback-messages" >
					{messages.map( ( msg, idx ) => {
						return (
							<div className="feedback-message" key={idx} >
								<img
									className="feedback-picture unselectable"
									src={session.server + '/thumbnail/' + msg.picture}
									alt={this.props.t( 'profile-pic' )}
								/>
								<div className="feedback-message-right" >
									<span className="feedback-user">
										{msg.user}
									</span>
									{' - '}
									<span className="feedback-time">{renderTime( msg.time )}</span>
									<br />
									<span className="feedback-message-content" >
										{msg.content}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			);
		}
		return <p>{this.props.t('no-feedback-yet')}</p>;
	};

	renderOverlay() {
		if ( !this.state.showFeedbackEditor || !this.state.leftUser ) {
			return null;
		}
		return (
			<Overlay target={this.firstCol} show={this.state.showFeedbackEditor} placement="left" >
				{({ placement, arrowProps, show: _show, popper, ...props }) => (
				<div
					{...props}
					style={{
						backgroundColor: 'rgb(232, 232, 232)',
						padding: '2px 10px',
						color: 'darkslategrey',
						borderRadius: 6,
						border: '1px solid darkslategrey',
						width: '32%',
						marginTop: '80px',
						boxShadow: '0px 0px 4px darkslategrey',
						zIndex: 1006,
						...props.style
					}}
				>
					<div style={{ marginTop: 6, marginBottom: 6 }}>
						{this.state.feedbackID}
						<Button variant="secondary" size="sm" onClick={() => {
							this.setState({
								showFeedbackEditor: false,
								feedbackID: null,
								feedbackText: ''
							});
						}} style={{ float: 'right', marginBottom: 4 }} >
							<i className="fas fa-times"></i>
						</Button>
					</div>
					<hr />
					{this.renderFeedbackMessages()}
					<hr />
					<FormControl
						key={`${this.state.feedbackID}-textarea`}
						as="textarea"
						rows={5}
						placeholder={this.props.t('enter-feedback', { name: this.state.leftUser.name })}
						style={{
							marginBottom: 6,
							resize: 'none',
							height: '20vh'
						}}
						value={this.state.feedbackText}
						onChange={( event ) => {
							this.setState({
								feedbackText: event.target.value
							});
						}}
					/>
					<Button
						variant="primary" size="sm"
						style={{ marginBottom: 6 }}
						onClick={this.handleFeedbackSubmission}
						disabled={this.state.feedbackText.length === 0}
					>
						{this.props.t('submit')}
					</Button>
				</div>
				)}
			</Overlay>
		);
	}

	render() {
		debug( 'Render student responses...' );
		if ( this.props.activeTab !== 'student_responses' ) {
			return null;
		}
		const session = this.props.session;
		const lessonGradeMessages = session.lessonGradeMessages;
		const visualizers = session.responseVisualizers;
		const ids = session.responseVisualizerIds;
		if ( !this.users ) {
			this.users = this.assembleUserList();
		}
		const users = this.users;
		const list = new Array( ids.length );
		const { leftUser, rightUser } = this.state;
		let invalidGrades = false;
		for ( let i = 0; i < ids.length; i++ ) {
			const viz = visualizers[ ids[ i ] ];
			const question = viz.ref.props.data.question;
			const actions = viz.ref.state.actions;
			const solution = viz.ref.props.data.solution;
			let actionsLeft;
			let actionsRight;
			if ( leftUser ) {
				actionsLeft = actions.filter( x => x.email === leftUser.email );
			} else {
				actionsLeft = [];
			}
			if ( rightUser ) {
				actionsRight = actions.filter( x => x.email === rightUser.email );
			} else {
				actionsRight = [];
			}
			const id = ids[ i ];
			if ( this.state.grades && isNaN( this.state.grades[ id ] ) ) {
				invalidGrades = true;
			}
			list[ i ] = (
				<Row
					key={i}
					className="student-responses-row"
				>
					<Tooltip tooltip={question} placement="left" >
						<Col onClick={this.highlightFactory( id )} style={{
							cursor: 'pointer',
							background: this.state.selected === id ? 'gold' : 'lightgrey'
						}} >
							<div style={{ width: '80%' }}>{id}</div>
							{ leftUser ? <button className="student-responses-note-button" onClick={this.handleFeedbackFactory( id )} >
								<i className="student-responses-note-icon far fa-sticky-note"></i>
								<Badge className="student-responses-note-badge" pill bg="secondary" >
									{lessonGradeMessages[ leftUser.email ] ? ( lessonGradeMessages[ leftUser.email ][ id ] || [] ).length : 0}
								</Badge>
							</button> : null }
						</Col>
					</Tooltip>
					<Col className="student-responses-first-col" >
						<Switch active={actionsLeft.length > 1} style={{
							width: '100%', paddingTop: 14
						}} tooltip={this.props.t('cycle-through-answers')} >
							{actionsLeft.map( ( x, idx ) => ( <span key={idx} >
								<span className="student-responses-time" >{formatTime( x.absoluteTime )}</span>
								{formatAnswer( x.value, viz )}
							</span> ) )}
						</Switch>
					</Col>
					<Col style={{ background: rightUser ? 'rgba(173, 216, 230, 0.4)' : '#fff2e5' }} >
						{ rightUser ?
							<Switch active={actionsRight.length > 1} style={{
								width: '100%', paddingTop: 14
							}} tooltip={this.props.t('cycle-through-answers')} >
								{actionsRight.map( ( x, idx ) => ( <span key={idx} >
									<span className="student-responses-time" >{formatTime( x.absoluteTime )}</span>
									{formatAnswer( x.value, viz )}
								</span> ) )}
							</Switch> :
							<span>{formatAnswer( solution, viz )}</span>
						}
					</Col>
					<Col className="student-responses-first-col" >
						{ leftUser && !rightUser && viz.ref.props.points ?
							<Fragment>
								<FormControl
									key={`${leftUser.email}-points`}
									className="student-responses-points-input"
									type="text"
									defaultValue={this.state.grades[ id ]}
									onChange={( event ) => {
										const newGrades = { ...this.state.grades };
										newGrades[ id ] = Number( event.target.value );
										this.setState({
											grades: newGrades
										});
									}}
								/>
								{this.props.t('out-of')}
								<FormControl
									key={`${leftUser.email}-max-points`}
									className="student-responses-points-input"
									type="text"
									disabled
									defaultValue={viz.ref.props.points}
								/>
							</Fragment> : null
						}
						{ leftUser && rightUser && viz.ref.props.points ?
							<Fragment>
								{this.props.t('left')}:
								<FormControl
									key={`${leftUser.email}-points`}
									className="student-responses-points-input"
									type="text"
									defaultValue={this.state.grades[ id ]}
									onChange={( event ) => {
										const newGrades = { ...this.state.grades };
										newGrades[ id ] = Number( event.target.value );
										this.setState({
											grades: newGrades
										});
									}}
								/>
								{this.props.t('right')}:
								<FormControl
									key={`${rightUser.email}-points`}
									className="student-responses-points-input"
									type="text"
									disabled
									defaultValue={session.lessonGrades[ rightUser.email ] ? session.lessonGrades[ this.state.rightUser.email ][ id ] : ''}
								/>
							</Fragment> : null
						}
					</Col>
				</Row>
			);
		}
		const SelectOption = props => {
			const user = props.data.value;
			let email;
			let name;
			let src;
			if ( this.state.anonymized ) {
				src = session.server + '/thumbnail/anonymous.jpg';
				email = this.userHash.email[ user.email ] || user.email;
				name = this.userHash.name[ user.name ] || user.name;
			} else {
				src = session.server + '/thumbnail/' + user.picture;
				email = user.email;
				name = user.name;
			}
			return (
				<components.Option {...props} >
					<img alt={this.props.t('profile-pic')} src={src} width="32px" height="32px" />
					<Tooltip tooltip={email} placement="top" >
						<span style={{ paddingLeft: 6 }} >{name}</span>
					</Tooltip>
					{session.lessonGrades && session.lessonGrades[ email ] ? <Badge bg="secondary" style={{ float: 'right' }}>
						{session.lessonGrades[ email ]._sumPoints} / {session.metadata.grades.maxPoints}
					</Badge> : null}
				</components.Option>
			);
		};
		const SingleValue = ( props ) => {
			const user = props.data.value;
			let email;
			let name;
			let src;
			if ( this.state.anonymized ) {
				src = session.server + '/thumbnail/anonymous.jpg';
				email = this.userHash.email[ user.email ] || user.email;
				name = this.userHash.name[ user.name ] || user.name;
			} else {
				src = session.server + '/thumbnail/' + user.picture;
				email = user.email;
				name = user.name;
			}
			return (
				<components.SingleValue {...props}>
					<img alt={this.props.t('profile-pic')} src={src} width="32px" height="32px" />
					<Tooltip tooltip={email} placement="top" >
						<span style={{ paddingLeft: 6 }} >{name}</span>
					</Tooltip>
					{session.lessonGrades && session.lessonGrades[ email ] ? <Badge bg="secondary" style={{ marginLeft: 6 }} >
						{session.lessonGrades[ email ]._sumPoints} / {session.metadata.grades.maxPoints}
					</Badge> : null}
				</components.SingleValue>
			);
		};
		return ( <div style={{ marginLeft: '6px' }}>
			<Row style={{ paddingTop: '3px', paddingBottom: '3px', paddingRight: '16px' }}>
				<Col ref={col => {
					this.firstCol = col;
				}} >
				</Col>
				<Col>
					<Select
						components={{ Option: SelectOption, SingleValue }}
						placeholder={this.props.t('select-enrolled-student')}
						options={users} styles={selectStyles}
						onChange={( option ) => {
							this.setState({
								leftUser: option ? option.value : null,
								grades: option ? this.assembleGrades( option ) : null,
								feedbackText: '',
								feedbackID: null,
								showFeedbackEditor: false
							});
						}}
						isClearable
					/>
				</Col>
				<Col>
					<Select
						components={{ Option: SelectOption, SingleValue }}
						placeholder={this.props.t('solutions-or-student')}
						options={users} styles={selectStyles}
						isDisabled={!this.state.leftUser}
						onChange={( option ) => {
							this.setState({
								rightUser: option ? option.value : null
							});
						}}
						isClearable
					/>
				</Col>
				<Col>
					{ this.state.leftUser ?
						<Fragment>
							<Badge bg="secondary" style={{ verticalAlign: 'sub' }}>
								{this.props.t('maximum-points')}: {session.metadata.grades.maxPoints}
							</Badge>
							<Button
								variant="warning" style={{ float: 'right', fontVariant: 'small-caps', margin: 3 }}
								onClick={() => {
									session.adjustGrades( this.state.leftUser.email, this.state.grades );
								}}
								disabled={invalidGrades}
							>
								{this.props.t('save-grades')}
							</Button>
						</Fragment>: null }
				</Col>
			</Row>
			<Container className="student-responses-list-container" >
				{list}
			</Container>
			<ToggleButtonGroup
				name="options"
				onChange={this.handleRadioChange}
				type="radio"
				size="small"
				value={this.state.anonymized}
				style={{ marginRight: '5px' }}
			>
				<ToggleButton
					id="toggle-responses-original"
					size="sm"
					variant="light"
					value={false}
					style={{
						fontSize: '12px',
						color: this.state.anonymized ? '#A9A9A9' : 'black'
					}}
				>{this.props.t( 'original' )}</ToggleButton>
				<ToggleButton
					id="toggle-responses-anonymized"
					size="sm"
					variant="light"
					value={true}
					style={{
						fontSize: '12px',
						color: this.state.anonymized ? 'black' : '#A9A9A9'
					}}
				>{this.props.t( 'anonymized' )}</ToggleButton>
			</ToggleButtonGroup>
			<ButtonGroup size="sm">
				<Button variant="primary" onClick={this.saveJSON} >{this.props.t( 'save-json' )}</Button>
				<Button variant="primary" onClick={this.saveCSV} >{this.props.t( 'save-csv' )}</Button>
			</ButtonGroup>
			{this.renderOverlay()}
		</div> );
	}
}


// PROPERTIES //

StudentResponses.propTypes = {
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default StudentResponses;
