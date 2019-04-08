// MODULES //

import React, { Component, Fragment } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Draggable from 'react-draggable';
import incrmmean from '@stdlib/stats/incr/mmean';
import incrmrange from '@stdlib/stats/incr/mrange';
import roundn from '@stdlib/math/base/special/roundn';
import Gate from 'components/gate';
import SessionContext from 'session/context.js';
import { SHARE_ENGAGEMENT } from 'constants/actions.js';
import './score.css';


// MAIN //

/**
* An ISLE component that displays an engagement meter with which the students can indicate how well they are following the class.
*/
class EngagementMeter extends Component {
	constructor( props, session ) {
		super( props );

		this.state = {
			progress: 50,
			controlledPosition: {
				x: 0, y: 0
			},
			mean: null,
			range: null
		};
		this.meanAcc = incrmmean( 6 );
		this.rangeAcc = incrmrange( 6 );
	}

	componentDidMount() {
		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === 'member_action' ) {
					if ( action.id === this.props.id ) {
						if ( action.type === SHARE_ENGAGEMENT ) {
							const mean = this.meanAcc( action.value );
							const range = this.rangeAcc( action.value );
							this.setState({
								mean, range
							});
						}
					}
				}
			});
		}
	}

	onControlledDrag = ( e, position ) => {
		const { x, y } = position;
		this.setState({
			controlledPosition: { x, y }
		});
	}

	onControlledDragStop = ( e, position ) => {
		const { x, y } = position;
		this.setState({
			controlledPosition: { x, y },
			progress: ( ( position.x + 200 ) / 400 ) * 100
		}, () => {
			const session = this.context;
			session.log({
				id: this.props.id,
				type: SHARE_ENGAGEMENT,
				value: this.state.progress
			});
		});
	}

	render() {
		return (
			<div className="score-bottom">
				<span className="score-bottom-text">Engagement Meter</span>
				<Gate owner banner={
					<Fragment>
						<Draggable
							bounds={{ left: -200, right: 200, top: 0, bottom: 0 }}
							onStop={this.onControlledDragStop}
							position={this.state.controlledPosition}
							onDrag={this.onControlledDrag}
						>
							<div className="score-setter" />
						</Draggable>
						<ProgressBar style={{ marginTop: 23 }}>
							<ProgressBar animated variant="success" now={this.state.progress} />
							<ProgressBar animated variant="danger" now={100-this.state.progress} />
						</ProgressBar>
					</Fragment>
				}>
					{this.state.mean && this.state.range ?
						<Fragment>
							<span className="score-bottom-stats">
								{`mean: ${roundn( this.state.mean, -2 )} (range: ${roundn( this.state.range, -2 )})`}
							</span>
							<ProgressBar style={{ marginTop: 23 }}>
								<ProgressBar animated variant="success" now={this.state.mean} />
								<ProgressBar animated variant="danger" now={100-this.state.mean} />
							</ProgressBar>
						</Fragment> : null }
				</Gate>
			</div>
		);
	}
}


// PROPERTIES //

EngagementMeter.contextType = SessionContext;


// EXPORTS //

export default EngagementMeter;
