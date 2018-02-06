module.exports = wallaby => {
  return {
    files: ['packages/**/*.ts*', '!packages/**/*.test.ts*'],
    tests: ['packages/**/*.test.ts*'],
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({ module: 'es2015' }),
    },
    preprocessors: {
      '**/*.js': file =>
        require('babel-core').transform(file.content, {
          sourceMap: true,
          plugins: ['transform-es2015-modules-commonjs'],
        }),
    },
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',
  }
}
