// MODULES //

import React, { Component, Fragment } from 'react';
import logger from 'debug';
import Tooltip from 'components/tooltip';
import SessionContext from 'session/context.js';
import './score.css';


// VARIABLES //

const debug = logger( 'isle:statusbar-score' );


// MAIN //

class Score extends Component {
	constructor( props, context ) {
		super( props );

		this.state= {
			score: context.get( 'score' ),
			isReceiving: false,
			addition: 4
		};
	}

	componentDidMount() {
		debug( 'Component did mount...' );
		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, data ) => {
				if ( type === 'self_updated_score' ) {
					this.addScore( data );
				}
			});
		}
	}

	componentWillUnmount() {
		debug( 'Component will unmount...' );
		this.unsubscribe();
	}

	handleClick= ( event ) => {
		event.stopPropagation();
	}

	addScore( addition ) {
		this.setState({
			addition: addition,
			isReceiving: true
		});
		setTimeout( () => {
			const newScore = this.state.score + addition;
			this.setState({
				score: newScore,
				isReceiving: false
			});
		}, 2000 );
	}

	getAnimation() {
		if ( !this.state.isReceiving || !this.rect ) {
			return null;
		}
		return (
			<div className="receiving-score" style={{
				left: this.rect.x,
				top: this.rect.y,
				transformOrigin: `${this.rect.width/2}px ${this.rect.height/2}px`
			}}>
				+{this.state.addition}
				<div className="receiving-score-outer-circle2"></div>
				<div className="receiving-score-outer-circle"></div>
			</div>
		);
	}

	render() {
		return (
			<Fragment>
				<Tooltip placement="bottom" tooltip="Points" >
					<div
						className="statusbar-score"
						ref={( div ) => {
							if ( div ) {
								const rect = div.getBoundingClientRect();
								if ( rect && rect.x > 0 && rect.y > 0 ) {
									this.rect = rect;
								}
							}
						}}
						onClick={this.handleClick}
					>
						{this.state.score}
					</div>
				</Tooltip>
				{this.getAnimation()}
			</Fragment>

		);
	}
}


// TYPES //

Score.contextType = SessionContext;


// EXPORTS //

export default Score;
