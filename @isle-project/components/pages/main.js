// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import papply from '@stdlib/utils/papply';
import absdiff from '@stdlib/math/base/utils/absolute-difference';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import generateUID from '@isle-project/utils/uid';
import Tooltip from '@isle-project/components/tooltip';
import SessionContext from '@isle-project/session/context.js';
import isElectron from '@isle-project/utils/is-electron';
import { PAGES_FIRST_PAGE, PAGES_NEXT_PAGE, PAGES_PREVIOUS_PAGE, PAGES_LAST_PAGE, PAGES_JUMP_PAGE } from '@isle-project/constants/actions.js';
import isLineButtons from '@isle-project/utils/is-line-buttons';
import { withPropCheck } from '@isle-project/utils/prop-check';
import ordinal from './ordinal.js';
import './pages.css';


// VARIABLES //

const uid = generateUID( 'pages' );


// MAIN //

/**
* An ISLE pagination component that allows the user to step through a sequence of pages.
*
* @property {(string|node)} title - displayed title of the pages container
* @property {string} size - size of the pagination buttons (either `default`, `lg`, or `sm`)
* @property {number} height - the maximum height of the container. If an embedded page is taller, a vertical scrollbar is added
* @property {number} activePage - active page
* @property {string} pagination - whether to show the pagination either on the `top`, `bottom`, or `both`
* @property {boolean} disabled - controls whether the navigation bar is active or not
* @property {Object} style - CSS inline styles
* @property {Function} onSelect - Function invoked when active change is changed. Receives the new active page index as a sole parameter
*/
class Pages extends Component {
	constructor( props ) {
		super( props );
		this.id = props.id || uid( props );
		this.state = {
			activePage: props.activePage,
			rawActivePage: props.activePage
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.activePage !== prevState.rawActivePage ) {
			let newState = {};
			newState.activePage = nextProps.activePage;
			newState.rawActivePage = nextProps.activePage;
			return newState;
		}
		return null;
	}

	log = ( type, value ) => {
		const session = this.context;
		if ( session && session.log ) {
			session.log({
				id: this.id,
				type: type,
				value: value
			});
		}
	}

	firstPage = () => {
		this.props.onSelect( 1 );
		if ( this.wrapper ) {
			this.wrapper.scrollTop = 0;
		}
		this.log( PAGES_FIRST_PAGE, 0 );
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
		if ( this.wrapper ) {
			this.wrapper.scrollTop = 0;
		}
		this.log( PAGES_NEXT_PAGE, this.state.activePage + 1 );
		this.setState({
			activePage: this.state.activePage + 1
		});
	}

	prevPage = () => {
		if ( this.state.activePage === 1 ) {
			return this.props.onSelect( this.state.activePage );
		}
		this.props.onSelect( this.state.activePage - 1 );
		if ( this.wrapper ) {
			this.wrapper.scrollTop = 0;
		}
		this.log( PAGES_PREVIOUS_PAGE, this.state.activePage - 1 );
		this.setState({
			activePage: this.state.activePage - 1
		});
	}

	lastPage = () => {
		this.props.onSelect( this.props.children.length );
		if ( this.wrapper ) {
			this.wrapper.scrollTop = 0;
		}
		this.log( PAGES_LAST_PAGE, this.props.children.length );
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
		if ( this.wrapper ) {
			this.wrapper.scrollTop = 0;
		}
		this.log( PAGES_JUMP_PAGE, page );
		this.setState({
			activePage: page
		});
	}

	render() {
		if ( !this.props.children ) {
			return <Alert variant="danger" >{this.props.t('missing-children')}</Alert>;
		}
		let children;
		if ( isElectron ) {
			children = [];
			React.Children.forEach( this.props.children, ( child ) => {
				if ( !isLineButtons( child ) ) {
					children.push( child );
				}
			});
		} else {
			children = this.props.children;
		}
		const nChildren = children.length;
		const header = <Card.Header>
			{isString( this.props.title ) ? <h3>{this.props.title}</h3> : this.props.title}
		</Card.Header>;
		const items = [];
		if ( nChildren <= 6 ) {
			for ( let i = 1; i <= nChildren; i++) {
				const isActive = i === this.state.activePage;
				items.push(
					<Tooltip
						placement="top" key={`${i}-tooltip`}
						tooltip={`Jump to ${ordinal(i)} page`}
						show={!this.props.disabled && !isActive}
					>
						<Pagination.Item
							disabled={this.props.disabled}
							key={i}
							active={isActive}
							onClick={papply( this.jumpTo, i )}
						>
							{i}
						</Pagination.Item>
					</Tooltip>
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
						items.push( <Pagination.Ellipsis disabled={this.props.disabled} key={i} /> );
						continue;
					}
				}
				const isActive = i === this.state.activePage;
				items.push(
					<Tooltip
						placement="top" key={`${i}-tooltip`}
						tooltip={`Jump to ${ordinal(i)} page`}
						show={!this.props.disabled && !isActive}
					>
						<Pagination.Item
							key={i}
							disabled={this.props.disabled}
							active={isActive}
							onClick={papply( this.jumpTo, i )}
						>
							{i}
						</Pagination.Item>
					</Tooltip>
				);
			}
		}
		const pagination = <Pagination className="my-pagination"
			size={this.props.size}
			items={children.length || 1}
		>
			<Tooltip
				placement="top" tooltip={this.props.t('previous-page')}
				show={!this.props.disabled && ( this.state.activePage !== 1 )}
			>
				<Pagination.Prev
					disabled={this.props.disabled || ( this.state.activePage === 1 )}
					key="prev"
					onClick={this.prevPage}
				/>
			</Tooltip>
			{items}
			<Tooltip
				placement="top" tooltip={this.props.t('next-page')}
				show={!this.props.disabled && ( this.state.activePage !== children.length )}
			>
				<Pagination.Next
					disabled={this.props.disabled || ( this.state.activePage === children.length )}
					key="next"
					onClick={this.nextPage}
				/>
			</Tooltip>
		</Pagination>;
		return (
			<Card
				className="pages"
				id={this.id}
				style={this.props.style}
			>
				{ this.props.title ? header : null }
				{ this.props.pagination !== 'bottom' ? pagination : null }
				<div className="page-children-wrapper"
					ref={( div ) => {
						this.wrapper = div;
					}}
					style={{
						height: this.props.height,
						borderWidth: this.props.pagination !== 'top' ? '1px 0px 1px 0px' : '1px 0px 0px 0px',
						...this.props.style
					}}
				>
					{ isArray( children ) ? children.map( ( elem, idx ) => {
						return ( <div
							className={this.state.activePage-1 !== idx ? 'invisible-page' : 'visible-page'}
							key={idx}
						>
							{elem}
						</div> );
					}) : children }
				</div>
				{ this.props.pagination !== 'top' ? pagination : null }
			</Card>
		);
	}
}


// PROPERTIES //

Pages.propTypes = {
	activePage: PropTypes.number,
	disabled: PropTypes.bool,
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	pagination: PropTypes.oneOf([
		'top',
		'bottom',
		'both'
	]),
	size: PropTypes.oneOf([
		'default',
		'lg',
		'sm'
	]),
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object,
	onSelect: PropTypes.func
};

Pages.defaultProps = {
	activePage: 1,
	disabled: false,
	title: '',
	pagination: 'top',
	size: 'default',
	height: null,
	style: {},
	onSelect() {}
};

Pages.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'pages' )( withPropCheck( Pages ) );
