"use strict";

const eslintPluginExample = require("eslint-custom-plugin-enforce-foo-bar-tstahl");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            ecmaVersion: "latest",
        },
        plugins: {"example": eslintPluginExample},
        rules: {
            "example/enforce-foo-bar": "error"
        }
    }
]