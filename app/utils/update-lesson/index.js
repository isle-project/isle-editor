// UPDATE LESSON //

function updateLesson() {
	const lesson = window.lesson || global.lesson;
	if ( lesson && !lesson.unmounted ) {
		console.log( 'Update lesson...' );
		lesson.forceUpdate();
	}
} // end FUNCTION updateLesson()


// EXPORTS //

export default updateLesson;
