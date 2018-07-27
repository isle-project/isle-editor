// MODULES //

import Loadable from 'editor-components/loadable';


// MAIN //

const LoadableComponent = Loadable( () => import( /* webpackChunkName: "instructor_view" */ 'components/statusbar/instructor-view' ) );


// EXPORTS //

export default LoadableComponent;
