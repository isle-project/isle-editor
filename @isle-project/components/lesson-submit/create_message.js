// MAIN //

/**
 * Creates an email message object.
 *
 * @private
 * @param {Object} session - session object
 * @param {string} message - message to send
 * @param {Function} t - translate function
 * @returns {Object} email message object
 */
 function createMessage( session, message, t ) {
	return {
		text: t('lesson-completed-msg', {
			name: session.user.name,
			lessonName: session.lessonName,
			namespaceName: session.namespaceName,
			msg: message || ''
		}),
		subject: `${session.lessonName} ${t('successfully-completed')}!`
	};
}


// EXPORTS //

export default createMessage;
