// MODULES //

import os from 'os';
import pkg from './../../../package.json';


// MAIN //

const template = `
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

<screenshot>

**Link to ISLE lesson**
If applicable, add a link to an ISLE lesson demonstrating the problem.

**ISLE Code**
If applicable, paste the code of the problematic component below:

\`\`\`jsx
<code>
\`\`\`

**Operating System:**
 - ${os.type()} ${os.arch()} ${os.release()}

**Editor Version:**
 - ${pkg.version}

**Additional context**
Add any other context about the problem here.`;


// EXPORTS //

export default template;
