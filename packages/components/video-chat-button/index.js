// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const VideoChatButton = Loadable( () => import( /* webpackChunkName: "VideoChatButton" */ './main.js' ) );


// EXPORTS //

export default VideoChatButton;
