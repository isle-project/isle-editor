// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Select, { components } from 'react-select';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import isArray from '@stdlib/assert/is-array';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import Tooltip from 'components/tooltip';
import Switch from 'components/switch';
import selectStyles from 'components/input/select/styles.js';
import { SELECTED_COHORT, UPDATED_VISUALIZER } from 'constants/events.js';


// VARIABLES //

const debug = logger( 'isle:statusbar:instructor-view' );


// FUNCTIONS //

function isHidden( el ) {
	return el.offsetParent === null;
}

function removeGlowElems() {
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
	if ( dataType === 'factor' ) {
		let levels = visualizer.ref.props.data.levels;
		if ( isArray( value ) ) {
			out = value.map( x => levels[ x ] ).join( ', ' );
		} else {
			out = levels[ value ];
		}
	} else {
		out = value;
	}
	return out;
}


// MAIN //

class StudentResponses extends Component {
	constructor( props ) {
		super( props );

		debug( 'Initializing state in constructor...' );
		this.state = {
			selected: null,
			leftUser: null,
			rightUser: null
		};
	}

	componentDidMount() {
		const session = this.props.session;
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
		removeGlowElems();
		this.unsubscribe();
	}

	thumbnailClickFactory = ( id ) => {
		return ( event ) => {
			event.stopPropagation();
			this.props.onThumbnailClick( id );
		};
	}

	highlightFactory = ( id ) => {
		return () => {
			removeGlowElems();
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

	render() {
		console.log( 'Render student responses...' );
		const session = this.props.session;
		const visualizers = session.responseVisualizers;
		const ids = session.responseVisualizerIds;
		const users = [];
		if ( session.cohorts ) {
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
		}
		const list = new Array( ids.length );
		for ( let i = 0; i < ids.length; i++ ) {
			const viz = visualizers[ ids[ i ] ];
			const question = viz.ref.props.data.question;
			const actions = viz.ref.state.actions;
			const solution = viz.ref.props.data.solution;
			let actionsLeft;
			let actionsRight;
			if ( this.state.leftUser ) {
				actionsLeft = actions.filter( x => x.email === this.state.leftUser.email );
			} else {
				actionsLeft = [];
			}
			if ( this.state.rightUser ) {
				actionsRight = actions.filter( x => x.email === this.state.rightUser.email );
			} else {
				actionsRight = [];
			}
			const id = ids[ i ];
			list[ i ] = (
				<Row
					key={i}
					style={{
						padding: '0.1rem'
					}}
				>
					<Tooltip tooltip={question} placement="left" >
						<Col onClick={this.highlightFactory( id )} style={{
							cursor: 'pointer',
							background: this.state.selected === id ? 'gold' : 'lightgrey'
						}} >
							{id}
						</Col>
					</Tooltip>
					<Col style={{ background: 'lightblue' }}>
						<Switch active={actionsLeft.length > 1} style={{ width: '100%' }} >
							{actionsLeft.map( ( x, idx ) => <span key={idx} >{formatAnswer( x.value, viz )}</span> )}
						</Switch>
					</Col>
					<Col style={{ background: this.state.rightUser ? 'lightblue' : '#fff2e5' }} >
						{ this.state.rightUser ?
							<Switch active={actionsRight.length > 1} style={{ width: '100%' }} >
								{actionsRight.map( ( x, idx ) => <span key={idx} >{formatAnswer( x.value, viz )}</span> )}
							</Switch> :
							<span>{formatAnswer( solution, viz )}</span>
						}
					</Col>
				</Row>
			);
		}
		const SelectOption = props => {
			const user = props.data.value;
			const src = session.server + '/thumbnail/' + user.picture;
			return (
				<components.Option {...props} >
					<img alt="User Avatar" src={src} width="32px" height="32px" />
					<Tooltip tooltip={user.email} placement="top" >
						<span style={{ paddingLeft: 6 }} >{user.name}</span>
					</Tooltip>
				</components.Option>
			);
		};
		const SingleValue = ( props ) => {
			const user = props.data.value;
			const src = session.server + '/thumbnail/' + user.picture;
			return (
				<components.SingleValue {...props}>
					<img alt="User Avatar" src={src} width="32px" height="32px" />
					<Tooltip tooltip={user.email} placement="top" >
						<span style={{ paddingLeft: 6 }} >{user.name}</span>
					</Tooltip>
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
						options={users} styles={selectStyles}
						onChange={({ value }) => {
							this.setState({
								leftUser: value
							});
						}}
					/>
				</Col>
				<Col>
					<Select
						components={{ Option: SelectOption, SingleValue }}
						placeholder="Solutions or user..."
						options={users} styles={selectStyles}
						onChange={( option ) => {
							this.setState({
								rightUser: option ? option.value : null
							});
						}}
						isClearable
					/>
				</Col>
			</Row>
			<Container style={{
				height: window.innerHeight / 1.5,
				overflowY: 'scroll'
			}} >
				{list}
			</Container>
		</div> );
	}
}


// PROPERTIES //

StudentResponses.propTypes = {
	onThumbnailClick: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default StudentResponses;
