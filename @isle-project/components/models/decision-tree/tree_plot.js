// MODULES //

import React, { Component } from 'react';
import { toJpeg } from 'html-to-image';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isInteger from '@stdlib/assert/is-integer';
import randomstring from 'utils/randomstring/alphanumeric';
import FullscreenButton from './fullscreen_button';
import './tree.css';


// VARIABLES //

const RE_NUMBER = /^[+-]?[\d.]+e?[+-]?\d*$/;


// FUNCTIONS //

function treeToHtml( tree ) {
	if ( !tree ) {
		return null;
	}
	if ( tree.category ) {
		let value = tree.category;
		if ( isNumber( value ) || RE_NUMBER.test( value ) ) {
			value = Number( value );
			if ( !isInteger( value ) ) {
				value = value.toFixed( 6 );
			}
		}
		return (
			<ul>
				<li >
					<span className="decision-tree-leaf" > Predict: {value} </span>
				</li>
			</ul>
		);
	}
	return (
		<ul>
			<li>
				<span><b> {tree.attribute} {tree.predicateName} {tree.pivot} ?</b></span>
				<ul>
					<li>
						<span>no ( {tree.notMatchedCount} obs) </span>
						{treeToHtml(tree.notMatch)}
					</li>
					<li>
						<span>yes ( {tree.matchedCount} obs) </span>
						{treeToHtml(tree.match)}
					</li>
				</ul>
			</li>
		</ul>
	);
}


// MAIN //

class TreePlot extends Component {
	constructor( props ) {
		super( props );

		this.setState({
			plotValue: null,
			plotKey: null,
			fullscreen: false
		});
	}

	componentDidMount() {
		this.treeWrapper.scrollLeft = 0.4 * this.tree.clientWidth;
		toJpeg( this.tree, {
			backgroundColor: 'white',
			style: {
				fontSize: 22
			}
		}).then( ( data ) => {
			const value = `<img src="${data}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 100%" />`;
			this.setState({
				plotKey: `<!--IMAGE_LOG:${randomstring( 6 )}_${randomstring( 6 )}-->`,
				plotValue: value
			});
		});
	}

	render() {
		const tree = treeToHtml( this.props.tree );
		return (
			<div
				className="decision-tree-wrapper"
				ref={( div ) => {
					this.treeWrapper = div;
				}}
			>
				<div
					className="decision-tree-draggable-bar"
					draggable="true"
					onDragStart={( ev ) => {
						ev.dataTransfer.setData( 'text/html', this.state.plotValue );
						ev.dataTransfer.setData( 'text/plain', this.state.plotKey );
					}}
					style={{ float: 'left' }}
				>Drag Plot</div>
				<FullscreenButton
					variant="outline-danger"
					size="sm"
					onClick={() => {
						this.setState({ fullscreen: !this.state.fullscreen });
					}}
					tree={tree}
				>
					<div className="fa fa-times" />
				</FullscreenButton>
				<div
					className="decision-tree"
					ref={( div ) => {
						this.tree = div;
					}}
				>{tree}</div>
			</div>
		);
	}
}


// EXPORTS //

export default TreePlot;
