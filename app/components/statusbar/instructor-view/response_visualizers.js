// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import keys from '@stdlib/utils/keys';


// MAIN //

class ResponseVisualizers extends Component {
	render() {
		const nUsers = this.props.session.userList.length;
		const visualizers = this.props.session.responseVisualizers;
		const ids = keys( visualizers );
		const list = new Array( ids.length );
		for ( let i = 0; i < ids.length; i++ ) {
			const nInfo = visualizers[ ids[ i ] ].ref.state.nInfo;
			const infoRate = ( nInfo / nUsers ) * 100.0;
			list[ i ] = ( <ListGroupItem
				key={i}
				style={{
					background: 'lightgrey',
					padding: '0.4rem 1rem'
				}}
			>
				<label style={{ margin: 0 }}>{ids[ i ]}</label>
				<ProgressBar
					variant="info"
					now={infoRate}
					max={100} min={0}
					label={`${nInfo} / ${nUsers}`}
					style={{ width: '80%', float: 'right', marginTop: '4px' }}
				/>
			</ListGroupItem> );
		}
		return ( <div>
			<ListGroup>
				{list}
			</ListGroup>
		</div> );
	}
}


// PROPERTIES //

ResponseVisualizers.propTypes = {
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default ResponseVisualizers;
