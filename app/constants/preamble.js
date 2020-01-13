// MAIN //

const preamble = `title: Lesson
author: John Doe
date: <today>
language: en-US
state:
server: ${localStorage.getItem( 'server' ) || 'https://isle.stat.cmu.edu'}
license: CC BY 4.0 [https://creativecommons.org/licenses/by/4.0]`;


// EXPORTS //

export default preamble;
