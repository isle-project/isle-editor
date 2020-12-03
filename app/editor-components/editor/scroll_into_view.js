// MODULES //

import isHidden from '@isle-project/utils/is-hidden';


// MAIN //

function scrollIntoView( lineNumber, startColumn ) {
	const elem = document.getElementById( 'line-'+lineNumber+'-'+startColumn );
	if ( elem ) {
		if ( isHidden( elem ) ) {
			const clone = elem.cloneNode( true );
			clone.addEventListener( 'click', ( event ) => {
				// Returns original element with the given ID since it was first inserted into the DOM:
				const button = document.getElementById( event.target.id );
				button.click();
			});
			const newDiv = document.createElement( 'div' );
			newDiv.id = 'revealed-hidden-container';
			clone.id = 'revealed-hidden-elem';
			clone.classList.add( 'focus-glow' );
			newDiv.append( clone );
			const lesson = document.getElementById( 'Lesson' );
			lesson.appendChild( newDiv );
			setTimeout( () => {
				newDiv.remove();
			}, 2000 );
		} else {
			elem.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'end'
			});
			elem.classList.add( 'focus-glow' );
			setTimeout( () => {
				elem.classList.remove( 'focus-glow' );
			}, 2000 );
		}
	}
}


// EXPORTS //

export default scrollIntoView;

