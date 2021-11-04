// MODULES //

import React, { Component, Fragment } from 'react';
import ReactDraggable from 'react-draggable';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';


// MAIN //

class ScoreSetter extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			progress: 50,
			controlledPosition: {
				x: 0, y: 0
			}
		};
	}

	onControlledDrag = ( e, position ) => {
		const { x, y } = position;
		this.setState({
			controlledPosition: { x, y }
		});
	};

	onControlledDragStop = ( e, position ) => {
		const { x, y } = position;
		this.setState({
			controlledPosition: { x, y },
			progress: ( ( x + 100 ) / 200 ) * 100
		});
	};

	handleSubmit = () => {
		this.props.onSubmit( this.state.progress );
	};

	render() {
		return (
			<Fragment>
				<div className="score-bottom" >
					<ReactDraggable
						bounds={{ left: -100, right: 100, top: 0, bottom: 0 }}
						onStop={this.onControlledDragStop}
						position={this.state.controlledPosition}
						onDrag={this.onControlledDrag}
					>
						<div className="score-setter" />
					</ReactDraggable>
					<ProgressBar style={{ marginTop: 23 }}>
						<ProgressBar animated variant="success" now={this.state.progress} />
						<ProgressBar animated variant="danger" now={100-this.state.progress} />
					</ProgressBar>
				</div>
				<Button
					variant="secondary" size="sm"
					onClick={this.handleSubmit} style={{ marginTop: 10 }}
				>
					{this.props.t( 'submit' )}
				</Button>
			</Fragment>
		);
	}
}


// EXPORTS //

export default ScoreSetter;
