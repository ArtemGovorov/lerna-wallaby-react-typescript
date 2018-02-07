const path = require('path')

module.exports = wallaby => {
  process.env.NODE_PATH += path.delimiter + path.join(wallaby.projectCacheDir, 'packages')
  return {
    files: ['packages/**/*.+(ts|tsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)', '!packages/**/node_modules/**', '!packages/**/*.test.ts*'],
    tests: ['packages/**/*.test.ts*', '!packages/**/node_modules/**'],
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({ module: 'commonjs', jsx: 'React' }),
    },
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',
    setup: wallaby => {
      const path = require('path')
      const jestConfig = require(path.join(wallaby.localProjectDir, 'packages/cms-exercise/node_modules/react-scripts-ts/scripts/utils/createJestConfig'))(p => require.resolve(path.join(wallaby.localProjectDir, 'packages/cms-exercise/node_modules', 'react-scripts-ts/' + p)))
      Object.keys(jestConfig.transform || {}).forEach(k => ~k.indexOf('^.+\\.(js|jsx') && void delete jestConfig.transform[k])
      delete jestConfig.testEnvironment
      jestConfig.setupTestFrameworkScriptFile = path.join(wallaby.projectCacheDir, 'packages/cms-exercise/src/setupTests')
      jestConfig.modulePaths = [path.join(wallaby.localProjectDir, 'packages/cms-exercise/node_modules')]
      wallaby.testFramework.configure(jestConfig)
    },
  }
}
