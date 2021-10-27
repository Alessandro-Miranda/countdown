const path = require('path');

module.exports = {
    entry: {
        app: './build/countdownBrowser.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist.browser')
    }
}