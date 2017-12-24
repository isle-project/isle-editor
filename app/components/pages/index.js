// MODULES //

import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './pages.css';


// MAIN //

class Pages extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			activePage: 1
		};
	}

	handleSelect = ( eventKey ) => {
		this.props.onSelect( eventKey );
		this.setState({
			activePage: eventKey
		});
	}

	nextPage() {
		const nPages = this.props.children.length || 1;
		if ( this.state.activePage === nPages ) {
			return this.props.onSelect( this.state.activePage );
		}
		this.props.onSelect( this.state.activePage + 1 );
		this.setState({
			activePage: this.state.activePage + 1
		});
	}

	prevPage() {
		if ( this.state.activePage === 1 ) {
			return this.props.onSelect( this.state.activePage );
		}
		this.props.onSelect( this.state.activePage - 1 );
		this.setState({
			activePage: this.state.activePage - 1
		});
	}

	jumpTo( page ) {
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
		return (
			<div
				className="panel panel-default page"
			>
				{ this.props.title ? header : null }
				<Pagination className="my-pagination"
					prev next first last
					bsSize="medium"
					maxButtons={4}
					items={this.props.children.length || 1}
					activePage={this.state.activePage}
					onSelect={this.handleSelect}
				/>
				<div className="page-children-wrapper" style={{
					height: this.props.height,
					overflowY: 'scroll',
					padding: '5px',
					borderWidth: '1px 0px 0px 0px',
					borderColor: 'transparent',
					borderStyle: 'solid',
					background: 'transparent'
				}}>
					{this.props.children[ this.state.activePage-1 ] || this.props.children}
				</div>
			</div>
		);
	}
}


// TYPES //

Pages.propTypes = {
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	onSelect: PropTypes.func,
	title: PropTypes.string
};

Pages.defaultProps = {
	height: null,
	onSelect() {},
	title: ''
};


// EXPORTS //

export default Pages;
