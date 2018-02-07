const path = require('path')

const webpackConfig = require('react-scripts-ts/config/webpack.config.dev.js')
webpackConfig.resolve.alias = webpackConfig.resolve.alias || {}
webpackConfig.resolve.alias['rsg-components/Wrapper'] = path.join(__dirname, 'src/styleguidist/Wrapper')

module.exports = {
    components: 'src/components/**/*.{ts,tsx}',
    propsParser: require('react-docgen-typescript').parse,
    webpackConfig,
    ignore: [
        'src/setupTests.ts',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.d.ts'
    ]
}