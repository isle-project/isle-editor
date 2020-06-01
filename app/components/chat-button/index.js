// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const ChatButton = Loadable( () => import( /* webpackChunkName: "ChatButton" */ './main.js' ) );


// EXPORTS //

export default ChatButton;
