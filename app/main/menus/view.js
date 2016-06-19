// VIEW MENU //

const viewMenu = {
	label: 'View',
	submenu: [
		{
			label: 'Reload',
			accelerator: 'CmdOrCtrl+R',
			click( item, focusedWindow ) {
				if ( focusedWindow ) {
					focusedWindow.reload();
				}
			}
		},
		{
			label: 'Toggle Full Screen',
			accelerator: ( function getAccelerator() {
				if ( process.platform === 'darwin' ) {
					return 'Ctrl+Command+F';
				}
				return 'F11';
			}() ),
			click( item, focusedWindow ) {
				if ( focusedWindow ) {
					focusedWindow.setFullScreen( !focusedWindow.isFullScreen() );
				}
			}
		},
		{
			label: 'Toggle Developer Tools',
			accelerator: ( function getAccelerator() {
				if ( process.platform === 'darwin' ) {
					return 'Alt+Command+I';
				}
				return 'Ctrl+Shift+I';
			}() ),
			click( item, focusedWindow ) {
				if ( focusedWindow ) {
					focusedWindow.webContents.toggleDevTools();
				}
			}
		}
	]
};

if ( process.platform === 'darwin' ) {
	viewMenu.submenu.push({
		type: 'separator'
	}, {
		label: 'Bring All to Front',
		role: 'front'
	});
}


// EXPORTS //

export default viewMenu;
