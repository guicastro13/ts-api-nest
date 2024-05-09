module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: 'src',
    testRegex: '.spec.ts$',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/$1",
      "^@entity/(.*)$": "<rootDir>/entity/$1",
      "^@http-rest/(.*)$": "<rootDir>/infra/http-rest/$1",
      "^@database/(.*)$": "<rootDir>/infra/database/$1",
      "^@controller/(.*)$": "<rootDir>/infra/http-rest/controller/$1",
      "^@dto/(.*)$": "<rootDir>/infra/http-rest/dto/$1",
      "^@infra/(.*)$": "<rootDir>/infra/$1",
      "^@helpers/(.*)$": "<rootDir>/helpers/$1",
      "^@services/(.*)$": "<rootDir>/services/$1"
    },
  };