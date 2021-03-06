// MODULES //

import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { toJpeg } from 'html-to-image';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isInteger from '@stdlib/assert/is-integer';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import html2clipboard from '@isle-project/utils/html-to-clipboard';
import FullscreenButton from './fullscreen_button';
import './tree.css';


// VARIABLES //

const RE_NUMBER = /^[+-]?[\d.]+e?[+-]?\d*$/;


// FUNCTIONS //

function treeToHtml( tree, t ) {
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
					<span className="decision-tree-leaf" >{t('predict')}: {value} </span>
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
						<span>{t('no')} ( {tree.notMatchedCount} {t('obs')}) </span>
						{treeToHtml( tree.notMatch, t )}
					</li>
					<li>
						<span>{t('yes')} ( {tree.matchedCount} {t('obs')}) </span>
						{treeToHtml( tree.match, t )}
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

		this.state = {
			plotValue: null,
			plotKey: null,
			fullscreen: false
		};
	}

	componentDidMount() {
		if ( !this.tree ) {
			return;
		}
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
		const { t } = this.props;
		const tree = treeToHtml( this.props.tree, t );
		return (
			<div
				className="decision-tree-wrapper"
				ref={( div ) => {
					this.treeWrapper = div;
				}}
			>
				<button
					className="decision-tree-draggable-bar"
					draggable="true"
					onDragStart={( ev ) => {
						ev.dataTransfer.setData( 'text/html', this.state.plotValue );
						ev.dataTransfer.setData( 'text/plain', this.state.plotKey );
					}}
					onClick={() => {
						html2clipboard( this.state.plotValue );
					}}
					style={{ float: 'left' }}
				>{t('drag-plot')}</button>
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

export default withTranslation( 'models' )( TreePlot );
