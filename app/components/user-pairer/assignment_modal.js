// MODULES //

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import hasOwnProp from '@stdlib/assert/has-own-property';


// FUNCTIONS //

function renderTable( assignments ) {
	const rows = [];
	for ( let key in assignments ) {
		if ( hasOwnProp( assignments, key ) ) {
			const val = assignments[ key ];
			rows.push( <tr>
				<td>{`${val.name} (${key})`}</td>
				<td>{`${val.from.name} (${val.from.email})`}</td>
				<td>{`${val.to.name} (${val.to.email})`}</td>
			</tr> );
		}
	}
	return ( <Table bordered size="sm" >
		<thead>
			<tr>
				<th>Email</th>
				<th>Receive From</th>
				<th>Send To</th>
			</tr>
		</thead>
		<tbody>
			{rows}
		</tbody>
	</Table> );
}


// MAIN //

const AssignmentModal = ( props ) => {
	return (
		<Modal
			show={props.show}
			onHide={props.onHide}
			dialogClassName="modal-90w"
			backdropClassName="modal-backdrop-second-order"
			style={{
				minHeight: '300px',
				boxShadow: '0 0 10px black',
				zIndex: 2000
			}}
		>
			<Modal.Header closeButton>
				<Modal.Title as="h3">
					Assignments
				</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ overflowY: 'scroll', maxHeight: 0.8 * window.innerHeight }} >
				{renderTable( props.assignments )}
			</Modal.Body>
		</Modal>
	);
};


// EXPORTS //

export default AssignmentModal;
