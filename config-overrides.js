module.exports = function (config, _env) {
    // Add customizations to the Webpack config here
    config.ignoreWarnings = [
        (warning) => warning.message.includes('Failed to parse source map'),
    ];

    return config;
};