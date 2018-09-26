// MODULES //

import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Modal from 'react-bootstrap/lib/Modal';
import PropTypes from 'prop-types';
import incrspace from '@stdlib/math/utils/incrspace';
import ceil from '@stdlib/math/base/special/ceil';
import sqrt from '@stdlib/math/base/special/sqrt';
import min from '@stdlib/math/base/special/min';


// MAIN //

class NavigationModal extends Component {
	constructor( props) {
		super( props );

		this.state = {
			active: null
		};
	}

	hoverOn = ( event ) => {
		const page = event.target.getAttribute( 'data-rb-event-key' );
		this.setState({
			active: Number( page )
		});
	}

	hoverOff = () => {
		this.setState({
			active: null
		});
	}

	render() {
		let dialogClassName;
		if ( this.props.noPages > 120 ) {
			dialogClassName = 'modal-90w';
		}
		else if ( this.props.noPages > 65 ) {
			dialogClassName = 'modal-75w';
		}
		else if ( this.props.noPages > 50 ) {
			dialogClassName = 'modal-60w';
		}
		else {
			dialogClassName = 'modal-40w';
		}
		const perRow = min( ceil( sqrt( this.props.noPages ) ), 13 );
		const rows = incrspace( 0, ceil( this.props.noPages / perRow ), 1 );
		return ( <Modal
			onHide={this.props.onHide}
			show={this.props.show}
			id="sketch-goto-modal"
			container={this.props.container}
			dialogClassName={dialogClassName}
		>
			<Modal.Header closeButton>
				<Modal.Title as="h4" >Jump to Page:</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{rows.map( ( row ) => {
					const no = min( this.props.noPages-(row*perRow), perRow );
					const cells = incrspace( 0, no, 1 );
					return (
						<Nav
							activeKey={this.state.active}
							variant="pills"
							key={row}
							justify
							onSelect={this.props.onSelect}
						>
							{cells.map( ( e, i ) => {
								const page = i + perRow*row;
								console.log( 'Page: '+page );
								return (
								<Nav.Item
									key={page}
									onMouseEnter={this.hoverOn}
									onMouseLeave={this.hoverOff}
								>
									<Nav.Link eventKey={page}>
										Page {page+1}
									</Nav.Link>
								</Nav.Item> );
							})}
						</Nav>
					);
				})}
			</Modal.Body>
		</Modal> );
	}
}


// PROPERTY TYPES //

NavigationModal.propTypes = {
	container: PropTypes.object.isRequired,
	noPages: PropTypes.number.isRequired,
	onHide: PropTypes.func,
	onSelect: PropTypes.func,
	show: PropTypes.bool.isRequired
};

NavigationModal.defaultProps = {
	onHide() {},
	onSelect() {}
};


// EXPORTS //

export default NavigationModal;
