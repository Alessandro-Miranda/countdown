const path = require('path');

module.exports = {
    entry: {
        countdown: './build/browser.js'
    },
    output: {
        filename: '[name].browser.js',
        path: path.join(__dirname, 'build')
    },
    mode: 'production'
}