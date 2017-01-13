// EXPORTS //

export default {
	label: 'Edit',
	submenu: [
		{
			label: 'Undo',
			accelerator: 'CmdOrCtrl+Z',
			click: ( menuItem, browserWindow ) => {
				browserWindow.webContents.sendInputEvent({
					type: 'keyDown',
					keyCode: 'Ctrl'
				});
				browserWindow.webContents.sendInputEvent({
					type: 'keyDown',
					keyCode: 'Z',
					modifiers: [ 'control' ]
				});
			}
		},
		{
			label: 'Redo',
			accelerator: 'CmdOrCtrl+Y',
			click: ( menuItem, browserWindow ) => {
				browserWindow.webContents.sendInputEvent({
					type: 'keyDown',
					keyCode: 'Ctrl'
				});
				browserWindow.webContents.sendInputEvent({
					type: 'keyDown',
					keyCode: 'Y',
					modifiers: [ 'control' ]
				});
			}
		},
		{ type: 'separator' },
		{ role: 'cut' },
		{ role: 'copy' },
		{ role: 'paste' },
		{ role: 'delete' },
		{ role: 'selectall' }
	]
};
