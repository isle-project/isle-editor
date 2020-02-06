import * as actions from './../actions';

export default {
	label: 'File',
	submenu: [ {
		label: 'New File',
		accelerator: 'CmdOrCtrl+N',
		click: ( menuItem, browserWindow ) => {
			actions.newFile({ browserWindow });
		}
	},
	{
		label: 'New From Template',
		submenu: [
			{
				label: 'Data Explorer'
			},
			{
				label: 'Lab'
			},
			{
				label: 'Lecture Slides'
			},
			{
				label: 'Video Lecture'
			}
		]
	},
	{
		label: 'Open File',
		accelerator: 'CmdOrCtrl+O',
		click: ( menuItem, browserWindow ) => {
			actions.open({ browserWindow });
		}
	},
	{
		type: 'separator'
	},
	{
		label: 'Save File',
		accelerator: 'CmdOrCtrl+S',
		click: ( menuItem, browserWindow ) => {
			actions.save({ browserWindow });
		}
	},
	{
		label: 'Save File As',
		accelerator: 'Shift+CmdOrCtrl+S',
		click: ( menuItem, browserWindow ) => {
			actions.saveAs({ browserWindow });
		}
	},
	{
		type: 'separator'
	},
	{
		label: 'Create Template...',
		submenu: [
			{
				label: 'From File Including Preamble'
			},
			{
				label: 'From File Excluding Preamble'
			}
		]
	},
	{
		label: 'Open Recent',
		submenu: []
	},
	{
		type: 'separator'
	},
	{
		label: 'Quit',
		accelerator: 'CmdOrCtrl+Q',
		click: ( menuItem, browserWindow ) => {
			actions.closeApp({ browserWindow });
		}
	} ]
};
