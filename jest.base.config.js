// module.exports = {
//     preset: 'jest-preset-angular',
//     setupFilesAfterEnv: ['<rootDir>/../../setupJest.ts']
// };

// jest.config.js
module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/../../setupJest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
};