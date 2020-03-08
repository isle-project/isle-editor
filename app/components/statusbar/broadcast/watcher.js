// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from 'components/panel';
import Draggable from 'components/draggable';
import { BROADCAST_ANSWER, BROADCAST_CANDIDATE, BROADCAST_OFFER, MEMBER_ACTION } from 'constants/events.js';


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
			peerConnection: null
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
					this.acceptBroadcastOffer( data.email, data.value );
				}
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	addIceCandidate( candidate ) {
		this.state.peerConnection
			.addIceCandidate( new RTCIceCandidate( candidate ) )
			.catch( e => console.error( e ) );
	}

	acceptBroadcastOffer( email, description ) {
		const session = this.props.session;
		const peerConnection = new RTCPeerConnection( BROADCAST_CONFIG );

		this.setState({
			peerConnection
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
			});
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

	render() {
		if ( !this.state.peerConnection ) {
			return null;
		}
		/* eslint-disable jsx-a11y/media-has-caption */
		return (
			<Draggable>
				<Panel className="broadcast-video-panel" >
					<video
						playsInline autoPlay
						ref={( video ) => {
							this.videoElement = video;
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
