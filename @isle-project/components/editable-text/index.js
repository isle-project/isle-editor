// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const EditableText = Loadable( () => import( /* webpackChunkName: "EditableText" */ './main.js' ) );


// EXPORTS //

export default EditableText;
