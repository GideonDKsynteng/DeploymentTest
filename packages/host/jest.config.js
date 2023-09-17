// Sync object
module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
    "\\.svg": "<rootDir>/__mocks__/svg.js"
  },
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js"
  },
  coverageThreshold: {
    global: {
      branches: 90,
      function: 90,
      lines: 90,
      statements: 90
    }
  }
};
