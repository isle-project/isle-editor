// MODULES //

import React, { Component } from 'react';
import ceil from '@stdlib/math/base/special/ceil';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import SessionContext from '@isle-project/session/context.js';
import { REMOVED_CHAT, RECEIVED_CHAT_HISTORY } from '@isle-project/constants/events.js';
import Chat from './chat.js';


// MAIN //

class Chats extends Component {
	constructor( props ) {
		super( props );

		const statusbarWidth = max( 0.34 * window.innerWidth, 300 );
		const side = ( window.innerWidth - statusbarWidth ) / 2.0;

		this.state = {
			statusbarWidth,
			side
		};
	}
	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type ) => {
			if ( type === REMOVED_CHAT || type === RECEIVED_CHAT_HISTORY ) {
				this.forceUpdate();
			}
		});
		window.addEventListener( 'resize', this.getStatusbarInfo );
	}

	componentWillUnmount() {
		this.unsubscribe();
		window.removeEventListener( 'resize', this.getStatusbarInfo );
	}

	getStatusbarInfo = () => {
		const statusbarWidth = max( 0.34 * window.innerWidth, 300 );
		const side = ( window.innerWidth - statusbarWidth ) / 2.0;
		this.setState({
			statusbarWidth,
			side
		});
	};

	getChatPosition( idx ) {
		const session = this.context;
		const margin = 10;
		const nChatsPerSide = ceil( session.chats.length / 2 );
		const maxWidth = this.state.side * 0.6;
		const width = min( ( this.state.side - margin - margin*nChatsPerSide ) / nChatsPerSide, maxWidth );
		let left = margin + ( idx * ( width + margin ) );
		if ( idx > ( nChatsPerSide-1 ) ) {
			left += this.state.statusbarWidth;
			if ( nChatsPerSide === 1 && idx === 1 ) {
				left += width + margin;
			}
		}
		const pos = {
			left,
			width
		};
		return pos;
	}

	render() {
		const session = this.context;
		return session.chats.map( ( chat, idx ) => {
			const pos = this.getChatPosition( idx );
			return <Chat chat={chat} idx={idx} key={idx} left={pos.left} width={pos.width} />;
		});
	}
}


// TYPES //

Chats.contextType = SessionContext;


// EXPORTS //

export default Chats;
