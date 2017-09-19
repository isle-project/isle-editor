// MODULES //

import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import pluck from '@stdlib/utils/pluck';
import floor from '@stdlib/math/base/special/floor';


// VARIABLES //

const ResponsiveReactGridLayout = WidthProvider( Responsive );


// MAIN //

class DraggableGrid extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			layouts: this.createLayout( props )
		};

	}

	createLayout( props ) {
		let layouts = props.children.map( ( e, i ) => {
			return {
				lg: { i: `cell-${i}`, x: i*4 % 16, y: floor( i / 4 ) * 4, w: 4, h: 4 },
				md: { i: `cell-${i}`, x: i*4 % 12, y: floor( i / 2 ) * 4, w: 4, h: 4 },
				sm: { i: `cell-${i}`, x: i*4 % 8, y: floor( i / 2 ) * 4, w: 4, h: 4 },
				xs: { i: `cell-${i}`, x: i*4 % 8, y: floor( i / 2 ) * 4, w: 4, h: 4 },
				xxs: { i: `cell-${i}`, x: i*4 % 8, y: floor( i / 2 ) * 4, w: 4, h: 4 }
			};
		});
		layouts = {
			lg: pluck( layouts, 'lg' ),
			md: pluck( layouts, 'md' ),
			sm: pluck( layouts, 'sm' ),
			xs: pluck( layouts, 'xs' ),
			xxs: pluck( layouts, 'xxs' )
		};
		this.setState({
			layouts
		});
	}


	render() {
		return <ResponsiveReactGridLayout
			layouts={this.state.layouts}
			breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
			cols={{lg: 16, md: 12, sm: 8, xs: 8, xxs: 8 }}
			isResizable={false}
			isDraggable={false}
			rowHeight={60}
		>
			{this.props.children}
		</ResponsiveReactGridLayout>;
	}
}


// EXPORTS //

export default DraggableGrid;
