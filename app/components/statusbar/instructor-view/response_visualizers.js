// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Tooltip from 'components/tooltip';
import keys from '@stdlib/utils/keys';
import contains from '@stdlib/assert/contains';


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


// MAIN //

class ResponseVisualizers extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			selected: null
		};
	}

	componentDidMount() {
		const session = this.props.session;
		const visualizers = session.responseVisualizers;
		const ids = keys( visualizers );
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === 'member_action' && contains( ids, value.id ) ) {
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
		const nUsers = this.props.session.userList.length;
		const visualizers = this.props.session.responseVisualizers;
		const ids = keys( visualizers );
		const list = new Array( ids.length );
		for ( let i = 0; i < ids.length; i++ ) {
			const nInfo = visualizers[ ids[ i ] ].ref.state.nInfo;
			const nActions = visualizers[ ids[ i ] ].ref.state.nActions;
			const infoRate = ( nInfo / nUsers ) * 100.0;
			const id = ids[ i ];
			list[ i ] = (
				<ListGroupItem
					key={i}
					style={{
						background: this.state.selected === id ? '#e0a800' : 'lightgrey',
						padding: '0.4rem 1rem',
						cursor: 'pointer'
					}}
					onClick={this.highlightFactory( id )}
				>
					<Tooltip placement="right" tooltip="Question ID (click on row to show question">
						<label style={{ margin: 0 }}>{id}</label>
					</Tooltip>
					<Tooltip placement="left" tooltip="Open actions">
						<Badge variant="light" style={{ float: 'right', margin: '2px' }} onClick={this.thumbnailClickFactory( id )}>
							Open
						</Badge>
					</Tooltip>
					<Tooltip placement="left" tooltip="# of Actions">
						<Badge variant="light" style={{ float: 'right', margin: '2px' }}>{nActions}</Badge>
					</Tooltip>
					<Tooltip placement="left" tooltip="Completion rate for currently active students">
						<ProgressBar
							variant="info"
							now={infoRate}
							max={100} min={0}
							label={`${nInfo} / ${nUsers}`}
							style={{
								width: '180px',
								float: 'right',
								height: '1.25rem'
							}}
						/>
					</Tooltip>
				</ListGroupItem>
			);
		}
		return ( <div>
			<ListGroup style={{
				height: window.innerHeight / 1.5,
				overflowY: 'scroll'
			}}>
				{list}
			</ListGroup>
		</div> );
	}
}


// PROPERTIES //

ResponseVisualizers.propTypes = {
	onThumbnailClick: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default ResponseVisualizers;
