// MAIN //

function updateLesson() {
	const lesson = window.lesson || global.lesson;
	if ( lesson && !lesson.unmounted ) {
		console.log( 'Update lesson...' ); // eslint-disable-line no-console
		lesson.forceUpdate();
	}
}


// EXPORTS //

export default updateLesson;
