// MAIN //

const createEditMenu = ( i18n ) => {
	return {
		label: i18n.t('EditorMenu:edit'),
		submenu: [
			{
				label: i18n.t('EditorMenu:undo'),
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
				label: i18n.t('EditorMenu:redo'),
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
			{ role: 'cut', label: i18n.t('EditorMenu:cut') },
			{ role: 'copy', label: i18n.t('EditorMenu:copy') },
			{ role: 'paste', label: i18n.t('EditorMenu:paste') },
			{ role: 'delete', label: i18n.t('EditorMenu:delete') },
			{ role: 'selectall', label: i18n.t('EditorMenu:select-all') }
		]
	};
};


// EXPORTS //

export default createEditMenu;
