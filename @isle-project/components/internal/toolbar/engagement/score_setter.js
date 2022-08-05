// MODULES //

import React, { useCallback, useState, Fragment } from 'react';
import ReactDraggable from 'react-draggable';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';


// MAIN //

const ScoreSetter = ({ t, onSubmit }) => {
	const [ progress, setProgress ] = useState( 50 );
	const [ controlledPosition, setControlledPosition ] = useState( { x: 0, y: 0 } );
	const onControlledDrag = useCallback( ( e, position ) => {
		const { x, y } = position;
		setControlledPosition({ x, y });
	}, [] );
	const onControlledDragStop = useCallback( ( e, position ) => {
		const { x, y } = position;
		setControlledPosition({ x, y });
		setProgress( ( ( x + 100 ) / 200 ) * 100 );
	}, [] );
	const handleSubmit = useCallback( () => {
		onSubmit( progress );
	}, [ progress, onSubmit ] );
	return (
		<Fragment>
			<div className="score-bottom" >
				<ReactDraggable
					bounds={{ left: -100, right: 100, top: 0, bottom: 0 }}
					onStop={onControlledDragStop}
					position={controlledPosition}
					onDrag={onControlledDrag}
				>
					<div className="score-setter" />
				</ReactDraggable>
				<ProgressBar style={{ marginTop: 23 }}>
					<ProgressBar animated variant="success" now={progress} />
					<ProgressBar animated variant="danger" now={100-progress} />
				</ProgressBar>
			</div>
			<Button
				variant="secondary" size="sm"
				onClick={handleSubmit} style={{ marginTop: 10 }}
			>
				{t( 'submit' )}
			</Button>
		</Fragment>
	);
};


// EXPORTS //

export default ScoreSetter;
