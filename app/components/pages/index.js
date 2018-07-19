// MODULES //

import React, { Component } from 'react';
import Pagination from 'react-bootstrap/lib/Pagination';
import PropTypes from 'prop-types';
import papply from '@stdlib/utils/papply';
import absdiff from '@stdlib/math/base/utils/absolute-difference';
import SpeechInterface from 'speech-interface'; // this may be deleted
import './pages.css';


// MAIN //

class Pages extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			activePage: 1
		};
	}

	componentDidMount() {
		this.register();
	}

	register() {
		if (!global.speechInterface) {
			global.speechInterface = new SpeechInterface();
		}
		global.speechInterface.register({
			name: [ 'pager', 'please' ],
			ref: this,
			commands: [{
				command: 'nextPage',
				trigger: 'next'
			},
			{
				command: 'prevPage',
				trigger: 'previous'
			},
			{
				command: 'firstPage',
				trigger: 'first'
			},
			{
				command: 'lastPage',
				trigger: 'last'
			}
		]
		});
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
		const header = <div className="panel-heading">
			<h3 className="panel-title">{this.props.title}</h3>
		</div>;
		const items = [];
		let cutoff = 3;
		if ( this.state.activePage < 3 ) {
			cutoff += 3 - this.state.activePage;
		}
		else if ( this.state.activePage > this.props.children.length - 3 ) {
			cutoff += 2 - ( this.props.children.length - this.state.activePage );
		}
		for ( let i = 1; i <= this.props.children.length; i++) {
			if ( absdiff( i, this.state.activePage ) > cutoff ) {
				continue;
			}
			if ( absdiff( i, this.state.activePage ) === cutoff ) {
				items.push( <Pagination.Ellipsis /> );
				continue;
			}
			items.push(
				<Pagination.Item
					active={i === this.state.activePage}
					onClick={papply( this.jumpTo, i )}
				>
					{i}
				</Pagination.Item>
			);
		}
		return (
			<div
				className="panel panel-default page"
				style={this.props.style}
			>
				{ this.props.title ? header : null }
				<Pagination className="my-pagination"
					bsSize={this.props.bsSize}
					maxButtons={4}
					items={this.props.children.length || 1}
					activePage={this.state.activePage}
				>
					<Pagination.First onClick={this.firstPage} />
					<Pagination.Prev onClick={this.prevPage} />
					{items}
					<Pagination.Next onClick={this.nextPage} />
					<Pagination.Last onClick={this.lastPage} />
				</Pagination>
				<div className="page-children-wrapper" style={{
					height: this.props.height
				}}>
					{this.props.children.map( ( elem, idx ) => {
						return ( <span
							className={this.state.activePage-1 !== idx ? 'invisible-page' : 'visible-page'}
							key={idx}
						>
							{elem}
						</span> );
					})}
				</div>
			</div>
		);
	}
}


// TYPES //

Pages.propTypes = {
	bsSize: PropTypes.oneOf([
		'default',
		'lg',
		'large',
		'sm',
		'small',
		'xs',
		'xsmall'
	]),
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	onSelect: PropTypes.func,
	style: PropTypes.object,
	title: PropTypes.string
};

Pages.defaultProps = {
	bsSize: 'default',
	height: null,
	onSelect() {},
	style: {},
	title: ''
};


// EXPORTS //

export default Pages;
