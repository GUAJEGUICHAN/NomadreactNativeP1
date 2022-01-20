module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: [
    'react',
  ],
  // parser: "babel-eslint",
  parser: "@babel/eslint-parser",
  rules: {
    "react/no-unstable-nested-components": [
      "off" | "warn" | "error",
      { "allowAsProps": true | false }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".ts"] }]
  },

};
