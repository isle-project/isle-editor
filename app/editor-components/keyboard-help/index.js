// MODULES //

import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
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
		const { t } = this.props;
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
									{t('editing-commands')}
								</th>
								<th>
									{t('windows-linux')}
								</th>
								<th>
									{t('mac')}
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									{t('cut-line')}
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
									{t('copy-line')}
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
									{t('delete-line')}
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
									{t('scroll-line')}
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
									{t('go-beginning-line')}
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
									{t('go-beginning-file')}
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
									{t('fold-region')}
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
									{t('fold-all-regions')}
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
									{t('search-replace')}
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
									{t('find')}
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
									{t('replace')}
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
									{t('select-all')}
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
									{t('multi-cursors')}
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
									{t('insert-cursor')}
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
									{t('insert-cursor-above')}
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
									{t('insert-cursor-below')}
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
									{t('undo-last-cursor')}
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
									{t('insert-cursor-eol')}
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
									{t('other')}
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
									{t('command-panel')}
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
									{t('accessibility-help')}
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

export default React.memo( withTranslation( 'Editor' )( KeyboardHelp ) );

