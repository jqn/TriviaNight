module.exports = {
  root: true,
  extends: "@react-native-community",
  rules: {
    "prettier/prettier": 0, // Disables prettier
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/no-unused-state": "error", // Checks for unused state properties
    "react/no-did-mount-set-state": "off",
    "react-native/no-unused-styles": 2,
    "implicit-arrow-linebreak": "off",
    "comma-dangle": "off",
    "no-trailing-spaces": "off",
    indent: "off",
    "no-duplicate-imports": 1,
    "no-console": "error",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react/no-unused-prop-types": 2,
    "react-native/sort-styles": [
      "error",
      "asc",
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
    "react/prop-types": [
      "error",
      {
        ignore: ["navigation"],
      },
    ],
  },
};
