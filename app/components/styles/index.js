const styles = {
	line: {
		position: 'static',
		display: 'inline',
		height: '32px',
		width: '100%',
		float: 'left'
	},
	icon: {
		height: '32px',
		width: '32px',
		opacity: 0.5,
		':hover': {
			opacity: 1,
			cursor: 'pointer'
		}
	},
	confused: {
		position: 'relative',
		backgroundImage: 'url(img/confused.svg)',
		backgroundSize: '100% auto'
	},
	feedback: {
		position: 'relative',
		backgroundImage: 'url(img/feedback.svg)',
		backgroundSize: '100% auto'
	},
	understood: {
		position: 'relative',
		backgroundImage: 'url(img/lightbulb.svg)',
		backgroundSize: '100% auto'
	},
	clear: {
		clear: 'both',
		width: '100%',
		height: '0px'
	},
	tooltip: {
		display: 'inline-block',
		border: '1px solid #aeaeae',
		borderRadius: '4px',
		marginLeft: '9px',
		height: 'auto',
		width: '140px',
		background: 'lightblue',
		textAlign: 'center',
		fontFamily: 'Open Sans, sans-serif',
		fontSize: '12px',
		padding: '4px'
	},
	response: {
		right: '2%',
		paddingLeft: 12,
		paddingRight: 12,
		paddingTop: 6,
		paddingBottom: 6,
		background: 'lightblue',
		position: 'absolute',
		width: 300,
		height: 'auto',
		zIndex: 1000
	},
	responseParagraph: {
		fontFamily: 'Open Sans, sans-serif',
		fontSize: '1.3em',
		width: '100%',
		margin: 0
	},
	feedbackForm: {
		padding: 12,
		position: 'absolute',
		left: '35%',
		top: '10%',
		width: '30%',
		height: '50%',
		background: 'lightblue',
		fontFamily: 'Open Sans, sans-serif',
		boxShadow: '0 0 6px rgb(32,32,32)',
		zIndex: 1000
	},
	closeButton: {
		float: 'right',
		fontFamily: 'Open Sans, sans-serif',
		color: '#ffffff',
		fontSize: '12px',
		background: '#0b4b5e',
		padding: '5px 5px 5px 5px',
		textDecoration: 'none',
		':hover': {
			background: '#3cb0fd',
			textDecoration: 'none'
		}
	},
	submitButton: {
		position: 'absolute',
		left: '2%',
		bottom: '4%',
		WebkitBorderRadius: 6,
		MozBorderRadius: 6,
		borderRadius: 6,
		fontFamily: 'Open Sans, sans-serif',
		color: '#ffffff',
		fontSize: 16,
		background: '#0b4b5e',
		padding: 12,
		textDecoration: 'none',
		':hover': {
			background: '#3cb0fd',
			textDecoration: 'none'
		}
	},
	feedbackTitle: {
		position: 'absolute',
		top: '2%',
		left: '2%',
		height: 'auto',
		fontSize: '36px'
	},
	feedbackFormElem: {
		display: 'inline-block',
		position: 'absolute',
		top: '15%',
		height: '85%',
		left: '2%',
		width: '96%'
	},
	feedbackTextArea: {
		position: 'absolute',
		width: '96%',
		left: '2%',
		top: '35%',
		height: '40%',
		resize: 'none'
	},
	feedbackCheckBox: {
		marginBottom: 8,
		marginRight: 6,
		color: 'rgb(64,64,64)'
	}
};


// EXPORTS //

export default styles;
