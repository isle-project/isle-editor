// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'General' );


// MAIN //

const EditableText = Loadable( () => import( /* webpackChunkName: "EditableText" */ './main.js' ) );


// EXPORTS //

export default EditableText;
