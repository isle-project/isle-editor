// MODULES //

import React from 'react';
import { withTranslation } from 'react-i18next';
import ReactTable from 'react-table';
import Tooltip from 'components/tooltip';
import Panel from 'components/panel';
import Draggable from 'components/draggable';
import ChatButton from 'components/chat-button';


// MAIN //

const ResponsesTable = ( props ) => {
	const responsesPanel = <Draggable dragHandleClassName="card-header" >
		<Panel className="engagement-meter-panel" header={props.t( 'poll-responses')} onHide={props.onHide}
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
						Header: props.t( 'name' ),
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
						Header: props.t( 'response' ),
						id: 'responseCol',
						accessor: 'value',
						Cell: props.renderValue,
						maxWidth: 38,
						minWidth: 38
					},
					{
						Header: props.t( 'chat' ),
						Cell: ( row ) => {
							const chatID = `Chat with ${row.original.name}`;
							return <ChatButton tooltip={props.t( 'chat-tooltip' )} showTooltip={false} for={chatID} />;
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

export default withTranslation()( ResponsesTable );
