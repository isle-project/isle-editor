// MODULES //

import React from 'react';
import ReactTable from 'react-table';
import Tooltip from 'components/tooltip';
import Panel from 'components/panel';
import Draggable from 'components/draggable';
import ChatButton from 'components/chat-button';


// MAIN //

const ResponsesTable = ( props ) => {
	const responsesPanel = <Draggable>
		<Panel className="engagement-meter-panel" header="Poll Responses" onHide={props.onHide}
			minimizable style={{ width: 400 }}
		>
			<ReactTable
				className="engagement-table"
				showPageSizeOptions={false}
				data={props.responses}
				resizable={false}
				sortable={false}
				columns={[
					{
						Header: 'Pic',
						id: 'pic',
						accessor: ( d ) => {
							const { userList } = props.session;
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
									src={`${props.session.server}/thumbnail/${row.value}`}
								/>
							);
						},
						maxWidth: 38,
						minWidth: 38,
						style: { color: 'darkslategrey' }
					},
					{
						Header: 'Name',
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
						Header: 'Resp',
						id: 'responseCol',
						accessor: 'value',
						Cell: props.renderValue,
						maxWidth: 38,
						minWidth: 38
					},
					{
						Header: 'Chat',
						Cell: ( row ) => {
							const chatID = `Chat with ${row.original.name}`;
							return <ChatButton tooltip="Start chat with student" showTooltip={false} for={chatID} />;
						}
					}
				]}
				pageSize={8}
			/>
		</Panel>
	</Draggable>;
	return responsesPanel;
};


// EXPORTS //

export default ResponsesTable;
