# Testing Hooks Refactor

Utilize hooks to refactor test suite.

## Setup

1. `clone` down the repo
2. `cd` into the repo's root directory
3. Run `npm install` to install dependencies.
4. Run `npm test` to run tests.

##To add a linter to your project using ESLint, follow these steps:

Install ESLint as a development dependency by running the following command in your project's root directory:
```npm install --save-dev eslint
```

Create a configuration file named .eslintrc in the project's root directory. Open the file and add the provided linting configuration.
```
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "mocha": true,
    "jquery": true
  },
  "extends": "eslint:recommended",
  "parserOptions": { "sourceType": "module" },
  "rules": {
    "eqeqeq": ["error", "always"],
    "brace-style": "error",
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "curly": "error",
    "semi-spacing": ["error", { "before": false, "after": true }],
    "indent": ["warn", 2],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "linebreak-style": ["error", "unix"],
    "max-len": ["warn", 80],
    "new-cap": ["error", { "newIsCap": true }],
    "object-shorthand": ["error", "always"],
    "space-before-blocks": ["error", { "functions": "always", "keywords": "always", "classes": "always" }],
    "space-infix-ops": ["error", { "int32Hint": false }]
  }
}
```
This configuration includes rules for common code style and best practices. Feel free to customize the rules based on your project's requirements.

Add a linting script to your `package.json` file. Open the file and locate the "scripts" section. Add the "lint" script:
```
"scripts": {
  "lint": "eslint ."
}
```
This script allows you to run ESLint on your project by executing npm run lint in the command line.

Once you have completed these steps, you can run ESLint by running the lint script (npm run lint) in your project's root directory. It will analyze your JavaScript files based on the linting rules and report any violations or warnings in the console.

###To create the .eslintrc configuration file and add the provided linting configuration, follow these steps:

Navigate to your project's root directory using the command line.

Create a new file named .eslintrc in the project's root directory. You can use any text editor or the command line to create the file. For example, using the command line in Unix-based systems, you can run:
```touch .eslintrc```
Open the .eslintrc file in a text editor and add the following content:
```
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "mocha": true,
    "jquery": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "eqeqeq": ["error", "always"],
    "brace-style": "error",
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "curly": "error",
    "semi-spacing": ["error", { "before": false, "after": true }],
    "indent": ["warn", 2],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "linebreak-style": ["error", "unix"],
    "max-len": ["warn", 80],
    "new-cap": ["error", { "newIsCap": true }],
    "object-shorthand": ["error", "always"],
    "space-before-blocks": ["error", { "functions": "always", "keywords": "always", "classes": "always" }],
    "space-infix-ops": ["error", { "int32Hint": false }]
  }
}
```
This configuration file includes the provided linting rules and settings. It enables linting for browser, CommonJS, ES6, Mocha, and jQuery environments. The rules defined enforce coding style and best practices.

Save the .eslintrc file.

You have now created the .eslintrc configuration file and added the provided linting configuration. You can customize the rules as per your project's requirements. Running ESLint with this configuration will analyze your JavaScript files and report any linting issues or warnings based on the defined rules.
