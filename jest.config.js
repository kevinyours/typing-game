const config = {
 testEnvironment: "jsdom",
 moduleNameMapper: {
  "\\.(css|scss)$": "identity-obj-proxy",
 },
 transform: {
  "\\.js?$": "babel-jest",
 },
 setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
 verbose: true,
 automock: false,
};

module.exports = config;
