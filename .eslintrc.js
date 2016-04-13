module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            "never",
        ],
        "no-console": [
            "error",
        ],
        "max-len": [
            "error",
            80, 
            {"ignoreUrls": true}
        ],
        "curly": [ 
            "error",
        ],
        "object-curly-spacing": [
            "error", 
            "always"
        ],
        "no-trailing-spaces": [
            "error",
        ],
        "eqeqeq": [
            "error", 
            "allow-null"
        ],
        "newline-before-return": [
            "error"
        ],
        "no-undef": [//no undeclared vars unless global
            "error"
        ],
        "no-unused-vars": [
            "error"
        ]
    }
};


