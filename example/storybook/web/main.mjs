export default {
  stories: ['../stories/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-native-web-vite',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin',
  },
};
