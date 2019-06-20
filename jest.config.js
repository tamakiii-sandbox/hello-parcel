module.exports = {
  roots: [
    "<rootDir>/src",
    "<rootDir>/test",
  ],
  transform: {
    "\\.tsx?$": "ts-jest"
  },
  testRegex: [
    ".*\\.test\\.tsx?$",
  ],
  testPathIgnorePatterns: [
    '/node_modules'
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ]
};
