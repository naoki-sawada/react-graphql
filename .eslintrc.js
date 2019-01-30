module.exports = {
  "extends": [
    "airbnb",
    "prettier",
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
  },
  "parser": "babel-eslint",
  "plugins": [
    "prettier",
  ],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": 1,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "require-yield": 0,
    "object-shorthand": 0,
    "import/no-unresolved": 0,
    "no-useless-constructor": 1,
  },
  "settings": {
    "import/resolver": "babel-plugin-root-import",
  },
};
