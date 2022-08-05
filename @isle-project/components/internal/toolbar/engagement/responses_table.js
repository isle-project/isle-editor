// MODULES //

import React from 'react';
import { withTranslation } from 'react-i18next';
import ReactTable from 'react-table';
import Tooltip from '@isle-project/components/tooltip';
import Panel from '@isle-project/components/panel';
import Draggable from '@isle-project/components/draggable';
import ChatButton from '@isle-project/components/internal/chat-button';


// MAIN //

const ResponsesTable = ({ session, renderValue, responses, t, onHide }) => {
	return ( <Draggable dragHandleClassName="card-header" >
		<Panel className="engagement-meter-panel" header={t( 'poll-responses')} onHide={onHide}
			minimizable trapFocus style={{ width: 400 }}
		>
			<ReactTable
				className="engagement-table"
				showPageSizeOptions={false}
				data={responses}
				resizable={false}
				sortable={false}
				columns={[
					{
						Header: 'Pic',
						id: 'pic',
						accessor: ( d ) => {
							const { userList } = session;
							for ( let i = 0; i < userList.length; i++ ) {
								if ( userList[ i ].name === d.name ) {
									return userList[ i ].picture;
								}
							}
							return '';
						},
						Cell: row => {
							return (
								<img
									className="engagement-table-pic" alt="User thumbnail"
									src={`${session.server}/thumbnail/${row.value}`}
								/>
							);
						},
						maxWidth: 38,
						minWidth: 38,
						style: { color: 'darkslategrey' }
					},
					{
						Header: t( 'name' ),
						id: 'nameCol',
						accessor: 'name',
						width: 180,
						Cell: ( row ) => {
							return ( <Tooltip tooltip={`${row.value} (${row.original.email})`} >
								<span className="engagement-table-name" >{row.value}</span>
							</Tooltip> );
						}
					},
					{
						Header: t( 'response' ),
						id: 'responseCol',
						accessor: 'value',
						Cell: renderValue,
						maxWidth: 38,
						minWidth: 38
					},
					{
						Header: t( 'chat' ),
						Cell: ( row ) => {
							const chatID = `Chat with ${row.original.name}`;
							return <ChatButton tooltip={t( 'chat-tooltip' )} showTooltip={false} for={chatID} />;
						}
					}
				]}
				pageSize={8}
			/>
		</Panel>
	</Draggable> );
};


// EXPORTS //

export default withTranslation( 'internal/toolbar' )( ResponsesTable );
