// MODULES //

import React, { Component } from 'react';
import Pagination from 'react-bootstrap/lib/Pagination';
import Card from 'react-bootstrap/lib/Card';
import PropTypes from 'prop-types';
import papply from '@stdlib/utils/papply';
import absdiff from '@stdlib/math/base/utils/absolute-difference';
import isArray from '@stdlib/assert/is-array';
import VoiceControl from 'components/voice-control';
import VOICE_COMMANDS from './voice_commands.json';
import './pages.css';


// MAIN //

/**
* An ISLE pagination component that allows the user to step through a sequence of pages.
*
* @property {string} title - displayed title of the pages container
* @property {string} size - size of the pagination buttons (one of `default`, `lg`, `large`, `sm`, `small`, `xs`, or `xsmall`)
* @property {number} height - the maximum height of the container. If an embedded page is taller, a vertical scrollbar is added
* @property {strings} voiceID - voice control identifier
* @property {Object} style - CSS inline styles
* @property {Function} onSelect - Function invoked when active change is changed. Receives the new active page index as a sole parameter
*/
class Pages extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			activePage: 1
		};
	}

	firstPage = () => {
		this.props.onSelect( 1 );
		this.setState({
			activePage: 1
		});
	}

	nextPage = () => {
		const nPages = this.props.children.length || 1;
		if ( this.state.activePage === nPages ) {
			return this.props.onSelect( this.state.activePage );
		}
		this.props.onSelect( this.state.activePage + 1 );
		this.setState({
			activePage: this.state.activePage + 1
		});
	}

	prevPage = () => {
		if ( this.state.activePage === 1 ) {
			return this.props.onSelect( this.state.activePage );
		}
		this.props.onSelect( this.state.activePage - 1 );
		this.setState({
			activePage: this.state.activePage - 1
		});
	}

	lastPage = () => {
		this.props.onSelect( this.props.children.length );
		this.setState({
			activePage: this.props.children.length
		});
	}

	jumpTo = ( page ) => {
		const nPages = this.props.children.length || 1;
		if ( page < 1 || page > nPages ) {
			return this.props.onSelect( this.state.activePage );
		}
		this.props.onSelect( page );
		this.setState({
			activePage: page
		});
	}

	render() {
		if ( !this.props.children ) {
			return null;
		}
		const nChildren = this.props.children.length;
		const header = <Card.Header>
			<h3>{this.props.title}</h3>
		</Card.Header>;
		const items = [];
		if ( nChildren <= 6 ) {
			for ( let i = 1; i <= nChildren; i++) {
				items.push(
					<Pagination.Item
						key={i}
						active={i === this.state.activePage}
						onClick={papply( this.jumpTo, i )}
					>
						{i}
					</Pagination.Item>
				);
			}
		} else {
			let cutoff = 2;
			if ( this.state.activePage < 3 ) {
				cutoff += 3 - this.state.activePage;
			}
			else if ( this.state.activePage > nChildren - 2 ) {
				cutoff += 2 - ( nChildren - this.state.activePage );
			}
			for ( let i = 1; i <= nChildren; i++) {
				if ( i !== 1 && i !== nChildren ) {
					if ( absdiff( i, this.state.activePage ) > cutoff ) {
						continue;
					}
					if ( absdiff( i, this.state.activePage ) === cutoff ) {
						items.push( <Pagination.Ellipsis /> );
						continue;
					}
				}
				items.push(
					<Pagination.Item
						key={i}
						active={i === this.state.activePage}
						onClick={papply( this.jumpTo, i )}
					>
						{i}
					</Pagination.Item>
				);
			}
		}
		return (
			<Card
				id={this.props.id}
				style={this.props.style}
			>
				{ this.props.title ? header : null }
				<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
				<Pagination className="my-pagination"
					size={this.props.size}
					items={this.props.children.length || 1}
				>
					<Pagination.Prev key="prev" onClick={this.prevPage} />
					{items}
					<Pagination.Next key="next" onClick={this.nextPage} />
				</Pagination>
				<div className="page-children-wrapper" style={{
					height: this.props.height
				}}>
					{ isArray( this.props.children ) ? this.props.children.map( ( elem, idx ) => {
						return ( <span
							className={this.state.activePage-1 !== idx ? 'invisible-page' : 'visible-page'}
							key={idx}
						>
							{elem}
						</span> );
					}) : this.props.children }
				</div>
			</Card>
		);
	}
}


// PROPERTIES //

Pages.propTypes = {
	title: PropTypes.string,
	size: PropTypes.oneOf([
		'default',
		'lg',
		'large',
		'sm',
		'small'
	]),
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	voiceID: PropTypes.string,
	style: PropTypes.object,
	onSelect: PropTypes.func
};

Pages.defaultProps = {
	title: '',
	size: 'default',
	height: null,
	voiceID: null,
	style: {},
	onSelect() {}
};


// EXPORTS //

export default Pages;
