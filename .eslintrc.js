module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:storybook/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.js", "prettier.config.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: ".",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "jest"],
  settings: {
    "import/extensions": [".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: "tsconfig.json",
      },
      node: true,
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/namespace": "off",
    "import/no-cycle": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "react/jsx-no-useless-fragment": "off",
    "import/no-extraneous-dependencies": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
    "react-hooks/exhaustive-deps": "off",
    "object-shorthand": "error",
    "no-console": "warn",
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "all",
        argsIgnorePattern: "^_",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-void": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "react/no-unknown-property": [
      2,
      {
        ignore: ["jsx", "global"],
      },
    ],
    "react/require-default-props": "off",
    "@typescript-eslint/no-misused-promises": "off",
  },
  overrides: [
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "import/no-default-export": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["src/pages/**/*.tsx", "src/pages/**/*.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: ["**/*.styles.ts"],
      rules: {
        "no-nested-ternary": "off",
      },
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
      },
    },
  ],
};
