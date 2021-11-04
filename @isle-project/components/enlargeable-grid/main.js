// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import copy from '@stdlib/utils/copy';
import floor from '@stdlib/math/base/special/floor';


// VARIABLES //

const GridLayout = WidthProvider( ReactGridLayout );


// MAIN //

/**
* An enlargeable grid.
*
* @property {boolean} enlargeable - controls whether items can be enlarged
* @property {number} enlargedHeight - height of item after enlarging it
* @property {boolean} isDraggable - controls whether the grid elements are draggable
* @property {boolean} isResizable - controls whether the grid elements are resizable
* @property {number} itemHeight - height of items (in px)
*/
class EnlargeableGrid extends Component {
	constructor( props ) {
		super( props );

		const layout = props.children.map( ( x, i ) => {
			const { itemHeight } = this.props;
			return {
				i: String( i ),
				x: i*4 % 12,
				y: floor( i / itemHeight ) * itemHeight,
				w: 4,
				h: itemHeight,
				isDraggable: props.isDraggable,
				isResizable: props.isResizable
			};
		});

		this.state = {
			layout,
			enlarged: [],
			children: props.children
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.children !== prevState.children ) {
			const { itemHeight } = nextProps;
			const layout = nextProps.children.map( ( x, i ) => {
				return {
					i: String( i ),
					x: i*4 % 12,
					y: floor( i / itemHeight ) * itemHeight,
					w: 4,
					h: itemHeight,
					isDraggable: nextProps.isDraggable,
					isResizable: nextProps.isResizable
				};
			});
			return {
				layout,
				children: nextProps.children
			};
		}
		return null;
	}

	enlargeDivFactory = ( i ) => {
		const enlargeDiv = () => {
			const newLayout = copy( this.state.layout );
			const newEnlarged = copy( this.state.enlarged );
			const { itemHeight, enlargedHeight, isDraggable, isResizable } = this.props;
			if ( !this.state.enlarged[ i ]) {
				for ( let j = 0; j < newLayout.length; j++ ) {
					if ( j < i ) {
						newLayout[ j ] = {
							i: String( j ),
							x: j*4 % 12,
							y: floor( j / itemHeight ) * itemHeight,
							w: 4,
							h: itemHeight,
							isDraggable,
							isResizable
						};
						newEnlarged[ j ] = false;
					}
					else if ( j === i ) {
						newLayout[ j ] = {
							i: String( j ),
							x: 0,
							y: floor( j / itemHeight ) * itemHeight,
							w: 12,
							h: enlargedHeight,
							isDraggable,
							isResizable
						};
						newEnlarged[ i ] = true;
					} else {
						newLayout[ j ] = {
							i: String( j ),
							x: ( ( j-i )*4 ) % 12,
							y: floor( j / itemHeight ) * itemHeight + enlargedHeight,
							w: 4,
							h: itemHeight,
							isDraggable,
							isResizable
						};
						newEnlarged[ j ] = false;
					}
				}
			} else {
				for ( let j = 0; j < newLayout.length; j++ ) {
					newLayout[ j ] = {
						i: String( j ),
						x: j*4 % 12,
						y: floor( j / itemHeight ) * itemHeight,
						w: 4,
						h: itemHeight,
						isDraggable,
						isResizable
					};
					newEnlarged[ j ] = false;
				}
			}
			this.setState({
				layout: newLayout,
				enlarged: newEnlarged
			});
		};
		return enlargeDiv;
	};

	render() {
		return (
			<GridLayout
				className="layout"
				layout={this.state.layout}
				cols={12}
				rowHeight={30}
			>
				{ this.props.enlargeable ?
					this.props.children.map( ( x, i ) => {
						return (
							<button
								aria-label="Enlarge"
								key={i}
								onClick={this.enlargeDivFactory( i )}
								style={{ border: '2px solid darkgray', cursor: 'zoom-in', background: 'none' }}
							>{x}</button>
						);
					}) :
					this.props.children.map( ( x, i ) => {
						return <div key={i} style={{ border: '2px solid darkgray' }}>{x}</div>;
					})
				}
			</GridLayout>
		);
	}
}


// PROPERTIES //

EnlargeableGrid.defaultProps = {
	enlargeable: true,
	enlargedHeight: 18,
	isDraggable: false,
	isResizable: false,
	itemHeight: 9
};

EnlargeableGrid.propTypes = {
	enlargeable: PropTypes.bool,
	enlargedHeight: PropTypes.number,
	isDraggable: PropTypes.bool,
	isResizable: PropTypes.bool,
	itemHeight: PropTypes.number
};


// EXPORTS //

export default EnlargeableGrid;
