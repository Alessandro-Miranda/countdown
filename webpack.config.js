const path = require('path');

module.exports = {
    entry: {
        app: './build/browser.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'build.browser')
    },
    mode: 'production'
}