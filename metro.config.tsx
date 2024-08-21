const { getDefaultConfig } = require('expo/metro-config')

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname , {
    // Enable CSS Support
    isCSSEnabled: true
})

module.exports = config