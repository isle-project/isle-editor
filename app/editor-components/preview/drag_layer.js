// MODULES //

import React, { memo } from 'react';
import { useDragLayer } from 'react-dnd';


// VARIABLES //

const DragWrapper = memo( ({ title }) => {
	return (
		<div className="preview-drag-wrapper" >
			Drag <code>{title}</code> to one of the <i className="fas fa-chevron-circle-down" style={{ color: '#258080' }} /> buttons
		</div>
	);
});


// FUNCTIONS //

function createStyle( initialOffset, currentOffset ) {
	if ( !initialOffset || !currentOffset ) {
		return {
			display: 'none'
		};
	}
	const { x, y } = currentOffset;
	const transform = `translate(${x}px, ${y}px)`;
	return {
		transform,
		WebkitTransform: transform
	};
}


// MAIN //

const CustomDragLayer = () => {
	const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer(( monitor ) => ({
		item: monitor.getItem(),
		itemType: monitor.getItemType(),
		initialOffset: monitor.getInitialClientOffset(),
		currentOffset: monitor.getClientOffset(),
		isDragging: monitor.isDragging()
	}));
	function renderItem() {
		switch ( itemType ) {
			case 'component-wrapper':
				return <DragWrapper title={item.tagName} />;
			default:
				return null;
		}
	}
	if ( !isDragging ) {
		return null;
	}
	return ( <div className="preview-drag-layer" >
		<div style={createStyle( initialOffset, currentOffset )} >
			{renderItem()}
		</div>
	</div>);
};


// EXPORTS //

export default CustomDragLayer;
