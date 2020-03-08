// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Panel from 'components/panel';
import Draggable from 'components/draggable';
import { BROADCAST_ANSWER, BROADCAST_CANDIDATE, BROADCAST_ENDED, BROADCAST_OFFER, MEMBER_ACTION } from 'constants/events.js';


// VARIABLES //

const BROADCAST_CONFIG = {
	iceServers: [
		{
			urls: [ 'stun:stun.l.google.com:19302' ]
		}
	]
};


// MAIN //

class BroadcastWatcher extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			peerConnection: null,
			isWatching: false,
			broadcaster: null
		};
	}

	componentDidMount() {
		const session = this.props.session;
		this.unsubscribe = session.subscribe( ( type, data ) => {
			if ( type === MEMBER_ACTION ) {
				if ( data.type === BROADCAST_CANDIDATE ) {
					this.addIceCandidate( data.value );
				}
				else if ( data.type === BROADCAST_OFFER ) {
					this.acceptBroadcastOffer( data.email, data.value, data.name );
				}
				else if ( data.type === BROADCAST_ENDED ) {
					this.setState({
						peerConnection: null,
						broadcaster: null,
						isWatching: false
					});
				}
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	handleError = ( msg ) => {
		const session = this.props.session;
		session.addNotification({
			title: 'Encountered Error',
			message: msg,
			level: 'error',
			position: 'tc'
		});
	}

	addIceCandidate( candidate ) {
		this.state.peerConnection
			.addIceCandidate( new RTCIceCandidate( candidate ) )
			.catch( this.handleError );
	}

	acceptBroadcastOffer( email, description, broadcaster ) {
		const session = this.props.session;
		const peerConnection = new RTCPeerConnection( BROADCAST_CONFIG );

		this.setState({
			peerConnection,
			broadcaster
		}, () => {
			peerConnection
				.setRemoteDescription( description )
				.then( () => peerConnection.createAnswer() )
				.then( sdp => peerConnection.setLocalDescription( sdp ) )
				.then( () => {
					session.log({
						id: BROADCAST_ANSWER,
						type: BROADCAST_ANSWER,
						value: peerConnection.localDescription,
						noSave: true
					}, email );
				})
				.catch( this.handleError );
			peerConnection.ontrack = event => {
				this.videoElement.srcObject = event.streams[ 0 ];
			};
			peerConnection.onicecandidate = event => {
				if ( event.candidate ) {
					session.log({
						id: BROADCAST_CANDIDATE,
						type: BROADCAST_CANDIDATE,
						value: event.candidate,
						noSave: true
					}, email );
				}
			};
		});
	}

	handleClick = () => {
		if ( this.state.isWatching ) {
			this.videoElement.pause();
		} else {
			this.videoElement.play();
		}
		this.setState({
			isWatching: !this.state.isWatching
		});
	}

	render() {
		if ( !this.state.peerConnection ) {
			return null;
		}
		/* eslint-disable jsx-a11y/media-has-caption */
		return (
			<Draggable>
				<Panel className="broadcast-video-panel" >
					{!this.state.isWatching ?
						<p>A video broadcast by {this.state.broadcaster} is in progress.</p> :
						null
					}
					<Button
						variant="secondary"
						className={this.state.isWatching ? 'broadcast-video-button' : ''}
						onClick={this.handleClick}
					>
						{this.state.isWatching ? <i className="fas fa-video-slash"></i> : 'Join Broadcast' }
					</Button>
					<video
						playsInline
						ref={( video ) => {
							this.videoElement = video;
						}}
						style={{
							display: this.state.isWatching ? 'inherit' : 'none'
						}}
					></video>
				</Panel>
			</Draggable>
		);
	}
}


// PROPERTIES //

BroadcastWatcher.propTypes = {
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default BroadcastWatcher;
