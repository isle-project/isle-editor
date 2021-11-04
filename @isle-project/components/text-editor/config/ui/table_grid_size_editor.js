/**
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/TableGridSizeEditor.js
*
* MIT License
*
* Copyright (c) 2019 Chan Zuckerberg Initiative
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

// MODULES //

import cx from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import noop from '@stdlib/utils/noop';
import clamp from '@stdlib/math/base/special/clamp';
import round from '@stdlib/math/base/special/round';
import ceil from '@stdlib/math/base/special/ceil';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import { fromHTMlElement, fromXY, isIntersected } from './rects';
import './table_grid_size_editor.css';


// VARIABLES //

const GUTTER_SIZE = 5;
const CELL_SIZE = 16;
const MAX_SIZE = 20;


// FUNCTIONS //

function htmlElementToRect( el ) {
	const rect = el.getBoundingClientRect();
	return {
		x: rect.left,
		y: rect.top,
		w: rect.width,
		h: rect.height
	};
}

class GridCell extends React.PureComponent {
	render() {
		const { x, y, selected } = this.props;
		const style = {
			left: x + 'px',
			top: y + 'px',
			width: CELL_SIZE + 'px',
			height: CELL_SIZE + 'px'
		};
		const className = cx('editor-table-grid-size-editor-cell', {
			selected
		});
		return <div className={className} style={style} />;
	}
}


// MAIN //

class TableGridSizeEditor extends React.PureComponent {
	constructor( props ) {
		super( props );

		this._ex = 0;
		this._ey = 0;
		this._mx = 0;
		this._my = 0;
		this._rafID = 0;
		this._ref = null;
		this._entered = false;

		this.state = {
			rows: 1,
			cols: 1
		};
	}

	componentWillUnmount() {
		if ( this._entered ) {
			document.removeEventListener( 'mousemove', this._onMouseMove, true );
		}
		if ( this._rafID ) {
			cancelAnimationFrame( this._rafID );
		}
	}

	_onRef = ( ref ) => {
		this._ref = ref;
	};

	_onMouseEnter = ( e ) => {
		const node = e.currentTarget;
		if ( node instanceof HTMLElement ) {
			const rect = fromHTMlElement( node );
			const mx = round( e.clientX );
			const my = round( e.clientY );
			this._ex = rect.x;
			this._ey = rect.y;
			this._mx = mx;
			this._my = my;
			if ( !this._entered ) {
				this._entered = true;
				document.addEventListener( 'mousemove', this._onMouseMove, true );
			}
		}
	};

	_onMouseMove = ( e ) => {
		const el = this._ref && ReactDOM.findDOMNode( this._ref );
		const elRect = el ? htmlElementToRect(el) : null;
		const mouseRect = fromXY( e.screenX, e.screenY, 10 );

		if (elRect && mouseRect && isIntersected(elRect, mouseRect, 50)) {
			// This prevents `PopUpManager` from collapsing the editor.
			e.preventDefault();
			e.stopImmediatePropagation();
		}
		const mx = round( e.clientX );
		const my = round( e.clientY );
		if (mx !== this._mx || my !== this._my) {
			this._mx = mx;
			this._my = my;
			if ( this._rafID ) {
				cancelAnimationFrame( this._rafID );
			}
			this._rafID = requestAnimationFrame(this._updateGridSize);
		}
	};

	_updateGridSize = () => {
		this._rafID = 0;
		const mx = this._mx;
		const my = this._my;
		const x = mx - this._ex;
		const y = my - this._ey;
		const rr = clamp( ceil(y / (CELL_SIZE + GUTTER_SIZE)), 1, MAX_SIZE );
		const cc = clamp( ceil(x / (CELL_SIZE + GUTTER_SIZE)), 1, MAX_SIZE );
		const { rows, cols } = this.state;
		if ( rows !== rr || cols !== cc ) {
			this.setState({ rows: rr, cols: cc });
		}
	};

	_onMouseDown = ( e ) => {
		e.preventDefault();
		this.props.close( this.state );
	};

	render() {
		const { rows, cols } = this.state;
		let rr = max( 5, rows );
		let cc = max( 5, cols );
		if ( rr === rows ) {
			rr = min( MAX_SIZE, rr + 1 );
		}
		if ( cc === cols ) {
			cc = min( MAX_SIZE, cc + 1 );
		}
		const cells = [];
		let ii = 0;
		let y = 0;
		let w = 0;
		let h = 0;
		while (ii < rr) {
			y += GUTTER_SIZE;
			let jj = 0;
			let x = 0;
			while (jj < cc) {
			x += GUTTER_SIZE;
			const selected = ii < rows && jj < cols;
			cells.push(
				<GridCell
					key={`${String(ii)}-${String(jj)}`}
					selected={selected}
					x={x}
					y={y}
				/>
			);
			x += CELL_SIZE;
			w = x + GUTTER_SIZE;
			jj++;
			}
			y += CELL_SIZE;
			h = y + GUTTER_SIZE;
			ii++;
		}
		const bodyStyle = { width: w + 'px', height: h + 'px' };
		return (
			<div className="editor-table-grid-size-editor" ref={this._onRef} >
				<div
					className="editor-table-grid-size-editor-body"
					onMouseDown={this._onMouseDown}
					onMouseEnter={this._onMouseEnter}
					style={bodyStyle}
					role="button" tabIndex={0}
				>
					{cells}
				</div>
				<div className="editor-table-grid-size-editor-footer">
					<b>{rows}</b> <i className="fa fa-times" /> <b>{cols}</b>
				</div>
			</div>
		);
	}
}


// PROPERTIES //

TableGridSizeEditor.defaultProps = {
	close: noop
};


// EXPORTS //

export default TableGridSizeEditor;
