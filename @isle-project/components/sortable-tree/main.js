// MODULES //

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import SortableTree from '@nosferatu500/react-sortable-tree';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import { withPropCheck } from '@isle-project/utils/prop-check';
import '@nosferatu500/react-sortable-tree/style.css'; // This only needs to be imported once in your app


// MAIN //

/**
* A thin wrapper around [react-sortable-tree](https://www.npmjs.com/package/react-sortable-tree) that supports all properties of said component.
*
* @property {(string|node)} title - header title
* @property {Array<object>} treeData - array of objects with `title` (primary label for the node),
`subtitle` (secondary label), `expanded` (display the children of the node if set to true), and/or
`children` (array of child nodes belonging to the respective node)
*/
const Tree = ({ title, treeData, ...rest }) => {
	const [ searchString, setSearchString ] = useState( '' );
	const [ data, setData ] = useState( treeData );
	const { t } = useTranslation( 'general' );
	const handleSearchOnChange = useCallback( ( e ) => {
		setSearchString( e.target.value );
	}, [] );
	return (
		<Card>
			<Card.Header style={{ minHeight: 80, position: 'relative' }}>
				{isString( title ) ? <Card.Title as="h2">{title}</Card.Title> : title}
				<div style={{ position: 'absolute', top: 10, right: 30, padding: 10 }}>
					<FormControl style={{ float: 'right', width: 200, marginLeft: 20 }} type="text" onChange={handleSearchOnChange} />
					<span className="title" style={{ float: 'right' }}>{t('search')}: </span>
				</div>
			</Card.Header>
			<Card.Body>
				<div style={{ width: 900, height: 600 }}>
					<SortableTree
						treeData={data}
						searchQuery={searchString}
						onChange={( newTreeData ) => {
							setData( newTreeData );
						}}
						{...rest}
					/>
				</div>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

Tree.propTypes = {
	treeData: PropTypes.arrayOf( PropTypes.object ).isRequired,
	title: PropTypes.oneOfType( [ PropTypes.string, PropTypes.node ] )
};

Tree.defaultProps = {
	title: null
};


// EXPORTS //

export default withPropCheck( Tree );
