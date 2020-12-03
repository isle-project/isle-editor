// MODULES //

import React, { Component } from 'react';
import ReactDraggable from 'react-draggable';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Panel from '@isle-project/components/panel';
import './keyboard_help.css';


// MAIN //

/**
* An ISLE component that shows information about editor keyboard shortcuts
*/
class KeyboardHelp extends Component {
	render() {
		return (
			<ReactDraggable cancel=".cancel" >
				<Panel
					header="Editor Keyboard Shortcuts"
					className="keyboard-helper"
					onHide={this.props.onHide}
				>
					<Table size="sm" className="cancel" >
						<thead>
							<tr>
								<th>
									Editing Commands
								</th>
								<th>
									Windows / Linux
								</th>
								<th>
									Mac
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									Cut line
								</td>
								<td>
									<Badge variant="secondary" >Ctrl</Badge> + <Badge variant="secondary" >X</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌘</Badge> + <Badge variant="secondary" >X</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Copy line
								</td>
								<td>
									<Badge variant="secondary" >Ctrl</Badge> + <Badge variant="secondary" >C</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌘</Badge> + <Badge variant="secondary" >C</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Delete line
								</td>
								<td>
									<Badge variant="secondary" >Ctrl</Badge> + <Badge variant="secondary" >Shift</Badge> + <Badge variant="secondary" >K</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⇧</Badge> + <Badge variant="secondary" >⌘</Badge> + <Badge variant="secondary" >K</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Scroll line up/down
								</td>
								<td>
									<Badge variant="secondary" >Ctrl</Badge> + <Badge variant="secondary" >↑</Badge> / <Badge variant="secondary" >↓</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌃PgUp</Badge> / <Badge variant="secondary" >⌃PgDn</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Go to beginning/end of line
								</td>
								<td>
									<Badge variant="secondary" >Home</Badge> / <Badge variant="secondary" >End</Badge>
								</td>
								<td>
									<Badge variant="secondary" >Home</Badge> / <Badge variant="secondary" >End</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Go to beginning/end of file
								</td>
								<td>
									<Badge variant="secondary" >Ctrl</Badge> + <Badge variant="secondary" >Home</Badge> / <Badge variant="secondary" >End</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌘ ↑</Badge> / <Badge variant="secondary" >⌘ ↓</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Fold/unfold region
								</td>
								<td>
									<Badge variant="secondary" >Ctrl</Badge> + <Badge variant="secondary" >Shift</Badge> + <Badge variant="secondary" >[</Badge> / <Badge variant="secondary" >]</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌥</Badge> + <Badge variant="secondary" >⌘</Badge> + <Badge variant="secondary" >[</Badge> / <Badge variant="secondary" >]</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Fold/unfold all regions
								</td>
								<td>
									<Badge variant="secondary" >Ctrl+K</Badge> <Badge variant="secondary" >Ctrl+0</Badge> / <Badge variant="secondary" >Ctrl+K</Badge> <Badge variant="secondary" >Ctrl+J</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌘K ⌘0</Badge> / <Badge variant="secondary" >⌘K ⌘J</Badge>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<th>
									Search &amp; Replace
								</th>
								<th>
								</th>
								<th>
								</th>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td>
									Find
								</td>
								<td>
									<Badge variant="secondary" >Ctrl</Badge> + <Badge variant="secondary" >F</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌘</Badge> + <Badge variant="secondary" >F</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Replace
								</td>
								<td>
									<Badge variant="secondary" >Ctrl</Badge> + <Badge variant="secondary" >H</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌥</Badge> + <Badge variant="secondary" >⌘</Badge> + <Badge variant="secondary" >F</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Select all occurrences of Find match
								</td>
								<td>
									<Badge variant="secondary" >Alt</Badge> + <Badge variant="secondary" >Enter</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌥</Badge> + <Badge variant="secondary" >Enter</Badge>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<th>
									Multi-Cursors
								</th>
								<th>
								</th>
								<th>
								</th>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td>
									Insert cursor
								</td>
								<td>
									<Badge variant="secondary" >Ctrl</Badge> + <Badge variant="secondary" >click</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌘</Badge> + <Badge variant="secondary" >click</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Insert cursor above
								</td>
								<td>
									<Badge variant="secondary" >Shift</Badge> + <Badge variant="secondary" >Alt</Badge> + <Badge variant="secondary" >↑</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌥</Badge> + <Badge variant="secondary" >⌘</Badge> + <Badge variant="secondary" >↑</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Insert cursor below
								</td>
								<td>
									<Badge variant="secondary" >Shift</Badge> + <Badge variant="secondary" >Alt</Badge> + <Badge variant="secondary" >↓</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌥</Badge> + <Badge variant="secondary" >⌘</Badge> + <Badge variant="secondary" >↓</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Undo last cursor operation
								</td>
								<td>
									<Badge variant="secondary" >Ctrl</Badge> + <Badge variant="secondary" >U</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⌘</Badge> + <Badge variant="secondary" >U</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Insert cursor at end of each line selected
								</td>
								<td>
									<Badge variant="secondary" >Shift</Badge> + <Badge variant="secondary" >Alt</Badge> + <Badge variant="secondary" >I</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⇧</Badge> + <Badge variant="secondary" >⌥</Badge> + <Badge variant="secondary" >I</Badge>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<th>
									Other
								</th>
								<th>
								</th>
								<th>
								</th>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td>
									Command Panel
								</td>
								<td>
									<Badge variant="secondary" >F1</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⇧⌘P</Badge> / <Badge variant="secondary" >F1</Badge>
								</td>
							</tr>
							<tr>
								<td>
									Accessibility Help
								</td>
								<td>
									<Badge variant="secondary" >Shift</Badge> + <Badge variant="secondary" >Alt</Badge> + <Badge variant="secondary" >F1</Badge>
								</td>
								<td>
									<Badge variant="secondary" >⇧⌘P</Badge> / <Badge variant="secondary" >F1</Badge>
								</td>
							</tr>
						</tbody>
					</Table>
				</Panel>
			</ReactDraggable>
		);
	}
}


// EXPORTS //

export default KeyboardHelp;

