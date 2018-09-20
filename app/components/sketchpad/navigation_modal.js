// MODULES //

import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Modal from 'react-bootstrap/lib/Modal';
import PropTypes from 'prop-types';
import incrspace from '@stdlib/math/utils/incrspace';
import ceil from '@stdlib/math/base/special/ceil';
import sqrt from '@stdlib/math/base/special/sqrt';
import min from '@stdlib/math/base/special/min';


// MAIN //

class NavigationModal extends Component {
	render() {
		let bsSize = 'default';
		if ( this.props.noPages > 50 ) {
			bsSize = 'large';
		}
		const perRow = ceil( sqrt( this.props.noPages ) );
		const rows = incrspace( 0, ceil( this.props.noPages / perRow ), 1 );
		return ( <Modal
			onHide={this.props.onHide}
			show={this.props.show}
			id="sketch-goto-modal"
			container={this.props.container}
			bsSize={bsSize}
		>
			<Modal.Header closeButton>
				<Modal.Title>Jump to Page:</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{rows.map( ( row ) => {
					const no = min( this.props.noPages-(row*perRow), perRow );
					const cells = incrspace( 0, no, 1 );
					return (
						<Nav
							key={row} justified bsStyle="pills"
							onSelect={this.props.onSelect}
						>
							{cells.map( ( e, i ) => {
								const page = i + perRow*row;
								return ( <NavItem key={i} eventKey={page}>
									Page {page+1}
								</NavItem> );
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
