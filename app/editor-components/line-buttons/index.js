// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { i18n } from '@isle-project/locales/editor';
import logger from 'debug';
import { ContextMenuTrigger } from '@isle-project/components/internal/contextmenu';
import { connect } from 'react-redux';
import PINF from '@stdlib/constants/math/float64-pinf';
import { jumpToElementInEditor, switchWithPrevious, switchWithNext } from 'actions';
import stopPropagation from '@isle-project/utils/stop-propagation';
import './line_buttons.css';


// VARIABLES //

const debug = logger( 'isle:line-buttons' );
const LINE_WRAPPER = 'LINE_WRAPPER';


// MAIN //

/**
* A line wrapper for use in the editor.
*/
const LineButtons = ( props ) => {
	const [ { canDrop, isOver }, drop ] = useDrop({
		accept: LINE_WRAPPER,
		drop: ( item, monitor ) => {
			const thisLine = {
				startLineNumber: props.lineNumber,
				endLineNumber: props.lineNumber,
				startColumn: 0,
				endColumn: PINF
			};
			if ( item.startLineNumber > props.lineNumber ) {
				props.switchWithPrevious({
					current: item,
					previous: thisLine,
					elementRangeAction: 'switch_previous'
				});
			} else {
				props.switchWithNext({
					current: item,
					next: thisLine,
					elementRangeAction: 'switch_next'
				});
			}
			return void 0;
		},
		collect: ( monitor ) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});
	if ( !props.showLineButtons || !props.show ) {
		return null;
	}
	const jumpToLine = ( event ) => {
		event.stopPropagation();
		const { lineNumber } = props;
		debug( 'Select line '+lineNumber );
		props.jumpToElementInEditor({
			startLineNumber: lineNumber,
			endLineNumber: lineNumber,
			elementRangeAction: 'reveal'
		});
	};
	const isActive = canDrop && isOver;
	let background;
	let color;
	let icon;
	if ( isActive ) {
		color = 'green';
		icon = 'fa-check-circle fa-lg';
		background = 'rgba(0, 102, 0, 0.3)';
	}
	else if ( canDrop ) {
		color = '#258080';
		icon = 'fa-chevron-circle-down fa-lg';
		background = 'rgba(37, 128, 128, 0.2)';
	}
	else {
		icon = 'fa-plus-circle fa-lg';
	}

	/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
	return (
		<span className="line-buttons" onClick={stopPropagation} ref={drop} style={{ background }}>
			{ props.splitPos !== 1 ? <span
				className="line-buttons-jump"
				role="button" tabIndex={0}
				onClick={jumpToLine}
				onKeyPress={jumpToLine}
				title={i18n.t('Editor:center-editor-line', { lineNumber: props.lineNumber })}
			>
				<span
					className="fa fa-arrow-circle-left"
				></span>
				<strong className="line-buttons-line-display" >
					{props.lineNumber}
				</strong>
			</span> : null }
			<ContextMenuTrigger
				id="editor-context-menu"
				renderTag="span"
				holdToDisplay={0}
				collect={() => {
					return {
						context: 'preview',
						lineNumber: props.lineNumber
					};
				}}
			>
				<i
					className={`line-buttons-contextmenu fas ${icon}`}
					title={i18n.t('Editor:insert-at-line', { lineNumber: props.lineNumber })}
					style={{ color }}
				></i>
			</ContextMenuTrigger>
		</span>
	);
};


// PROPERTIES //

LineButtons.propTypes = {
	show: PropTypes.bool,
	lineNumber: PropTypes.number.isRequired,
	jumpToElementInEditor: PropTypes.func.isRequired,
	switchWithNext: PropTypes.func.isRequired,
	switchWithPrevious: PropTypes.func.isRequired
};

LineButtons.defaultProps = {
	show: true
};


// EXPORTS //

export default connect( mapStateToProps, {
	jumpToElementInEditor, switchWithPrevious, switchWithNext
})( LineButtons );

function mapStateToProps({ preview, editor }) {
	return {
		...preview,
		splitPos: editor.splitPos
	};
}
