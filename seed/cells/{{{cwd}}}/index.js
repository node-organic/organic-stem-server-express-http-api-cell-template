const Cell = require('organic-stem-cell')

let cellInstance = new Cell({
  dnaSourcePaths: [require('lib/full-dna-path')],
  buildBranch: '{{{build-branch}}}',
  cellRoot: __dirname
})
if (module.parent) {
  module.exports = cellInstance
} else {
  cellInstance.start()
}
