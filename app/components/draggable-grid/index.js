// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import pluck from '@stdlib/utils/pluck';
import floor from '@stdlib/math/base/special/floor';


// VARIABLES //

const ResponsiveReactGridLayout = WidthProvider( Responsive );


// FUNCTIONS //

const createLayout = ( props ) => {
	let layouts = props.children.map( ( e, i ) => {
		return {
			lg: { i: `cell-${i}`, x: i*6 % 18, y: floor( i / 3 ) * 4, w: 6, h: 4 },
			md: { i: `cell-${i}`, x: i*6 % 12, y: floor( i / 2 ) * 4, w: 6, h: 4 },
			sm: { i: `cell-${i}`, x: i*6 % 12, y: floor( i / 2 ) * 4, w: 6, h: 4 },
			xs: { i: `cell-${i}`, x: i*6 % 12, y: floor( i / 2 ) * 4, w: 6, h: 4 },
			xxs: { i: `cell-${i}`, x: i*4 % 6, y: floor( i / 1 ) * 4, w: 6, h: 4 }
		};
	});
	layouts = {
		lg: pluck( layouts, 'lg' ),
		md: pluck( layouts, 'md' ),
		sm: pluck( layouts, 'sm' ),
		xs: pluck( layouts, 'xs' ),
		xxs: pluck( layouts, 'xxs' )
	};
	return layouts;
};


// MAIN //

class DraggableGrid extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			layouts: createLayout( props )
		};
	}

	static getDerivedStateFromProps( nextProps ) {
		return {
			layouts: createLayout( nextProps )
		};
	}

	render() {
		return ( <ResponsiveReactGridLayout
			layouts={this.state.layouts}
			breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
			cols={{ lg: 18, md: 12, sm: 12, xs: 12, xxs: 6 }}
			isResizable={this.props.isResizable}
			isDraggable={this.props.isDraggable}
			rowHeight={this.props.rowHeight}
		>
			{this.props.children.map( ( element, idx ) => {
				return ( <div key={`cell-${idx}`}>
					{element}
				</div> );
			})}
		</ResponsiveReactGridLayout> );
	}
}


// PROPERTIES //

DraggableGrid.description = 'A responsive draggable grid layout';

DraggableGrid.defaultProps = {
	isDraggable: false,
	isResizable: false,
	rowHeight: 60
};

DraggableGrid.propTypes = {
	isDraggable: PropTypes.bool,
	isResizable: PropTypes.bool,
	rowHeight: PropTypes.number
};


// EXPORTS //

export default DraggableGrid;
