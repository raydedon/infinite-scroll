const clsx = require('clsx');

// this is a weird hack to allow us to get this to work both in the actual build and also the unit tests.
// For some reason one of the builds requires importing it as `import * as clsx from 'clsx'` and the other requires importing it as `import clsx from 'clsx'`
// this covers both of those scenarios.  Try removing if we adjust the build workflow.
// This whole file can be removed if the unit tests using clsx pass and components using clsx render correctly.
module.exports = clsx;
clsx.default = clsx;
