// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const ChatButton = Loadable( () => import( /* webpackChunkName: "ChatButton" */ './main.js' ) );


// EXPORTS //

export default ChatButton;
