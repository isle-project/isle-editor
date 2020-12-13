// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'ChatButton' );


// MAIN //

const ChatButton = Loadable( () => import( /* webpackChunkName: "ChatButton" */ './main.js' ) );


// EXPORTS //

export default ChatButton;
