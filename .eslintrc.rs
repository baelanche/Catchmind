module.exports = {
    env: {
      browser: true, //eslint가 js가 browser, back, front에서 동작하는지 체크함
      es6: true,
      node: true
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module"
    },
    rules: {
      "no-console": "off" //eslint가 console.log를 허용하게 함
    }
  };