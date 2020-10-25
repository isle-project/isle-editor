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
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import Tooltip from 'components/tooltip';
import Switch from 'components/switch';
import selectStyles from 'components/input/select/styles.js';
import saveAs from 'utils/file-saver';
import isHidden from 'utils/is-hidden';
import { SELECTED_COHORT, UPDATED_VISUALIZER } from 'constants/events.js';
import './student_responses.css';


// VARIABLES //

const debug = logger( 'isle:statusbar:student-responses' );


// FUNCTIONS //

function removeGlowElements() {
	// Remove glow effect from previously highlighted elements:
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
				let levels = visualizer.ref.props.data.levels;
				if ( isArray( value ) ) {
					out = value.map( x => isNumber( x ) ? levels[ x ] : x ).join( ', ' );
				} else {
					out = levels[ value ];
				}
			}
			break;
		case 'range':
			out = `lower: ${value[ 0 ]}, upper: ${value[ 1 ]}`;
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

function formatTime( time ) {
	const out = new Date( time );
	return `${out.toLocaleDateString()} ${out.toLocaleTimeString()}`;
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
			grades: {}
		};
	}

	componentDidMount() {
		const session = this.props.session;
		session.getLessonGrades();
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
		this.unsubscribe();
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
	}

	handleRadioChange = async () => {
		const session = this.props.session;
		if ( !this.userHash ) {
			this.userHash = await session.getFakeUsers();
		}
		this.setState({
			anonymized: !this.state.anonymized
		});
	}

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
	}

	saveJSON = () => {
		const session = this.props.session;
		const questions = this.prepareQuestionsForExport();
		const blob = new Blob([ JSON.stringify( questions ) ], {
			type: 'application/json'
		});
		const name = `questions_${session.namespaceName}_${session.lessonName}.json`;
		saveAs( blob, name );
	}

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
				type: 'text/plain'
			});
			const name = `questions_${session.namespaceName}_${session.lessonName}.csv`;
			saveAs( blob, name );
		});
	}

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
	}

	assembleGrades = ( option ) => {
		const session = this.props.session;
		const grades = session.lessonGrades[ option.value.email ] || {};
		const visualizers = session.responseVisualizers;
		const ids = session.responseVisualizerIds;
		for ( let i = 0; i < ids.length; i++ ) {
			const id = ids[ i ];
			const viz = visualizers[ id ];
			const actions = viz.ref.state.actions;
			const solution = viz.ref.props.data.solution;
			const actionsLeft = actions.filter( x => x.email === option.value.email );
			let numPoints;
			if ( grades && isNumber( grades[ id ] ) ) {
				numPoints = grades[ id ];
			} else {
				numPoints = actionsLeft[ 0 ] && actionsLeft[ 0 ].value === solution ? viz.ref.props.points : 0;
			}
			grades[ id ] = numPoints;
		}
		return grades;
	}

	render() {
		debug( 'Render student responses...' );
		const session = this.props.session;
		const visualizers = session.responseVisualizers;
		const ids = session.responseVisualizerIds;
		const users = this.assembleUserList();
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
							{id}
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
									defaultValue={session.lessonGrades[ rightUser.email ] ? session.lessonGrades[ this.state.rightUser.email ][ id ] : NaN}
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
					{session.lessonGrades && session.lessonGrades[ email ] ? <Badge variant="secondary" style={{ float: 'right' }}>
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
					{session.lessonGrades && session.lessonGrades[ email ] ? <Badge variant="secondary" style={{ marginLeft: 6 }} >
						{session.lessonGrades[ email ]._sumPoints} / {session.metadata.grades.maxPoints}
					</Badge> : null}
				</components.SingleValue>
			);
		};
		return ( <div style={{ marginLeft: '6px' }}>
			<Row style={{ paddingTop: '3px', paddingBottom: '3px', paddingRight: '16px' }}>
				<Col>
				</Col>
				<Col>
					<Select
						components={{ Option: SelectOption, SingleValue }}
						placeholder={this.props.t('select-enrolled-student')}
						options={users} styles={selectStyles}
						onChange={( option ) => {
							this.setState({
								leftUser: option ? option.value : null,
								grades: option ? this.assembleGrades( option ) : null
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
							<Badge variant="secondary" style={{ verticalAlign: 'sub' }}>
								{this.props.t('maximum-points')}: {session.metadata.grades.maxPoints}
							</Badge>
							<Button
								variant="warning" style={{ float: 'right', fontVariant: 'small-caps' }}
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
			<Container style={{
				height: window.innerHeight / 1.5,
				overflowY: 'scroll'
			}} >
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
					size="sm"
					variant="light"
					value={false}
					style={{
						fontSize: '12px',
						color: this.state.anonymized ? '#A9A9A9' : 'black'
					}}
				>{this.props.t( 'original' )}</ToggleButton>
				<ToggleButton
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
		</div> );
	}
}


// PROPERTIES //

StudentResponses.propTypes = {
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default StudentResponses;
