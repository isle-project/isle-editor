// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import SortableTree from 'react-sortable-tree';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import omit from '@stdlib/utils/omit';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app


// MAIN //

/**
* A thin wrapper around [react-sortable-tree](https://www.npmjs.com/package/react-sortable-tree) that supports all properties of said component.
*
* @property {string} title - header title
*/
class Tree extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			treeData: props.treeData,
			searchString: ''
		};
	}

	handleSearchOnChange = e => {
		this.setState({
			searchString: e.target.value
		});
	};

	render() {
		const props = omit( this.props, 'treeData' );
		return (
			<Card>
				<Card.Header style={{ minHeight: 80, position: 'relative' }}>
					<Card.Title as="h2">{this.props.title}</Card.Title>
					<div style={{ position: 'absolute', top: 10, right: 30, padding: 10 }}>
						<FormControl style={{ float: 'right', width: 200, marginLeft: 20 }} type="text" onChange={this.handleSearchOnChange} />
						<span className="title" style={{ float: 'right' }}>{this.props.t('search')}: </span>
					</div>
				</Card.Header>
				<Card.Body>
					<div style={{ width: 900, height: 600 }}>
						<SortableTree
							treeData={this.state.treeData}
							searchQuery={this.state.searchString}
							onChange={( treeData ) => {
								this.setState({ treeData });
							}}
							{...props}
						/>
					</div>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

Tree.propTypes = {
	title: PropTypes.string
};

Tree.defaultProps = {
	title: null
};


// EXPORTS //

export default withTranslation( 'General' )( Tree );
